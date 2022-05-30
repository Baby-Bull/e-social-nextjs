import {
  Avatar,
  Grid,
  Box,
  Button,
  Checkbox,
  Typography,
  Select,
  MenuItem,
  FormControlLabel,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { jobs, employeeStatus, lastLogins, reviews } from "src/constants/searchUserConstants";
import styles from "src/components/searchUser/search_user.module.scss";
import { UserSearch } from "src/services/user";
import theme from "src/theme";

interface ISearchUserProps {
  showPopup: boolean;
  triggerClear: boolean;
  // eslint-disable-next-line no-unused-vars
  setShowPopup: (status: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setResultSearch: (resultChild: any) => void;
  // eslint-disable-next-line no-unused-vars
  setShowMore: (showMore: any) => void;
  // eslint-disable-next-line no-unused-vars
  setIsLoading: (loading: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setTriggerClear: (isClear: boolean) => void;
}

/* event change select option */
const DialogSearch = styled(Dialog)({
  "& .MuiPaper-root": {
    maxWidth: "100%",
  },
  "& .MuiDialog-paper": {
    backgroundColor: `${theme.whiteBlue}`,
    borderRadius: "12px",
    width: "44.44%",
    margin: 0,
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "40px",
  },
  "@media (max-width: 1200px)": {
    "& .MuiDialog-paper": {
      width: "93%",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
});

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
  paddingTop: "16px",
  "& .MuiCheckbox-root": {
    padding: "0px 8px 0 9px",
    color: "#989EA8",
  },
  "& .MuiButtonBase-root-MuiCheckbox-root": {
    color: theme.gray,
  },
  "& .Mui-checked": {
    color: "#03BCDB !important",
  },
});

const PopupSearchUser: React.SFC<ISearchUserProps> = ({
  showPopup,
  triggerClear,
  setShowPopup,
  setResultSearch,
  setShowMore,
  setIsLoading,
  setTriggerClear,
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  const LIMIT = 6;
  const [inputTags, setInputTags] = useState([]);
  const showMore = { cursor: "", hasMore: false };
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

  const fetchData = async (typeSort: string = "") => {
    setShowPopup(false);
    setIsLoading(true);
    const res = await UserSearch(formSearch, inputTags, fullText, typeSort, LIMIT, showMore.cursor);
    setResultSearch(res?.items);
    setShowMore({ cursor: res?.cursor, hasMore: res?.hasMore });
    setIsLoading(false);
  };

  const removeSearchTag = (indexRemove: any) => {
    setInputTags(inputTags.filter((_, index) => index !== indexRemove));
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setTriggerClear(false);
      setInputTags([...inputTags, e.target.value]);
      (document.getElementById("input_search_tag") as HTMLInputElement).value = "";
    }
  };

  const handleChangeInputSearch = (e: any, key: any) => {
    setTriggerClear(false);
    setFormSearch({
      ...formSearch,
      [key]: e.target.value,
    });
  };

  useEffect(() => {
    if (triggerClear) {
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
    }
  }, [triggerClear]);

  // @ts-ignore
  return (
    <Box>
      <DialogSearch
        open={showPopup}
        onClose={() => setShowPopup(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            m: { xs: "8px -14px 0 0", lg: "8px -32px 0 0" },
            cursor: "pointer",
          }}
          onClick={() => setShowPopup(false)}
        >
          <Avatar sx={{ float: "right" }} src="/assets/images/icon/ic_close.png" />
        </Box>
        <DialogTitle sx={{ p: "0 0 40px 0" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            詳細検索
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ p: "0" }}>
          <Grid sx={{ p: "0!important" }} className={styles.boxContainer}>
            <Box className={styles.boxSearchLeft}>
              <div className={styles.blockInputTag}>
                <Paper
                  className="paper-search-tag"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: { sm: "100%", md: 240 },
                  }}
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
                      setTriggerClear(false);
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
                      setTriggerClear(false);
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
                      setTriggerClear(false);
                      setFormSearch({ ...formSearch, statusNeedConsult: !formSearch?.statusNeedConsult });
                    }}
                  />
                }
                label={t("user-search:label-checkbox-3").toString()}
              />
              <Button className="btn-user-search btn-search" fullWidth onClick={() => fetchData()}>
                {t("user-search:btn-search")}
              </Button>
            </Box>
          </Grid>
        </DialogContent>
      </DialogSearch>
    </Box>
  );
};
export default PopupSearchUser;
