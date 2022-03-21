import {
  Box,
  Button,
  Checkbox,
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
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import styles from "src/components/searchUser/search_user.module.scss";
import ContentComponent from "src/components/layouts/ContentComponent";
import theme from "src/theme";
import { careers, employeeStatus, lastLogins, reviews } from "src/constants/searchUserConstants";
import useViewport from "src/helpers/useViewport";

import { resultSearchMockData } from "./mockData";
import BoxItemUserComponent from "./BoxItemUserComponent";

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

  const [inputTags, setInputTags] = useState(["デザイナー", "エンジニア"]);
  const [formSearch, setFormSearch] = useState({
    career: careers[0]?.value,
    status: employeeStatus[0]?.value,
    lastLogin: lastLogins[0]?.value,
    review: reviews[0]?.value,
    checkBox1: true,
    checkBox2: false,
    checkBox3: false,
  });
  const [resultSearch] = useState(resultSearchMockData);

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
    setFormSearch({
      ...formSearch,
      [key]: e.target.value,
    });
  };

  return (
    <ContentComponent>
      <Grid className={styles.boxContainer}>
        <Box className={styles.boxSearchLeft}>
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
          <SelectCustom value={formSearch?.career} onChange={(e) => handleChangeInputSearch(e, "career")}>
            {careers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </SelectCustom>

          {/* Status */}
          <SelectCustom value={formSearch?.status} onChange={(e) => handleChangeInputSearch(e, "status")}>
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
                checked={formSearch?.checkBox1}
                onChange={() => setFormSearch({ ...formSearch, checkBox1: !formSearch?.checkBox1 })}
              />
            }
            label={t("user-search:label-checkbox-1").toString()}
          />
          <FormControlLabelCustom
            control={
              <Checkbox
                checked={formSearch?.checkBox2}
                onChange={() => setFormSearch({ ...formSearch, checkBox2: !formSearch?.checkBox2 })}
              />
            }
            label={t("user-search:label-checkbox-2").toString()}
          />
          <FormControlLabelCustom
            control={
              <Checkbox
                checked={formSearch?.checkBox3}
                onChange={() => setFormSearch({ ...formSearch, checkBox3: !formSearch?.checkBox3 })}
              />
            }
            label={t("user-search:label-checkbox-3").toString()}
          />

          <Button className="btn-user-search btn-search" fullWidth>
            {t("user-search:btn-search")}
          </Button>
          <Button className="btn-user-search btn-clear" fullWidth>
            {t("user-search:btn-clear-condition")}
          </Button>
        </Box>
        <Box className={styles.boxResultSearch}>
          <Grid container className={styles.titleResultSearch}>
            <Grid item md={6} xs={12}>
              <Typography className="title-search">
                {t("user-search:title")}
                <span className="item-total-result">{isMobile && <br />} 全1500件</span>
              </Typography>
            </Grid>
            {!isMobile && (
              <Grid item xs={6} className="sort-by-block">
                <Typography className="sort-by-label">{t("user-search:sort-by")}</Typography>
                <Divider orientation="vertical" flexItem />
                <Link className="sort-link">{t("user-search:recommend-order")}</Link>
                <Link className="sort-link active">{t("user-search:last-login-order")}</Link>
                <Divider orientation="vertical" flexItem />
              </Grid>
            )}

            {isMobile && (
              <Grid item xs={12} className="sort-by-block-sp">
                <Link className="sort-link">{t("user-search:recommend-order")}</Link>
                <Link className="sort-link active">{t("user-search:last-login-order")}</Link>
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
        </Box>
      </Grid>
    </ContentComponent>
  );
};

export default SearchUserComponent;