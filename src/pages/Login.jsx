import React, { useState } from "react";
import Style from "../css/Style.module.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit=(e)=>{
   e.preventDefault();
    console.log('Usuario: ', user, 'Pass: ',password)
}

  return (
    <div>
      <h2>Login react</h2>
      <div className={Style.container}>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input value={user} type="Text" onChange={(e) => setUser(e.target.value)} />

          <label>Password</label>
          <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
