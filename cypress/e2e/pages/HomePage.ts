import { BasePage } from './BasePage'
import { SearchField } from '../../e2e/pages/elements/SearchField'

export class HomePage extends BasePage {

    public searchField: SearchField

    public constructor() {
        super()
        this.url = '/'
        this.searchField = new SearchField()
    }

    public getWhereToBeginButton() {
        cy.task('log', 'Getting [Where to begin] button...')
        return cy.get('a[href="where_to_start.asp"]')
    }

    public verifySuccessfulLogin() {
        cy.task('log', 'Verifiyng successfull login')
        return cy.get('span[title="Stars"]').should('be.visible')
    }

    public getSearchFieldFromHomePage = () => {
        cy.task('log', 'Getting search field from Home page...')
        return cy.get('input[id = "search2"]')
    }

    public fillSearchFieldOnHomePage = (str: string) => {
        cy.task('log', `Searching for "${str}" by search on Home page...`)
        this.getSearchFieldFromHomePage().clear({ force: true }).type(str)
    }

    public getSubmitSearchButtonOnHomePage = () => {
        cy.task('log', 'Getting [submit search] button on Home Page...')
        return cy.get('button[id="learntocode_searchbtn"]')
    }

    public clickSubmitSearchButtonOnHomePage = () => {
        cy.task('log', 'Clicking [submit search] button on Home Page...')
        this.getSubmitSearchButtonOnHomePage().click({ force: true })
    }

    public getSearchDropdownOnHomePage = () => {
        cy.task('log', 'Getting search dropdown on Home page...')
        return cy.get('div[id = "listofsearchresults"]')
    }
}
