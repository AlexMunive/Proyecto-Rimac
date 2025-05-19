// Header.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header component", () => {
  test("el logo tiene la clase que limita su altura", () => {
    render(<Header />);
    const logo = screen.getByAltText("logo.png");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("max-h-10");
  });

  test("el texto '¡Compra por este medio!' tiene clase font-semibold", () => {
    render(<Header />);
    const textoCompra = screen.getByText("¡Compra por este medio!");
    expect(textoCompra).toBeInTheDocument();
    expect(textoCompra).toHaveClass("font-semibold");
  });

  test("el número de teléfono tiene clases font-bold y text-sm", () => {
    render(<Header />);
    const telefono = screen.getByText("(01) 411 6001");
    expect(telefono).toBeInTheDocument();
    expect(telefono).toHaveClass("font-bold");
    expect(telefono).toHaveClass("text-sm");
  });
});
