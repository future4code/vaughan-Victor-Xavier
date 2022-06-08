"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Industry = exports.Commerce = exports.Residence = exports.Place = void 0;
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    interoduceYourself() {
        return `Olá, sou ${this.name}. Bom dia!`;
    }
}
class Customer extends User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
const client = {
    name: "Leleco",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
};
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        return this.cep;
    }
}
exports.Place = Place;
class Residence extends Place {
    constructor(residentsQuantity, cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
    }
    getResidentsQuantity() {
        return this.residentsQuantity;
    }
}
exports.Residence = Residence;
class Commerce extends Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
    getFloorsQuantity() {
        return this.floorsQuantity;
    }
}
exports.Commerce = Commerce;
class Industry extends Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
    getMachinesQuantity() {
        return this.machinesQuantity;
    }
}
exports.Industry = Industry;
class ResidentialClient extends Residence {
    constructor(name, registrationNumber, consumedEnergy, cpf, residentsQuantity, cep) {
        super(residentsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
    calculateBill() {
        return this.consumedEnergy * 0.75;
    }
}
class CommercialClient extends Commerce {
    constructor(name, registrationNumber, consumedEnergy, cnpj, floorsQuantity, cep) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
    getCnpj() {
        return this.cnpj;
    }
}
class IndustrialClinet extends Industry {
    constructor(name, registrationNumber, consumedEnergy, insdustryNumber, machinesQuantity, cep) {
        super(machinesQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.insdustryNumber = insdustryNumber;
    }
    getIndustryNumber() {
        return this.insdustryNumber;
    }
    calculateBill() {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}
