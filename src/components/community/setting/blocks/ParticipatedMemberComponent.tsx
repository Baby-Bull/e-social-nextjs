import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import theme from "src/theme";
import EmptyComponent from "src/components/community/setting/blocks/EmptyComponent";
import GridViewComponent from "src/components/community/setting/blocks/GridViewComponent";
import { getParticipates } from "src/services/community";
import PaginationCustomComponent from "src/components/common/PaginationCustomComponent";

const ParticipationComponent = () => {
  const { t } = useTranslation();
  const LIMIT = 10;
  const router = useRouter();

  const [participates, setParticipates] = useState([]);
  const [countParticipates, setCountParticipates] = useState(0);

  // Pagination
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [valueCursor, setCursor] = useState("");
  // end pagination

  const fetchDataParticipates = async (cursor: string = "") => {
    const communityId = router.query;
    const resData = await getParticipates(communityId?.indexId, LIMIT, cursor);
    // eslint-disable-next-line no-unsafe-optional-chaining
    setParticipates([...participates, ...resData?.items]);
    setCountParticipates(resData?.items_count ?? 0);
    setCursor(resData?.cursor);
    return resData;
  };

  const handleCallbackChangePaginationParticipates = (event, value) => {
    setPage(value);
    if (perPage <= value) {
      setPerPage(perPage + 1);
      fetchDataParticipates(valueCursor ?? "");
    }
  };

  useEffect(() => {
    fetchDataParticipates();
  }, []);

  const callbackHandleRemoveMember = (indexMember) => {
    setParticipates(participates.filter((_, index) => index !== indexMember));
    setCountParticipates(countParticipates - 1);
  };

  return (
    <Box
      sx={{
        mr: [0, "17.32%"],
        backgroundColor: [theme.whiteBlue, "white"],
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          borderBottom: { sm: `1px solid ${theme.lightGray}` },
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            py: ["20px", "28px"],
            px: [0, "40px"],
            textAlign: ["center", "left"],
          }}
        >
          {`${t("community:setting.participation.title")} ${countParticipates}${t(
            "community:setting.participation.subject",
          )}`}
        </Typography>
        {participates?.slice((page - 1) * LIMIT, page * LIMIT) ? (
          participates?.slice((page - 1) * LIMIT, page * LIMIT).map((data, index) => (
            <React.Fragment key={index.toString()}>
              <GridViewComponent
                data={data}
                index={index + (page - 1) * LIMIT}
                callbackHandleRemoveElmMember={callbackHandleRemoveMember}
              />
            </React.Fragment>
          ))
        ) : (
          <Box>
            <EmptyComponent text={t("community:setting.participation.empty")} />
          </Box>
        )}
      </Box>

      <Box
        sx={{
          py: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {countParticipates > LIMIT && (
          <PaginationCustomComponent
            handleCallbackChangePagination={handleCallbackChangePaginationParticipates}
            page={page}
            perPage={perPage}
            totalPage={
              Math.floor(countParticipates / LIMIT) < countParticipates / LIMIT
                ? Math.floor(countParticipates / LIMIT) + 1
                : Math.floor(countParticipates / LIMIT)
            }
          />
        )}
      </Box>
    </Box>
  );
};
export default ParticipationComponent;
