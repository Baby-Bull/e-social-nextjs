// TO-DO : move to common folder *( atom component)  -- duplicate component.
import * as React from "react";
import {
  InputLabel,
  InputBase,
  FormControl,
  Select,
  MenuItem,
  FormGroup,
  Checkbox,
  Link,
  Box,
  Typography,
  Chip,
  Paper,
  Avatar,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DatePicker";
import { styled } from "@mui/material/styles";
import { ja } from "date-fns/locale";
import dayjs from "dayjs";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import { IFieldProps, IPlaceholderProps } from "src/constants/interfaces/common/Form";
import { listChipsData } from "src/constants";

import styles from "../common.module.scss";

const Placeholder: React.SFC<IPlaceholderProps> = ({ children }) => (
  <div style={{ fontSize: "14px", color: "#989EA8" }}>{children}</div>
);

const InputCustom = styled(InputBase)({
  "& ::placeholder": {
    color: "black!important",
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "white",
    border: `1px solid ${theme.blue}`,
    fontSize: "14px",
    height: "fit-content!important",
    padding: "10px 12px",
    borderRadius: "12px",
    fontFamily: "Noto Sans JP",
    "@media (max-width: 425px)": {
      width: 294,
      height: 38,
    },
    "@media (min-width: 769px)": {
      width: 360,
      height: 18,
    },
    "&:focus": {
      boxShadow: `${theme.blue} 0 0 0 0.1rem`,
      borderColor: theme.blue,
      borderRadius: "12px",
    },
  },
});

const SelectCustom = styled(Select)({
  marginTop: "0!important",
  borderRadius: "12px",
  borderColor: theme.blue,
  textAlign: "left",
  fontSize: "14px",
  fontWeight: "400",
  "&:hover": {
    borderRadius: 12,
    borderColor: theme.blue,
  },
  "& .MuiSelect-select": {
    position: "relative",
    backgroundColor: "white",
    border: `1px solid ${theme.blue}`,
    fontSize: 14,
    padding: "10px 12px",
    borderRadius: 12,
    fontFamily: "Noto Sans JP",
    "@media (max-width: 425px)": {
      height: "fit-content",
    },
    "@media (min-width: 769px)": {
      height: 18,
    },
    "&:focus": {
      boxShadow: `${theme.blue} 0 0 0 0.1rem`,
      borderColor: theme.blue,
      borderRadius: "12px",
    },
  },
});

const ListItem = styled("li")({
  margin: "2px 2px",
  cursor: "pointer",
});

// eslint-disable-next-line import/prefer-default-export
const Field: React.SFC<IFieldProps> = ({
  required,
  id,
  label,
  placeholder,
  editor,
  options,
  value,
  error,
  onChangeValue,
  onChangeCheckbox,
}) => {
  const { t } = useTranslation();

  const [errorElement, setErrorElement] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [valueDropdown, setValueDropdown] = React.useState<any>();
  const [listChipData] = React.useState(listChipsData);

  const onValidateDate = (tempValue: any) => {
    if (
      JSON.stringify(tempValue) === "null" ||
      new Date().getFullYear() < tempValue?.getFullYear() ||
      tempValue?.getFullYear() < 1900
    ) {
      onChangeValue("birthday", {
        dob_value: "",
        error_invalid: true,
      });
    } else {
      onChangeValue("birthday", {
        dob_value: dayjs(tempValue).format("YYYY-MM-DD"),
        error_invalid: false,
      });
    }
  };

  const onKeyPressInputTag = (e: any) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      if (onChangeValue && !value.includes(e.target.value.trim())) {
        if (e.target.value.length > 20) {
          setErrorElement(t("validate:message_form_register.tags.max_length"));
        } else {
          setErrorElement(null);
          onChangeValue("tags", [...value, e.target.value]);
          (document.getElementById("input_tag") as HTMLInputElement).value = "";
        }
      }
    }
  };

  const handleDeleteTagItem = (tag: string) => () => {
    const tags = value.filter((item: string) => item !== tag);
    if (onChangeValue) {
      onChangeValue("tags", tags);
    }
  };

  const onClickTagChip = (tag: string) => {
    if (onChangeValue && !value.includes(tag)) {
      onChangeValue("tags", [...value, tag]);
    }
  };

  const checkTagSelected = (tag: string) => {
    if (onChangeValue && !value?.includes(tag)) {
      return false;
    }
    return true;
  };

  return (
    <React.Fragment>
      <Box
        className={styles["field-container"]}
        sx={{
          "&": {
            "@media (max-width: 425px)": {
              maxWidth: 320,
            },
            "@media (min-width: 768px)": {
              maxWidth: 220,
            },
            "@media (min-width: 1024px)": {
              maxWidth: 320,
            },
          },
        }}
      >
        {editor!.toLowerCase() === "textbox" && (
          <FormControl className={styles["field-wrapper"]} variant="standard">
            <InputLabel className={styles["field-input--label"]} shrink htmlFor={id}>
              <Box className={styles["field-input--label--wrapper"]}>
                {label}
                <Chip
                  className={styles["field-input--label--chip"]}
                  label={t("common:required")}
                  sx={{ display: required ? "" : "none", backgroundColor: theme.green }}
                />
              </Box>
            </InputLabel>
            <InputCustom
              placeholder={placeholder}
              defaultValue={value}
              id={id}
              onChange={(e) => onChangeValue(id, e.target.value)}
            />
          </FormControl>
        )}

        {editor!.toLowerCase() === "password" && (
          <FormControl className={styles["field-wrapper"]} variant="standard">
            <InputLabel shrink htmlFor={id} className={styles["field-input--label"]}>
              <Box className={styles["field-input--label--wrapper"]}>
                {label}
                <Chip
                  className={styles["field-input--label--chip"]}
                  label={t("common:required")}
                  sx={{ display: required ? "" : "none", backgroundColor: theme.green }}
                />
              </Box>
            </InputLabel>
            <InputCustom
              type="password"
              placeholder={placeholder}
              defaultValue={value}
              id={id}
              onChange={(e) => onChangeValue(id, e.target.value)}
            />
          </FormControl>
        )}

        {editor!.toLowerCase() === "dropdown" && (
          <FormControl className={styles["field-wrapper"]} variant="standard">
            <InputLabel shrink htmlFor={id} className={styles["field-input--label"]}>
              <Box className={styles["field-input--label--wrapper"]}>
                {label}
                <Chip
                  className={styles["field-input--label--chip"]}
                  label={t("common:required")}
                  sx={{ display: required ? "" : "none", backgroundColor: theme.green }}
                />
              </Box>
            </InputLabel>
            <SelectCustom
              disableUnderline
              autoWidth={false}
              value={value}
              onChange={(e) => {
                onChangeValue(id, e.target.value);
                setValueDropdown(e.target.value);
              }}
              displayEmpty
              renderValue={
                valueDropdown ? undefined : () => <Placeholder>{t("common:form.placeholder-select")}</Placeholder>
              }
              // defaultValue={options[0]?.value}
            >
              {options &&
                options.map((option, index) => (
                  <MenuItem key={index} value={option?.value}>
                    {option?.label}
                  </MenuItem>
                ))}
            </SelectCustom>
          </FormControl>
        )}

        {editor!.toLowerCase() === "multi-selection" && (
          <FormControl variant="standard" className={styles["field-wrapper"]}>
            <Paper className={styles["field-multiSelection--title"]} component="ul">
              <Box className={styles["field-multiSelection--1st"]} sx={{ color: theme.blue }}>
                {t("common:form.regular-option")}
              </Box>
              {listChipData.map((data) => {
                let icon;
                return (
                  <ListItem
                    key={data.key}
                    onClick={() => {
                      onClickTagChip(data.label);
                    }}
                  >
                    <Chip
                      className={styles["field-multiSelection--item"]}
                      variant={checkTagSelected(data.label) ? "filled" : "outlined"}
                      size="small"
                      icon={icon}
                      label={data.label}
                      sx={{ color: theme.gray }}
                    />
                  </ListItem>
                );
              })}
            </Paper>

            <InputLabel shrink htmlFor={id} className={styles["field-input--label"]}>
              <Box className={styles["field-input--label--wrapper"]}>
                {label}
                <Chip
                  className={styles["field-input--label--chip"]}
                  label={t("common:required")}
                  sx={{ display: required ? "" : "none", backgroundColor: theme.green }}
                />
              </Box>
            </InputLabel>
            <InputCustom placeholder={placeholder} id="input_tag" onKeyPress={onKeyPressInputTag} />

            {errorElement && (
              <Typography
                className={styles["field-errorMessage--section"]}
                sx={{
                  textAlign: editor === "checkbox" ? "center" : "left",
                  "&": {
                    "@media (max-width: 425px)": {
                      maxWidth: 320,
                    },
                    "@media (min-width: 768px)": {
                      maxWidth: 220,
                    },
                    "@media (min-width: 1024px)": {
                      maxWidth: 320,
                    },
                  },
                }}
              >
                {errorElement}
              </Typography>
            )}
            {value?.length > 0 && (
              <Box className={styles["field-listTags"]} component="ul">
                {value?.map((item) => {
                  let icon;
                  return (
                    <ListItem key={item}>
                      <Chip
                        className={styles["field-listTags--item"]}
                        icon={icon}
                        label={item}
                        onDelete={handleDeleteTagItem(item)}
                        deleteIcon={
                          <Avatar className={styles["field-listTags--item--img"]} src="/assets/images/svg/delete.svg" />
                        }
                        sx={{ backgroundColor: theme.blue }}
                      />
                    </ListItem>
                  );
                })}
              </Box>
            )}
          </FormControl>
        )}

        {editor!.toLowerCase() === "date-picker" && (
          <FormControl className={styles["field-wrapper"]} variant="standard">
            <InputLabel shrink htmlFor={id} className={styles["field-input--label"]}>
              <Box className={styles["field-input--label--wrapper"]}>
                {label}
                <Chip
                  className={styles["field-input--label--chip"]}
                  label={t("common:required")}
                  sx={{ display: required ? "" : "none", backgroundColor: theme.green }}
                />
              </Box>
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
              <DesktopDatePicker
                maxDate={new Date()}
                value={date}
                inputFormat="yyyy/MM/dd"
                mask="____/__/__"
                onChange={(newValue) => {
                  onValidateDate(newValue);
                  setDate(newValue);
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box
                    className={styles["field-datetime--wrapper"]}
                    sx={{
                      border: `1px solid ${theme.blue}`,
                      "& ::placeholder": {
                        color: "#989EA8",
                      },
                    }}
                  >
                    <input
                      className={styles["field-datetime--input"]}
                      placeholder={t("common:form.datetime-click")}
                      ref={inputRef}
                      {...inputProps}
                    />
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </LocalizationProvider>
          </FormControl>
        )}

        {editor!.toLowerCase() === "checkbox" && (
          <FormGroup className={styles["form-checkbox"]}>
            <Checkbox
              className={styles["form-checkbox--item"]}
              onChange={onChangeCheckbox}
              size="small"
              sx={{ "&.Mui-checked": { color: theme.blue } }}
            />
            <p className={styles["form-checkbox--title"]}>
              <Link
                href="https://ruddy-muenster-a17.notion.site/f7dee0adb1d54cf59f025cd8cbc73c89"
                target="_blank"
                color="secondary"
              >
                <Box color={theme.blue}>{t("common:form.policy")}</Box>
              </Link>
              {label}
            </p>
          </FormGroup>
        )}
      </Box>
      {error && (
        <Typography
          className={styles["field-errorMessage--section"]}
          sx={{
            textAlign: editor === "checkbox" ? "center" : "left",
            "&": {
              "@media (max-width: 425px)": {
                maxWidth: 320,
              },
              "@media (min-width: 768px)": {
                maxWidth: 220,
              },
              "@media (min-width: 1024px)": {
                maxWidth: 320,
              },
            },
          }}
        >
          {error}
        </Typography>
      )}
    </React.Fragment>
  );
};
export default Field;
