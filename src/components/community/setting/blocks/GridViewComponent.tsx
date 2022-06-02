import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import moment from "moment";

import "moment/locale/ja";
import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";

import { MemberApprove, MemberReject } from "../../../../services/community";

interface IGridViewComponentProps {
  data: any;
  index: any;
  callbackHandleRemoveElmMember: any;
}

const GridViewComponent: React.SFC<IGridViewComponentProps> = ({ data, index, callbackHandleRemoveElmMember }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const callbackHandleApprove = async () => {
    const communityId = router.query;
    const resDataApprove = await MemberApprove(communityId?.indexId, data.id);
    callbackHandleRemoveElmMember(index);
    return resDataApprove;
  };

  const callbackHandleReject = async () => {
    const communityId = router.query;
    const resDataReject = await MemberReject(communityId?.indexId, data.id);
    callbackHandleRemoveElmMember(index);
    return resDataReject;
  };
  return (
    <Box
      sx={{
        py: ["20px", "22px"],
        px: ["20px", "40px"],
        mb: ["20px", 0],
        borderTop: `1px solid ${theme.lightGray}`,
        borderBottom: [`1px solid ${theme.lightGray}`, "none"],
        color: theme.navy,
        backgroundColor: "white",
      }}
    >
      <Typography
        sx={{
          display: { sm: "none" },
          fontSize: [12, 14],
          fontWeight: 400,
          color: theme.gray,
          mb: "5px",
        }}
      >
        {data.date_request}
      </Typography>

      {/* Info user (avatar, ...) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: ["32px", "64px"],
              height: "100%",
            }}
            src={data?.user?.profile_image}
          />

          {/* Grid right Info */}
          <Box
            sx={{
              pl: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component="span"
              sx={{
                display: ["none", "inherit"],
                fontSize: [12, 14],
                fontWeight: 400,
                color: theme.gray,
              }}
            >
              {moment(data?.created_at).utc().format("LLL")} {t("community:request")}
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              {data?.user?.username}
            </Typography>
          </Box>
          {/* End Grid right Info */}
        </Box>

        {/* Button PC */}
        <Box
          sx={{
            display: ["none", "flex"],
          }}
        >
          <React.Fragment>
            <ButtonComponent
              props={{
                bgColor: theme.orange,
                dimension: "x-small",
              }}
              sx={{
                mr: "20px",
                height: "36px",
              }}
              onClick={callbackHandleApprove}
            >
              {t("community:button.setting.participation.approve")}
            </ButtonComponent>

            <ButtonComponent
              props={{
                bgColor: theme.gray,
                dimension: "x-small",
              }}
              sx={{
                height: "36px",
              }}
              onClick={callbackHandleReject}
            >
              {t("community:button.setting.participation.reject")}
            </ButtonComponent>
          </React.Fragment>
        </Box>
        {/* End Button PC */}
      </Box>
      {/* End Info user (avatar, ...) */}

      {/* Button SP */}
      <Box
        sx={{
          display: ["flex", "none"],
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <React.Fragment>
          <ButtonComponent
            props={{
              bgColor: theme.orange,
              dimension: "x-small",
            }}
            sx={{
              mt: "27px",
              fontSize: 14,
              height: "40px",
            }}
          >
            {t("community:button.setting.participation.approve")}
          </ButtonComponent>

          <ButtonComponent
            props={{
              bgColor: theme.blue,
              dimension: "x-small",
            }}
            sx={{
              mt: "27px",
              fontSize: 14,
              height: "40px",
            }}
          >
            {t("community:button.setting.participation.reject")}
          </ButtonComponent>
        </React.Fragment>
      </Box>
      {/* End Button SP */}
    </Box>
  );
};
export default GridViewComponent;
