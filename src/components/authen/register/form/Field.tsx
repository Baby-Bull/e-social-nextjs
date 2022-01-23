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

type Editor = "textbox" | "dropdown" | "checkbox" | "multi-selection";

export interface FieldProps {
  required?: boolean;
  id: string;
  label?: string;
  placeholder?: string;
  editor?: Editor;
  /* The drop down items for the field */
  options?: string[];
  value?: any;
}

const InputCustom = styled(InputBase)({
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "white",
    border: `1px solid ${theme.blue}`,
    fontSize: 16,
    padding: "10px 12px",
    borderRadius: 12,
    fontFamily: "Noto Sans",
    "@media (max-width: 425px)": {
      width: 294,
      height: 38,
    },
    "@media (min-width: 769px)": {
      width: 360,
      height: 28,
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
    fontFamily: "Noto Sans",
    "@media (max-width: 425px)": {
      height: 40,
    },
    "@media (min-width: 769px)": {
      height: 28,
    },
    "&:focus": {
      boxShadow: `${theme.blue} 0 0 0 0.1rem`,
      borderColor: theme.blue,
    },
  },
});

const ListItem = styled("li")({
  margin: theme.spacing(0.5),
});

export const Field: React.SFC<FieldProps> = ({ required, id, label, placeholder, editor, options, value }) => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "デザイナー" },
    { key: 1, label: "エンジニア" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
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
          <InputCustom placeholder={placeholder} defaultValue={value} id={id} />
        </FormControl>
      )}

      {editor!.toLowerCase() === "dropdown" && (
        <FormControl fullWidth>
          <Typography
            sx={{
              mt: 2,
              mx: 1,
              textAlign: "left",
            }}
          >
            {label}
          </Typography>

          <SelectCustom
            autoWidth={false}
            value={value}
            // onChange={handleChange}
            displayEmpty
            defaultValue=""
          >
            {options &&
              options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
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
                  <ListItem key={data.key}>
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
          <InputCustom placeholder={placeholder} defaultValue={value} id={id} />

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
            {chipData.map((data) => {
              let icon;

              return (
                <ListItem key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    onDelete={handleDelete(data)}
                    deleteIcon={<Avatar sx={{ width: "16px", height: "16px" }} src="/assets/images/svg/delete.svg" />}
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
        </FormControl>
      )}

      {editor!.toLowerCase() === "checkbox" && (
        <FormGroup>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                defaultChecked
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
  );
};
