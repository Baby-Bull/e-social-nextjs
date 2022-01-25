import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx";
import { useTranslation } from "next-i18next";

import styles from "src/components/auth/login.module.scss";
import ContentComponent from "src/components/layouts/ContentComponent";

const LoginComponents = () => {
  const { t } = useTranslation();
  return (
    <ContentComponent>
      <div className={styles.boxLogin}>
        <div className={styles.boxLoginLeft}>
          <Typography component="div">
            <Box
              sx={{
                textAlign: "center",
                pt: 9,
                fontWeight: 700,
                fontSize: 20,
                color: "#ffffff",
              }}
              className={styles.boxLoginLeftTitle}
            >
              {t("login:left.title")}
            </Box>
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
            }}
          >
            <img src="assets/images/img_working.png" alt="img_working" className={styles.imgWorking} />
          </Box>

          <Box className={styles.wrapBoxLeftContent}>
            <Box>
              <Typography component="div">
                <Box
                  sx={{
                    background: "#ffffff",
                    mx: 7.5,
                    mb: 4,
                    display: "flex",
                    color: "#000000",
                    height: 64,
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                  className={styles.boxLeftContent}
                >
                  <Typography component="div">
                    <Box
                      sx={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#03BCDB",
                        letterSpacing: "0.3em",
                        px: 2.5,
                      }}
                    >
                      01
                    </Box>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    className={styles.boxLeftContent01}
                  >
                    <Typography component="div">
                      <Box
                        sx={{
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        {t("login:left.box-01.left")}
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box
                        sx={{
                          fontSize: 12,
                          pr: "52px",
                          pl: "16px",
                        }}
                      >
                        {t("login:left.box-01.right")}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Typography>
            </Box>

            <Box>
              <Typography component="div">
                <Box
                  sx={{
                    background: "#ffffff",
                    mx: 7.5,
                    mb: 4,
                    display: "flex",
                    color: "#000000",
                    height: 64,
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                  className={styles.boxLeftContent}
                >
                  <Typography component="div">
                    <Box
                      sx={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#03BCDB",
                        letterSpacing: "0.3em",
                        px: 2.5,
                      }}
                    >
                      02
                    </Box>
                  </Typography>
                  <Typography component="div">
                    <Box
                      sx={{
                        fontSize: 16,
                        fontWeight: 700,
                      }}
                    >
                      {t("login:left.box-02")}
                    </Box>
                  </Typography>
                </Box>
              </Typography>
            </Box>
            <Box>
              <Typography component="div">
                <Box
                  sx={{
                    background: "#ffffff",
                    mx: 7.5,
                    mb: "176px",
                    display: "flex",
                    color: "#000000",
                    height: 64,
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                  className={styles.boxLeftContent}
                >
                  <Typography component="div">
                    <Box
                      sx={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#03BCDB",
                        letterSpacing: "0.3em",
                        px: 2.5,
                      }}
                    >
                      03
                    </Box>
                  </Typography>
                  <Typography component="div">
                    <Box
                      sx={{
                        fontSize: 16,
                        fontWeight: 700,
                      }}
                    >
                      {t("login:left.box-03")}
                    </Box>
                  </Typography>
                </Box>
              </Typography>
            </Box>
          </Box>
        </div>

        <div className={styles.boxLoginRight}>
          <Typography component="div">
            <Box
              sx={{
                textAlign: "center",
                pt: "110px",
                fontWeight: 700,
                fontSize: 20,
                color: "#1A2944",
              }}
              className={styles.boxLoginRightTitle}
            >
              {t("login:right.title")}
            </Box>
          </Typography>
          <Typography component="div">
            <Box
              sx={{
                mt: 5,
                textAlign: "center",
                fontWeight: 300,
                fontSize: 16,
                color: "#1A2944",
                ml: "124px",
                mr: "116px",
              }}
              className={styles.boxLoginRightDescription}
            >
              {t("login:right.description")}
            </Box>
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              mt: "68px",
            }}
          >
            <Button variant="contained" className={clsx(styles.btnLoginSocial, styles.btnLoginSocialTW)}>
              <Box
                sx={{
                  display: "flex",
                  textAlign: "center",
                }}
              >
                <img src="/assets/images/logo/logo_twitter.png" alt="" />
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  {t("login:right.register-twitter")}
                </Box>
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              mt: "48px",
            }}
          >
            <Button variant="contained" className={clsx(styles.btnLoginSocial, styles.btnLoginSocialGG)}>
              <Box
                sx={{
                  display: "flex",
                  textAlign: "center",
                }}
              >
                <img src="/assets/images/logo/logo_google.png" alt="" />
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  {t("login:right.register-google")}
                </Box>
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              mt: "48px",
            }}
          >
            <Button variant="contained" className={clsx(styles.btnLoginSocial, styles.btnLoginSocialGit)}>
              <Box
                sx={{
                  display: "flex",
                  textAlign: "center",
                }}
              >
                <img src="/assets/images/logo/logo_github.png" alt="" />
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  {t("login:right.register-git")}
                </Box>
              </Box>
            </Button>
          </Box>
          <Typography component="div">
            <Box
              sx={{
                mt: "102px",
                textAlign: "center",
                fontWeight: 400,
                fontSize: 14,
                color: "#1A2944",
              }}
              className={styles.clickRegisterAt}
            >
              {t("login:right.click-at")}
              <Link
                href="/#"
                sx={{
                  color: "#03BCDB",
                }}
              >
                {t("login:right.register")}
              </Link>
            </Box>
          </Typography>
        </div>
      </div>
    </ContentComponent>
  );
};
export default LoginComponents;
