import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const LoginRead = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Email: ${email}, Password: ${password}`);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Usuário conectado: ", user);
          // ...
        })
        .catch((error) => {
            // Login falhou
            console.error("Erro ao conectar: ", error);
            setError("Endereço de email ou senha incorretos")
    })}

  return (
    <div>
    <div>LoginRead</div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => { setEmail(event.target.value) ; setError("")} }
            
          /> 
          {error && <span className="error">{error}</span>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
      </div>
    );
  }
export default LoginRead

