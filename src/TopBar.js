import { Typography, AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function TopBar() {
  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Toolbar className="Top-bar">
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="Title">
            McMakler
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
