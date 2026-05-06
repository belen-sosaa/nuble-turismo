import { useState } from "react";

function Auth({ setUser, close }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const getUsuarios = () => {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
  };

  const guardarUsuarios = (usuarios) => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  const handleRegister = () => {
    const usuarios = getUsuarios();

    const existe = usuarios.find((u) => u.email === email);

    if (existe) {
      setError("El usuario ya existe");
      return;
    }

    const nuevoUsuario = {
      email,
      password,
      puntos: 0,
      nivel: 1
    };

    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);

    localStorage.setItem("usuarioActivo", JSON.stringify(nuevoUsuario));
    setUser(nuevoUsuario);

    close();
  };

  const handleLogin = () => {
    const usuarios = getUsuarios();

    const usuario = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (!usuario) {
      setError("Correo o contraseña incorrectos");
      return;
    }

    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
    setUser(usuario);

    close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Correo inválido");
      return;
    }

    if (password.length < 4) {
      setError("Mínimo 4 caracteres");
      return;
    }

    if (isRegister) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>{isRegister ? "Crear cuenta" : "Iniciar sesión"}</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button className="button" type="submit">
            {isRegister ? "Registrarse" : "Entrar"}
          </button>
        </form>

        <p style={styles.switch}>
          {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? " Inicia sesión" : " Regístrate"}
          </span>
        </p>

        <button onClick={close} style={styles.closeBtn}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "#111827",
    padding: "25px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
    border: "1px solid #1f2937"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  error: {
    color: "#ef4444",
    fontSize: "12px"
  },
  switch: {
    marginTop: "10px",
    fontSize: "12px"
  },
  closeBtn: {
    marginTop: "10px",
    background: "#ef4444",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer"
  }
};

export default Auth;