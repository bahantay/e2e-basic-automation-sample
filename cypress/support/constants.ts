export const BASE_URL = 'https://www.w3schools.com/'

export const DEFAULT_WAITING_TIME = 10000

export const ASSETS_FOLDER = 'cypress/assets'

export const TEST_USER = {
    email: 'test12051@mail.ru',
    password: 'Testing123!',
    first_name: 'firstTestName',
    last_name: 'lastTestName'
}

export const INVALID_EMAILS = {
    withInvalidCharacterPrefix: 'abc#def@mail.com',
    withInvalidTopDomain: 'abc.def@mail.c',
    withInvalidCharacterDomain: 'abc.def@mail#archive.com',
    withoutTopDomain: 'abc.def@mail',
    withTwoDotsInTopDomain: 'abc.def@mail..com',
}

export const LOGIN_VALIDATION_MESSAGES = {
    invalidEmailValidationMessage: 'Looks like you forgot something',
    emptyEmailValidationMessage: 'Please enter an email',
    emailDoesNotExistValidationMessage: 'A user with this email does not exist',
    invalidPasswordValidationMessage: 'Make sure you type your email and password correctly. Both your password and email are case-sensitive.'
}

export const PASSWORD_RESET_VALIDATION_MESSAGES = {
    InvalidEmailValidationMessage: 'Please enter a valid email address',
    successfulValidationEmailMessage: "We'll email you a password reset link.",
    passwordResetSpamInfoMessage: "If the email doesn't show up soon, check your spam folder. We sent it from login@w3schools.com.",
}

export const SIGN_UP_VALIDATION_MESSAGES = {
    invalidEmailValidationMessage: 'Looks like you forgot something',
    emptyEmailValidationMessage: 'Please enter an email',
    validCredsValidationMessage: "Your password is secure and you're all set!",
    invalidNameErrorMessage: 'Add a name that only contains letters - and no special characters.'
}

export const SIGN_UP_INVALID_PASSWORDS = {
    'One lowercase character': 'TEST123!',
    'One uppercase character': 'test123!',
    'One number': 'Testing!',
    'One special character': 'Test1234',
    '8 characters minimum': 'Test12!',
}

export const SIGN_UP_INVALID_NAMES = {
    'Has number': 'Name1',
    'Has special character': 'Name!',
}

export const REFERENCES_PAGE_TITLES_MAP = {
    'HTML Tag Reference': `tags/default.asp`,
    'HTML Browser Support': 'tags/ref_html_browsersupport.asp',
    'HTML Event Reference': 'tags/ref_eventattributes.asp',
    'HTML Color Reference': 'colors/default.asp',
    'HTML Attribute Reference': 'tags/ref_attributes.asp',
    'HTML Canvas Reference': 'jsref/api_canvas.asp',
    'XML DOM Reference': 'xml/dom_nodetype.asp',
    'JavaScript Reference': 'jsref/default.asp',
    'HTML DOM Reference': 'jsref/default.asp',
    'HTML Character Sets': 'charsets/default.asp',
}
