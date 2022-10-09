import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputBase,
  Link,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import styles from "src/components/searchUser/search_user.module.scss";
import theme from "src/theme";
import { jobs, employeeStatus, lastLogins, reviews } from "src/constants/searchUserConstants";
import useViewport from "src/helpers/useViewport";
import { UserSearch } from "src/services/user";
import { searchUserActions } from "src/store/actionTypes";

import BoxItemUserComponent from "./BoxItemUserComponent";
import PopupSearchUser from "./block/PopupSearchUser";

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
});

const initalFormData = {
  job: jobs[0]?.value,
  employeeStatus: employeeStatus[0]?.value,
  lastLogin: lastLogins[0]?.value,
  review: reviews[0]?.value,
  statusCanTalk: false,
  statusLookingForFriend: false,
  statusNeedConsult: false,
};

type Props = {
  scrollPosition: number;
  form: {
    job: string | number;
    employeeStatus: string | number;
    lastLogin: number;
    review: number;
    statusCanTalk: boolean;
    statusLookingForFriend: boolean;
    statusNeedConsult: boolean;
    tags: string[];
  };
  result: {
    limit: number;
    cursor: string;
    items: any[];
    sort: string;
    hasMore: boolean;
  };
  // eslint-disable-next-line no-unused-vars
  updateForm: (formData: any) => void;
  // eslint-disable-next-line no-unused-vars
  updateResult: (result: any) => void;
  // eslint-disable-next-line no-unused-vars
  updateScrollPosition: (position: number) => void;
};

