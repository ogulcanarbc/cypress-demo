import mainPage from '../pages/mainPage'
import browserOn from '../utils/basePageUtil'
import {account} from "../fixtures/users";
import {selectorMainPage} from "../selector/mainPage";

describe('Trendyol Login Test', () => {

    context('Incorrect Login', () => {
        before('I Logged', () => {
            mainPage.login(account.username, account.incorrectPassword);
        });

        it('should be viewed incorrect login pop up message', function () {
            browserOn.getText(selectorMainPage.loginErrorBox).then(message => {
                expect(message).to.include('GmailGörseller', 'Incorrect login message not seen!')
            });

        });

        after('info message', () => {
            console.log('Test finished!');
        })
    });


});
