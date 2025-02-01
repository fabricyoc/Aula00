function exibirNome(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let full_name = fname + " " + lname;
    alert(full_name.toUpperCase());
}