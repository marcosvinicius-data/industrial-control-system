import { useState } from "react";
import "./login.css";
import eye from "../assets/unlock.png";
import eyeOff from "../assets/padlock.png";
import logo from "../assets/industria.png";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const usuarios = [
    { user: "admin", senha: "123", tipo: "admin" },
    { user: "operador", senha: "123", tipo: "operador" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const userValido = usuarios.find(
      (u) => u.user === usuario && u.senha === senha
    );

    if (userValido) {
      localStorage.setItem("tipo", userValido.tipo);
      localStorage.setItem("usuario", userValido.user);

      onLogin(); //  INTEGRAÇÃO COM APP
    } else {
      setErro("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2><img src={logo} alt="logo industria" className="logoIndustria"/> Sistema Industrial</h2>
        <p>Faça login para continuar</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <label>Usuário</label>
          </div>

          <div className="input-group senha-group">
            <input
              type={mostrarSenha ? "text" : "password"}
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label>Senha</label>

           <img
                src={mostrarSenha ? eyeOff : eye}
                alt="mostrar senha"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="icone-senha"
            />
            
          </div>

          <button className= "login-btn" type="submit">Entrar</button>

          {erro && <p className="erro">{erro}</p>}
        </form>
      </div>
    </div>
  );
}