import React, { useState, useEffect } from 'react';
import Logout from './Logout';
import {auth} from '../firebase';
import LoginRead from './LoginRead';

const LoginScreen = () => {
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
    <div>
      <h1>Minha loja virtual</h1>
      {user ? <Logout /> : <LoginRead />}
    </div>
  );
}

export default LoginScreen;
