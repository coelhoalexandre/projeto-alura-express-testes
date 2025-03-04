import { describe, expect, it } from "@jest/globals";
import AuthService from "../../services/authService.js";

const authService = new AuthService();

describe("Testando a authService.cadastarUsuario", () => {
  it("deve possuir um nome, email e senha", async () => {
    const usuarioMock = {
      nome: "Raphael",
      email: "raphael@teste.com.br",
    };

    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

    await expect(usuarioSalvo).rejects.toThrowError(
      "A senha do usuário é obrigatória!"
    );
  });
});
