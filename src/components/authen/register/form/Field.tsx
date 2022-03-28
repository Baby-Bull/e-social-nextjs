import * as React from "react";
import {
  InputLabel,
  InputBase,
  FormControl,
  Select,
  MenuItem,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Chip,
  Paper,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import theme from "src/theme";
import { VALIDATE_MESSAGE_FORM_REGISTER } from "src/messages/validate";

type Editor = "textbox" | "dropdown" | "checkbox" | "multi-selection";

export interface IOptionProps {
  label: string;
  value: string;
}
export interface IFieldProps {
  required?: boolean;
  id: string;
  label?: string;
  placeholder?: string;
  editor?: Editor;
  /* The drop down items for the field */
  options?: IOptionProps[];
  value?: any;
  // eslint-disable-next-line no-unused-vars
  onChangeValue?: (key: string, value: any) => void;
  onChangeCheckbox?: () => void;
  error?: string;
}

const InputCustom = styled(InputBase)({
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "white",
    border: `1px solid ${theme.blue}`,
    fontSize: 16,
    padding: "10px 12px",
    borderRadius: 12,
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
    },
  },
});

const SelectCustom = styled(Select)({
  borderRadius: 12,
  borderColor: theme.blue,
  textAlign: "left",
  "&:hover": {
    borderRadius: 12,
    borderColor: theme.blue,
  },
  "& .MuiSelect-select": {
    position: "relative",
    backgroundColor: "white",
    border: `1px solid ${theme.blue}`,
    fontSize: 16,
    padding: "10px 12px",
    borderRadius: 12,
    fontFamily: "Noto Sans JP",
    "@media (max-width: 425px)": {
      height: 40,
    },
    "@media (min-width: 769px)": {
      height: 18,
    },
    "&:focus": {
      boxShadow: `${theme.blue} 0 0 0 0.1rem`,
      borderColor: theme.blue,
    },
  },
});

const ListItem = styled("li")({
  margin: theme.spacing(0.5),
  cursor: "pointer",
});

