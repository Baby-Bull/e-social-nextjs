import React from "react";
import { Box, Typography, Avatar, Divider, Paper, ListItem, Chip } from "@mui/material";
import { useTranslation } from "next-i18next";
import moment from "moment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import theme from "src/theme";
// eslint-disable-next-line import/order
import ButtonDropDownComponent from "src/components/community/post/detail/blocks/ButtonDropDownComponent";
// eslint-disable-next-line import/order
import { IStoreState } from "src/constants/interface";

import "moment/locale/ja";
import { deleteCommunityPost } from "src/services/community";
import { ShowTextArea } from "src/components/common/ShowTextAreaComponent";

interface IBoxInfoProps {
  title: string;
  text: string;
  textColor?: string;
  fontWeight: number;
}

interface ICommunityPostDataProps {
  data?: any;
  dataCommunityDetail?: any;
}

const BoxInfo: React.SFC<IBoxInfoProps> = ({ title, text, textColor, fontWeight }) => (
  <Box
    sx={{
      border: `1px solid ${theme.blue}`,
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      height: ["32px", "40px"],
      lineHeight: ["32px", "40px"],
      mb: ["8px", "7px"],
    }}
  >
    <Box
      sx={{
        backgroundColor: theme.blue,
        borderRadius: "12px 0px 0px 12px",
        color: "white",
        fontWeight: 700,
        fontSize: [10, 14],
        width: ["48px", "80px"],
        textAlign: "center",
      }}
    >
      {title}
    </Box>

    <Typography
      sx={{
        ml: "20px",
        color: textColor || "black",
        fontSize: [10, 14],
        fontWeight,
      }}
    >
      {text}
    </Typography>
  </Box>
);

const PostDetailComponent: React.SFC<ICommunityPostDataProps> = ({ data, dataCommunityDetail }) => {
  const auth = useSelector((state: IStoreState) => state.user);
  const { t } = useTranslation();
  const router = useRouter();
  const IS_ADMIN = "admin";
  const IS_OWNER = "owner";
  const listRoleAdmin = [IS_ADMIN, IS_OWNER];
  const handleCallbackRemove = () => {
    const community = router.query;
    const res = deleteCommunityPost(community?.id, community?.detailId);
    if (res) {
      router.push(`/community/${community?.id}`);
    }
  };

  const redirectProfile = () => {
    if (data?.user?.id === auth?.id) {
      router.push("/my-profile");
    } else {
      router.push(`/profile/${data?.user?.id}`);
    }
  };
  return (
    <Box
      sx={{
        pt: ["20px", "30px"],
        pb: "40px",
        px: ["15px", "40px"],
        border: `2px solid ${theme.whiteGray}`,
        borderRadius: "12px",
        color: theme.navy,
        position: "relative",
        backgroundColor: "white",
      }}
    >
      {(listRoleAdmin.includes(dataCommunityDetail?.community_role) || auth?.id === data?.user?.id) && (
        <ButtonDropDownComponent handleCallbackRemove={handleCallbackRemove} data={data} />
      )}
      <Typography
        component="span"
        sx={{
          fontSize: [18, 32],
          fontWeight: 700,
        }}
      >
        {data?.title}
      </Typography>

      <Box
        sx={{
          my: "20px",
          display: "flex",
        }}
      >
        <Avatar
          sx={{
            mr: ["8px", "24px"],
            width: ["32px", "54px"],
            height: ["32px", "54px"],
            cursor: "pointer",
          }}
          src={data?.user?.profile_image}
          onClick={redirectProfile}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: ["row-reverse", "column"],
            alignItems: ["center", "inherit"],
          }}
        >
          <Typography
            component="div"
            sx={{
              color: theme.gray,
              fontSize: [10, 14],
            }}
          >
            {moment(data?.created_at).format("LLL")}
          </Typography>
          <Typography
            component="div"
            sx={{
              fontSize: [14, 20],
              fontWeight: 700,
              mr: ["16px", 0],
              cursor: "pointer",
            }}
            onClick={redirectProfile}
          >
            {data?.user?.username}
          </Typography>
        </Box>
      </Box>
      <Paper
        sx={{
          m: 0,
          p: 0,
          backgroundColor: "transparent",
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          boxShadow: "none",
          marginBottom: "20px",
        }}
        component="ul"
      >
        {data?.tags?.map((value: any, index: number) => (
          <ListItem
            key={index}
            sx={{
              width: "fit-content",
              ml: 0,
              padding: "4px 4px",
            }}
          >
            <Chip
              variant="outlined"
              size="small"
              label={value}
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: theme.blue,
                backgroundColor: "white",
                borderRadius: "6px",
                borderColor: theme.blue,
              }}
            />
          </ListItem>
        ))}
      </Paper>

      <React.Fragment>
        {data?.reference_url && (
          <BoxInfo title={t("community:url")} text={data?.reference_url} textColor={theme.blue} fontWeight={500} />
        )}
        {data?.address && <BoxInfo title={t("community:address")} text={data?.address} fontWeight={400} />}
      </React.Fragment>

      <Divider
        sx={{
          my: "20px",
          backgroundColor: theme.lightGray,
        }}
      />

      <Box mt="20px">
        <ShowTextArea value={data?.content} />
      </Box>
    </Box>
  );
};
export default PostDetailComponent;
