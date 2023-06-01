import { useState, useEffect } from 'react';
import {uuid} from 'uuid';
import React from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList';
import ContactCard from './components/ContactCard';


// import ContactCard from './components/ContactCard'

function App() { 
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const AddContacthandler = (contacts) =>{
    console.log(contacts);
    setContacts([...contacts, {id:contacts} ]); 

    };
    useEffect(() =>{
     const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     if(retriveContacts) setContacts(retriveContacts);
    },
    []);
    
      useEffect(() =>{
        localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify(contacts));
      },
      [contacts]);
  return (
    <div className='container'>
    
    <Header/>    
     <AddContact />
    <ContactList contacts = {contacts}/>
    <ContactCard/>
    
    
    </div>
  )
}

export default App