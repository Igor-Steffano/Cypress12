describe('Basics', () => {

    beforeEach('', () => {
        
    });

    it('Visit explanation text', () => {
        cy.visit('/textinput')
    
    });
    it('Visit dynamicid', () => {
        cy.visit('/dynamicid')
    });
});