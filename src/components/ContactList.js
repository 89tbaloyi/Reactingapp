import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) =>{
    return(
    <div className='container'>
    <ContactCard contact={contact}></ContactCard>
    </div>
     
    );
  })
  return (
    <div className='list-group'>
    {renderContactList}
    </div>
  )
}

export default ContactList