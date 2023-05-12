let listaCompras = ["maça", "banana", "pão", "manteiga"];

console.log(listaCompras[1]);

listaCompras[2] = "Pão de sola";

console.log(listaCompras[2]);

listaCompras.push("Cafezis");

console.log(listaCompras);

listaCompras.forEach(item => {
    console.log(`Iten: ${item}`)
});

const numeros = [10, 20, 30, 49, 45, 85, 78]

// numeros.forEach(n => console.log(n));

numeros.forEach(n => {
    if (n % 2 == 0) { console.log(`São numeros Pares: ${n}`) }
})