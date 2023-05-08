import React from "react";
import "./CSS/showcomplaint.css";
// tableGenerator = () => {
//   return (
//     <table>
//       <tr>
//         {columns.map(column => <th>{column.data}</th>)}
//       </tr>
//     </table>
//   );
// }

export default function ShowComplaint(columns) {
  // console.log(columns)
      return (
       
        <div>
          <div className="table-responsive tcol">
            <table className="table table-hover table-nowrap tcol table-striped table-borderless">
              <thead className="thead-dark tcol">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Enroll</th>
                  <th scope="col">Email</th>
                  <th scope="col">Complaint</th>
                </tr>
              </thead>
              <tbody>
                
                {console.log(columns.column)}
                {columns.column.map((col,idx)=>{return <tr>
                  
                  <td> 
                  <img alt="img" className="cimage" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                    
                  
                    {col.name} </td>
                    <td>{col.id}</td>
                    <td>{col.email}</td>
                    <td>{col.complaint}</td>
                  </tr>})}
                    
              </tbody>
            </table>
          </div>
        </div>
      );
}