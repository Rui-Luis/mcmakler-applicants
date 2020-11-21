import React from "react";
import {
  Paper,
  Typography,
  GridListTile,
  Avatar,
  Box,
} from "@material-ui/core";

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Applicant(props) {
  // Getting the right characters for Avatar displaying
  var letterOne = props.firstName.charAt(0);
  var letterTwo = props.lastName.charAt(0);
  var initials = letterOne + letterTwo;

  return (
    <GridListTile>
      <Paper
        className="Applicant"
        elevation={0}
        square={false}
        variant="outlined"
      >
        <Avatar
          style={{
            backgroundColor: generateRandomColor(),
          }}
        >
          {initials}
        </Avatar>
        <Typography>
          <b>
            {props.firstName} {props.lastName}
          </b>
        </Typography>
        <Typography>{props.phone}</Typography>
        <Typography>{props.email}</Typography>
        <Box className="Status-paper" square={false} elevation={0}>
          <Typography>{props.status}</Typography>
        </Box>
        <Box className="Bid-paper" elevation={0}>
          <Typography>Bid {props.bid}€</Typography>
        </Box>
      </Paper>
    </GridListTile>
  );
}

export default Applicant;
