import React from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function AdminMPindex() {
  return (
    <div>
        <Navbar />
        <h2 style={{margin:"25px",fontWeight:"bold"}}>Admin</h2>
        <table class="table table-hover" style={{margin:"25px",fontSize:"18px"}}>
  <thead>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Make A Calculator</td>
      <td>
      <button type="button" class="btn btn-dark">+ Modify</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Make a pokemon game</td>
      <td>
      <button type="button" class="btn btn-dark">+ Modify</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
