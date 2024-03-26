it('nada agora', () => { })

// function soma(a, b) {
//     return a + b
// }

// const soma = function (a, b) {
//     return a + b
// }

//arrow function
// const soma = (a, b) => {
//     return a + b
// } 

//variações 
// const soma = (a, b) => a + b

//quando tem um único parâmetro não precisa colocar parênteses
// const soma = (a) => a + a
// const soma = a => a + a

//sem parâmetros
// const soma = () => 5 + 5

// console.log(soma(1, 4))


it('a function test...', function () {
    console.log('Function', this)
})

it('a arrow test...', () => {
    console.log('Arrow', this)
})

