class Veiculo{
    #marca; // propriedade privada
    #modelo;

    constructor(marca, modelo){
        this.#marca = marca;
        this.#modelo = modelo;
    }

    get getMarca(){
        return this.#marca;
    }
    set setMarca(marca){
        this.#marca = marca;
    }

    get getModelo(){
        return this.#modelo;
    }
    set setModel(modelo){
        this.#modelo = modelo;
    }

    exibir(){
        console.log("Marca: " + this.getMarca);
        console.log("Modelo: " + this.getModelo);
    }
}

let v1 = new Veiculo();

v1.setMarca = "BMW";
v1.setModel = "X6";
v1.exibir();