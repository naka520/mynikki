import { Theme } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface HeaderProps {
  theme: Theme;
}

const Header: FunctionComponent<HeaderProps> = ({ theme }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" className="rounded-md">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            中屋敷楓の日記
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
