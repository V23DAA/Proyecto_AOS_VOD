import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
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
    checkboxLabel: {
      display: "flex",
      alignItems: "flex-start",
      cursor: "pointer",
    },
    checkbox: {
      width: "1rem",
      height: "1rem",
      backgroundColor: "#374151",
      border: "1px solid #4b5563",
      borderRadius: "0.25rem",
      cursor: "pointer",
      marginRight: "0.5rem",
      marginTop: "0.2rem",
      flexShrink: 0,
    },
    checkboxText: {
      fontSize: "0.875rem",
      color: "#9ca3af",
      lineHeight: "1.4",
    },
    termsLink: {
      color: "#60a5fa",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    termsLinkHover: {
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
    loginLink: {
      color: "#60a5fa",
      fontWeight: "600",
      background: "none",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    loginLinkHover: {
      color: "#93c5fd",
    },
    backButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#60a5fa",
      background: "none",
      border: "none",
      cursor: "pointer",
      marginBottom: "1rem",
      transition: "color 0.3s ease",
      fontSize: "0.875rem",
    },
    backButtonHover: {
      color: "#93c5fd",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <Link
          to={"/"}
          style={styles.backButton}
          onMouseEnter={(e) =>
            (e.target.style.color = styles.backButtonHover.color)
          }
          onMouseLeave={(e) => (e.target.style.color = "#60a5fa")}
        >
          <ArrowLeft size={16} style={{ marginRight: "0.5rem" }} />
          Volver al login
        </Link>

        <div style={styles.header}>
          <h1 style={styles.title}>Crear Cuenta</h1>
          <p style={styles.subtitle}>Regístrate para comenzar</p>
        </div>

        <div style={styles.form}>
          <div style={styles.inputGroup}>
            <User style={styles.inputIcon} />
            <input
              type="text"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
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

          <div style={styles.inputGroup}>
            <Lock style={styles.inputIcon} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.passwordToggle}
              onMouseEnter={(e) =>
                (e.target.style.color = styles.passwordToggleHover.color)
              }
              onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) =>
                setFormData({ ...formData, acceptTerms: e.target.checked })
              }
              style={styles.checkbox}
            />
            <span style={styles.checkboxText}>
              Acepto los{" "}
              <a
                href="#"
                style={styles.termsLink}
                onMouseEnter={(e) =>
                  (e.target.style.color = styles.termsLinkHover.color)
                }
                onMouseLeave={(e) => (e.target.style.color = "#60a5fa")}
              >
                términos y condiciones
              </a>{" "}
              y la{" "}
              <a
                href="#"
                style={styles.termsLink}
                onMouseEnter={(e) =>
                  (e.target.style.color = styles.termsLinkHover.color)
                }
                onMouseLeave={(e) => (e.target.style.color = "#60a5fa")}
              >
                política de privacidad
              </a>
            </span>
          </label>

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
            Crear Cuenta
          </button>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            ¿Ya tienes una cuenta?{" "}
            <Link
              to={"/"}
              style={styles.loginLink}
              onMouseEnter={(e) =>
                (e.target.style.color = styles.loginLinkHover.color)
              }
              onMouseLeave={(e) => (e.target.style.color = "#60a5fa")}
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
