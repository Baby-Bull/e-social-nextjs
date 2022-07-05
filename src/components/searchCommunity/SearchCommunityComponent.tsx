import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  // Button,
  // Checkbox,
  Divider,
  // FormControlLabel,
  Grid,
  // IconButton,
  // InputBase,
  // MenuItem,
  // Paper,
  // Select,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { styled } from "@mui/material/styles";

import styles from "src/components/searchCommunity/search_community.module.scss";
import ContentComponent from "src/components/layouts/ContentComponent";
// import theme from "src/theme";
// eslint-disable-next-line import/order
import useViewport from "src/helpers/useViewport";
// import { numberOfLogins, numberOfParticipants } from "src/constants/searchCommunityConstants";

import { getListCommunitySearch } from "src/services/community";
import theme from "src/theme";

import BoxItemUserComponent from "./BoxItemCommunityComponent";

// const SelectCustom = styled(Select)({
//   borderRadius: 6,
//   width: "100%",
//   height: "40px",
//   color: theme.gray,
//   marginBottom: "20px",
//   "&:hover": {
//     borderRadius: 6,
//   },
//   "& .MuiSelect-select": {
//     position: "relative",
//     fontSize: 14,
//     padding: "10px 11px",
//     borderRadius: "12px",
//     fontFamily: "Noto Sans",
//     background: "white",
//   },
//   "& .MuiOutlinedInput-notchedOutline": {
//     border: "1px solid #989EA8",
//   },
// });

// const FormControlLabelCustom = styled(FormControlLabel)({
//   "& .MuiCheckbox-root": {
//     padding: "0 8px 0 9px",
//     color: "#989EA8",
//   },
//   "& .MuiButtonBase-root-MuiCheckbox-root": {
//     color: theme.gray,
//   },
//   "& .Mui-checked": {
//     color: "#03BCDB !important",
//   },
//   "& .MuiTypography-root": {
//     fontSize: "14px",
//   },
// });

const SearchCommunityComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();

  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const LIMIT = 12;
  const RECOMMENDED = "recommended";
  const LATEST = "latest";

  // const [inputTags, setInputTags] = useState(["デザイナー", "エンジニア"]);
  // const [formSearch, setFormSearch] = useState({
  //   numberOfLogin: numberOfLogins[0]?.value,
  //   numberOfParticipant: numberOfParticipants[0]?.value,
  //   checkBox1: true,
  // });
  const [resultSearch, setResultSearch] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [cursorValue, setCursor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusOrder, setStatusOrder] = useState(RECOMMENDED);
  const [orderRes, setOrderRes] = useState(RECOMMENDED);

  const fetchCommunity = async (cursor: string = "", order: string = statusOrder) => {
    setIsLoading(true);
    const res = await getListCommunitySearch(LIMIT, cursor, order);
    // eslint-disable-next-line no-unsafe-optional-chaining
    setResultSearch([...resultSearch, ...res?.items]);
    setCursor(res?.cursor);
    setHasMore(res?.hasMore);
    setIsLoading(false);
    setOrderRes(res?.sort_order);
    return res;
  };

  const changeOrder = (order) => {
    if (order !== orderRes) {
      setStatusOrder(order);
      setResultSearch([]);
      setCursor("");
      setHasMore(false);
      setOrderRes(RECOMMENDED);
    }
  };

  useEffect(() => {
    fetchCommunity();
  }, [statusOrder]);

  // const removeSearchTag = (indexRemove) => {
  //   setInputTags(inputTags.filter((_, index) => index !== indexRemove));
  // };
  //
  // const onKeyPress = (e) => {
  //   if (e.key === "Enter" && e.target.value) {
  //     setInputTags([...inputTags, e.target.value]);
  //     (document.getElementById("input_search_tag") as HTMLInputElement).value = "";
  //   }
  // };
  //
  // const handleChangeInputSearch = (e, key) => {
  //   setFormSearch({
  //     ...formSearch,
  //     [key]: e.target.value,
  //   });
  // };

  return (
    <ContentComponent>
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box
        sx={{
          mt: { xs: "80px", lg: "0" },
          minHeight: "calc(100vh - 200px)",
        }}
      >
        <Grid className={styles.boxContainer}>
          <Box className={styles.boxResultSearch} sx={{ padding: { xs: "0", xl: "0 13.6%" } }}>
            <Grid container className={styles.titleResultSearch}>
              <Grid item md={6} xs={12}>
                <Button
                  fullWidth
                  onClick={() => router.push("/community/create")}
                  sx={{
                    background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                    width: ["100%", "410px"],
                    color: "#fff",
                    "&:hover": {
                      background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                    },
                  }}
                >
                  {t("community-search:btn-create-community")}
                </Button>
                {/* <Typography className="title-search"> */}
                {/*  {t("community-search:title")} */}
                {/*  <span className="item-total-result">{isMobile && <br />} 全200件</span> */}
                {/* </Typography> */}
              </Grid>
              {!isMobile && (
                <Grid item xs={6} className="sort-by-block">
                  <Typography className="sort-by-label">{t("community-search:sort-by")}</Typography>
                  <Divider orientation="vertical" flexItem />
                  <Box
                    className="sort-link"
                    sx={{
                      color: statusOrder === RECOMMENDED ? "#03BCDB !important" : theme.navy,
                      fontWeight: statusOrder === RECOMMENDED ? 400 : 700,
                    }}
                    onClick={() => changeOrder(RECOMMENDED)}
                  >
                    {t("community-search:recommend-order")}
                  </Box>
                  <Box
                    className="sort-link"
                    sx={{
                      color: statusOrder === LATEST ? "#03BCDB !important" : theme.navy,
                      fontWeight: LATEST ? 400 : 700,
                    }}
                    onClick={() => changeOrder(LATEST)}
                  >
                    {t("community-search:latest-order")}
                  </Box>
                  <Divider orientation="vertical" flexItem />
                </Grid>
              )}

              {isMobile && (
                <Grid item xs={12} className="sort-by-block-sp">
                  <Box className="sort-link active" onClick={() => changeOrder(RECOMMENDED)}>
                    {t("community-search:recommend-order")}
                  </Box>
                  <Box className="sort-link" onClick={() => changeOrder(LATEST)}>
                    {t("community-search:latest-order")}
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid container className={styles.resultSearch} spacing={{ md: "27px", xs: "20px" }}>
              {resultSearch?.map((item, key) => (
                <Grid item key={key} md={4} xs={12} sm={12}>
                  <BoxItemUserComponent data={item} />
                </Grid>
              ))}
            </Grid>
            {hasMore ? (
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Button onClick={() => fetchCommunity(cursorValue, statusOrder)} sx={{ color: "rgb(3, 188, 219)" }}>
                  {t("common:showMore")}
                </Button>
              </Box>
            ) : null}
          </Box>
        </Grid>
      </Box>
    </ContentComponent>
  );
};

export default SearchCommunityComponent;
