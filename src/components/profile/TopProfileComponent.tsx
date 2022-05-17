import { Box, Button, Avatar, Grid, Link } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import { COPY_SUCCESSFUL } from "src/messages/notification";
import PopupChartProfileComponent from "src/components/profile/PopupChartProfileComponent";
import theme from "src/theme";
import { addUserFavorite, deleteUserFavorite } from "src/services/user";

import { AuthContext } from "../../../context/AuthContext";

import "moment/locale/ja";

interface TopProfileComponentProps {
  user: any;
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

const TopProfileComponent: React.SFC<TopProfileComponentProps> = ({ user, myProfile }) => {
  const { t } = useTranslation();
  const [liked, setLiked] = useState(user?.is_favorite);
  const { auth, dispatch } = useContext(AuthContext);
  const [showPopupAnalysis, setShowPopupAnalysis] = useState(false);
  const urlProfile = `${process.env.NEXT_PUBLIC_URL_PROFILE}/profile/${auth?.user?.id}`;

  useEffect(() => {
    setLiked(user?.is_favorite);
  }, [user?.is_favorite]);
  const handleShowPopupAnalysis = () => {
    setShowPopupAnalysis(true);
  };

  const handleFavoriteAnUser = (isFavorite: boolean, tempData: string) => {
    if (isFavorite) deleteUserFavorite(tempData);
    else addUserFavorite(tempData);
  };

  const handleClickFavoriteButton = () => {
    handleFavoriteAnUser(liked, user?.id);
    if (liked) dispatch({ type: "REMOVE_FAVORITE", payload: auth });
    else dispatch({ type: "ADD_FAVORITE", payload: auth });
    setLiked(!liked);
  };

  const redirect = (page: string) => {
    if (page) {
      window.location.href = page;
    }
  };

  const handleCopyUrl = () => {
    const resUrl = window.location.href;
    const myProfileUrl = window.location.href?.replace("my-profile", `profile/${user?.id}`);
    if (myProfile) copy(myProfileUrl);
    else copy(resUrl);
    toast.success(COPY_SUCCESSFUL);
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
                onClick={() => {
                  handleCopyUrl();
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
                <TwitterShareButton url={urlProfile}>
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="/assets/images/icon/ic_twitter.svg" alt="" width="18" height="13.71" />
                    <Box
                      sx={{
                        ml: 1,
                      }}
                    >
                      {t("profile:twitter")}
                    </Box>
                  </Box>
                </TwitterShareButton>
              </Button>
              <Box>
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
                  <FacebookShareButton url={urlProfile}>
                    <Box
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/assets/images/icon/ic_facebook.svg" alt="" width="16" height="15.74" />
                      <Box
                        sx={{
                          ml: 1,
                        }}
                      >
                        {t("profile:facebook")}
                      </Box>
                    </Box>
                  </FacebookShareButton>
                </Button>
              </Box>

              <Box>
                <Button
                  sx={{
                    background: "#ffffff",
                    color: "#989EA8",
                    boxShadow: "unset",
                    border: "1px solid #989EA8",
                    width: "240px",
                    height: "40px",
                  }}
                  onClick={() => {
                    handleCopyUrl();
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
                    src={user?.profile_image}
                    sx={{
                      width: "160px",
                      height: "160px",
                    }}
                  />
                  <Box sx={{ display: myProfile ? "none" : "block" }}>
                    {t("profile:login")}：{moment(user?.last_login_at).utc().fromNow()} {t("profile:minutes-ago")}
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
                      {user?.username}
                    </Box>
                    <Box
                      sx={{
                        ml: "24px",
                        display: "flex",
                      }}
                    >
                      <Box onClick={() => redirect(user?.twitter_url)} sx={{ cursor: "pointer" }}>
                        <img
                          src={
                            user?.twitter_url
                              ? "/assets/images/icon/ic_twitter.svg"
                              : "/assets/images/icon/ic_twitter_gray.svg"
                          }
                          alt="ic_twitter"
                        />
                      </Box>
                      <Box
                        sx={{
                          mx: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => redirect(user?.facebook_url)}
                      >
                        <img
                          src={
                            user?.facebook_url
                              ? "/assets/images/icon/ic_facebook.svg"
                              : "/assets/images/icon/ic_facebook_gray.svg"
                          }
                          alt="ic_facebook"
                        />
                      </Box>
                      <Box sx={{ cursor: "pointer" }} onClick={() => redirect(user?.github_url)}>
                        <img
                          src={
                            user?.github_url
                              ? "/assets/images/icon/ic_github.svg"
                              : "/assets/images/icon/ic_github_gray.svg"
                          }
                          alt="ic_git"
                        />
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
                      display: "flex",
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
                      onClick={handleShowPopupAnalysis}
                    >
                      <Box>{t("profile:character-analysis")}</Box>
                    </Button>
                    <Box>
                      <img src="/assets/images/icon/ic_question_mark.png" alt="ic_question_mark" />
                    </Box>
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
                          {user?.review_count ?? 0}
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
                          {user?.match_count ?? 0}
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
                          {user?.community_count ?? 0}
                        </Box>{" "}
                        <Box>つ</Box>
                      </Box>
                    </BoxInfoProfile>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  textAlign: "center",
                  background: "#F4FDFF",
                  color: "#03BCDB",
                  border: "1px solid #03BCDB",
                  width: "240px",
                  height: "32px",
                  borderRadius: "40px",
                  display: myProfile ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  marginTop: "24px",
                  cursor: "pointer",
                }}
                onClick={handleClickFavoriteButton}
              >
                <Avatar
                  src={liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg"}
                  alt="ic_heart"
                  sx={{ width: "16.67px", height: "14.17px", marginRight: "5px" }}
                />{" "}
                話したい人リストに登録
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
                  src={user?.profile_image}
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
                  onClick={handleClickFavoriteButton}
                >
                  <img
                    src={
                      liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg"
                    }
                    alt="ic_heart"
                  />
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
                {user?.username}
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
                {moment(user?.last_login_at).utc().fromNow()}
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
                    {user?.review_count ?? 0}
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
                    {user?.match_count ?? 0}
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
                    {user?.community_count ?? 0}
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
                  onClick={() => redirect(user?.twitter_url)}
                >
                  <img
                    src={
                      user?.twitter_url
                        ? "/assets/images/icon/ic_twitter.svg"
                        : "/assets/images/icon/ic_twitter_gray.svg"
                    }
                    alt="ic_twitter"
                    width="17.5"
                  />
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
                  onClick={() => redirect(user?.facebook_url)}
                >
                  <img
                    src={
                      user?.facebook_url
                        ? "/assets/images/icon/ic_facebook.svg"
                        : "/assets/images/icon/ic_facebook_gray.svg"
                    }
                    alt="ic_facebook"
                    width="17.5"
                  />
                </Box>
                <Box
                  sx={{
                    width: "33%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => redirect(user?.github_url)}
                >
                  <img
                    src={
                      user?.github_url ? "/assets/images/icon/ic_github.svg" : "/assets/images/icon/ic_github_gray.svg"
                    }
                    alt="ic_git"
                    width="17.5"
                  />
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
                onClick={handleShowPopupAnalysis}
              >
                <Box>{t("profile:character-analysis")}</Box>
              </Button>
              <Box>
                <img src="/assets/images/icon/ic_question_mark.png" alt="ic_question_mark" width="16.7" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
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
                onClick={() => {
                  handleCopyUrl();
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
              <Box sx={{ width: "28.57%" }}>
                <Button
                  sx={{
                    background: "#ffffff",
                    color: "#55ACEE",
                    boxShadow: "unset",
                    border: "1px solid #55ACEE",
                    width: "100%",
                    height: "40px",
                  }}
                >
                  <TwitterShareButton url={urlProfile}>
                    <Box
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/assets/images/icon/ic_twitter.svg" alt="" width="18" height="13.94" />
                      <Box
                        sx={{
                          ml: 1,
                          fontSite: "14px",
                        }}
                      >
                        {t("profile:share")}
                      </Box>
                    </Box>
                  </TwitterShareButton>
                </Button>
              </Box>
              <Box sx={{ width: "28.57%", mx: "24px" }}>
                <Button
                  sx={{
                    background: "#ffffff",
                    color: "#395185",
                    boxShadow: "unset",
                    border: "1px solid #395185",
                    width: "100%",
                    height: "40px",
                  }}
                >
                  <FacebookShareButton url={urlProfile}>
                    <Box
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/assets/images/icon/ic_facebook.svg" alt="" width="16" height="16" />
                      <Box
                        sx={{
                          ml: 1,
                          fontSize: "14px",
                        }}
                      >
                        {t("profile:share")}
                      </Box>
                    </Box>
                  </FacebookShareButton>
                </Button>
              </Box>
              <Box sx={{ width: "28.57%" }}>
                <Button
                  sx={{
                    background: "#ffffff",
                    color: "#989EA8",
                    boxShadow: "unset",
                    border: "1px solid #989EA8",
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                  }}
                  onClick={() => {
                    handleCopyUrl();
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
          </Box>
        </Grid>
      </Grid>
      <PopupChartProfileComponent showPopup={showPopupAnalysis} setShowPopup={setShowPopupAnalysis} />
    </Box>
  );
};
export default TopProfileComponent;
