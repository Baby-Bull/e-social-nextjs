import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

import theme from "src/theme";

const InputCustom = styled(InputBase)({
  "&.MuiInputBase-root": {
    color: `${theme.gray}`,
  },
  "& .MuiInputBase-input": {
    padding: 0,
  },
});

export default InputCustom;
