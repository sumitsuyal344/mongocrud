import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addFormData } from '../service/api';
function Add() {

  const defaultValue={
    name:'',
    address:'',
    rating:''
  }
    const [formData, setFormData] = useState(defaultValue)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("pressed")
       await addFormData(formData)
    }
   
    const handleChange=(e)=>{
setFormData({
    ...formData,
    [e.target.name]:e.target.value
})
    }
    console.log("formdata",formData)
  return (
    <div style={{width:'35%',marginLeft:'400px',marginTop:'200px',}}>
 <Form onSubmit={handleSubmit}>
    <Form.Label style={{fontWeight:'bold',fontSize:'40px'}}>Form</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="name" placeholder="Enter name"  name="name"
                onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
       
        <Form.Control type="name" placeholder="Enter address"  name="address"
                onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="name" placeholder="Enter rating"  name="rating"
                onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   
  )
}

export default Add