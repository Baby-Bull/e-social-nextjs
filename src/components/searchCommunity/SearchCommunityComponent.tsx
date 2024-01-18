import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import styles from "src/components/searchCommunity/search_community.module.scss";
import theme from "src/theme";
// eslint-disable-next-line import/order
import useViewport from "src/helpers/useViewport";
import { numberOfLogins, numberOfParticipants, SearchFormStatus } from "src/constants";
import { getListCommunitySearch, searchCommunity } from "src/services/community";
import { IStoreState } from "src/constants/interfaces";
import { searchCommunityActions } from "src/store/actionTypes";
import { FormControlLabelCustom, SelectCustom } from "src/styles/customComponent";

import CommunityCardComponent from "../common/organisms/CommunityCardComponent";

import PopupSearchCommunity from "./block/PopupSearchCommunity.";

const SearchCommunityComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();

  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const LIMIT = 12;
  const RECOMMENDED = "recommended";
  const LATEST = "latest";

  const [isLoading, setIsLoading] = useState(false);
  const fullText = router.query?.fulltext;
  const [showPopupSearchCommunity, setShowPopupSearchCommunity] = useState(false);
  const dispatch = useDispatch();
  const searchCommunityState = useSelector((state: IStoreState) => state.search_community);
  const { items: communities, page, hasNextPage } = searchCommunityState.result;
  const { tags, ...formSearch } = searchCommunityState.form;
  const [valueInput, setValueInput] = useState<any>(null);

  const fetchCommunity = async (
    typeSort: string = "",
    arrayResult: Array<any> = [],
    page: number = 1,
    fullText: string = null,
  ) => {
    setIsLoading(true);
    const searchForm = { ...searchCommunityState.form, orderBy: typeSort, fullText };
    const res = await searchCommunity(searchForm, LIMIT, page);
    const addingItems = arrayResult.concat(res?.data);
    dispatch({
      type: searchCommunityActions.UPDATE_RESULT,
      payload: {
        items: addingItems,
        // eslint-disable-next-line no-unsafe-optional-chaining
        page: res?.meta?.page + 1,
        hasNextPage: res?.meta?.hasNextPage,
      },
    });
    setIsLoading(false);
    return res;
  };

  const changeOrder = async (order: string) => {
    fetchCommunity([], "", order);
  };

  const removeSearchTag = (indexRemove: number) => {
    dispatch({
      type: searchCommunityActions.UPDATE_FORM,
      payload: { tags: tags.filter((_, index) => index !== indexRemove) },
    });
  };

  const onKeyPress = (e) => {
    if (valueInput?.length <= 20) {
      if (e.key === "Enter" && e.target.value) {
        fetchCommunity(searchCommunityState.form.orderBy, [], 1, e.target.value);
        dispatch({ type: searchCommunityActions.UPDATE_FORM, payload: { fullText: e.target.value } });
        // (document.getElementById("input_search_tag") as HTMLInputElement).value = "";
      }
    }
  };

  const handleChangeInputSearch = (e, key) => {
    dispatch({
      type: searchCommunityActions.UPDATE_FORM,
      payload: {
        ...formSearch,
        [key]: e.target.value,
      },
    });
  };

  const handleClearSearch = async () => {
    setIsLoading(true);
    dispatch({ type: searchCommunityActions.CLEAR_FORM });
    const res = await getListCommunitySearch(
      LIMIT,
      "",
      RECOMMENDED,
      {
        login_count: numberOfLogins[0]?.value,
        member_count: numberOfParticipants[0]?.value,
        excludejoinedCommunities: false,
      },
      [],
      fullText,
    );
    dispatch({
      type: searchCommunityActions.UPDATE_RESULT,
      payload: {
        items: res?.items,
        cursor: res?.cursor,
        hasMore: res?.hasMore,
      },
    });
    setIsLoading(false);
    router.push({ pathname: "/search_community" }, undefined, { shallow: false });
  };

  const setInputTagsPopup = (newTags: Array<any>) => {
    dispatch({ type: searchCommunityActions.UPDATE_FORM, payload: { tags: newTags } });
  };
  const setFormSearchPopup = (formData: any) => {
    dispatch({ type: searchCommunityActions.UPDATE_FORM, payload: formData });
  };

  useEffect(() => {
    if (fullText !== undefined) {
      handleClearSearch();
    } else if (searchCommunityState.formStatus === SearchFormStatus.Init) {
      fetchCommunity(searchCommunityState.form?.orderBy, [], 1);
    }
  }, [fullText]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: searchCommunityState.scrollPosition,
      behavior: "smooth",
    });
    return () => {
      dispatch({
        type: searchCommunityActions.UPDATE_SCROLL_POSITION,
        payload: { scrollPosition: document.documentElement.scrollTop },
      });
    };
  }, []);

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
                    <Paper className="paper-search-tag">
                      <IconButton sx={{ p: "10px" }} aria-label="menu">
                        <img src="/assets/images/svg/ic_search_blue.svg" alt="ic_search" width="18px" height="22px" />
                      </IconButton>
                      <InputBase
                        className="input-search-tag"
                        id="input_search_tag"
                        onKeyPress={onKeyPress}
                        sx={{ flex: 1 }}
                        placeholder={t("community-search:input-tag-placeholder")}
                        onChange={(e) => setValueInput(e.target.value)}
                      />
                    </Paper>
                    {valueInput?.length > 20 && (
                      <p style={{ color: "red", fontSize: "12px", margin: "5px 0px" }}>
                        {t("community-search:validate-search-form.input-length")}
                      </p>
                    )}
                    <div className="tags">
                      <ul>
                        {tags?.map((tag, index) => (
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
                          dispatch({
                            type: searchCommunityActions.UPDATE_FORM,
                            payload: {
                              ...formSearch,
                              excludeJoined: !formSearch?.excludeJoined,
                            },
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
                  onClick={() => fetchCommunity("", [], 1, searchCommunityState.form?.orderBy)}
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
                    {isMobile && <br />} 全{communities?.length}件
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
                      color: searchCommunityState.form?.orderBy !== RECOMMENDED ? "#03BCDB !important" : theme.navy,
                      fontWeight: searchCommunityState.form?.orderBy !== RECOMMENDED ? 400 : 700,
                    }}
                    onClick={() => searchCommunityState.form?.orderBy !== RECOMMENDED && changeOrder(RECOMMENDED)}
                  >
                    {t("community-search:recommend-order")}
                  </Box>
                  <Box
                    className="sort-link"
                    sx={{
                      color: searchCommunityState.form?.orderBy !== LATEST ? "#03BCDB !important" : theme.navy,
                      fontWeight: LATEST ? 400 : 700,
                    }}
                    onClick={() => searchCommunityState.form?.orderBy !== LATEST && changeOrder(LATEST)}
                  >
                    {t("community-search:latest-order")}
                  </Box>
                  <Divider orientation="vertical" flexItem />
                </Grid>
              )}

              {isMobile && (
                <Grid item xs={12} className="sort-by-block-sp">
                  <Box
                    className={searchCommunityState.form?.orderBy === RECOMMENDED ? "sort-link" : "sort-link active"}
                    onClick={() => searchCommunityState.form?.orderBy !== RECOMMENDED && changeOrder(RECOMMENDED)}
                  >
                    {t("community-search:recommend-order")}
                  </Box>
                  <Box
                    className={searchCommunityState.form?.orderBy === LATEST ? "sort-link" : "sort-link active"}
                    onClick={() => searchCommunityState.form?.orderBy !== LATEST && changeOrder(LATEST)}
                  >
                    {t("community-search:latest-order")}
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid container className={styles.resultSearch} spacing={{ md: "27px", xs: "20px" }}>
              {communities?.map((item, key) => (
                <Grid item key={key} md={4} xs={12} sm={12}>
                  <CommunityCardComponent data={item} />
                </Grid>
              ))}
            </Grid>
            {hasNextPage ? (
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Button
                  onClick={() => fetchCommunity(communities, communities, page)}
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
        statusOrder={searchCommunityState.form?.orderBy}
        inputTags={tags}
        formSearch={formSearch}
        setShowPopup={setShowPopupSearchCommunity}
        fetchCommunity={fetchCommunity}
        showPopup={showPopupSearchCommunity}
        setInputTags={setInputTagsPopup}
        setFormSearch={setFormSearchPopup}
      />
    </React.Fragment>
  );
};

export default SearchCommunityComponent;
