import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, Link, styled } from "@mui/material";
import { useTranslation } from "next-i18next";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import theme from "src/theme";
import LayoutComponent from "src/components/community/LayoutComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import IntroCommunityComponent from "src/components/community/blocks/IntroCommunityComponent";
import TabComponent from "src/components/community/blocks/TabComponent";
import BannerComponent from "src/components/community/blocks/BannerComponent";
import EmptyComponent from "src/components/community/blocks/EmptyComponent";
import { COPY_SUCCESSFUL } from "src/messages/notification";
import { getCommunity } from "src/services/community";

import { members, tabsCommunity, status, bgColorByStatus } from "./mockData";

const TypographyCustom = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
  "@media (max-width: 425px)": {
    fontSize: 14,
    marginBottom: "15px",
  },
});

const CommunityComponent = () => {
  const { t } = useTranslation();
  const PENDING = "pending";
  const [dataCommunityDetail, setDataCommunityDetail] = useState({
    name: null,
    profile_image: null,
    description: null,
    owner: {},
    admins: [],
    is_public: null,
    post_permission: null,
    community_role: null,
    member_count: null,
    login_count: null,
    created_at: null,
  });
  const router = useRouter();
  const handleCopyUrl = () => {
    const communityId = router.query;
    const resUrl = `${process.env.NEXT_PUBLIC_URL_PROFILE}/community/${communityId?.indexId}`;
    copy(resUrl);
    toast.success(COPY_SUCCESSFUL);
  };

  const fetchData = async () => {
    const communityId = router.query;
    const data = await getCommunity(communityId?.indexId);
    setDataCommunityDetail(data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutComponent>
      <Box textAlign={["center", "right"]}>
        <ButtonComponent
          variant="outlined"
          props={{
            square: true,
            color: theme.gray,
            height: "40px",
            borderColor: theme.gray,
            dimension: "medium",
          }}
          onClick={handleCopyUrl}
          startIcon={
            <Avatar variant="square" sx={{ width: "100%", height: "100%" }} src="/assets/images/svg/link_media.svg" />
          }
        >
          {t("community:button.copy-url")}
        </ButtonComponent>
      </Box>

      <Box>
        <BannerComponent data={dataCommunityDetail} />
      </Box>

      <Box
        sx={{
          mt: "40px",
          display: "flex",
          flexDirection: ["column-reverse", "row"],
        }}
      >
        <Box
          sx={{
            width: { md: "20%" },
          }}
        >
          <IntroCommunityComponent data={dataCommunityDetail} />
        </Box>

        <Box
          sx={{
            display: { sm: "none" },
            mb: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {t("community:matching-members")}
            </Typography>
            <Link href="/community/member" color="secondary">
              <Typography
                sx={{
                  mr: "10px",
                  color: theme.blue,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                {t("community:button.load-more")}
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              pt: "22px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {members?.map((member, index) => (
              <React.Fragment key={index.toString()}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: "0 0 24%",
                  }}
                >
                  <Avatar sx={{ width: "72px", height: "72px" }} src={member.avatar} />

                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                  >
                    {member.name}
                  </Typography>
                </Box>
              </React.Fragment>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            mr: { md: "13px" },
            ml: { md: "25px" },
            mb: ["40px", 0],
            width: { md: "80%" },
            borderRadius: "12px",
            display:
              !dataCommunityDetail?.is_public &&
              (!dataCommunityDetail?.community_role || dataCommunityDetail?.community_role === PENDING)
                ? "none"
                : "block",
          }}
        >
          <TabComponent data={tabsCommunity} />

          <Box display={status === "apply" || status === "applying" ? "inherit" : "none"}>
            <EmptyComponent
              hiddenButton={status === "join"}
              textButton={t("community:button.empty.apply")}
              mtButton={{
                xs: "25px",
                md: "35px",
              }}
              bgButton={bgColorByStatus}
              absolute
            >
              <TypographyCustom>{t("community:community-is-approved")}</TypographyCustom>
              <TypographyCustom display={["none", "inherit"]}>
                {t("community:after-join") + t("community:can-approve")}
              </TypographyCustom>
              <TypographyCustom display={["inherit", "none"]}>{t("community:after-join")}</TypographyCustom>
              <TypographyCustom display={["inherit", "none"]}>{t("community:can-approve")}</TypographyCustom>
            </EmptyComponent>
          </Box>
        </Box>
        <Box
          sx={{
            display:
              !dataCommunityDetail?.is_public &&
              (!dataCommunityDetail?.community_role || dataCommunityDetail?.community_role === PENDING)
                ? "flex"
                : "none",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography fontSize={20} lineHeight="39px" fontWeight={700}>
              {t("community:community-is-approved")}
            </Typography>
            <Typography fontSize={20} lineHeight="39px" fontWeight={700}>
              {t("community:if-community-is-approved")}
            </Typography>
            <ButtonComponent
              sx={{
                width: "280px",
                height: "48px",
                marginTop: "35px",
              }}
              props={{
                bgColor: dataCommunityDetail?.community_role === PENDING ? theme.gray : theme.orange,
              }}
            >
              {dataCommunityDetail?.community_role === PENDING
                ? t("community:banner.applying")
                : t("community:banner.apply")}
            </ButtonComponent>
          </Box>
        </Box>
      </Box>
    </LayoutComponent>
  );
};
export default CommunityComponent;
