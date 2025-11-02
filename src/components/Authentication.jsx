import "../css/authentication.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!user || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }

      if (remember) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        sessionStorage.setItem("authToken", data.token);
        sessionStorage.setItem("user", JSON.stringify(data.user));
      }

      navigate("/home");
    } catch {
      setError("Erro de conexão com o servidor.");
    }
  };

  return (
    <section className="authentication">
      <form onSubmit={handleLogin}>
        <h1>Faça Login</h1>
        <article className="ctn-input">
          <div className="input">
            <input
              type="text"
              placeholder="Nome de usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <i className="fa-regular fa-user"></i>
          </div>
        </article>

        <article className="ctn-input">
          <div className="input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </article>

        <section className="conf-account">
          <article className="remember-me">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <a>Lembrar de mim</a>
          </article>
          <a>Esqueceu a senha?</a>
        </section>

        {error && <p className="error-authentication">{error}</p>}

        <button type="submit">Entrar</button>
        <p>Não tem conta?<a> Criar!</a></p>
      </form>
    </section>
  );
}

export default Authentication;
