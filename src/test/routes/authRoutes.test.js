import { afterEach, beforeEach, describe, it } from "@jest/globals";
import request from "supertest";
import app from "../../app.js";

let servidor;
beforeEach(() => {
  const porta = 3000;
  servidor = app.listen(porta);
});

afterEach(() => {
  servidor.close();
});

describe("POST /login", () => {
  it("deve possuir email e senha para se autenticar", async () => {
    const loginMock = {
      email: "raphael@teste.com.br",
    };

    await request(servidor)
      .post("/login")
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."');
  });
});
