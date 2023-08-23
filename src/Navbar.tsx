import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";

interface LoginFlagTS {
  loginFlag: boolean;
  setLoginFlag: (arg: boolean) => void;
}

export default function ButtonAppBar(setLoginFlagTS: LoginFlagTS) {
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.clear();
    setLoginFlagTS.setLoginFlag(false);
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GrowMeOrganic
            </Typography>
            {setLoginFlagTS.loginFlag && (
              <>
                <Button color="inherit" onClick={handleLogOut}>
                  Logout
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
