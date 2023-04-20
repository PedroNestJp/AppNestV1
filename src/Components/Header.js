import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {auth} from '../firebase'
import UserAccount from '../Pages/UserAccount';
import LoginRead from '../Pages/LoginRead';


const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  
    return () => unsubscribe();
  }, []);
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          {user ? <UserAccount /> : <LoginRead />}

        </ul>
      </nav>
    </header>
  );
}

export default Header;
