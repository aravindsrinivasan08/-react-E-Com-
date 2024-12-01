import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// SVG Icons for Username, Email, Password, and Phone
const UsernameIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 20h13a7.5 7.5 0 00-13 0z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 6L12 13 2 6" />
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
  </svg>
);

const PasswordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6.25V3h3l1.5 3 1.5-3h3v3.25l-2.5 4 2.5 4V21h-3l-1.5-3-1.5 3H6v-5.75l2.5-4L6 6.25z" />
  </svg>
);

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword, phoneNumber } = formData;
    let newErrors = {};
    let formIsValid = true;

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name) {
      newErrors.name = "Username is required.";
      formIsValid = false;
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Username must contain only alphabetic characters.";
      formIsValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      formIsValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      formIsValid = false;
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include uppercase, lowercase, a digit, and a special character.";
      formIsValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
      formIsValid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
      formIsValid = false;
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
      formIsValid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Retrieve existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Add the new user to the array
      existingUsers.push(formData);

      // Save the updated list of users back to localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));

      setSubmitted(true);
      setErrors({});
      setTimeout(() => {
        navigate("/login"); // Redirect to the login page after 2 seconds
      }, 2000); // Optional delay for better user experience
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Registration Form</h2>
        {submitted ? (
          <div style={styles.successMessage}>
            <h3>User Created Successfully</h3>
            <p>Redirecting to login page...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputContainer}>
              <span style={styles.icon}><UsernameIcon /></span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="Username"
              />
            </div>
            {errors.name && <p style={styles.error}>{errors.name}</p>}

            <div style={styles.inputContainer}>
              <span style={styles.icon}><EmailIcon /></span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="Email"
              />
            </div>
            {errors.email && <p style={styles.error}>{errors.email}</p>}

            <div style={styles.inputContainer}>
              <span style={styles.icon}><PasswordIcon /></span>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="Password"
              />
              <span onClick={togglePasswordVisibility} style={styles.eyeIcon}>
                👁️
              </span>
            </div>
            {errors.password && <p style={styles.error}>{errors.password}</p>}

            <div style={styles.inputContainer}>
              <span style={styles.icon}><PasswordIcon /></span>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={styles.input}
                placeholder="Confirm Password"
              />
              <span onClick={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
                👁️
              </span>
            </div>
            {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}

            <div style={styles.inputContainer}>
              <span style={styles.icon}><PhoneIcon /></span>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={styles.input}
                placeholder="Phone Number"
              />
            </div>
            {errors.phoneNumber && <p style={styles.error}>{errors.phoneNumber}</p>}

            {errors.form && <p style={styles.error}>{errors.form}</p>}

            <button type="submit" style={styles.submitButton}>
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  container: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "8px",
  },
  icon: {
    marginRight: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
  },
  eyeIcon: {
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  successMessage: {
    textAlign: "center",
    color: "#28a745",
    fontSize: "18px",
  },
};

export default RegistrationForm;
