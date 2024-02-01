export class SearchField {

    constructor() { }

    public getSearchIcon = () => {
        cy.task('log', 'Getting search field...')
        return cy.get('svg[id="tnb-google-search-icon"]')
    }

    public clickSearchIcon = () => {
        cy.task('log', 'Clicking search field...')
        this.getSearchIcon().click()
    }

    public getSearchField = () => {
        cy.task('log', 'Getting search field...')
        return cy.get('input[id="tnb-google-search-input"]')
    }

    public getSubmitSearchButton = () => {
        cy.task('log', 'Getting [submit search] button...')
        return cy.get('div[id="tnb-google-search-submit-btn"]')
    }

    public clickSubmitSearchButton = () => {
        cy.task('log', 'Clicking [submit search] button...')
        this.getSubmitSearchButton().click()
    }

    public fillSearchField = (str: string) => {
        cy.task('log', `Searching for "${str}"...`)
        this.getSearchField().click().type(str)
        this.clickSubmitSearchButton() 
    }

    public getSearchModalPage = () => {
        cy.task('log', 'Getting search modal page...')
        return cy.get('div.gsc-resultsbox-visible')
    }
}
