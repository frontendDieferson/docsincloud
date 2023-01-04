import React, { useState } from "react";
import "./styles.css";
import { toast } from 'react-toastify'
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import logoDocs from '../../assets/logoDocs.png'

function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        
        if(email ==='' || password==='') {
            toast.warning('Preencha todos os dados')
            return
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success('Bem vindo(a) :)')
            navigate('/home', {replace: true})
        })
        .catch(() => {
            toast.error('Email ou senha incorreto, tente novamente!')
        })
        
    }

  return (
    <div className="container">
       <img src={logoDocs} alt='Logo Docs in Cloud' />
       <h1>Bem vindo ao Docs in Cloud</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Seu melhor email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Sua Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Entrar</button>

      </form>
    </div>
  );
}

export default Login;
