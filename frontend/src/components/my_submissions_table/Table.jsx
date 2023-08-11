import React from "react";

export default function Table() {
  return (
    <div>
      <table className="table table-bordered table-hover" style={{ marginLeft: "30px", marginTop: "20px", marginBottom: "40px", marginRight: "30px", width: "96%" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" style={{ width: "23%" }}>When</th>
            <th scope="col" style={{ width: "23%" }}>Problem Name</th>
            <th scope="col" style={{ width: "23%" }}>Language</th>
            <th scope="col" style={{ width: "23%" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">3</th>
            <td>2:15 pm</td>
            <td>Tracking Segment</td>
            <td>C++</td>
            <td>Accepted</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>3:15 pm</td>
            <td>OMSK Metro</td>
            <td>C++</td>
            <td>Wrong Answer</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>4:15 pm</td>
            <td>Big Bang</td>
            <td>C++</td>
            <td>Compilation Error</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>5:15 pm</td>
            <td>Shopping</td>
            <td>C++</td>
            <td>Accepted</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>6:15 pm</td>
            <td>Sum Array</td>
            <td>C++</td>
            <td>Accepted</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>7:15 pm</td>
            <td>Apple Tree</td>
            <td>C++</td>
            <td>Accepted</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
