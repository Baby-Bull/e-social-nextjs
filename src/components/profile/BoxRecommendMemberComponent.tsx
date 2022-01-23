import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

interface recommendMemberProps {
  recommendMemberName: string;
  recommendMemberJob: string;
  recommendMemberEvaluate: number;
  recommendMemberYouSpeak: string;
  recommendMemberTag: Array<string>;
  img: string;
  color: string;
  status: string;
  background: string;
  backgroundBtn: string;
  txtBtn: string;
  statusLogin: string;
}

const BoxRecommendMemberComponent: React.SFC<recommendMemberProps> = ({
  recommendMemberName,
  recommendMemberJob,
  recommendMemberEvaluate,
  recommendMemberYouSpeak,
  recommendMemberTag,
  img,
  color,
  status,
  background,
  backgroundBtn,
  txtBtn,
  statusLogin,
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box
        sx={{
          mr: "27px",
        }}
      >
        <Box
          sx={{
            width: "320px",
            background: "#ffffff",
          }}
        >
          <Box
            sx={{
              pt: "20px",
              px: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                background,
                borderRadius: "4px",
                width: "130px",
                fontSize: "10px",
                fontWeight: 700,
                color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {status}
            </Box>
            <Box
              sx={{
                fontSize: "10px",
                fontWeight: 700,
                color: "#D8D8D8",
                textAlign: "right",
              }}
            >
              {statusLogin}
            </Box>
          </Box>
          <Box
            sx={{
              px: "20px",
              mt: "20px",
              display: "flex",
            }}
          >
            <Box>
              <img src="/assets/images/logo/logo_lacoste.png" alt="logo_lacoste" />
            </Box>
            <Box
              sx={{
                ml: "13px",
              }}
            >
              <Box
                sx={{
                  fontSize: "14px",
                  color: "#262A30",
                  fontWeight: 700,
                  mb: "6px",
                }}
              >
                {recommendMemberName}
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  color: "#03BCDB",
                  mb: "6px",
                }}
              >
                {recommendMemberJob}
              </Box>
              <Box
                sx={{
                  fontSize: "10px",
                  color: "#262A30",
                  mb: "11px",
                }}
              >
                {t("profile:review")}：{recommendMemberEvaluate}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              ml: "40px",
              mb: "-8px",
            }}
          >
            <img src="/assets/images/icon/ic_polygon.png" alt="ic_polygon" />
          </Box>
          <Box
            sx={{
              color: "#1A2944",
              fontSize: "12px",
              fontWeight: 700,
              width: "280px",
              height: "40px",
              background: "#F5F5F5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: "26px",
              borderRadius: "12px",
              lineHeight: "17px",
            }}
          >
            {t("profile:title-connect")}
          </Box>
          <Box
            sx={{
              ml: "20px",
              my: "20px",
            }}
          >
            <Box sx={{ display: "flex", mb: 1 }}>
              {recommendMemberTag?.map((item) => (
                <Box
                  sx={{
                    background: "#F4FDFF",
                    fontSize: "12px",
                    mr: 1,
                    px: 1,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              {recommendMemberTag?.map((item) => (
                <Box
                  sx={{
                    background: "#F4FDFF",
                    fontSize: "12px",
                    mr: 1,
                    px: 1,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              ml: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <img src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
              </Box>
              <Box
                sx={{
                  ml: "7px",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "24px",
                }}
              >
                {t("profile:you-speak")}
              </Box>
            </Box>
            <Box
              sx={{
                mt: "6px",
                fontSize: "12px",
                lineHeight: "24px",
              }}
            >
              {recommendMemberYouSpeak}
            </Box>
          </Box>
          <Box
            sx={{
              mt: "20px",
              pb: "24px",
              textAlign: "center",
            }}
          >
            <Button
              sx={{
                background: "#F4FDFF",
                border: "1px solid #03BCDB",
                borderRadius: "40px",
                color: "#03BCDB",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "24px",
                width: "240px",
                height: "32px",
              }}
            >
              <img src={img} alt="ic_heart_blue" />
              <Box
                sx={{
                  ml: 1,
                }}
              >
                {t("profile:title-profile")}
              </Box>
            </Button>

            <Button
              sx={{
                mt: "24px",
                background: backgroundBtn,
                borderRadius: "40px",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "24px",
                width: "280px",
                height: "48px",
              }}
            >
              {txtBtn}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BoxRecommendMemberComponent;