export const Field: React.SFC<IFieldProps> = ({
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
  const handleDeleteTagItem = (tag: string) => () => {
    const tags = value.filter((item: string) => item !== tag);
    if (onChangeValue) {
      onChangeValue("tags", tags);
    }
  };
  const [errorElement, setErrorElement] = React.useState(null);

  const onKeyPressInputTag = (e: any) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      if (onChangeValue && !value.includes(e.target.value.trim())) {
        if (e.target.value.length > 20) {
          setErrorElement(VALIDATE_MESSAGE_FORM_REGISTER.tags.max_length);
        } else {
          setErrorElement(null);
          onChangeValue("tags", [...value, e.target.value]);
          (document.getElementById("input_tag") as HTMLInputElement).value = "";
        }
      }
    }
  };

  const onClickTagChip = (tag: string) => {
    if (onChangeValue && !value.includes(tag)) {
      onChangeValue("tags", [...value, tag]);
    }
  };

  const [listChipData] = React.useState([
    { key: 0, label: "React" },
    { key: 1, label: "Ruby on Rails" },
    { key: 2, label: "Python" },
    { key: 3, label: "要件定義" },
    { key: 4, label: "駆け出しエンジニアと繋がりたい" },
    { key: 5, label: "技術相談をしたい" },
    { key: 6, label: "サーバーサイドエンジニア" },
    { key: 7, label: "レビュー" },
  ]);

  return (
    <React.Fragment>
      <Box
        className="form-group"
        sx={{
          display: "flex",
          justifyContent: "center",
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
          <FormControl sx={{ pt: "20px", mt: ["25px", "20px"] }} variant="standard">
            <InputLabel
              shrink
              htmlFor={id}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "black",
              }}
            >
              <Box display="flex">
                {label}
                <Chip
                  label="必須"
                  sx={{
                    display: required ? "" : "none",
                    ml: 1,
                    width: "54px",
                    height: "22px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "white",
                    backgroundColor: theme.orange,
                  }}
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

        {editor!.toLowerCase() === "dropdown" && (
          <FormControl fullWidth>
            <Typography
              sx={{
                mt: 2,
                mb: "5px",
                textAlign: "left",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              {label}
            </Typography>

            <SelectCustom
              autoWidth={false}
              value={value}
              onChange={(e) => onChangeValue(id, e.target.value)}
              displayEmpty
              defaultValue={options[0]?.value}
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
          <FormControl
            variant="standard"
            sx={{
              pt: "20px",
              mt: ["25px", "20px"],
            }}
          >
            <Box
              sx={{
                pl: "18px",
                pt: "2px",
                color: theme.blue,
                fontSize: 12,
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              よく使用されているタグ
              <Paper
                sx={{
                  pl: 0,
                  mt: 1,
                  mb: 4,
                  maxWidth: "360px",
                  display: "flex",
                  flexWrap: "wrap",
                  listStyle: "none",
                  boxShadow: "none",
                }}
                component="ul"
              >
                {listChipData.map((data) => {
                  let icon;

                  return (
                    <ListItem key={data.key} onClick={() => onClickTagChip(data.label)}>
                      <Chip
                        variant="outlined"
                        size="small"
                        icon={icon}
                        label={data.label}
                        sx={{
                          fontSize: 12,
                          fontWeight: 400,
                          color: theme.gray,
                          borderRadius: "4px",
                        }}
                      />
                    </ListItem>
                  );
                })}
              </Paper>
            </Box>

            <InputLabel
              shrink
              htmlFor={id}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "black",
              }}
            >
              <Box display="flex">
                {label}
                <Chip
                  label="必須"
                  sx={{
                    display: required ? "" : "none",
                    ml: 1,
                    width: "54px",
                    height: "20px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "white",
                    backgroundColor: theme.orange,
                  }}
                />
              </Box>
            </InputLabel>
            <InputCustom placeholder={placeholder} id="input_tag" onKeyPress={onKeyPressInputTag} />
            {errorElement && (
              <Typography
                sx={{
                  fontSize: "10px",
                  color: "red",
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
              <Paper
                sx={{
                  pl: 0,
                  mt: 1,
                  mb: 5,
                  display: "flex",
                  flexWrap: "wrap",
                  listStyle: "none",
                  boxShadow: "none",
                }}
                component="ul"
              >
                {value?.map((item) => {
                  let icon;

                  return (
                    <ListItem key={item}>
                      <Chip
                        icon={icon}
                        label={item}
                        onDelete={handleDeleteTagItem(item)}
                        deleteIcon={
                          <Avatar
                            src="/assets/images/svg/delete.svg"
                            sx={{
                              width: "16px",
                              height: "16px",
                              p: "4px",
                              backgroundColor: "white",
                            }}
                          />
                        }
                        sx={{
                          pr: 1,
                          fontSize: 12,
                          fontWeight: 500,
                          color: "white",
                          height: "22px",
                          backgroundColor: theme.blue,
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      />
                    </ListItem>
                  );
                })}
              </Paper>
            )}
          </FormControl>
        )}

        {editor!.toLowerCase() === "checkbox" && (
          <FormGroup>
            <FormControlLabel
              label={label}
              sx={{
                mr: 0,
                fontSize: "12px",
                "& .MuiFormControlLabel-label": {
                  fontSize: 12,
                },
              }}
              control={
                <Checkbox
                  defaultChecked
                  onChange={onChangeCheckbox}
                  size="small"
                  sx={{
                    color: theme.blue,
                    "&.Mui-checked": { color: theme.blue },
                  }}
                />
              }
            />
          </FormGroup>
        )}

        {/* TODO - display validation error */}
      </Box>
      {error && (
        <Typography
          sx={{
            fontSize: "10px",
            color: "red",
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
