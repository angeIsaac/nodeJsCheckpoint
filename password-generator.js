const generator = require("generate-password");

function passwordGenerator(){
    const password = generator.generate({
        length: 10,
        numbers: true,
        symbols: true,
        lowercase: true
    })
    return password;
}

console.log(passwordGenerator());