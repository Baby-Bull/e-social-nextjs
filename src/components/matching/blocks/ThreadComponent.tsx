import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";
import PopupReportUser from "src/components/chat/Personal/Blocks/PopupReportUser";
import PopupReviewComponent from "src/components/chat/Personal/Blocks/PopupReviewComponent";
import ModalMatchingComponent from "src/components/home/blocks/ModalMatchingComponent";

const ThreadTitle = styled(Typography)({
  paddingLeft: "20px",
  fontWeight: 700,
  minWidth: "110px",
});

const ThreadContent = styled(Typography)({
  marginLeft: "20px",
});

interface IThreadComponentProps {
  data: any;
  type?: "unconfirm" | "confirm" | "reject" | "favourite" | "matched" | "community";
}

const ThreadComponent: React.SFC<IThreadComponentProps> = ({ data, type }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const isShowThread = type === "unconfirm" || type === "reject";
  const isConfirmOrFavouriteOrMatched = type === "confirm" || type === "favourite" || type === "matched";

  const [showPopupReport, setShowPopupReport] = React.useState(false);
  const handleShowReport = () => setShowPopupReport(true);

  const [showPopupReview, setShowPopupReview] = React.useState(false);
  const handleShowReview = () => setShowPopupReview(true);

  const [showModalMatching, setModalMatching] = React.useState(false);
  const handleShowModalMatching = () => setModalMatching(true);

  return (
    <React.Fragment>
      <Box
        sx={{
          py: ["20px", "22px"],
          px: ["20px", 0],
          mb: [isConfirmOrFavouriteOrMatched ? "20px" : "0px", 0],
          borderTop: [`1px solid ${theme.lightGray}`, `2px solid ${theme.lightGray}`],
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
          {/* Absolute icon heart tab favourite SP */}
          <Typography
            sx={{
              display: [type !== "favourite" && "none", "none"],
              position: "absolute",
              top: "-8px",
              right: "-8px",
            }}
          >
            <img src="/assets/images/svg/heart.svg" alt="heart" />
          </Typography>
          {/* End Absolute icon heart tab favourite SP */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: type === "matched" && !data.is_send_message ? "25px" : "7px",
            }}
          >
            <Box
              sx={{
                display: type === "favourite" ? "flex" : "inherit",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  mr: type === "matched" && data.is_send_message && "18px",
                }}
              >
                <Avatar
                  variant="square"
                  sx={{
                    width: ["32px", isConfirmOrFavouriteOrMatched ? "54px" : "80px"],
                    height: "100%",
                  }}
                  src={data.avatar}
                />

                <Avatar
                  variant="square"
                  sx={{
                    display: type !== "matched" && "none",
                    position: "absolute",
                    top: !data.is_send_message ? "-15px" : "42px",
                    left: !data.is_send_message ? "-20px" : "52px",
                    width: ["15px", "24px"],
                    height: ["15px", "24px"],
                  }}
                  src={data.avatar2}
                />

                <Box
                  sx={{
                    display: type !== "matched" && "none",
                    backgroundImage: `url("/assets/images/svg/send.svg")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    top: !data.is_send_message ? "-5px" : "34px",
                    left: !data.is_send_message ? "0" : "43px",
                    width: ["15px", "20px"],
                    height: ["100%"],
                  }}
                />
              </Box>
              {/* Title bottom Avatar tab favourite */}
              <Typography
                sx={{
                  display: [type === "matched" ? "none" : "inherit", type === "favourite" ? "inherit" : "none"],
                  color: theme.gray,
                  fontSize: [10, 14],
                  fontWeight: 500,
                }}
              >
                {data.last_login}
              </Typography>
              {/* End Title bottom Avatar tab favourite */}
            </Box>

            {/* Grid right Info */}
            <Box
              sx={{
                pl: type === "favourite" ? "26px" : "20px",
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
                }}
              >
                {data.date_request}
              </Typography>

              <Box
                sx={{
                  fontSize: [16, 20],
                  fontWeight: 700,
                  display: "flex",
                  flexDirection: ["column", "row"],
                  alignItems: ["flex-start", "center"],
                }}
              >
                {data.name}
                <Typography
                  sx={{
                    pl: { sm: "7px" },
                    fontSize: 12,
                    fontWeight: 500,
                    color: theme.gray,
                  }}
                >
                  {data.job}
                </Typography>

                <Typography
                  sx={{
                    pl: "15px",
                    display: ["none", type === "favourite" && "inherit"],
                  }}
                >
                  <img src="/assets/images/svg/heart.svg" alt="heart" />
                </Typography>
              </Box>

              <Typography
                component="span"
                sx={{
                  display: ["none", type === "favourite" && "inherit"],
                }}
              >
                {data.message}
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
            {type === "unconfirm" && (
              <React.Fragment>
                <ButtonComponent
                  props={{
                    color: theme.gray,
                    bgColor: theme.whiteGray,
                    dimension: "x-small",
                  }}
                  sx={{
                    display: !data?.is_cancel && "none",
                    borderRadius: "12px",
                  }}
                >
                  {t("thread:button.canceled")}
                </ButtonComponent>

                <ButtonComponent
                  props={{
                    bgColor: theme.orange,
                    dimension: "x-small",
                  }}
                  sx={{
                    display: data?.is_cancel && "none",
                    mr: "20px",
                  }}
                >
                  {t("thread:button.approve")}
                </ButtonComponent>

                <ButtonComponent
                  props={{
                    bgColor: theme.gray,
                    dimension: "x-small",
                  }}
                  sx={{
                    display: data?.is_cancel && "none",
                  }}
                >
                  {t("thread:button.reject")}
                </ButtonComponent>
              </React.Fragment>
            )}

            {type === "confirm" && (
              <React.Fragment>
                <ButtonComponent
                  disabled={data?.is_reviewed}
                  props={{
                    color: data?.is_reviewed && theme.gray,
                    bgColor: !data?.is_reviewed && theme.orange,
                    dimension: "small",
                  }}
                  sx={{
                    mr: "20px",
                  }}
                  onClick={handleShowReview}
                >
                  {data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")}
                </ButtonComponent>

                <ButtonComponent
                  props={{
                    bgColor: theme.blue,
                    dimension: "small",
                  }}
                  onClick={() => router.push(`/chat/personal`)}
                >
                  {t("thread:button.open-message")}
                </ButtonComponent>
              </React.Fragment>
            )}

            {type === "reject" && (
              <ButtonComponent
                props={{
                  bgColor: theme.blue,
                }}
                sx={{
                  width: "80px",
                  mr: "20px",
                  borderRadius: "12px",
                }}
                onClick={handleShowReport}
              >
                {t("thread:button.report")}
              </ButtonComponent>
            )}

            {type === "favourite" && (
              <ButtonComponent
                disabled={data?.is_applied}
                props={{
                  color: data?.is_applied && theme.gray,
                  bgColor: !data?.is_applied && theme.green,
                  dimension: "small",
                }}
                sx={{
                  ml: "15px",
                }}
                onClick={handleShowModalMatching}
              >
                {data?.is_applied ? t("thread:button.applied") : t("thread:button.apply-matching")}
              </ButtonComponent>
            )}

            {type === "matched" && (
              <React.Fragment>
                <ButtonComponent
                  disabled={data?.is_reviewed}
                  props={{
                    color: data?.is_reviewed && theme.gray,
                    bgColor: !data?.is_reviewed && theme.orange,
                    dimension: "small",
                  }}
                  sx={{
                    mr: "20px",
                  }}
                  onClick={handleShowReview}
                >
                  {data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")}
                </ButtonComponent>

                <ButtonComponent
                  props={{
                    bgColor: theme.blue,
                    dimension: "small",
                  }}
                  onClick={() => router.push(`/chat/personal`)}
                >
                  {t("thread:button.open-message")}
                </ButtonComponent>
              </React.Fragment>
            )}
          </Box>
          {/* End Button PC */}
        </Box>
        {/* End Info user (avatar, ...) */}

        <Box
          sx={{
            pr: "20px",
            display: [type !== "favourite" && "none", "none"],
          }}
        >
          {data.message}
        </Box>

        {/* Thread */}
        <Box
          sx={{
            display: isShowThread ? "flex" : "none",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex">
            <Typography
              sx={{
                minWidth: ["32px", "80px"],
                display: ["none", "flex"],
                justifyContent: "center",
                color: theme.gray,
                fontSize: [10, 14],
                fontWeight: 500,
              }}
            >
              {data.last_login}
            </Typography>

            <Box
              sx={{
                mt: ["17px", 0],
                mb: ["40px", 0],
                ml: [0, "18px"],
                pt: "20px",
                pb: "5px",
                backgroundColor: theme.whiteBlue,
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  mb: "15px",
                  display: "flex",
                  flexDirection: ["column", "row"],
                }}
              >
                <ThreadTitle>{t("thread:purpose")}</ThreadTitle>
                <ThreadContent>{data.purpose}</ThreadContent>
              </Box>
              <Box
                sx={{
                  mb: "15px",
                  display: "flex",
                  flexDirection: ["column", "row"],
                }}
              >
                <ThreadTitle>{t("thread:date-interview")}</ThreadTitle>
                <ThreadContent>{data.purpose}</ThreadContent>
              </Box>
              <Box
                sx={{
                  mb: "15px",
                  display: "flex",
                  flexDirection: ["column", "row"],
                }}
              >
                <ThreadTitle>{t("thread:message")}</ThreadTitle>
                <ThreadContent>{data.message}</ThreadContent>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* End Thread */}

        {/* Button SP */}
        <Box
          sx={{
            display: ["flex", "none"],
            flexDirection: type === "unconfirm" ? "column" : "row",
            justifyContent: type === "confirm" || type === "matched" ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {type === "unconfirm" && (
            <React.Fragment>
              <ButtonComponent
                props={{
                  color: theme.gray,
                  bgColor: theme.whiteGray,
                  dimension: "x-small",
                }}
                sx={{
                  mb: "20px",
                  display: !data?.is_cancel && "none",
                  borderRadius: "12px",
                }}
              >
                {t("thread:button.canceled")}
              </ButtonComponent>

              <ButtonComponent
                props={{
                  bgColor: theme.orange,
                  dimension: "medium",
                }}
                sx={{
                  display: data?.is_cancel && "none",
                }}
              >
                {t("thread:button.approve")}
              </ButtonComponent>

              <ButtonComponent
                props={{
                  bgColor: theme.gray,
                  dimension: "x-small",
                }}
                sx={{
                  display: data?.is_cancel && "none",
                  mt: "42px",
                  mb: "20px",
                }}
              >
                {t("thread:button.reject")}
              </ButtonComponent>
            </React.Fragment>
          )}

          {type === "confirm" && (
            <React.Fragment>
              <ButtonComponent
                disabled={data?.is_reviewed}
                props={{
                  color: data?.is_reviewed && theme.gray,
                  bgColor: !data?.is_reviewed && theme.orange,
                  dimension: "x-small",
                }}
                sx={{
                  mt: "27px",
                  mb: "5px",
                  fontSize: 14,
                }}
                onClick={handleShowReview}
              >
                {data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")}
              </ButtonComponent>

              <ButtonComponent
                props={{
                  bgColor: theme.blue,
                  dimension: "x-small",
                }}
                sx={{
                  mt: "27px",
                  mb: "5px",
                  fontSize: 14,
                }}
                onClick={() => router.push(`/chat/personal`)}
              >
                {t("thread:button.open-message-SP")}
              </ButtonComponent>
            </React.Fragment>
          )}

          {type === "reject" && (
            <ButtonComponent
              props={{
                bgColor: theme.blue,
              }}
              sx={{
                width: "80px",
                borderRadius: "12px",
                mb: "20px",
              }}
              onClick={handleShowReport}
            >
              {t("thread:button.report")}
            </ButtonComponent>
          )}

          {type === "favourite" && (
            <ButtonComponent
              props={{
                dimension: "small",
                bgColor: theme.green,
              }}
              sx={{
                mt: "20px",
                height: 40,
              }}
              onClick={handleShowModalMatching}
            >
              {data?.is_applied ? t("thread:button.applied") : t("thread:button.apply-matching")}
            </ButtonComponent>
          )}

          {type === "matched" && (
            <React.Fragment>
              <ButtonComponent
                disabled={data?.is_reviewed}
                props={{
                  color: data?.is_reviewed && theme.gray,
                  bgColor: !data?.is_reviewed && theme.orange,
                  dimension: "x-small",
                }}
                sx={{
                  mt: "27px",
                  mb: "5px",
                  fontSize: 14,
                }}
                onClick={handleShowReview}
              >
                {data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")}
              </ButtonComponent>

              <ButtonComponent
                props={{
                  bgColor: theme.blue,
                  dimension: "x-small",
                }}
                sx={{
                  mt: "27px",
                  mb: "5px",
                  fontSize: 14,
                }}
                onClick={() => router.push(`/chat/personal`)}
              >
                {t("thread:button.open-message-SP")}
              </ButtonComponent>
            </React.Fragment>
          )}
        </Box>
        {/* End Button SP */}
      </Box>

      <PopupReportUser showPopup={showPopupReport} setShowPopup={setShowPopupReport} />
      <PopupReviewComponent showPopup={showPopupReview} setShowPopup={setShowPopupReview} />
      <ModalMatchingComponent open={showModalMatching} setOpen={setModalMatching} />
    </React.Fragment>
  );
};
export default ThreadComponent;
