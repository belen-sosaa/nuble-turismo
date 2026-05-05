import { useState } from "react";

function Auth({ setUser, close }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de usuario (sin backend por ahora)
    const user = {
      email
    };

    setUser(user);
    localStorage.setItem("usuarioActivo", JSON.stringify(user));

    setEmail("");
    setPassword("");

    if (close) close();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={{ marginBottom: "10px" }}>
          {isRegister ? "Registrarse" : "Iniciar sesión"}
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="button" type="submit">
            {isRegister ? "Crear cuenta" : "Entrar"}
          </button>
        </form>

        <p style={{ marginTop: "10px", fontSize: "12px" }}>
          {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
          <span
            style={{ color: "#38bdf8", cursor: "pointer" }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Inicia sesión" : "Regístrate"}
          </span>
        </p>

        {close && (
          <button
            onClick={close}
            style={styles.closeBtn}
          >
            Cerrar
          </button>
        )}
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
    alignItems: "center",
    zIndex: 3000
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