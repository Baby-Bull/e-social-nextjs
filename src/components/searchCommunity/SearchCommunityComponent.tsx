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
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";

import styles from "src/components/searchCommunity/search_community.module.scss";
import ContentComponent from "src/components/layouts/ContentComponent";
import theme from "src/theme";
import useViewport from "src/helpers/useViewport";
import { numberOfLogins, numberOfParticipants } from "src/constants/searchCommunityConstants";

import { resultSearchMockData } from "./mockData";
import BoxItemUserComponent from "./BoxItemCommunityComponent";

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

  const [inputTags, setInputTags] = useState(["デザイナー", "エンジニア"]);
  const [formSearch, setFormSearch] = useState({
    numberOfLogin: numberOfLogins[0]?.value,
    numberOfParticipant: numberOfParticipants[0]?.value,
    checkBox1: true,
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
      <Box
        sx={{
          mt: { xs: "80px", lg: "0" },
        }}
      >
        <Grid className={styles.boxContainer}>
          <Box className={styles.boxSearchLeft}>
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
                        <img src="/assets/images/svg/delete-x-white.svg" alt="ic_delete" width="8px" height="8px" />
                      </IconButton>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* numberOfLogin */}
            <SelectCustom
              value={formSearch?.numberOfLogin}
              onChange={(e) => handleChangeInputSearch(e, "numberOfLogin")}
            >
              {numberOfLogins.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </SelectCustom>

            {/* numberOfParticipant */}
            <SelectCustom
              value={formSearch?.numberOfParticipant}
              onChange={(e) => handleChangeInputSearch(e, "numberOfParticipant")}
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
                  checked={formSearch?.checkBox1}
                  onChange={() => setFormSearch({ ...formSearch, checkBox1: !formSearch?.checkBox1 })}
                />
              }
              label={t("community-search:label-checkbox-1").toString()}
            />

            <Button className="btn-user-search btn-search" fullWidth>
              {t("community-search:btn-search")}
            </Button>
            <Button className="btn-user-search btn-clear" fullWidth>
              {t("community-search:btn-clear-condition")}
            </Button>

            <div className="box-btn-create-community">
              <Typography className="span-direction">
                {t("community-search:span-create-community-direction")}
              </Typography>
              <Button
                className="btn-user-search btn-create-community"
                fullWidth
                onClick={() => router.push("/community/setting")}
              >
                {t("community-search:btn-create-community")}
              </Button>
            </div>
          </Box>
          <Box className={styles.boxResultSearch}>
            <Grid container className={styles.titleResultSearch}>
              <Grid item md={6} xs={12}>
                <Typography className="title-search">
                  {t("community-search:title")}
                  <span className="item-total-result">{isMobile && <br />} 全200件</span>
                </Typography>
              </Grid>
              {!isMobile && (
                <Grid item xs={6} className="sort-by-block">
                  <Typography className="sort-by-label">{t("community-search:sort-by")}</Typography>
                  <Divider orientation="vertical" flexItem />
                  <Link className="sort-link">{t("community-search:recommend-order")}</Link>
                  <Link className="sort-link active">{t("community-search:latest-order")}</Link>
                  <Divider orientation="vertical" flexItem />
                </Grid>
              )}

              {isMobile && (
                <Grid item xs={12} className="sort-by-block-sp">
                  <Link className="sort-link">{t("community-search:recommend-order")}</Link>
                  <Link className="sort-link active">{t("community-search:latest-order")}</Link>
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
      </Box>
    </ContentComponent>
  );
};

export default SearchCommunityComponent;
