import React from 'react';
import {auth} from '../firebase'

const Logout = () => {
  const handleLogout = () => {
    auth.signOut();
  }

  return (
    <div>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Logout;
