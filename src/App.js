import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/CartPage';
import Footer from './Components/Footer';
import LoginScreen from './Pages/LoginScreen';
import ResetPassword from './Pages/ResetPassword';
import UserAccount from './Pages/UserAccount';
import { CRUDExample } from './Components/CRUDExample';
import AdminForm from './Pages/AdminForm';

function App() {
  return (
    <Router>
      <Header/>
      <main>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/LoginScreen" element={<LoginScreen/>} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/userAccount" element={<UserAccount/>} />
          <Route path="/crudExample" element={<CRUDExample/>} />
          <Route path="/adminForm" element={<AdminForm/>} />
      </Routes>
      </main>
      <Footer/>
      </Router>
       );
}

export default App;
