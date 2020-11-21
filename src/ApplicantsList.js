import React, { useEffect, useState } from "react";
import Applicant from "./Applicant";
import axios from "axios";

function ApplicantsList({ searchTerm, statusTerm, bidTerm }) {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/rui-luis/mcmakler-applicants/applicants"
      )
      .then(function (response) {
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
        ("none" === bidTerm && applicant.bid === null) ||
        ("less_than_100" === bidTerm && applicant.bid < 100000) ||
        ("100_300" === bidTerm &&
          applicant.bid >= 100000 &&
          applicant.bid < 300000) ||
        ("300_500" === bidTerm &&
          applicant.bid >= 300000 &&
          applicant.bid < 500000) ||
        ("more_than_500" === bidTerm && applicant.bid >= 500000)
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

export default ApplicantsList;
