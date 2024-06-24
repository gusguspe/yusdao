function palindrome(str) {
    // Eliminamos los caracteres que no son letras y convertimos a minúsculas
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Comparamos la cadena original con su versión invertida
    return str === str.split('').reverse().join('');
}

// Pruebas para la función palindrome
console.log(palindrome("A man, a plan, a canal, Panama")); // true
console.log(palindrome("racecar")); // true
console.log(palindrome("hello")); // false

// Pruebas para métodos de Math
let num = -42.7;

console.log(`Math.abs(${num}):`, Math.abs(num)); // 42.7
console.log(`Math.ceil(${num}):`, Math.ceil(num)); // -42
console.log(`Math.floor(${num}):`, Math.floor(num)); // -43
console.log(`Math.round(${num}):`, Math.round(num)); // -43

let nums = [3, 5, -1, 0, 12];
console.log(`Math.max(${nums.join(', ')}):`, Math.max(...nums)); // 12
console.log(`Math.min(${nums.join(', ')}):`, Math.min(...nums)); // -1

console.log('Math.random():', Math.random()); // número aleatorio entre 0 y 1

// Para mostrar más resultados de Math.random()
for (let i = 0; i < 5; i++) {
    console.log(`Math.random() [${i + 1}]:`, Math.random());
}
























palindrome();