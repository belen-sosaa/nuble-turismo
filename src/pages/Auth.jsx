import { useState } from "react";

function Auth({ setUser, close }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // VALIDACIONES
    if (!email.includes("@")) {
      setError("Correo inválido");
      return;
    }

    if (password.length < 4) {
      setError("Mínimo 4 caracteres");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const user = {
        email,
        puntos: 0,
        nivel: 1
      };

      setUser(user);
      localStorage.setItem("usuarioActivo", JSON.stringify(user));

      setEmail("");
      setPassword("");
      setLoading(false);

      if (close) close();
    }, 800); // simulación carga
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>
          {isRegister ? "Crear cuenta" : "Iniciar sesión"}
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div style={{ position: "relative" }}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              onClick={() => setShowPass(!showPass)}
              style={styles.eye}
            >
              {showPass ? "Ocultar" : "Ver"}
            </span>
          </div>

          {error && (
            <p style={{ color: "#ef4444", fontSize: "12px" }}>
              {error}
            </p>
          )}

          <button className="button" type="submit" disabled={loading}>
            {loading
              ? "Cargando..."
              : isRegister
              ? "Crear cuenta"
              : "Entrar"}
          </button>
        </form>

        <p style={styles.switch}>
          {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? " Inicia sesión" : " Regístrate"}
          </span>
        </p>

        {close && (
          <button onClick={close} style={styles.closeBtn}>
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
  },
  eye: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "12px",
    cursor: "pointer",
    color: "#38bdf8"
  }
};

export default Auth;