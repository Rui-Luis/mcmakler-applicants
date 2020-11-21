import React, { useState } from "react";
import ApplicantsList from "./ApplicantsList";
import {
  Typography,
  IconButton,
  Toolbar,
  Paper,
  FormControl,
  GridList,
  InputBase,
  MenuItem,
  Select,
} from "@material-ui/core";

import { useHistory, useLocation } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import InputLabel from "@material-ui/core/InputLabel";

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
        <Typography className="Applicants-title" variant="h5">
          <b>Applicants List</b>
        </Typography>
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
              onSubmit={handleSubmit}
            />
          </Paper>

          <FormControl>
            <Paper component="form" elevation={0} square={false}>
              <InputLabel>Status</InputLabel>
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
          </FormControl>

          <Paper component="form" elevation={0}>
            <Select
              variant="outlined"
              className="Bid-style"
              value={bidTerm}
              onChange={(event) => setBidTerm(event.target.value)}
              defaultValue=""
              placeholder="Bid"
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

      <div className="Applicants-list">
        <GridList className="Grid-list">
          <Typography className="Status-title">
            <b>Appointment set</b>
          </Typography>
          <ApplicantsList
            autoWidth="true"
            searchTerm={searchTerm}
            statusTerm="Appointment Set"
            bidTerm={bidTerm}
          />
          <Typography>
            <b>Property Viewed</b>
          </Typography>
          <ApplicantsList
            autoWidth="true"
            searchTerm={searchTerm}
            statusTerm="Property Viewed"
            bidTerm={bidTerm}
          />
          <Typography>
            <b>Interested</b>
          </Typography>
          <ApplicantsList
            autoWidth="true"
            searchTerm={searchTerm}
            statusTerm="Interested"
            bidTerm={bidTerm}
          />
          <Typography>
            <b>Offer Accepted</b>
          </Typography>
          <ApplicantsList
            autoWidth="true"
            searchTerm={searchTerm}
            statusTerm="Offer Accepted"
            bidTerm={bidTerm}
          />
        </GridList>
      </div>
    </div>
  );
}

export default Search;
