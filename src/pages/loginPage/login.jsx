import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#111827",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    card: {
      width: "100%",
      maxWidth: "28rem",
      backgroundColor: "#1f2937",
      borderRadius: "1rem",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      padding: "2rem",
      border: "1px solid #374151",
    },
    header: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    title: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "white",
      marginBottom: "0.5rem",
    },
    subtitle: {
      color: "#9ca3af",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    inputGroup: {
      position: "relative",
    },
    inputIcon: {
      position: "absolute",
      left: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af",
      width: "1.25rem",
      height: "1.25rem",
      pointerEvents: "none",
    },
    input: {
      width: "100%",
      backgroundColor: "#374151",
      color: "white",
      padding: "0.75rem 0.75rem 0.75rem 2.75rem",
      borderRadius: "0.5rem",
      border: "1px solid #4b5563",
      outline: "none",
      transition: "all 0.3s ease",
      fontSize: "1rem",
      fontFamily: "inherit",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
    passwordToggle: {
      position: "absolute",
      right: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      color: "#9ca3af",
      cursor: "pointer",
      padding: "0.25rem",
      borderRadius: "0.25rem",
      transition: "color 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    passwordToggleHover: {
      color: "#d1d5db",
    },
    checkboxRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "0.5rem",
    },
    checkboxLabel: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      marginRight: "0.5rem",
    },
    checkbox: {
      width: "1rem",
      height: "1rem",
      backgroundColor: "#374151",
      border: "1px solid #4b5563",
      borderRadius: "0.25rem",
      cursor: "pointer",
      marginRight: "0.5rem",
    },
    checkboxText: {
      fontSize: "0.875rem",
      color: "#9ca3af",
    },
    forgotLink: {
      fontSize: "0.875rem",
      color: "#60a5fa",
      background: "none",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      transition: "color 0.3s ease",
      whiteSpace: "nowrap",
    },
    forgotLinkHover: {
      color: "#93c5fd",
    },
    submitButton: {
      width: "100%",
      backgroundColor: "#2563eb",
      color: "white",
      padding: "0.75rem",
      borderRadius: "0.5rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "1rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
    submitButtonHover: {
      backgroundColor: "#1d4ed8",
      transform: "scale(1.02)",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
    footer: {
      marginTop: "2rem",
      textAlign: "center",
    },
    footerText: {
      color: "#9ca3af",
    },
    registerLink: {
      color: "#60a5fa",
      fontWeight: "600",
      background: "none",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    registerLinkHover: {
      color: "#93c5fd",
    },
    divider: {
      marginTop: "2rem",
    },
    dividerLine: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    dividerBorder: {
      flex: 1,
      height: "1px",
      backgroundColor: "#4b5563",
    },
    dividerText: {
      padding: "0 0.5rem",
      fontSize: "0.875rem",
      color: "#9ca3af",
      backgroundColor: "#1f2937",
    },
    socialButtons: {
      marginTop: "1.5rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0.75rem",
    },
    socialButton: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.625rem 1rem",
      borderRadius: "0.5rem",
      border: "1px solid #4b5563",
      backgroundColor: "#374151",
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "#d1d5db",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    socialButtonHover: {
      backgroundColor: "#4b5563",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Bienvenido</h1>
          <p style={styles.subtitle}>Inicia sesión en tu cuenta</p>
        </div>

        <div style={styles.form}>
          <div style={styles.inputGroup}>
            <Mail style={styles.inputIcon} />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => {
                e.target.style.borderColor = "#4b5563";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={styles.inputGroup}>
            <Lock style={styles.inputIcon} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => {
                e.target.style.borderColor = "#4b5563";
                e.target.style.boxShadow = "none";
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.passwordToggle}
              onMouseEnter={(e) =>
                (e.target.style.color = styles.passwordToggleHover.color)
              }
              onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div style={styles.checkboxRow}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.remember}
                onChange={(e) =>
                  setFormData({ ...formData, remember: e.target.checked })
                }
                style={styles.checkbox}
              />
              <span style={styles.checkboxText}>Recordarme</span>
            </label>
            <Link
              to={"/forgotPassword"}
              type="button"
              style={styles.forgotLink}
              onMouseEnter={(e) =>
                (e.target.style.color = styles.forgotLinkHover.color)
              }
              onMouseLeave={(e) => (e.target.style.color = "#60a5fa")}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="button"
            style={styles.submitButton}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, styles.submitButtonHover);
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
            }}
          >
            Iniciar Sesión
          </button>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            ¿No tienes una cuenta?{" "}
            <Link
              to={"/register"}
              style={styles.registerLink}
              onMouseEnter={(e) =>
                (e.target.style.color = styles.registerLinkHover.color)
              }
              onMouseLeave={(e) => (e.target.style.color = "#60a5fa")}
            >
              Regístrate
            </Link>
          </p>
        </div>

        <div style={styles.divider}>
          <div style={styles.dividerLine}>
            <div style={styles.dividerBorder}></div>
            <span style={styles.dividerText}>O continúa con</span>
            <div style={styles.dividerBorder}></div>
          </div>

          <div style={styles.socialButtons}>
            <button
              style={styles.socialButton}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  styles.socialButtonHover.backgroundColor)
              }
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#374151")}
            >
              Google
            </button>
            <button
              style={styles.socialButton}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  styles.socialButtonHover.backgroundColor)
              }
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#374151")}
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
