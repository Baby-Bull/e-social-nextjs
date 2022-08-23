import { Box, Avatar } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import theme from "src/theme";

interface CommunityOgpProps {
  community: {
    profileImage?: string;
    name: string;
    memberCount: number;
  };
}
const BoxInfoProfile = styled(Box)`
  font-weight: 500;
  font-size: 32px;
  line-height: 50px;
  display: flex;
  align-items: center;
  color: #1a2944;
`;
const CommunityOgp: React.FC<CommunityOgpProps> = ({ community }) => {
  const [id, setId] = useState(community?.profileImage ? null : "ogp-component");
  return (
    <Box id={id} sx={{ backgroundColor: theme.whiteBlue, padding: "33px 53px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "29px" }}>
        <Avatar src="/assets/images/logo/logo.png" variant="square" sx={{ width: "148.24px", height: "43.39px" }} />
      </Box>
      <Box sx={{ backgroundColor: "white", padding: "49px 40px", display: "flex", alignItems: "center" }}>
        <Box sx={{ marginRight: "30px" }}>
          <Avatar
            imgProps={{ onLoad: () => setId("ogp-component") }}
            src={community?.profileImage}
            sx={{ width: "360px", height: "360px" }}
          />
        </Box>
        <Box sx={{ color: theme.navy }}>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "44px",
              marginBottom: "18px",
              // height: "170px",
              "text-overflow": "ellipsis",
              overflow: "hidden",
              wordBreak: "break-all",
              display: "-webkit-box",
              "-webkit-line-clamp": "3 !important",
              "-webkit-box-orient": "vertical",
              width: "621px",
              lineHeight: "55px",
            }}
          >
            {community.name}
          </Box>
          <BoxInfoProfile>参加人数 :{community.memberCount || 0}人</BoxInfoProfile>
          <Box
            sx={{
              backgroundColor: "#FF9458",
              borderRadius: "12px",
              width: "621.18px",
              height: "97.19px",
              marginTop: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 35px",
            }}
          >
            <Box />
            <Box sx={{ color: "#fff", fontWeight: 700, fontSize: "36px", lineHeight: "24px" }}>コミュニティを見る</Box>
            <Box>
              <Avatar
                src="/assets/images/icon/ic_vector_right.svg"
                variant="square"
                sx={{ width: "15.88px", height: "20.83px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CommunityOgp;
