import { Typography, AppBar, IconButton, Toolbar } from "@material-ui/core";
import ToolbarGroup from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import contact from "./contact.svg";

function TopBar() {
  return (
    <div>
      <AppBar position="static" elevation={0} flexGrow={1}>
        <Toolbar className="Top-bar">
        <ToolbarGroup>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="Title">
            McMakler
          </Typography>
          </ToolbarGroup>
          <IconButton edge="end">
          <img alt="contact" src={contact} />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
