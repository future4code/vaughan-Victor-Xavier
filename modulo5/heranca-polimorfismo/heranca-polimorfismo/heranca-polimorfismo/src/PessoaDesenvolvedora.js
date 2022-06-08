"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDesenvolvedora = void 0;
class PessoaDesenvolvedora {
    constructor(nome, salarioBruto) {
        this.porcentagemProvi = 0.15;
        this.nome = nome;
        this.salarioBruto = salarioBruto;
        this.dividaProvi = salarioBruto * this.porcentagemProvi;
    }
    pegarSalario() {
        return this.salarioBruto;
    }
    mudarSalario(novoSalario) {
        this.salarioBruto = novoSalario;
    }
    mudarPorcentagemProvi(novaPorcentagem) {
        this.porcentagemProvi = novaPorcentagem;
        this.dividaProvi = this.salarioBruto * novaPorcentagem;
    }
    pegarNome() {
        return this.nome;
    }
    pegarDividaProvi() {
        return this.dividaProvi;
    }
}
exports.PessoaDesenvolvedora = PessoaDesenvolvedora;
