class Animal{
    _tipo; // propriedade protegido
    _nome;
    
    constructor(tipo, nome){
        this._tipo = tipo;
        this._nome = nome;
    }
    fazerSom(){
        console.log("Som genérico!");
    }

    exibir() {
        console.log("Tipo: " + this._tipo);
        console.log("Nome: " + this._nome);
    }
}

// se mudar algum atributo de Animal para privado, Cachorro não consegue acessar
class Cachorro extends Animal{
    #idade; // propriedade privada
    constructor(tipo, nome, idade){
        super(tipo, nome);
        this.#idade = idade;
    }
    get getIdade(){
        return this.#idade;
    }
    set setIdade(idade){
        this.#idade = idade;
    }
    fazerSom(){
        console.log("Au au");
    }
    exibir(){
        super.exibir();
        console.log("Idade: " + this.getIdade);
        
    }
}

let a1 = new Cachorro("cachorro", "nick", 10);

a1.exibir();
