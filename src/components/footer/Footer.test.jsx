// Footer.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer component", () => {
  test("renderiza el logo correctamente", () => {
    render(<Footer />);
    const logo = screen.getByAltText("logo.png");
    expect(logo).toBeInTheDocument();
  });

  test("muestra el texto de copyright", () => {
    render(<Footer />);
    const text = screen.getByText(/2025 RIMAC Seguros y Reaseguros/i);
    expect(text).toBeInTheDocument();
  });
});
