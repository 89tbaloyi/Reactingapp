import React from 'react'
import ContactList from './ContactList'

const ContactCard = (props) => {
  const {id,name,surname} = props.contact;
  return (
    <div className='container'>
     
    <div className='item'>
    <div className='content'>
    <div className='header'>{name}</div>
    <div>{surname}</div>
    <div className='buttons'>
    <button type="button" class="btn btn-danger" style={{color:"red", marginTop:"7px"}}>Delete</button>
     
     
    </div>
    
    </div>
   </div>
    </div>
  )
}

export default ContactCard