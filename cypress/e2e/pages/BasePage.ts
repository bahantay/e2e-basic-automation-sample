import { NavigationBar } from './elements/NavigationBar'

export class BasePage {

    public navigationBar: NavigationBar
    protected url!: string

    public constructor() {
        this.navigationBar = new NavigationBar()
    }

    public getPageTitle() {
        cy.task('log', 'Getting page title...')
        return cy.title()
    }

    public visitPage() {
        cy.task('log', `Opening page "${this.url}"...`)
        cy.visit(this.url)
    }

    public getAcceptAllButton() {
        cy.task('log', `Getting "Accept all & visit the site" button`)
        return cy.get('div[id = "accept-choices"]')
    }

    public clickAcceptAllButton() {
        cy.task('log', `Clicking on "Accept all & visit the site" button`)
        this.getAcceptAllButton().click()
    }

    public getCurrentUrl() {
        cy.task('log', 'Getting current url...')
        return cy.url()
    }
}
