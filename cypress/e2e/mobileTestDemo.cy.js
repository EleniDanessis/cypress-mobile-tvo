describe('Basic Mobile Testing', () => {
    beforeEach(function(){
        cy.visit('https://www.tvo.org/series-docs')
    })

    it('Access TVO Documentaries with iphone-3', () => {
        cy.viewport('iphone-3')
    })

    it('Access TVO Documentaries with iphone-4', () => {
        cy.viewport('iphone-4')
    })

    it('Access TVO Documentaries with iphone-5', () => {
        cy.viewport('iphone-5')
    })

    it('Access TVO Documentaries with iphone-6', () => {
        cy.viewport('iphone-6')
    })

    it('Access TVO Documentaries with iphone-6+', () => {
        cy.viewport('iphone-6+')
    })

    it('Access TVO Documentaries with iphone-7', () => {
        cy.viewport('iphone-7')
    })

    it('Access TVO Documentaries with iphone-8', () => {
        cy.viewport('iphone-8')
    })

    it('Access TVO Documentaries with iphone-x', () => {
        cy.viewport('iphone-x')
    })

    it('Access TVO Documentaries with iphone-xr', () => {
        cy.viewport('iphone-xr')
    })

    it('Access TVO Documentaries with iphone-se2', () => {
        cy.viewport('iphone-se2')
    })

    it('Access TVO Documentaries with samsung-note9', () => {
        cy.viewport('samsung-note9')
    })

    it('Access TVO Documentaries with samsung-s10', () => {
        cy.viewport('samsung-s10')
    })
})