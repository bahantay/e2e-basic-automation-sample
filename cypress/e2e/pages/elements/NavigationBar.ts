export class NavigationBar {

    constructor() { }

    public getLoginButton = () => {
        cy.task('log', 'Getting [login] button...')
        return cy.get('a[title="Login to your account"]')
    }

    public clickLoginButton = () => {
        cy.task('log', 'Clicking [login] button...')
        this.getLoginButton().click()
    }
}
