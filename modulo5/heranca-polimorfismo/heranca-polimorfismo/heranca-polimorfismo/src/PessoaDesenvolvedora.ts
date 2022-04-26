

export class PessoaDesenvolvedora {
  private nome: string;
  private salarioBruto: number 
  public  porcentagemProvi: number = 0.15
  private dividaProvi: number 

  constructor(
    nome: string,
    salarioBruto: number
  ){
    this.nome = nome
    this.salarioBruto = salarioBruto 
    this.dividaProvi = salarioBruto * this.porcentagemProvi
  }


  pegarSalario(): number{
    return this.salarioBruto
  }

  mudarSalario(novoSalario: number):void {
    this.salarioBruto = novoSalario
  }

 mudarPorcentagemProvi(novaPorcentagem: number):void{
    this.porcentagemProvi = novaPorcentagem
    this.dividaProvi = this.salarioBruto * novaPorcentagem
    
  }

  pegarNome():string{
    return this.nome
  }

  pegarDividaProvi():number {
    return this.dividaProvi
  }


}