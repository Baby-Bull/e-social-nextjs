import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import { useTranslation } from "next-i18next";
import DOMPurify from "isomorphic-dompurify";

import theme from "src/theme";
import { postDetail, status, isContributor } from "src/components/community/mockData";
import ButtonDropDownComponent from "src/components/community/post/detail/blocks/ButtonDropDownComponent";

interface IBoxInfoProps {
  title: string;
  text: string;
  textColor?: string;
  fontWeight: number;
}

const BoxInfo: React.SFC<IBoxInfoProps> = ({ title, text, textColor, fontWeight }) => (
  <Box
    sx={{
      border: `1px solid ${theme.blue}`,
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      height: ["32px", "40px"],
      lineHeight: ["32px", "40px"],
      mb: ["8px", "7px"],
    }}
  >
    <Box
      sx={{
        backgroundColor: theme.blue,
        borderRadius: "12px 0px 0px 12px",
        color: "white",
        fontWeight: 700,
        fontSize: [10, 14],
        width: ["48px", "80px"],
        textAlign: "center",
      }}
    >
      {title}
    </Box>

    <Typography
      sx={{
        ml: "20px",
        color: textColor || "black",
        fontSize: [10, 14],
        fontWeight,
      }}
    >
      {text}
    </Typography>
  </Box>
);

const PostDetailComponent = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        pt: ["20px", "30px"],
        pb: "40px",
        px: ["15px", "40px"],
        border: `2px solid ${theme.whiteGray}`,
        borderRadius: "12px",
        color: theme.navy,
        position: "relative",
        backgroundColor: "white",
      }}
    >
      {isContributor && <ButtonDropDownComponent />}

      <Typography
        component="span"
        sx={{
          fontSize: [18, 32],
          fontWeight: 700,
        }}
      >
        {postDetail.title}
      </Typography>

      <Box
        sx={{
          my: "20px",
          display: "flex",
        }}
      >
        <Avatar
          sx={{
            mr: ["8px", "24px"],
            width: ["32px", "54px"],
            height: ["32px", "54px"],
          }}
          src={postDetail.avatar}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: ["row-reverse", "column"],
            alignItems: ["center", "inherit"],
          }}
        >
          <Typography
            component="div"
            sx={{
              color: theme.gray,
              fontSize: [10, 14],
            }}
          >
            {postDetail.last_login}
          </Typography>
          <Typography
            component="div"
            sx={{
              fontSize: [14, 20],
              fontWeight: 700,
              mr: ["16px", 0],
            }}
          >
            {postDetail.name}
          </Typography>
        </Box>
      </Box>

      {status === "withdraw" && (
        <React.Fragment>
          <BoxInfo title={t("community:url")} text={postDetail.url} textColor={theme.blue} fontWeight={500} />
          <BoxInfo title={t("community:address")} text={postDetail.address} fontWeight={400} />
        </React.Fragment>
      )}

      <Divider
        sx={{
          my: "20px",
          backgroundColor: theme.lightGray,
        }}
      />

      <Box mt="20px">
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postDetail.content) }} />
      </Box>
    </Box>
  );
};
export default PostDetailComponent;
