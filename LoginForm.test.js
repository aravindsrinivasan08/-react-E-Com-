import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./LoginForm";

describe("LoginForm Component", () => {
  const renderComponent = () =>
    render(
      <Router>
        <LoginForm />
      </Router>
    );

  test("renders login form elements", () => {
    renderComponent();

    // Check for the title
    expect(screen.getByText(/user login/i)).toBeInTheDocument();

    // Check for input fields
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your password/i)).toBeInTheDocument();

    // Check for the login button
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("validates email input", () => {
    renderComponent();

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const loginButton = screen.getByText(/login/i);

    // Leave email empty and trigger validation
    fireEvent.click(loginButton);
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();

    // Enter invalid email
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.click(loginButton);
    expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();

    // Enter valid email
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(loginButton);
    expect(screen.queryByText(/enter a valid email address/i)).not.toBeInTheDocument();
  });

  test("validates password input", () => {
    renderComponent();

    const passwordInput = screen.getByPlaceholderText(/enter your password/i);
    const loginButton = screen.getByText(/login/i);

    // Leave password empty and trigger validation
    fireEvent.click(loginButton);
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();

    // Enter invalid password
    fireEvent.change(passwordInput, { target: { value: "pass" } });
    fireEvent.click(loginButton);
    expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument();

    // Enter valid password
    fireEvent.change(passwordInput, { target: { value: "Password@123" } });
    fireEvent.click(loginButton);
    expect(screen.queryByText(/password must be at least 8 characters/i)).not.toBeInTheDocument();
  });

  test("handles successful login", () => {
    localStorage.setItem(
      "userData",
      JSON.stringify({ email: "test@example.com", password: "Password@123", name: "John Doe" })
    );

    renderComponent();

    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
      target: { value: "Password@123" },
    });

    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByText(/login successful/i)).toBeInTheDocument();
  });

  test("handles failed login", () => {
    renderComponent();

    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
      target: { value: "WrongPassword@123" },
    });

    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByText(/login failed. check your credentials/i)).toBeInTheDocument();
  });
});
