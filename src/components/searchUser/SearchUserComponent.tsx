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
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

import styles from "src/components/searchUser/search_user.module.scss";
import ContentComponent from "src/components/layouts/ContentComponent";
import theme from "src/theme";
import { jobs, employeeStatus, lastLogins, reviews } from "src/constants/searchUserConstants";
import useViewport from "src/helpers/useViewport";
import { UserSearch } from "src/services/user";

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

const SearchUserComponent = () => {
  const { t } = useTranslation();
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const router = useRouter();
  // const query = useQuery();
  const LIMIT = 6;
  const [isLoading, setIsLoading] = useState(false);
  const [inputTags, setInputTags] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  // const [isRefresh, setIsRefresh] = useState(false);
  const [isSort, setIsSort] = useState("recommended");
  const [showMore, setShowMore] = useState({ cursor: "", hasMore: false });
  const [formSearch, setFormSearch] = useState({
    job: jobs[0]?.value,
    employeeStatus: employeeStatus[0]?.value,
    lastLogin: lastLogins[0]?.value,
    review: reviews[0]?.value,
    statusCanTalk: false,
    statusLookingForFriend: false,
    statusNeedConsult: false,
  });
  const fullText = router.query?.fulltext;

  const fetchData = async (typeSort: string = "", arrayResult: Array<any> = [], cursor: string = "") => {
    setIsLoading(true);
    const res = await UserSearch(formSearch, inputTags, fullText, typeSort, LIMIT, cursor);
    setResultSearch(arrayResult.concat(res?.items));
    setShowMore({ cursor: res?.cursor, hasMore: res?.hasMore });
    setIsLoading(false);
  };

  const handleSort = async (typeSort: string) => {
    fetchData(typeSort, [], "");
    setIsSort(typeSort);
  };

  useEffect(() => {
    fetchData();
  }, [fullText]);

  const removeSearchTag = (indexRemove) => {
    setInputTags(inputTags.filter((_, index) => index !== indexRemove));
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter" && e.target.value) {
      setInputTags([...inputTags, e.target.value]);
      (document.getElementById("input_search_tag") as HTMLInputElement).value = "";
    }
  };

  const handleChangeInputSearch = (e, key) => {
    setFormSearch({
      ...formSearch,
      [key]: e.target.value,
    });
  };

  const clearFormSearch = async () => {
    setFormSearch({
      job: jobs[0]?.value,
      employeeStatus: employeeStatus[0]?.value,
      lastLogin: lastLogins[0]?.value,
      review: reviews[0]?.value,
      statusCanTalk: false,
      statusLookingForFriend: false,
      statusNeedConsult: false,
    });
    setInputTags([]);
    setIsLoading(true);
    const res = await UserSearch(
      {
        job: jobs[0]?.value,
        employeeStatus: employeeStatus[0]?.value,
        lastLogin: lastLogins[0]?.value,
        review: reviews[0]?.value,
        statusCanTalk: false,
        statusLookingForFriend: false,
        statusNeedConsult: false,
      },
      [],
      fullText,
      "",
      LIMIT,
      "",
    );
    setResultSearch(res?.items);
    setShowMore({ cursor: res?.cursor, hasMore: res?.hasMore });
    setIsSort("recommended");
    setIsLoading(false);
    router.push(
      {
        pathname: "/search_user",
      },
      undefined,
      { shallow: false },
    );
  };

  const [showPopupSearchUser, setShowPopupSearchUser] = useState(false);

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
                      setFormSearch({ ...formSearch, statusCanTalk: !formSearch?.statusCanTalk });
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
                      setFormSearch({ ...formSearch, statusLookingForFriend: !formSearch?.statusLookingForFriend });
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
                      setFormSearch({ ...formSearch, statusNeedConsult: !formSearch?.statusNeedConsult });
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
        setInputTags={setInputTags}
        setFormSearch={setFormSearch}
      />
    </ContentComponent>
  );
};

export default SearchUserComponent;
