import React from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { styled } from "@mui/material/styles";
import { Box, Link } from "@mui/material";

// import theme from "src/theme";

interface IWaitingRenewalProps {}

const WaitingRenewalComponent: React.SFC<IWaitingRenewalProps> = () => (
  <Box
    sx={{
      background: "linear-gradient(111.48deg, #03BCDB 0.52%, #03DBCE 100%)",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          fontSize: { xs: "80px", lg: "139px" },
          lineHeight: { xs: "88px", lg: "208.5px" },
          fontWeight: 600,
          color: "#FFFFFF",
          opacity: 0.3,
          position: "absolute",
          whiteSpace: { xs: "normal", lg: "nowrap" },
          top: { xs: "0", lg: "-30px" },
          width: "100%",
          textAlign: "center",
        }}
      >
        2023.11.11 RENEWAL
      </Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "flex" },
          alignItems: " center",
          mt: { xs: "85px", lg: "200px" },
          pl: { xs: "18px", lg: "166px" },
          pr: { xs: "18px", lg: "148px" },
          flexDirection: { xs: "column-reverse", lg: "unset" },
        }}
      >
        <Box sx={{ color: "#fff", width: { xs: "100%", lg: "50%" } }}>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Box sx={{ fontSize: "42px", lineHeight: "63px", fontWeight: 600 }}>新しいエンジニア</Box>
            <Box sx={{ fontSize: "42px", lineHeight: "63px", fontWeight: 600 }}>体験まもなく解禁！</Box>
          </Box>
          <Box sx={{ display: { xs: "block", lg: "none" }, textAlign: "center" }}>
            <Box sx={{ fontSize: "28px", lineHeight: "40px", fontWeight: 600 }}>新しいエンジニア体験</Box>
            <Box sx={{ fontSize: "28px", lineHeight: "40px", fontWeight: 600 }}>まもなく解禁！</Box>
          </Box>
          <Box
            sx={{
              fontSize: { xs: "13px", lg: "20px" },
              lineHeight: { xs: "28.6px", lg: "44px" },
              fontWeight: 500,
              mt: { xs: "11px", lg: "23px" },
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            goodhubは現在リニューアル中です。
            <br />
            エンジニアの皆さまに楽しんでいただけるように、
            <br />
            UIの大幅改善・機能追加を実施しています。
            <br />
            リニューアルを楽しみにしてもらえるとうれしいです！
            <br />
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", width: { xs: "100%", lg: "50%" }, zIndex: 9999 }}>
          <Box
            sx={{ width: { xs: "282px", lg: "460px" }, height: { xs: "213px", lg: "348px" } }}
            component="img"
            alt="avatar"
            src="/assets/images/icon/renewal_user.svg"
          />
        </Box>
      </Box>
    </Box>
    <Box
      sx={{
        background: "#1A2944",
        padding: "34px 28px 24px 28px",
        display: { xs: "block", lg: "none" },
        fontSize: "12px",
        lineHeight: "20.27px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "50%" }}>
          <Box>
            <Link
              sx={{ color: "#fff", textDecoration: "none" }}
              target="_blank"
              href="https://ruddy-muenster-a17.notion.site/f7dee0adb1d54cf59f025cd8cbc73c89"
            >
              利用規約
            </Link>
          </Box>
          <Box sx={{ mt: "17px" }}>
            <Link
              sx={{ color: "#fff", textDecoration: "none" }}
              target="_blank"
              href="https://ruddy-muenster-a17.notion.site/6fd1d8e405e648f7874a5dd6c4bc3351"
            >
              プライバシーポリシー
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box>
            <Link sx={{ color: "#fff", textDecoration: "none" }} href="#">
              お問い合わせ
            </Link>
          </Box>
          <Box sx={{ mt: "17px" }}>
            <Link sx={{ color: "#fff", textDecoration: "none" }} target="_blank" href="https://www.ailab-corp.com/">
              運営会社
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: "39px", textAlign: "center" }}>
        <Box
          sx={{ width: "118px", height: "34px", textAlign: "center" }}
          component="img"
          alt="avatar"
          src="/assets/images/logo_footer_renewal.png"
        />
        <Box sx={{ color: "#fff" }}>Copyright © AilaB inc. All Rights Reserved.</Box>
      </Box>
    </Box>
    <Box
      sx={{
        background: "#1A2944",
        padding: "30px",
        display: { xs: "none", lg: "flex" },
        justifyContent: "space-between",
        fontSize: "14px",
        lineHeight: "20.27px",
      }}
    >
      <Box sx={{ display: "flex", gap: "40px" }}>
        <Link
          sx={{ color: "#fff", textDecoration: "none" }}
          target="_blank"
          href="https://ruddy-muenster-a17.notion.site/f7dee0adb1d54cf59f025cd8cbc73c89"
        >
          利用規約
        </Link>
        <Link
          sx={{ color: "#fff", textDecoration: "none" }}
          target="_blank"
          href="https://ruddy-muenster-a17.notion.site/6fd1d8e405e648f7874a5dd6c4bc3351"
        >
          プライバシーポリシー
        </Link>
        <Link sx={{ color: "#fff", textDecoration: "none" }} href="#">
          お問い合わせ
        </Link>
        <Link sx={{ color: "#fff", textDecoration: "none" }} target="_blank" href="https://www.ailab-corp.com/">
          運営会社
        </Link>
      </Box>
      <Box sx={{ color: "#fff", fontWeight: 500 }}>Copyright © AilaB inc. All Rights Reserved.</Box>
    </Box>
  </Box>
);

export default WaitingRenewalComponent;
