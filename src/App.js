import {
  AppBar,
  Avatar,
  GridList,
  GridListTile,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function ApplicantsList({ searchTerm, statusTerm, bidTerm }) {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get("/applicants").then(function (response) {
      setApplicants(response.data);
    });
  }, []);

  return applicants
    .filter(
      (applicant) =>
        applicant.first_name === searchTerm ||
        applicant.last_name === searchTerm ||
        applicant.email === searchTerm ||
        "" === searchTerm
    )
    .filter((applicant) => applicant.status === statusTerm || "" === statusTerm)
    .filter(
      (applicant) =>
        ("" === bidTerm && applicant.bid > 0) ||
        ("less_than_100" === bidTerm && applicant.bid < 100000) ||
        ("100_300" === bidTerm &&
          applicant.bid > 100000 &&
          applicant.bid < 300000) ||
        ("300_500" === bidTerm &&
          applicant.bid > 300000 &&
          applicant.bid < 500000) ||
        ("more_than_500" === bidTerm && applicant.bid > 500000)
    )
    .map((applicant) => {
      return (
        <Applicant
          firstName={applicant.first_name}
          lastName={applicant.last_name}
          phone={applicant.phone}
          email={applicant.email}
          status={applicant.status}
          bid={applicant.bid}
        />
      );
    });
}

function Applicant(props) {
  // Getting the right characters for Avatar displaying
  var letterOne = props.firstName.charAt(0);
  var letterTwo = props.lastName.charAt(0);
  var initials = letterOne + letterTwo;

  return (
    <GridListTile>
    <Paper className="Applicant" elevation={0} square={false} variant="outlined">
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
      <Paper className="status"  square={false} elevation={0}>
        <Typography>{props.status}</Typography>
      </Paper>
      <Paper className="bid"  square={false} elevation={0}>
        <Typography>Bid {props.bid}€</Typography>
      </Paper>
    </Paper>
    </GridListTile>
  );
}

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bidTerm, setBidTerm] = useState("");
  const [statusTerm, setStatusTerm] = useState("");

  const { search, pathname } = useLocation();
  const { replace } = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    replace(`${pathname}/${search}`);
  };

  return (
    <div>
    <div className="Applicants-bar">
      <Toolbar className="App-bar">
        <Paper component="form" elevation={0} square={false} className="Search-style" variant="outlined">
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search for applicant"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            onSubmit={handleSubmit}
          />
        </Paper>

          <Paper component="form" elevation={0}  square={false}>
            <Select
            variant="outlined"
            className="Status-style"
              value={statusTerm}
              onChange={(event) => setStatusTerm(event.target.value)}
              defaultValue=""
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Appointment Set">Appointment Set</MenuItem>
              <MenuItem value="Property Viewed">Property Viewed</MenuItem>
              <MenuItem value="Interested">Interested</MenuItem>
              <MenuItem value="Offer Accepted">Offer Accepted</MenuItem>
            </Select>
          </Paper>

          <Paper component="form" elevation={0}>
            <Select
            variant="outlined"
            className="Bid-style"
              value={bidTerm}
              onChange={(event) => setBidTerm(event.target.value)}
              defaultValue=""
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="less_than_100">Less than 100000</MenuItem>
              <MenuItem value="100_300">100000-300000</MenuItem>
              <MenuItem value="300_500">300000-500000</MenuItem>
              <MenuItem value="more_than_500">More than 500000</MenuItem>
            </Select>
          </Paper>
      </Toolbar>
      </div>
      <Typography className="Applicants-title" variant="h6"><b>Applicants List</b></Typography>
      <div className="Applicants-list">
        <GridList className="Grid-list">
        <ApplicantsList
          autoWidth="true"
          searchTerm={searchTerm}
          statusTerm={statusTerm}
          bidTerm={bidTerm}
        />
        </GridList>
    </div>
    </div>
  );
}

function TopBar() {
  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Toolbar className="Top-bar">
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="Title">McMakler</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <TopBar />

        <Route path="/">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
