import React, { useState } from "react";
import ApplicantsList from "./ApplicantsList";
import {
  Typography,
  IconButton,
  Toolbar,
  Paper,
  FormControl,
  InputBase,
  MenuItem,
  Select,
} from "@material-ui/core";


import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InputLabel from "@material-ui/core/InputLabel";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bidTerm, setBidTerm] = useState("");
  const [statusTerm, setStatusTerm] = useState("");

  return (
    <div>
      <div className="Applicants-bar">
        <div className="Title-bar">
          <Toolbar>
            <ArrowBackIcon />
            <Typography className="Applicants-title" variant="h5">
              <b>Applicants List</b>
            </Typography>
          </Toolbar>
        </div>

        <Toolbar className="App-bar">
          <Paper
            component="form"
            elevation={0}
            square={false}
            className="Search-style"
            variant="outlined"
          >
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search for applicant"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.currentTarget.value)}
            />
          </Paper>

          <Paper component="form" elevation={0} square={false}>
            <FormControl>
              <InputLabel margin="dense" shrink="true" className="Input-label">
                Status
              </InputLabel>
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
            </FormControl>
          </Paper>

          <Paper component="form" elevation={0}>
            <FormControl>
              <InputLabel margin="dense" shrink="true" className="Input-label">
                Bid
              </InputLabel>
              <Select
                variant="outlined"
                className="Bid-style"
                value={bidTerm}
                onChange={(event) => setBidTerm(event.target.value)}
                defaultValue=""
                placeholder="Bid"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="less_than_100">Less than 100000</MenuItem>
                <MenuItem value="100_300">100000-300000</MenuItem>
                <MenuItem value="300_500">300000-500000</MenuItem>
                <MenuItem value="more_than_500">More than 500000</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Toolbar>
      </div>

      <div className="Applicants-list">
        <ApplicantsList
          autoWidth="true"
          searchTerm={searchTerm}
          statusTerm={statusTerm}
          bidTerm={bidTerm}
        />
      </div>
    </div>
  );
}

export default Search;
