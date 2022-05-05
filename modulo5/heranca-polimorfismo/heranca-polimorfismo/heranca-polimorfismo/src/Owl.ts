export class Owl {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

  chirp(): void {
    console.log("Hu Hu 🦉");
  }

  fly(quantity: number): void {
    console.log("the owl has flown for " + quantity + " minutes");
  }

  eat(quantity: number): void {
    console.log(`the owl has eaten ` + quantity);
  }
}
