//Author:: Mahbub

import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import SubNavbar from "../../../components/sub_navbar/SubNavbar";
import Table from "../../../components/standings_table/Table";
import Footer from "../../../components/footer/Footer";


function Standings_Crogramming_Contest() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <SubNavbar />
      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: Array Round 1 (Rated for Div. 3)
      </h4>
      <Table />
      <Footer />
    </div>
  );
}

export default Standings_Crogramming_Contest;