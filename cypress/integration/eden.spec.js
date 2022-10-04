/// <reference types="cypress" />
import EdenPage from "../pages/eden.js";

describe("Test de Página Eden", () => {
  it("Llamada a servicio: /inicio", { tags: ["@smoke", "@regression"]}, () => {
    cy.callService("inicio", "espectaculos");
  });

  it("Llamada a servicio: /puntosdeventas", { tags: "@regression"}, () => {
    cy.callService(
      "puntosdeventas",
      "puntosdeventas",
      "puntosdeventa_sch.json"
      );
    });
  })