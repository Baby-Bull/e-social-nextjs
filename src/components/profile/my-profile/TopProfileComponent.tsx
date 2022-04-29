import { Box, Button, Avatar, Grid, Link } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";

import PopupChartProfileComponent from "src/components/profile/my-profile/PopupChartProfileComponent";
import theme from "src/theme";

interface TopProfileComponentProps {
  review: number;
  cumulativMatching: number;
  participatingCommunity: number;
  lastLogin: number;
  myProfile: boolean;
}

const BoxInfoProfile = styled(Box)`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 12px;
  width: 240px;
  height: 64px;
  justify-content: space-between;
  padding: 0 12px;
  color: ${theme.navy};
  font-size: 16px;
  margin-right: 20px;
`;

const TopProfileComponent: React.SFC<TopProfileComponentProps> = ({
  review,
  cumulativMatching,
  participatingCommunity,
  lastLogin,
  myProfile,
}) => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Box sx={{ display: myProfile ? { xs: "block", lg: "none" } : "none" }}>
            <Button
              sx={{
                background: theme.blue,
                width: "100%",
                borderRadius: "12px",
                mt: "28px",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
              }}
            >
              {t("profile:profile-editing")}
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            <Box
              sx={{
                textAlign: "right",
                mb: 1,
                display: myProfile ? "none" : "inherit",
              }}
            >
              <Button
                sx={{
                  background: "#ffffff",
                  color: "#989EA8",
                  boxShadow: "unset",
                  border: "1px solid #989EA8",
                  width: "240px",
                  height: "40px",
                  fontSize: "14px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_link.png" alt="" width="20" height="22" />
                  <Box
                    sx={{
                      ml: 2,
                    }}
                  >
                    {t("profile:url")}
                  </Box>
                </Box>
              </Button>
            </Box>
            <Box
              sx={{
                mb: "22px",
                display: myProfile ? "flex" : "none",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  background: "#ffffff",
                  boxShadow: "unset",
                  border: "1px solid #55ACEE",
                  color: "#55ACEE",
                  width: "240px",
                  height: "40px",
                  fontSize: "14px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_twitter.png" alt="" width="18" height="13.71" />
                  <Box
                    sx={{
                      ml: 1,
                    }}
                  >
                    {t("profile:twitter")}
                  </Box>
                </Box>
              </Button>

              <Button
                sx={{
                  background: "#ffffff",
                  boxShadow: "unset",
                  border: "1px solid #395185",
                  color: "#395185",
                  width: "240px",
                  height: "40px",
                  mx: "40px",
                  fontSize: "14px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_facebook.png" alt="" width="16" height="15.74" />
                  <Box
                    sx={{
                      ml: 1,
                    }}
                  >
                    {t("profile:facebook")}
                  </Box>
                </Box>
              </Button>

              <Button
                sx={{
                  background: "#ffffff",
                  color: "#989EA8",
                  boxShadow: "unset",
                  border: "1px solid #989EA8",
                  width: "240px",
                  height: "40px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_link.png" alt="" width="20" height="22" />
                  <Box
                    sx={{
                      ml: 1,
                    }}
                  >
                    {t("profile:url")}
                  </Box>
                </Box>
              </Button>
            </Box>
            <Box
              sx={{
                background: "#ffffff",
                px: "80px",
                pt: "45px",
                pb: "78px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderBottom: "2px solid #E6E6E6",
                  pb: "20px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#D8D8D8",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/profile/avatar.png"
                    sx={{
                      width: "160px",
                      height: "160px",
                    }}
                  />
                  <Box sx={{ display: myProfile ? "none" : "block" }}>
                    {t("profile:login")}：{lastLogin} {t("profile:minutes-ago")}
                  </Box>
                  <Box sx={{ display: myProfile ? "block" : "none" }}>{t("profile:login-2")}</Box>
                </Box>
                <Box
                  sx={{
                    ml: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#1A2944",
                      }}
                    >
                      佐藤 太郎
                    </Box>
                    <Box
                      sx={{
                        ml: "24px",
                        display: "flex",
                      }}
                    >
                      <Box>
                        <img src="/assets/images/icon/ic_twitter.png" alt="ic_twitter" />
                      </Box>
                      <Box
                        sx={{
                          mx: "20px",
                        }}
                      >
                        <img src="/assets/images/icon/ic_facebook.png" alt="ic_facebook" />
                      </Box>
                      <Box>
                        <img src="/assets/images/icon/ic_github.png" alt="ic_git" />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        right: 22,
                        top: 34,
                        display: myProfile ? { xs: "none", lg: "block" } : "none",
                      }}
                    >
                      <Link href="/my-profile/edit">
                        <Button
                          sx={{
                            background: theme.blue,
                            color: "#fff",
                            fontWeight: 700,
                            lineHeight: "23.17",
                            width: "96px",
                            height: "40px",
                            dispaly: "flex",
                            alignItems: "center",
                            "&:hover": {
                              background: theme.blue,
                            },
                          }}
                        >
                          <img src="/assets/images/icon/ic_edit.png" alt="ic_edit" />
                          {t("profile:edit")}
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mt: "13px",
                      display: myProfile ? "none" : "flex",
                    }}
                  >
                    <Button
                      sx={{
                        boxShadow: "unset",
                        width: "280px",
                        height: "48px",
                        background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                        borderRadius: "12px",
                        color: "#ffffff",
                        mr: "9.3px",
                      }}
                      onClick={handleShowPopup}
                    >
                      <Box>{t("profile:character-analysis")}</Box>111
                    </Button>
                    <Box>
                      <img src="/assets/images/icon/ic_question_mark.png" alt="ic_question_mark" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mt: "13px",
                      display: myProfile ? "flex" : "none",
                      position: "relative",
                    }}
                  >
                    <Button
                      sx={{
                        boxShadow: "unset",
                        width: "280px",
                        height: "48px",
                        background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                        borderRadius: "12px",
                        color: "#ffffff",
                        mr: "9.3px",
                      }}
                    >
                      <Box>佐藤太郎さんのキャラクター</Box>
                      <Box sx={{ position: "absolute", top: 1, right: 7 }}>
                        <img src="/assets/images/icon/ic_question_2.png" alt="ic_question_mark" />
                      </Box>
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mt: "30px",
                    }}
                  >
                    <BoxInfoProfile>
                      <Box>{t("profile:review")}</Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "32px",
                            fontWeight: 700,
                          }}
                        >
                          {review}
                        </Box>{" "}
                        <Box>件</Box>
                      </Box>
                    </BoxInfoProfile>
                    <BoxInfoProfile>
                      <Box>{t("profile:cumulativ-matching")}</Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "32px",
                            fontWeight: 700,
                          }}
                        >
                          {cumulativMatching}
                        </Box>{" "}
                        <Box>人</Box>
                      </Box>
                    </BoxInfoProfile>
                    <BoxInfoProfile>
                      <Box>
                        {t("profile:participating-community1")}
                        <br />
                        {t("profile:participating-community2")}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "32px",
                            fontWeight: 700,
                          }}
                        >
                          {participatingCommunity}
                        </Box>{" "}
                        <Box>つ</Box>
                      </Box>
                    </BoxInfoProfile>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Box
            sx={{
              display: ["block", "block", "block", "none"],
            }}
          >
            <Box
              sx={{
                background: "#ffffff",
                border: "1px solid rgba(196, 196, 196, 0.4)",
                boxSizing: "border-box",
                borderRadius: "12px",
                mt: "68px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "-40px",
                  position: "relative",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/images/profile/avatar.png"
                  sx={{
                    width: "80px",
                    height: "80px",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 51,
                    right: 10,
                    display: myProfile ? "none" : "block",
                  }}
                >
                  <img src="/assets/images/icon/ic_heart.png" alt="ic_heart" />
                </Box>
              </Box>
              <Box
                sx={{
                  color: "#1A2944",
                  lineHeight: "23px",
                  fontWeight: 700,
                  textAlign: "center",
                  mt: 2,
                }}
              >
                佐藤 太郎
              </Box>
              <Box
                sx={{
                  color: "#C4C4C4",
                  lineHeight: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  mt: 1,
                  mb: 2,
                  fontSize: "10px",
                }}
              >
                {lastLogin}
                {t("profile:minutes-ago")}
              </Box>

              <Box
                sx={{
                  borderTop: "1px solid rgba(196, 196, 196, 0.4)",
                  display: "flex",
                  height: "64px",
                }}
              >
                <Box
                  sx={{
                    width: "33%",
                    mt: "12px",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "#1A2944",
                      lineheight: "12px",
                      fontSize: "8px",
                    }}
                  >
                    {t("profile:review")}
                  </Box>
                  <Box
                    sx={{
                      color: "#1A2944",
                      lineheight: "29px",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {review}
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "34%",
                    borderLeft: "1px solid rgba(196, 196, 196, 0.4)",
                    borderRight: "1px solid rgba(196, 196, 196, 0.4)",
                    mt: "12px",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "#1A2944",
                      lineheight: "12px",
                      fontSize: "8px",
                    }}
                  >
                    {t("profile:cumulativ-matching")}
                  </Box>
                  <Box
                    sx={{
                      color: "#1A2944",
                      lineheight: "29px",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {cumulativMatching}
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "33%",
                    mt: "12px",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "#1A2944",
                      lineheight: "12px",
                      fontSize: "8px",
                    }}
                  >
                    {t("profile:participating-community1")}
                    <br />
                    {t("profile:participating-community2")}
                  </Box>
                  <Box
                    sx={{
                      color: "#1A2944",
                      lineheight: "29px",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {participatingCommunity}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                background: "#ffffff",
                mx: "20px",
                border: "1px solid rgba(196, 196, 196, 0.4)",
                boxSizing: "border-box",
                borderRadius: "12px",
                mt: "11px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "40px",
                }}
              >
                <Box
                  sx={{
                    width: "33%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_twitter.png" alt="ic_twitter" width="17.5" />
                </Box>
                <Box
                  sx={{
                    width: "34%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderLeft: "1px solid rgba(196, 196, 196, 0.4)",
                    borderRight: "1px solid rgba(196, 196, 196, 0.4)",
                  }}
                >
                  <img src="/assets/images/icon/ic_facebook.png" alt="ic_facebook" width="17.5" />
                </Box>
                <Box
                  sx={{
                    width: "33%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_github.png" alt="ic_git" width="17.5" />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  boxShadow: "unset",
                  width: "252px",
                  height: "36px",
                  background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  mr: "7.67px",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
                onClick={handleShowPopup}
              >
                <Box>{t("profile:character-analysis")}</Box>
              </Button>
              <Box>
                <img src="/assets/images/icon/ic_question_mark.png" alt="ic_question_mark" width="16.7" />
              </Box>
            </Box>

            <Box
              sx={{
                display: myProfile ? "none" : "flex",
                justifyContent: "center",
                mt: "40px",
              }}
            >
              <Button
                sx={{
                  background: "#ffffff",
                  color: "#989EA8",
                  boxShadow: "unset",
                  border: "1px solid #989EA8",
                  width: "240px",
                  height: "40px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_link.png" alt="" width="20" height="22" />
                  <Box
                    sx={{
                      ml: 2,
                    }}
                  >
                    {t("profile:url")}
                  </Box>
                </Box>
              </Button>
            </Box>
            <Box
              sx={{
                display: myProfile ? "flex" : "none",
                justifyContent: "center",
                mt: "40px",
              }}
            >
              <Button
                sx={{
                  background: "#ffffff",
                  color: "#55ACEE",
                  boxShadow: "unset",
                  border: "1px solid #55ACEE",
                  width: "28.57%",
                  height: "40px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_twitter.png" alt="" width="18" height="13.94" />
                  <Box
                    sx={{
                      ml: 1,
                      fontSite: "14px",
                    }}
                  >
                    {t("profile:share")}
                  </Box>
                </Box>
              </Button>
              <Button
                sx={{
                  background: "#ffffff",
                  color: "#395185",
                  boxShadow: "unset",
                  border: "1px solid #395185",
                  width: "28.57%",
                  height: "40px",
                  mx: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_facebook.png" alt="" width="16" height="16" />
                  <Box
                    sx={{
                      ml: 1,
                      fontSize: "14px",
                    }}
                  >
                    {t("profile:share")}
                  </Box>
                </Box>
              </Button>
              <Button
                sx={{
                  background: "#ffffff",
                  color: "#989EA8",
                  boxShadow: "unset",
                  border: "1px solid #989EA8",
                  width: "28.57%",
                  height: "40px",
                  fontSize: "14px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/icon/ic_link.png" alt="" width="20" height="22" />
                  <Box
                    sx={{
                      ml: 1,
                      fontSize: "14px",
                    }}
                  >
                    {t("profile:copy")}
                  </Box>
                </Box>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <PopupChartProfileComponent showPopup={showPopup} setShowPopup={setShowPopup} />
    </Box>
  );
};
export default TopProfileComponent;
