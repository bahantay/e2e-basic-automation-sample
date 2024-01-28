import { LoginPage } from './LoginPage'

export class SignUpPage extends LoginPage {

    constructor() {
        super()
    }

    public getSignUpForFreeButton() {
        cy.task('log', 'Getting [sign up submit] button...')
        return cy.get('div.LoginModal_cta_bottom_box_button_login__5Fbwv span')
    }
}
