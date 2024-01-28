import { BasePage } from './BasePage'

export class HomePage extends BasePage {

    public constructor() {
        super()
        this.url = '/'
    }

    public getWhereToBeginButton() {
        cy.task('log', 'Getting [Where to begin] button...')
        return cy.get('a[href="where_to_start.asp"]')
    }

    public verifySuccessfulLogin() {
        cy.task('log', 'Verifiyng successfull login')
        return cy.get('span[title="Stars"]').should('be.visible')
    }
}
