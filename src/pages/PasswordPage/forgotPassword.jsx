import { useState } from "react";

const ForgotPasswordComponent = ({ onSwitchToLogin, onResetPassword }) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleSubmit = () => {
    console.log('Reset Password:', formData);
    if (onResetPassword) {
      onResetPassword(formData);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#111827',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    card: {
      width: '100%',
      maxWidth: '28rem',
      backgroundColor: '#1f2937',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '2rem',
      border: '1px solid #374151'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.5rem'
    },
    subtitle: {
      color: '#9ca3af',
      marginBottom: '1.5rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    inputGroup: {
      position: 'relative',
    },
    inputIcon: {
      position: 'absolute',
      left: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      width: '1.25rem',
      height: '1.25rem',
      pointerEvents: 'none'
    },
    input: {
      width: '100%',
      backgroundColor: '#374151',
      color: 'white',
      padding: '0.75rem 0.75rem 0.75rem 2.75rem',
      borderRadius: '0.5rem',
      border: '1px solid #4b5563',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    submitButtonHover: {
      backgroundColor: '#1d4ed8',
      transform: 'scale(1.02)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    },
    footer: {
      marginTop: '2rem',
      textAlign: 'center'
    },
    footerText: {
      color: '#9ca3af'
    },
    loginLink: {
      color: '#60a5fa',
      fontWeight: '600',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    loginLinkHover: {
      color: '#93c5fd'
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#60a5fa',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '1rem',
      transition: 'color 0.3s ease',
      fontSize: '0.875rem'
    },
    backButtonHover: {
      color: '#93c5fd'
    },
    instructions: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      textAlign: 'center',
      marginBottom: '1.5rem',
      lineHeight: '1.5'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button
          onClick={onSwitchToLogin}
          style={styles.backButton}
          onMouseEnter={(e) => e.target.style.color = styles.backButtonHover.color}
          onMouseLeave={(e) => e.target.style.color = '#60a5fa'}
        >
          <ArrowLeft size={16} style={{marginRight: '0.5rem'}} />
          Volver al login
        </button>

        <div style={styles.header}>
          <h1 style={styles.title}>Recuperar Contraseña</h1>
          <p style={styles.instructions}>
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
        </div>

        <div style={styles.form}>
          <div style={styles.inputGroup}>
            <Mail style={styles.inputIcon} />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => {
                e.target.style.borderColor = '#4b5563';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            style={styles.submitButton}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, styles.submitButtonHover);
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
          >
            Enviar enlace de recuperación
          </button>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            ¿Recordaste tu contraseña?{' '}
            <button
              onClick={onSwitchToLogin}
              style={styles.loginLink}
              onMouseEnter={(e) => e.target.style.color = styles.loginLinkHover.color}
              onMouseLeave={(e) => e.target.style.color = '#60a5fa'}
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;