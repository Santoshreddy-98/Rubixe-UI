import React,{useState} from 'react'
import axios from'axios'
import './Form.css'
const Form = () => {
  const [form,setForm]=useState({name:'',email:'',number:''})
  const changehandler=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(form)
    axios.post('http://localhost:5000/task/user',form)
  }
  return <>
     <div className="form-container">
      <div className="form-left">
      <h1>GET IN TOUCH</h1>
      <h3 className='h3-text'>Please complete the form and we will get back to you.</h3>
      </div>
      <div className="container " >
      <form onSubmit={submithandler} className='mr-4'>
      <div className='form-group'>
      <label className='label'>Name*</label><br/>
        <input className='form-control-lg' type="text" placeholder='Enter Your Name' name='name' value={form.name} onChange={changehandler}/>
      </div>
        <div className='form-group'>
        <label className='label'>Email*</label><br/>
        <input className='form-control-lg' type="text" placeholder='Enter Your Email' name='email' value={form.email} onChange={changehandler}/>
        </div>
        <div className='form-group'>
        <label className='label'>Mobile Number*</label><br/>
        <input className='form-control-lg' type="text" placeholder='Enter Your Mobile Number'name='number' value={form.number} onChange={changehandler} />
        </div>
        
        <button className='btn btn-primary btn-block mt-3' >Register Now</button>
        
        </form>
      </div>
     </div>
  
  </>
}

export default Form