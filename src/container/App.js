import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Contacts from '../components/contacts/Contacts';
import AddContacts from '../components/addContacts/AddContacts';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/' component={Contacts} />
        <Route path='/addContact' component={AddContacts} />
      </Router>
    </div>
  );
}

export default App;
