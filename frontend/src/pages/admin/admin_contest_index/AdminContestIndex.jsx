// // Arif

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../../../components/navbar/Navbar";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// function AdminContestIndex() {

//   const [problemlist, setProblemList] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/api/contests/1/problems").then((response) => {
//         setProblemList(response.data.problem); // Update to access the 'mini_projects' array in response
//       console.log(response.data);
//     });
//   }, []);

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleModifyClick = (prolemid) => {
//     // Navigate to the specific project details page
//     navigate(`/admin-miniproject-details/${prolemid}`);
//   };

//   const handleAddBtnClick = () => {
//     // Navigate to the specific project details page
//     navigate(`/admin-contest-add`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <h2 style={{ margin: "25px", marginLeft:"50px", fontWeight: "bold" }}>Admin</h2>
//       <table
//         className="table table-hover"
//         style={{ margin: "25px", marginLeft:"50px" ,fontSize: "18px" }}
//       >
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Title</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>

//           ({problemlist.map((item, index) => (
//             <tr key={item.problemid}>
//               <th scope="row">{index + 1}</th>
//               <td>{item.title}</td>
//               <td>
//                 <button
//                   type="button"
//                   className="btn btn-dark"
//                   onClick={() => handleModifyClick(item.problemid)}
//                 >
//                   + Modify
//                 </button>
//               </td>
//             </tr>
//           ))})
//         </tbody>
//       </table>

//       <button type="button" onClick={() => handleAddBtnClick()} className="btn btn-dark" style={{position:"absolute" ,width:"190px", height:"42px",marginTop:"10px" ,marginLeft:"50px"}}>
//         Add New Problem
//       </button>


//     </div>
//   );
// }

// export default AdminContestIndex;