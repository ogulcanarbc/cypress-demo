class BasePageUtil {

    click(selector) {
        cy.get(selector).click();
    }

    forceClick(selector) {
        cy.get(selector).click({force: true});
    }

    write(selector, text) {
        cy.get(selector).type(text);
    }

    clickContains(selector, value) {
        cy.get(selector).contains(new String(value)).click();
    }

    getText(selector,value){
        return cy.get(selector).invoke("text").then(text=>{
            return text;
        })
    }

}

export default new BasePageUtil();