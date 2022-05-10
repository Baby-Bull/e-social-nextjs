import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

interface reviewProps {
  user: any;
  rating: string;
  comment: string;
}

const ReviewComponent: React.SFC<reviewProps> = ({ user, rating, comment }) => {
  const { t } = useTranslation();
  const GOOD = "good";

  return (
    <Box>
      <Box
        sx={{
          mt: "40px",
          display: { xs: "block", lg: "flex" },
        }}
      >
        <Box
          sx={{
            alignItems: { xs: "center", lg: "top" },
            display: { xs: "flex", lg: "block" },
          }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: "32px", lg: "56px" },
              borderRadius: "50%",
            }}
            alt="avatar"
            src={user?.profile_image ?? "/assets/images/svg/goodhub.svg"}
          />
          {rating ? (
            <Box
              sx={{
                color: "#1A2944",
                fontSize: "16px",
                lineHeight: "23.17px",
                fontWeight: 700,
                display: { xs: "block", lg: "none" },
                ml: { xs: "7px", lg: "0" },
              }}
            >
              おじろ＠フルスタックエンジニア
            </Box>
          ) : (
            <Box
              sx={{
                color: "#989EA8",
                fontSize: "16px",
                lineHeight: "23.17px",
                fontWeight: 700,
                display: { xs: "block", lg: "none" },
                ml: { xs: "7px", lg: "0" },
              }}
            >
              {t("profile:anonymous")}
            </Box>
          )}
        </Box>
        <Box>
          <Box
            sx={{
              p: { xs: "15px 12px 19px 12px", lg: "16px 20px" },
              border: "1px solid #03BCDB",
              borderRadius: "12px",
              background: "#FFFFFF",
              ml: { xs: "0", lg: "31px" },
              mt: { xs: "19px", lg: "0" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "-18px",
                top: "10px",
                display: { xs: "none", lg: "block" },
              }}
            >
              <img src="/assets/images/icon/ic_polygon_left.png" alt="ic_polygon_left" />
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "10px",
                top: "-17px",
                display: { xs: "block", lg: "none" },
              }}
            >
              <img src="/assets/images/icon/ic_polygon_top.png" alt="ic_polygon_top" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row-reverse", lg: "unset" },
                justifyContent: { xs: "left" },
              }}
            >
              {user?.username ? (
                <Box
                  sx={{
                    color: "#1A2944",
                    fontSize: "16px",
                    lineHeight: "23.17px",
                    fontWeight: 700,
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  {user?.username}
                </Box>
              ) : (
                <Box
                  sx={{
                    color: "#989EA8",
                    fontSize: "16px",
                    lineHeight: "23.17px",
                    fontWeight: 700,
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  {t("profile:anonymous")}
                </Box>
              )}
              <Box
                sx={{
                  color: rating === GOOD ? "#FF9458" : "#03BCDB",
                  fontSize: "16px",
                  lineHeight: "23px",
                  fontWeight: 700,
                  display: "flex",
                  marginLeft: "20px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    mr: "5.63px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={
                      rating === GOOD ? "/assets/images/icon/ic_very_good.png" : "/assets/images/icon/ic_very_bad.png"
                    }
                    alt="ic_rating"
                  />
                </Box>
                <Box>{rating === GOOD ? t("profile:it-good") : t("profile:it-bad")}</Box>
              </Box>
              <Box
                sx={{
                  color: "#989EA8",
                  fontSize: "14px",
                  lineHeight: "20.27px",
                  marginLeft: "20px",
                  fontWeight: 400,
                }}
              >
                2021年8月27日にレビュー
              </Box>
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                LineHeight: "23.17px",
                mt: "11px",
              }}
            >
              <Box>{comment}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ReviewComponent;
