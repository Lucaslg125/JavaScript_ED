
cy.get('mat-select[formControlName=companyName]').click().get('mat-option').contains('Apple Inc.').click();

let idade = 71;

if (idade > 18) {

    console.log("Você é obrigado a votar")


} else if (idade > 15 && idade || idade > 70) {

    console.log("O Voto é opcional");


}

