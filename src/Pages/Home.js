import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { auth } from '../firebase';
import LoginRead from './LoginRead';

function Home() {
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
      <h1>Bem-vindo(a) à nossa loja virtual</h1>
      <p>Confira nossos produtos incríveis na página de <Link to="/shop">loja</Link>.</p>
      {user ? <Logout /> : <LoginRead />}
      {<p> Ainda não tem uma conta? então faça o seu <Link to='/loginScreen'>Login</Link> </p>}
    </div>
  );
}

export default Home;
