class Animal{
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }

   exibir() {
        console.log("Nome do animal: " + this.nome);
        console.log("Raça: " + this.raca);
   }
}

let a1 = new Animal("Rex", "Cachorro");

a1.exibir();