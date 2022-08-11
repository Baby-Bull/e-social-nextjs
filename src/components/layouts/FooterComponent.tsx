import React from "react";
import { Link, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

import { logout } from "src/services/auth";

interface IFooterComponentProps {
  authPage?: boolean;
}

const TagA = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  ${(props) => props.theme.breakpoints.up("xs")} {
    margin-left: 0;
    margin-right: 40px;
  }

  ${(props) => props.theme.breakpoints.up("lg")} {
    margin-left: 0;
  }
`;
const FooterComponent: React.SFC<IFooterComponentProps> = ({ authPage = false }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <Box sx={{ backgroundColor: "#1A2944" }}>
      <Box
        sx={{
          display: { xs: "block", lg: "flex" },
          justifyContent: "space-between",
          p: { xs: "24px 28px", lg: "40px 200px 20px 200px" },
          color: "#FFFFFF",
        }}
      >
        <Box>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            <Box
              sx={{
                display: !authPage ? "none" : "inherit",
              }}
            >
              <TagA href="/login" color="secondary" sx={{ mr: "26px !important" }}>
                {t("footer.signin")}
              </TagA>
              <TagA href="/register" color="secondary" sx={{ mr: "26px !important" }}>
                {t("footer.signout")}
              </TagA>
            </Box>
            <Box
              sx={{
                display: authPage ? "none" : "flex",
              }}
            >
              <TagA href="/" color="secondary" sx={{ mr: "26px !important" }}>
                {t("footer.home")}
              </TagA>
              <TagA
                href="/search_user"
                color="secondary"
                sx={{ mr: "26px !important", display: { xs: "none", lg: "inherit" } }}
              >
                {t("footer.engineer-search")}
              </TagA>
              <TagA
                href="/search_community"
                color="secondary"
                sx={{ mr: "26px !important", display: { xs: "none", lg: "inherit" } }}
              >
                {t("footer.community-search")}
              </TagA>
            </Box>
          </Box>
          <Box
            sx={{
              mt: { xs: "30px", lg: "97px" },
              display: "flex",
            }}
          >
            <Box sx={{ display: { xs: "block", lg: "flex" }, fontSize: "12px" }}>
              <Box sx={{ mb: { xs: "12px", lg: "0" } }}>
                <TagA href="/#" color="secondary">
                  {t("footer.terms-service")}
                </TagA>
              </Box>
              <Box>
                <TagA href="/#" color="secondary">
                  {t("footer.privacy-policy")}
                </TagA>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "block", lg: "flex" }, fontSize: "12px" }}>
              <Box sx={{ mb: { xs: "12px", lg: "0" } }}>
                <TagA href="/#" color="secondary">
                  {t("footer.inquiry")}
                </TagA>
              </Box>
              <Box>
                <TagA href="/#" color="secondary">
                  {t("footer.operating-company")}
                </TagA>
              </Box>
              <Box
                sx={{
                  display: authPage ? "none" : "inherit",
                }}
                onClick={handleLogout}
              >
                <Box sx={{ display: { xs: "none", lg: "inherit" } }}>
                  <TagA href="/#" color="secondary">
                    {t("footer.logout")}
                  </TagA>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: { xs: "39px", lg: "0" } }}>
          <Box sx={{ textAlign: { xs: "center", lg: "right" } }}>
            <img style={{ width: "137px" }} src="/assets/images/logo/logo_footer2.png" alt="logo" />
          </Box>
          <Box sx={{ mt: { xs: "5px", lg: "77px" }, fontSize: "12px", textAlign: { xs: "center", lg: "right" } }}>
            Copyright © AilaB inc. All Rights Reserved.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default FooterComponent;
