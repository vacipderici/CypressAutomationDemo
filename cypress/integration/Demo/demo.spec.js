/// <reference types="cypress" />

context('Demo', () => {
	var userName = 'standard_user';
	var passWord = 'secret_sauce';
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com/');
		cy.wait(1 * 1000);
		cy.get('#user-name').type(userName).should('have.value', userName);
		cy.get('#password').type(passWord).should('not.be.null', passWord);
		cy.get('#login-button').click();
		cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
		cy.url().should('include', '/inventory.html');
	});

	it('Satin Alma Testi', () => {
		cy.get('#add-to-cart-sauce-labs-backpack').click();
		cy.get('.shopping_cart_badge').click();
		cy.url().should('include', '/cart.html');
		cy.contains('Sauce Labs Backpack');

		cy.get('#checkout').click();
		cy.url().should('include', 'checkout-step-one.html');

		cy.get('#first-name').type('test kullanicisi').should('have.value', 'test kullanicisi');
		cy.get('#last-name').type('test kullanicisi soyadi').should('have.value', 'test kullanicisi soyadi');
		cy.get('#postal-code').type('123123').should('have.value', 123123);

		cy.get('#continue').click();
		cy.url().should('include', 'checkout-step-two.html');
		cy.contains('Sauce Labs Backpack');

		cy.get('#finish').click();
		cy.url().should('include', 'checkout-complete.html');

		cy.get('#back-to-products').click();
	});
});
