import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Pen, Trash } from 'react-bootstrap-icons';
function List() {
    const navigate=useNavigate()
  return (
    <div>
        {/* <div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',margin:'20px'}}>
        <Button variant="info" onClick={()=>navigate("/add")}>Add</Button>
        </div> */}
 
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>rating</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td> 
             {/* <Button variant="info" size='sm' onClick={()=>navigate(`/edit/:${45}`)}>Edit</Button> */}
             {/* <Button variant="danger" size='sm'  style={{marginLeft:'10px'}}>Delete</Button> */}
             <Pen color="green" size={20} cursor='pointer' onClick={()=>navigate(`/edit/:${45}`)} />
             <Trash color="red" size={20} cursor='pointer'  style={{marginLeft:'10px'}} />
             </td>
        </tr>
      </tbody>
    </Table>
   
    </div>
  )
}

export default List