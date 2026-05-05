import { useState } from "react";

function Auth({ setUser }) {
  const [modo, setModo] = useState("login"); // login o register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (modo === "register") {
      const nuevoUsuario = { email, password };
      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("Usuario registrado");
      setModo("login");
      return;
    }

    // login
    const usuario = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (usuario) {
      localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
      setUser(usuario);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="container">
      <h1>{modo === "login" ? "Iniciar Sesión" : "Registro"}</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <button className="button" onClick={handleAuth}>
        {modo === "login" ? "Entrar" : "Registrarse"}
      </button>

      <p
        style={{ cursor: "pointer", marginTop: "10px" }}
        onClick={() => setModo(modo === "login" ? "register" : "login")}
      >
        {modo === "login"
          ? "¿No tienes cuenta? Regístrate"
          : "¿Ya tienes cuenta? Inicia sesión"}
      </p>
    </div>
  );
}

export default Auth;