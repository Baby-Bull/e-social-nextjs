import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import moment from "moment";
import { useSelector } from "react-redux";
import GlobalStyles from "@mui/material/GlobalStyles";

import { IStoreState } from "src/constants/interface";
import theme from "src/theme";
// eslint-disable-next-line import/order
import ButtonComponent from "src/components/common/ButtonComponent";

import "moment/locale/ja";

import { ShowTextArea } from "src/components/common/ShowTextAreaComponent";

import { textRolesCreatePost } from "../mockData";

interface ICommunityDataProps {
  data?: any;
  createPost?: any;
}

const IntroCommunityComponent: React.SFC<ICommunityDataProps> = ({ data, createPost }) => {
  const { t } = useTranslation();
  const auth = useSelector((state: IStoreState) => state.user);
  const router = useRouter();
  const RoleAdmin = ["admin", "owner"];
  const redirectCreatePost = () => {
    const communityId = router.query;
    router.push(`/community/${communityId?.id}/post/create`);
  };

  const checkRoleCreatPost =
    RoleAdmin.includes(data?.community_role) ||
    data?.post_permission === data?.community_role ||
    data?.post_permission === "all";

  const redirectGatherUrl = () => {
    if (data?.gather_url) {
      window.open(data?.gather_url);
    }
  };

  const redirectProfile = (userId) => {
    if (auth?.id === userId) {
      router.push(`/my-profile`);
    } else {
      router.push(`/profile/${userId}`);
    }
  };
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          h1: { color: "grey" },
          "*::-webkit-scrollbar": {
            width: "0.2em",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: theme.blue,
            outline: `1px solid ${theme.blue}`,
          },
        }}
      />
      <Box
        sx={{
          backgroundColor: "white",
          p: "20px 20px 40px 20px",
          minHeight: { sm: "601px" },
          display: "flex",
          flexDirection: "column",
          border: `2px solid ${theme.whiteGray}`,
          borderRadius: "12px",
          color: theme.navy,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {t("community:intro.title.detail")}
        </Typography>
        <Box
          sx={{
            maxHeight: "250px",
            overflowY: "auto",
          }}
        >
          <ShowTextArea value={data?.description} />
        </Box>
        {data?.admins?.length > 0 &&
          data?.admins.map((value, index) => (
            <Box>
              <Typography
                component="span"
                sx={{
                  mt: "22px",
                  pb: "8px",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {t("community:intro.title.administrator")}
              </Typography>
              <Box
                display="flex"
                key={index}
                sx={{ alignItems: "center", mt: 1, cursor: "pointer" }}
                onClick={() => redirectProfile(value?.id)}
              >
                <Avatar
                  sx={{
                    mr: "8px",
                    width: "32px",
                    height: "32px",
                  }}
                  src={value?.profile_image || "/assets/images/svg/dog.svg"}
                />
                {value?.username}
              </Box>
            </Box>
          ))}
        <Typography
          component="span"
          sx={{
            mt: "22px",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {t("community:intro.title.open-date")}
        </Typography>
        <Typography component="span">{moment(data?.created_at).format("LL")}</Typography>

        <Typography
          component="span"
          sx={{
            mt: "22px",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {t("community:intro.title.role-create-post")}
        </Typography>
        <Typography component="span">{textRolesCreatePost[data?.post_permission]}</Typography>

        {data?.community_role && data?.community_role !== "pending" && data?.gather_url && (
          <Box
            sx={{
              p: "15px 15px",
              backgroundColor: theme.orange,
              color: "white",
              borderRadius: "12px",
              mb: "41px",
              width: "200px",
              cursor: "pointer",
              mt: "50px",
            }}
            onClick={redirectGatherUrl}
          >
            <Box sx={{ fontSize: "16px", fontWeight: 700, lineHeight: "23.17px" }}>{t("community:virtual-room")}</Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src="/assets/images/icon_room_virtual.png"
                sx={{ width: "39px", height: "39px", mt: "10px" }}
                variant="square"
              />
            </Box>
          </Box>
        )}
      </Box>
      {createPost && checkRoleCreatPost && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ButtonComponent
            props={{
              square: true,
              mode: "gradient",
              dimension: "medium",
            }}
            sx={{
              mt: ["20px", "40px"],
              height: "54px",
            }}
            onClick={redirectCreatePost}
          >
            {t("community:button.intro.create-post")}
          </ButtonComponent>
        </Box>
      )}
    </React.Fragment>
  );
};
export default IntroCommunityComponent;
