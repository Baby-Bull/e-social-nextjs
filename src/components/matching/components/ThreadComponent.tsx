import * as React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";

import ButtonComponent from "../../common/ButtonComponent";

interface ThreadComponentProps {
  data: any;
  type?: "unconfirm" | "confirm" | "reject" | "favourite" | "matched" | "community";
}

const ThreadComponent: React.SFC<ThreadComponentProps> = ({ data, type }) => {
  const { t } = useTranslation();

  const isShowThread = type === "unconfirm" || type === "reject";

  return (
    <Box
      sx={{
        py: ["20px", "22px"],
        px: ["20px", 0],
        mb: [type === "confirm" || type === "favourite" ? "20px" : "40px", 0],
        borderTop: `1px solid ${theme.lightGray}`,
        borderBottom: `1px solid ${theme.lightGray}`,
      }}
    >
      <Typography
        sx={{
          display: { sm: "none" },
          color: theme.gray,
          fontSize: [12, 14],
          fontWeight: 400,
        }}
      >
        {data.date_request}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
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

        <Box
          sx={{
            display: "flex",
            alignItems: type === "confirm" || type === "matched" ? "center" : "flex-start",
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
            <Avatar
              variant="square"
              sx={{
                width: ["32px", type === "confirm" || type === "favourite" || type === "matched" ? "54px" : "80px"],
                height: "100%",
              }}
              src={data.avatar}
            />

            <Typography
              sx={{
                display: ["inherit", type === "favourite" ? "inherit" : "none"],
                color: "#D8D8D8",
                fontSize: [8, 14],
                fontWeight: 700,
              }}
            >
              {data.last_login}
            </Typography>
          </Box>

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
                color: theme.gray,
                fontSize: [12, 14],
                fontWeight: 400,
              }}
            >
              {data.date_request}
            </Typography>

            <Box
              sx={{
                color: theme.navy,
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
                  fontWeight: 400,
                  color: theme.blue,
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
                color: theme.navy,
              }}
            >
              {data.message}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: ["none", "flex"],
          }}
        >
          {type === "unconfirm" && (
            <React.Fragment>
              <Typography
                sx={{
                  color: theme.gray,
                  fontWeight: 700,
                  display: !data?.is_cancel && "none",
                }}
              >
                {t("thread:button.canceled")}
              </Typography>

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
              >
                {data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")}
              </ButtonComponent>

              <ButtonComponent
                props={{
                  bgColor: theme.blue,
                  dimension: "small",
                }}
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
              >
                {data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")}
              </ButtonComponent>

              <ButtonComponent
                props={{
                  bgColor: theme.blue,
                  dimension: "small",
                }}
              >
                {t("thread:button.open-message")}
              </ButtonComponent>
            </React.Fragment>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          pr: "20px",
          display: [type !== "favourite" && "none", "none"],
          color: theme.navy,
        }}
      >
        {data.message}
      </Box>

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
              color: "#D8D8D8",
              fontSize: [8, 14],
              fontWeight: 700,
            }}
          >
            {data.last_login}
          </Typography>

          <Box ml="18px" pt={["37px", 0]}>
            <Box
              sx={{
                mb: "15px",
                display: "flex",
                flexDirection: ["column", "row"],
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  minWidth: "110px",
                }}
              >
                {t("thread:purpose")}
              </Typography>
              <Typography component="span">{data.purpose}</Typography>
            </Box>
            <Box
              sx={{
                mb: "15px",
                display: "flex",
                flexDirection: ["column", "row"],
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  minWidth: "110px",
                }}
              >
                {t("thread:date-interview")}
              </Typography>
              <Typography component="span">{data.purpose}</Typography>
            </Box>
            <Box
              sx={{
                mb: "15px",
                display: "flex",
                flexDirection: ["column", "row"],
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  minWidth: "110px",
                }}
              >
                {t("thread:message")}
              </Typography>
              <Typography component="span">{data.message}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: ["flex", "none"],
          flexDirection: type === "unconfirm" ? "column" : "row",
          justifyContent: type === "confirm" ? "space-between" : "center",
          alignItems: "center",
        }}
      >
        {type === "unconfirm" && (
          <React.Fragment>
            <Typography
              sx={{
                mt: "60px",
                mb: "40px",
                color: theme.gray,
                fontWeight: 700,
                display: !data?.is_cancel && "none",
              }}
            >
              {t("thread:button.canceled")}
            </Typography>

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
          >
            {data?.is_applied ? t("thread:button.applied") : t("thread:button.apply-matching")}
          </ButtonComponent>
        )}
      </Box>
    </Box>
  );
};
export default ThreadComponent;
