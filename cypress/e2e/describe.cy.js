/// <reference types="cypress" />

it.only('A external test...', () => {
})

describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it.skip('A specific test...', () => {  

        })
    })

    describe('Should group more specific tests 2...', () => {
        it.skip('A specific test 2...', () => {  

        })
    })


})