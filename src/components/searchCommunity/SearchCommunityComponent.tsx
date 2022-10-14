import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";

import styles from "src/components/searchCommunity/search_community.module.scss";
import theme from "src/theme";
// eslint-disable-next-line import/order
import useViewport from "src/helpers/useViewport";
import { numberOfLogins, numberOfParticipants } from "src/constants/searchCommunityConstants";
import { getListCommunitySearch } from "src/services/community";

import BoxItemUserComponent from "./BoxItemCommunityComponent";
import PopupSearchCommunity from "./block/PopupSearchCommunity.";

const SelectCustom = styled(Select)({
  borderRadius: 6,
  width: "100%",
  height: "40px",
  color: theme.gray,
  marginBottom: "20px",
  "&:hover": {
    borderRadius: 6,
  },
  "& .MuiSelect-select": {
    position: "relative",
    fontSize: 14,
    padding: "10px 11px",
    borderRadius: "12px",
    fontFamily: "Noto Sans",
    background: "white",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #989EA8",
  },
});

const FormControlLabelCustom = styled(FormControlLabel)({
  "& .MuiCheckbox-root": {
    padding: "0 8px 0 9px",
    color: "#989EA8",
  },
  "& .MuiButtonBase-root-MuiCheckbox-root": {
    color: theme.gray,
  },
  "& .Mui-checked": {
    color: "#03BCDB !important",
  },
  "& .MuiTypography-root": {
    fontSize: "14px",
  },
});

const SearchCommunityComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();

  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const LIMIT = 12;
  const RECOMMENDED = "recommended";
  const LATEST = "latest";

  const [inputTags, setInputTags] = useState([]);
  const [formSearch, setFormSearch] = useState({
    login_count: numberOfLogins[0]?.value,
    member_count: numberOfParticipants[0]?.value,
    excludejoinedCommunities: false,
  });
  const [resultSearch, setResultSearch] = useState([]);
  const [showMore, setShowMore] = useState({ cursor: "", hasMore: false });
  const [isLoading, setIsLoading] = useState(false);
  const [statusOrder, setStatusOrder] = useState(RECOMMENDED);
  // const [countLogin, setCountLogin] = useState(numberOfLogins[0]?.value);
  // const [countMember, setCountMember] = useState(numberOfParticipants[0]?.value);
  const [isSearch, setIsSearch] = useState(false);
  const fullText = router.query?.fulltext;

  const fetchCommunity = async (arrayResult: Array<any> = [], cursor: string = "", order: string = statusOrder) => {
    setIsLoading(true);
    const res = await getListCommunitySearch(LIMIT, cursor, order, formSearch, inputTags, fullText);
    setResultSearch(arrayResult.concat(res?.items));
    setShowMore({ cursor: res?.cursor, hasMore: res?.hasMore });
    setIsLoading(false);
    return res;
  };

  const changeOrder = async (order: string) => {
    fetchCommunity([], "", order);
    setStatusOrder(order);
  };

  useEffect(() => {
    fetchCommunity();
  }, [isSearch, fullText]);

  const removeSearchTag = (indexRemove) => {
    setInputTags(inputTags.filter((_, index) => index !== indexRemove));
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setInputTags([...inputTags, e.target.value]);
      (document.getElementById("input_search_tag") as HTMLInputElement).value = "";
    }
  };

  const handleChangeInputSearch = (e, key) => {
    // if (key === "login_count") {
    //   setCountLogin(e.target.value);
    // }
    // if (key === "member_count") {
    //   setCountMember(e.target.value);
    // }
    setFormSearch({
      ...formSearch,
      [key]: e.target.value,
    });
  };

  const handleClearSearch = async () => {
    setIsSearch(true);
    setIsLoading(true);
    setFormSearch({
      login_count: numberOfLogins[0]?.value,
      member_count: numberOfParticipants[0]?.value,
      excludejoinedCommunities: true,
    });
    setInputTags([]);
    const res = await getListCommunitySearch(
      LIMIT,
      "",
      RECOMMENDED,
      {
        login_count: numberOfLogins[0]?.value,
        member_count: numberOfParticipants[0]?.value,
        excludejoinedCommunities: true,
      },
      [],
      fullText,
    );
    setResultSearch(res?.items);
    setShowMore({ cursor: res?.cursor, hasMore: res?.hasMore });
    // setCountLogin(numberOfLogins[0]?.value);
    // setCountMember(numberOfParticipants[0]?.value);
    setStatusOrder(RECOMMENDED);
    setIsLoading(false);
    router.push(
      {
        pathname: "/search_community",
      },
      undefined,
      { shallow: false },
    );
  };

  const [showPopupSearchCommunity, setShowPopupSearchCommunity] = useState(false);

  return (
    <React.Fragment>
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
          <Box>
            <Box className={styles.boxSearchLeft}>
              {!isMobile && (
                <React.Fragment>
                  <div className={styles.blockInputTag}>
                    <Paper
                      className="paper-search-tag"
                      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: { sm: "100%", md: 240 } }}
                    >
                      <IconButton sx={{ p: "10px" }} aria-label="menu">
                        <img src="/assets/images/svg/ic_search_blue.svg" alt="ic_search" width="18px" height="22px" />
                      </IconButton>
                      <InputBase
                        className="input-search-tag"
                        id="input_search_tag"
                        onKeyPress={onKeyPress}
                        sx={{ flex: 1 }}
                        placeholder={t("community-search:input-tag-placeholder")}
                      />
                    </Paper>
                    <div className="tags">
                      <ul>
                        {inputTags?.map((tag, index) => (
                          <li key={index}>
                            {tag}{" "}
                            <IconButton className="button-remove-icon" onClick={() => removeSearchTag(index)}>
                              <img
                                src="/assets/images/svg/delete-x-white.svg"
                                alt="ic_delete"
                                width="8px"
                                height="8px"
                              />
                            </IconButton>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* numberOfLogin */}
                  <SelectCustom
                    value={formSearch?.login_count}
                    onChange={(e) => handleChangeInputSearch(e, "login_count")}
                  >
                    {numberOfLogins.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </SelectCustom>

                  {/* numberOfParticipant */}
                  <SelectCustom
                    value={formSearch?.member_count}
                    onChange={(e) => handleChangeInputSearch(e, "member_count")}
                  >
                    {numberOfParticipants.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </SelectCustom>

                  <FormControlLabelCustom
                    control={
                      <Checkbox
                        checked={formSearch?.excludejoinedCommunities}
                        onChange={() =>
                          setFormSearch({
                            ...formSearch,
                            excludejoinedCommunities: !formSearch?.excludejoinedCommunities,
                          })
                        }
                      />
                    }
                    label="参加中のコミュニティを除外"
                  />
                </React.Fragment>
              )}

              {isMobile ? (
                <Button
                  sx={{
                    mt: "0px!important",
                  }}
                  className="btn-user-search btn-search"
                  fullWidth
                  onClick={() => setShowPopupSearchCommunity(true)}
                >
                  {t("community-search:btn-search")}
                </Button>
              ) : (
                <Button
                  className="btn-user-search btn-search"
                  fullWidth
                  onClick={() => fetchCommunity([], "", statusOrder)}
                >
                  {t("community-search:btn-search")}
                </Button>
              )}

              <Button className="btn-user-search btn-clear" fullWidth onClick={handleClearSearch}>
                {t("community-search:btn-clear-condition")}
              </Button>

              <div className="box-btn-create-community">
                <Typography className="span-direction">
                  {t("community-search:span-create-community-direction")}
                </Typography>
                <Button
                  className="btn-user-search btn-create-community"
                  fullWidth
                  onClick={() => router.push("/community/create")}
                >
                  {t("community-search:btn-create-community")}
                </Button>
              </div>
            </Box>
          </Box>
          <Box className={styles.boxResultSearch}>
            <Grid container className={styles.titleResultSearch}>
              <Grid item md={6} xs={12}>
                <Typography className="title-search">
                  {t("community-search:title")}
                  <span className="item-total-result">
                    {isMobile && <br />} 全{resultSearch?.length}件
                  </span>
                </Typography>
              </Grid>
              {!isMobile && (
                <Grid item xs={6} className="sort-by-block">
                  <Typography className="sort-by-label">{t("community-search:sort-by")}</Typography>
                  <Divider orientation="vertical" flexItem />
                  <Box
                    className="sort-link"
                    sx={{
                      color: statusOrder !== RECOMMENDED ? "#03BCDB !important" : theme.navy,
                      fontWeight: statusOrder !== RECOMMENDED ? 400 : 700,
                    }}
                    onClick={() => statusOrder !== RECOMMENDED && changeOrder(RECOMMENDED)}
                  >
                    {t("community-search:recommend-order")}
                  </Box>
                  <Box
                    className="sort-link"
                    sx={{
                      color: statusOrder !== LATEST ? "#03BCDB !important" : theme.navy,
                      fontWeight: LATEST ? 400 : 700,
                    }}
                    onClick={() => statusOrder !== LATEST && changeOrder(LATEST)}
                  >
                    {t("community-search:latest-order")}
                  </Box>
                  <Divider orientation="vertical" flexItem />
                </Grid>
              )}

              {isMobile && (
                <Grid item xs={12} className="sort-by-block-sp">
                  <Box
                    className={statusOrder === RECOMMENDED ? "sort-link" : "sort-link active"}
                    onClick={() => statusOrder !== RECOMMENDED && changeOrder(RECOMMENDED)}
                  >
                    {t("community-search:recommend-order")}
                  </Box>
                  <Box
                    className={statusOrder === LATEST ? "sort-link" : "sort-link active"}
                    onClick={() => statusOrder !== LATEST && changeOrder(LATEST)}
                  >
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
            {showMore.hasMore ? (
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Button
                  onClick={() => fetchCommunity(resultSearch, showMore.cursor, statusOrder)}
                  sx={{ color: "rgb(3, 188, 219)" }}
                >
                  {t("common:showMore")}
                </Button>
              </Box>
            ) : null}
          </Box>
        </Grid>
      </Box>
      <PopupSearchCommunity
        statusOrder={statusOrder}
        inputTags={inputTags}
        formSearch={formSearch}
        setShowPopup={setShowPopupSearchCommunity}
        fetchCommunity={fetchCommunity}
        showPopup={showPopupSearchCommunity}
        setFormSearch={setFormSearch}
        setInputTags={setInputTags}
      />
    </React.Fragment>
  );
};

export default SearchCommunityComponent;