const SearchUserComponent: FC<Props> = ({
  scrollPosition,
  form,
  result,
  updateForm,
  updateResult,
  updateScrollPosition,
}) => {
  const { t } = useTranslation();
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const router = useRouter();
  // const query = useQuery();
  const LIMIT = 6;
  const [isLoading, setIsLoading] = useState(false);
  const [inputTags, setInputTags] = useState(form.tags);
  const [resultSearch, setResultSearch] = useState(result.items);
  // const [isRefresh, setIsRefresh] = useState(false);
  const [isSort, setIsSort] = useState(result.sort);
  const [showMore, setShowMore] = useState({ cursor: result.cursor, hasMore: result.hasMore });
  const [formSearch, setFormSearch] = useState({
    job: form.job,
    employeeStatus: form.employeeStatus,
    lastLogin: form.lastLogin,
    review: form.review,
    statusCanTalk: form.statusCanTalk,
    statusLookingForFriend: form.statusLookingForFriend,
    statusNeedConsult: form.statusNeedConsult,
  });
  const fullText = router.query?.fulltext;

  const fetchData = async (typeSort: string = "", arrayResult: Array<any> = [], cursor: string = "") => {
    setIsLoading(true);
    const res = await UserSearch(formSearch, inputTags, fullText, typeSort, LIMIT, cursor);
    const items = arrayResult.concat(res?.items);
    setResultSearch(items);
    setShowMore({ cursor: res?.cursor, hasMore: res?.hasMore });
    setIsLoading(false);
    updateResult({
      items,
      cursor: res?.cursor,
      hasMore: res?.hasMore,
      sort: typeSort,
    });
  };

  const handleSort = async (typeSort: string) => {
    fetchData(typeSort, [], "");
    setIsSort(typeSort);
  };

  const removeSearchTag = (indexRemove) => {
    const tags = inputTags.filter((_, index) => index !== indexRemove);
    setInputTags(tags);
    updateForm({ tags });
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter" && e.target.value) {
      const tags = [...inputTags, e.target.value];
      setInputTags(tags);
      updateForm({ tags });
      (document.getElementById("input_search_tag") as HTMLInputElement).value = "";
    }
  };

  const handleChangeInputSearch = (e, key) => {
    const formSearchData = {
      ...formSearch,
      [key]: e.target.value,
    };
    setFormSearch(formSearchData);
    updateForm(formSearchData);
  };

  const clearFormSearch = async () => {
    setFormSearch({
      ...initalFormData,
    });
    setInputTags([]);
    setIsLoading(true);
    const res = await UserSearch(initalFormData, [], fullText, "", LIMIT, "");
    setResultSearch(res?.items);
    setShowMore({ cursor: res?.cursor, hasMore: res?.hasMore });
    setIsSort("recommended");
    updateForm({
      ...initalFormData,
      tags: [],
    });
    updateResult({
      items: res?.items,
      cursor: res?.cursor,
      hasMore: res?.hasMore,
      sort: "recommended",
    });
    setIsLoading(false);
  };

  const onPopupSetInput = (tags) => {
    setInputTags(tags);
    updateForm({ tags });
  };

  const onPopupSetFormSearch = (formData) => {
    setFormSearch(formData);
    updateForm(formData);
  };

  useEffect(() => {
    if (fullText !== undefined) {
      clearFormSearch();
    }
  }, [fullText]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
    return () => {
      updateScrollPosition(document.documentElement.scrollTop);
    };
  }, []);

  const [showPopupSearchUser, setShowPopupSearchUser] = useState(false);

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
        }}
      >
        <Box className={styles.boxSearchLeft}>
          {!isMobile && (
            <React.Fragment>
              <div className={styles.blockInputTag}>
                <Paper
                  className="paper-search-tag"
                  sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: { sm: "100%", md: 240 } }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <img src="/assets/images/svg/ic_user_search.svg" alt="ic_search" width="18px" height="22px" />
                  </IconButton>
                  <InputBase
                    className="input-search-tag"
                    id="input_search_tag"
                    onKeyPress={onKeyPress}
                    sx={{ flex: 1 }}
                    placeholder={t("user-search:input-tag-placeholder")}
                  />
                </Paper>
                <div className="tags">
                  <ul>
                    {inputTags?.map((tag, index) => (
                      <li key={index}>
                        {tag}{" "}
                        <IconButton className="button-remove-icon" onClick={() => removeSearchTag(index)}>
                          <img src="/assets/images/svg/delete-x-white.svg" alt="ic_delete" width="8px" height="8px" />
                        </IconButton>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Career */}
              <SelectCustom value={formSearch?.job} onChange={(e) => handleChangeInputSearch(e, "job")}>
                {jobs.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </SelectCustom>

              {/* Status */}
              <SelectCustom
                value={formSearch?.employeeStatus}
                onChange={(e) => handleChangeInputSearch(e, "employeeStatus")}
              >
                {employeeStatus.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </SelectCustom>

              {/* Last login */}
              <SelectCustom value={formSearch?.lastLogin} onChange={(e) => handleChangeInputSearch(e, "lastLogin")}>
                {lastLogins.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </SelectCustom>

              {/* Review */}
              <SelectCustom value={formSearch?.review} onChange={(e) => handleChangeInputSearch(e, "review")}>
                {reviews.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </SelectCustom>

              <FormControlLabelCustom
                control={
                  <Checkbox
                    value="can-talk"
                    checked={formSearch?.statusCanTalk}
                    onChange={() => {
                      const data = { ...formSearch, statusCanTalk: !formSearch?.statusCanTalk };
                      setFormSearch(data);
                      updateForm(data);
                    }}
                  />
                }
                label={t("user-search:label-checkbox-1").toString()}
              />
              <FormControlLabelCustom
                control={
                  <Checkbox
                    checked={formSearch?.statusLookingForFriend}
                    value="looking-for-friend"
                    onChange={() => {
                      const data = { ...formSearch, statusLookingForFriend: !formSearch?.statusLookingForFriend };
                      setFormSearch(data);
                      updateForm(data);
                    }}
                  />
                }
                label={t("user-search:label-checkbox-2").toString()}
              />
              <FormControlLabelCustom
                control={
                  <Checkbox
                    checked={formSearch?.statusNeedConsult}
                    value="needConsult"
                    onChange={() => {
                      const data = { ...formSearch, statusNeedConsult: !formSearch?.statusNeedConsult };
                      setFormSearch(data);
                      updateForm(data);
                    }}
                  />
                }
                label={t("user-search:label-checkbox-3").toString()}
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
              onClick={() => setShowPopupSearchUser(true)}
            >
              {t("user-search:btn-search-SP")}
            </Button>
          ) : (
            <Button className="btn-user-search btn-search" fullWidth onClick={() => fetchData(isSort, [], "")}>
              {t("user-search:btn-search")}
            </Button>
          )}
          <Button className="btn-user-search btn-clear" fullWidth onClick={clearFormSearch}>
            {t("user-search:btn-clear-condition")}
          </Button>
        </Box>

        <Grid className={styles.boxContainer}>
          <Box className={styles.boxResultSearch}>
            <Grid container className={styles.titleResultSearch}>
              <Grid item md={6} xs={12}>
                <Typography className="title-search">
                  {t("user-search:title")}
                  <span className="item-total-result">
                    {isMobile && <br />} 全{resultSearch?.length ?? 0}件
                  </span>
                </Typography>
              </Grid>
              {!isMobile && (
                <Grid item xs={6} className="sort-by-block">
                  <Typography className="sort-by-label">{t("user-search:sort-by")}</Typography>
                  <Divider orientation="vertical" flexItem />
                  <Box
                    onClick={() => isSort !== "recommended" && handleSort("recommended")}
                    className={isSort === "recommended" ? "sort-link" : "sort-link active"}
                  >
                    {t("user-search:recommend-order")}
                  </Box>
                  <Box
                    onClick={() => isSort !== "login_at" && handleSort("login_at")}
                    className={isSort === "login_at" ? "sort-link" : "sort-link active"}
                  >
                    {t("user-search:last-login-order")}
                  </Box>
                  <Divider orientation="vertical" flexItem />
                </Grid>
              )}

              {isMobile && (
                <Grid item xs={12} className="sort-by-block-sp">
                  <Link
                    onClick={() => isSort !== "recommended" && handleSort("recommended")}
                    className={isSort === "recommended" ? "sort-link" : "sort-link active"}
                  >
                    {t("user-search:recommend-order")}
                  </Link>
                  <Link
                    onClick={() => isSort !== "login_at" && handleSort("login_at")}
                    className={isSort === "login_at" ? "sort-link" : "sort-link active"}
                  >
                    {t("user-search:last-login-order")}
                  </Link>
                </Grid>
              )}
            </Grid>
            <Grid
              container
              sx={{ minHeight: "30em" }}
              className={styles.resultSearch}
              spacing={{ md: "27px", xs: "20px" }}
            >
              {resultSearch?.map((item, key) => (
                <Grid item key={key} md={4} xs={12} sm={12}>
                  <BoxItemUserComponent data={item} />
                </Grid>
              ))}
            </Grid>
            {showMore.hasMore ? (
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Button
                  onClick={() => fetchData(isSort, resultSearch, showMore.cursor)}
                  sx={{ color: "rgb(3, 188, 219)" }}
                >
                  {t("common:showMore")}
                </Button>
              </Box>
            ) : null}
          </Box>
        </Grid>
      </Box>
      <PopupSearchUser
        isSort={isSort}
        inputTags={inputTags}
        formSearch={formSearch}
        showPopup={showPopupSearchUser}
        fetchData={fetchData}
        setShowPopup={setShowPopupSearchUser}
        setInputTags={onPopupSetInput}
        setFormSearch={onPopupSetFormSearch}
      />
    </React.Fragment>
  );
};

export default connect(
  (state: any) => ({
    form: state.search_users.form,
    scrollPosition: state.search_users.scrollPosition,
    result: state.search_users.result,
  }),
  (dispatch) => ({
    updateForm: (formData) => dispatch({ type: searchUserActions.UPDATE_FORM, payload: formData }),
    updateResult: (result) => dispatch({ type: searchUserActions.UPDATE_RESULT, payload: result }),
    updateScrollPosition: (position) =>
      dispatch({ type: searchUserActions.UPDATE_SCROLL_POSITION, payload: { scrollPosition: position } }),
  }),
)(SearchUserComponent);
