import * as React from "react";
import {
  InputLabel,
  InputBase,
  FormControl,
  Select, MenuItem,
  FormGroup, Checkbox, FormControlLabel,
  Box, Typography,
  Chip, Paper, Avatar
} from "@mui/material";
import { styled } from '@mui/material/styles'

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

const InputCustom = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #03BCDB',
    fontSize: 16,
    padding: '10px 12px',
    borderRadius: 12,
    fontFamily: 'Noto Sans',
    '@media (max-width: 425px)': {
      width: 294,
      height: 38
    },
    '@media (min-width: 769px)': {
      width: 360,
      height: 28
    },
    '&:focus': {
      boxShadow: `#03BCDB 0 0 0 0.1rem`,
      borderColor: '#03BCDB',
    },
  },
}));

const SelectCustom = styled(Select)(() => ({
  borderRadius: 12,
  borderColor: '#03BCDB',
  '&:hover': {
    borderRadius: 12,
    borderColor: '#03BCDB'
  },
  '& .MuiSelect-select': {
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #03BCDB',
    fontSize: 16,
    padding: '10px 12px',
    borderRadius: 12,
    fontFamily: 'Noto Sans',
    '@media (max-width: 425px)': {
      height: 38
    },
    '@media (min-width: 769px)': {
      height: 28,
    },
    '&:focus': {
      boxShadow: `#03BCDB 0 0 0 0.1rem`,
      borderColor: '#03BCDB',
    },
  },
}));

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const Field: React.SFC<FieldProps> = ({
  required,
  id,
  label,
  placeholder,
  editor,
  options,
  value
}) => {

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'デザイナー' },
    { key: 1, label: 'エンジニア' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const [listChipData] = React.useState([
    { key: 0, label: 'React' },
    { key: 1, label: 'Ruby on Rails' },
    { key: 2, label: 'Python' },
    { key: 3, label: '要件定義' },
    { key: 4, label: '駆け出しエンジニアと繋がりたい' },
    { key: 5, label: '技術相談をしたい' },
    { key: 6, label: 'サーバーサイドエンジニア' },
    { key: 7, label: 'レビュー' }
  ]);

  return (
    <Box
      className="form-group"
      sx={{
        display: "flex",
        justifyContent: "center",
        "&": {
          '@media (max-width: 425px)': {
            maxWidth: 320
          },
          '@media (min-width: 768px)': {
            maxWidth: 220
          },
        }
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
              color: '#000'
            }}
          >
            <Box display="flex">
              {label}
              <Chip
                label="必須"
                sx={{
                  display: required ? '' : "none",
                  ml: 1,
                  width: "54px",
                  height: "22px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  backgroundColor: "#FF9458"
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
              textAlign: "left"
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
              options.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))
            }
          </SelectCustom>
        </FormControl>
      )}

      {editor!.toLowerCase() === "multi-selection" && (
        <FormControl 
          variant="standard"
          sx={{ 
            pt: "20px", 
            mt: ["25px", "20px"] 
          }} 
        >
          <Box
            sx={{
              pl: "18px",
              pt: "2px",
              color: "#03BCDB",
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
                display: 'flex',
                flexWrap: 'wrap',
                listStyle: 'none',
                boxShadow: 'none'
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
                        color: "#989EA8",
                        borderRadius: "4px"
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
              color: '#000'
            }}
          >
            <Box display="flex">
              {label}
              <Chip
                label="必須"
                sx={{
                  display: required ? '' : "none",
                  ml: 1,
                  width: "54px",
                  height: "20px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  backgroundColor: "#FF9458"
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
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              boxShadow: 'none'
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
                    deleteIcon={<Avatar
                      sx={{ width: "16px", height: "16px" }}
                      src="/image/delete.svg"
                    />}
                    sx={{
                      pr: 1,
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#fff",
                      height: "22px",
                      backgroundColor: "#03BCDB",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center"
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
                  color: "#03BCDB",
                  "&.Mui-checked": { color: "#03BCDB" }
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