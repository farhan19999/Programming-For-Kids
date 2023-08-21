// Arif

import React from "react";

export default function StandingsTable() {
  const rows = [
    { who: "Alice", A: 350, B: 800, C: 1000, D: 1600, E: 750, F: 3000 },
    { who: "Bob", A: 250, B: 600, C: 900, D: 1400, E: 700, F: 2000 },
    { who: "Charlie", A: 400, B: 900, C: 1100, D: 1700, E: 850, F: 2000 },
    { who: "David", A: 300, B: 700, C: 1050, D: 1500, E: 800, F: 2000 },
    { who: "Eve", A: 200, B: 400, C: 700, D: 1100, E: 650, F: 2000 },
    { who: "Frank", A: 450, B: 1000, C: 1200, D: 1800, E: 900, F: 2000 },
    { who: "Grace", A: 150, B: 300, C: 500, D: 800, E: 500, F: 2000 },
    { who: "Helen", A: 600, B: 1100, C: 1300, D: 1900, E: 950, F: 2000 },
    { who: "Ivy", A: 100, B: 200, C: 300, D: 500, E: 350, F: 2000 },
    { who: "Jack", A: 50, B: 100, C: 150, D: 300, E: 250, F: 2000 },
    { who: "Kate", A: 550, B: 1200, C: 1400, D: 2000, E: 1000, F: 1000 },
    { who: "Liam", A: 150, B: 350, C: 550, D: 900, E: 450, F: 1000 },
    { who: "Mia", A: 300, B: 650, C: 950, D: 1400, E: 700, F: 1500 },
    { who: "Noah", A: 450, B: 1000, C: 1200, D: 1700, E: 850, F: 1500 },
    { who: "Olivia", A: 200, B: 500, C: 800, D: 1300, E: 600, F: 2500 },
    { who: "Peter", A: 250, B: 600, C: 900, D: 1400, E: 700, F: 3000 },
    { who: "Quinn", A: 100, B: 250, C: 400, D: 700, E: 350, F: 2500 },
    { who: "Ryan", A: 50, B: 150, C: 250, D: 500, E: 200, F: 2000 },
    { who: "Sophia", A: 500, B: 1100, C: 1300, D: 1800, E: 900, F: 2000 },
    { who: "Thomas", A: 400, B: 900, C: 1100, D: 1600, E: 800, F: 1500 },
    { who: "Victoria", A: 350, B: 800, C: 1000, D: 1500, E: 750, F: 500 },
    // Add more rows here
  ];

  // Calculate total scores and assign ranks
  rows.sort((a, b) => {
    const totalScoreA = a.A + a.B + a.C + a.D + a.E + a.F;
    const totalScoreB = b.A + b.B + b.C + b.D + b.E + b.F;
    return totalScoreB - totalScoreA;
  });

  rows.forEach((row, index) => {
    row.Score = row.A + row.B + row.C + row.D + row.E + row.F;
    row.Rank = index + 1;
  });

  return (
    <div>
      <table
        className="table table-bordered table-hover"
        style={{
          marginLeft: "30px",
          marginTop: "20px",
          marginBottom: "100px",
          marginRight: "30px",
          width: "96%",
        }}
      >
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center", paddingBottom:"20px" }}>
              #
            </th>
            <th scope="col" style={{ textAlign: "center", width: "25%", paddingBottom:"20px" }}>
              Who
            </th>
            <th scope="col" style={{ textAlign: "center", width: "20%", paddingBottom:"20px" }}>
              Score
            </th>
            <th scope="col" style={{ textAlign: "center", width: "8%" }}>
              A<br />
              500
            </th>
            <th scope="col" style={{ textAlign: "center", width: "8%" }}>
              B<br />
              1000
            </th>
            <th scope="col" style={{ textAlign: "center", width: "8%" }}>
              C<br />
              1500
            </th>
            <th scope="col" style={{ textAlign: "center", width: "8%" }}>
              D<br />
              2000
            </th>
            <th scope="col" style={{ textAlign: "center", width: "8%" }}>
              E<br />
              2500
            </th>
            <th scope="col" style={{ textAlign: "center", width: "8%" }}>
              F<br />
              3000
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.who}>
              <th scope="row" style={{ textAlign: "center" }}>
                {row.Rank}
              </th>
              <td style={{ textAlign: "center" }}>{row.who}</td>
              <td style={{ textAlign: "center" }}>{row.Score}</td>
              <td style={{ textAlign: "center" }}>{row.A}</td>
              <td style={{ textAlign: "center" }}>{row.B}</td>
              <td style={{ textAlign: "center" }}>{row.C}</td>
              <td style={{ textAlign: "center" }}>{row.D}</td>
              <td style={{ textAlign: "center" }}>{row.E}</td>
              <td style={{ textAlign: "center" }}>{row.F}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
