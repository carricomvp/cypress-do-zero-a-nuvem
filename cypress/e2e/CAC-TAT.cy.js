describe('Central de Atendimento ao Cliente TAT', () => {
beforeEach(()=> {
  cy.visit("./src/index.html")
})

  it('verifica o título da aplicação', () => {
    
    cy.title()
    .should('be.equal', 'Central de Atendimento ao Cliente TAT' )

  })

   it('verifica os campos obrigatórios e envia o formulário', () => {
    cy.get('input[name="firstName"]')
    .type ('Alexandre')
    cy.get('input[name="firstName"]')
    .should('have.value', 'Alexandre')

    cy.get('input[name="lastName"]')
    .type ('Carriço')
    cy.get('input[name="lastName"]')
    .should('have.value', 'Carriço')

    cy.get('input[id="email"]')
    .type ('alexandre.ccury@gmail.com')
    cy.get('input[id="email"]')
    .should('have.value','alexandre.ccury@gmail.com')

    cy.get('input[id="phone"]')
    .type ('27998037487')
    cy.get('input[id="phone"]')
    .should('have.value','27998037487')

    cy.get('textarea[id="open-text-area"]')
    .type ('Muito bom, parabéns!')
    cy.get('textarea[id="open-text-area"]')
    .should('have.value', 'Muito bom, parabéns!')

    cy.get('button[type="submit"]').click();

    cy.get('.success')
    .should ('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
   cy.get('select').select('YouTube')
   .should('have.value', 'youtube')
    
  })
   it('marca o tipo de atendimento "feedback"', () => {
      cy.get('input[value="feedback"]').check()
      .should('have.value', 'feedback')
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get ('input[type="checkbox"]').check()
    cy.get ('#phone-checkbox').uncheck()
  })

   it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')
  })
   
  it('verifica se a política de privacidade abre em uma outra aba', () => {
   cy.get('a[href="privacy.html"]')
   .should('have.attr', 'target', '_blank')
  })

  it('ex-extra-02md-1', () => {
  cy.get('input', { timeout: 5000 })
  .should('be.visible')

  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
     cy.get('input[id="email"]')
    .type ('alexandre.ccurygmail.com')
    cy.get('input[id="email"]')
    .should('have.value','alexandre.ccurygmail.com')
    cy.get('button[type="submit"]').click();
 cy.get('.error')
    .should ('be.visible')
  })

  it('verifica se o campo telefone aceita caracteres não-numéricos', () => {

  cy.get('input[id="phone"]')
    .type ('abc@@@')
    cy.get('input[id="phone"]')
    .should('have.value','')
    })

it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
cy.get('input[name="firstName"]')
    .type ('Alexandre')
    cy.get('input[name="firstName"]')
    .should('have.value', 'Alexandre')

    cy.get('input[name="lastName"]')
    .type ('Carriço')
    cy.get('input[name="lastName"]')
    .should('have.value', 'Carriço')

    cy.get('input[id="email"]')
    .type ('alexandre.ccury@gmail.com')
    cy.get('input[id="email"]')
    .should('have.value','alexandre.ccury@gmail.com')

    cy.get('textarea[id="open-text-area"]')
    .type ('Muito bom, parabéns!')
    cy.get('textarea[id="open-text-area"]')
    .should('have.value', 'Muito bom, parabéns!')

    cy.get ('#phone-checkbox').click()

    cy.get('button[type="submit"]').click();

    cy.get('.error')
    .should ('be.visible')


    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
cy.get('input[name="firstName"]')
    .type ('Alexandre')
    cy.get('input[name="firstName"]')
    .should('have.value', 'Alexandre')
    cy.get('input[name="firstName"]')
    .clear()
    cy.get('input[name="firstName"]')
    .should('have.value', '')




    cy.get('input[name="lastName"]')
    .type ('Carriço')
    cy.get('input[name="lastName"]')
    .should('have.value', 'Carriço')
    cy.get('input[name="lastName"]')
    .clear()
    cy.get('input[name="lastName"]')
    .should('have.value', '')



    cy.get('input[id="email"]')
    .type ('alexandre.ccury@gmail.com')
    cy.get('input[id="email"]')
    .should('have.value','alexandre.ccury@gmail.com')
    cy.get('input[id="email"]')
    .clear()
    cy.get('input[id="email"]')
    .should('have.value', '')



    cy.get('textarea[id="open-text-area"]')
    .type ('Muito bom, parabéns!')
    cy.get('textarea[id="open-text-area"]')
    .should('have.value', 'Muito bom, parabéns!')
    .clear()
    cy.get('textarea[id="open-text-area"]')
    .should('have.value', '')




    cy.get ('#phone-checkbox').check()

    cy.get('button[type="submit"]').click();

    cy.get('.error')
    .should ('be.visible')

    })

 it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.error')
    .should ('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', () =>{
    cy.fillMandatoryFieldsAndSubmit()

})

 it('seleciona um produto (blog) por seu texto', () => {
   cy.get('select').select('Blog')
   .should('have.value', 'blog')

})

 it('seleciona um produto (Mentoria) por seu texto', () => {
   cy.get('select').select('Mentoria')
   .should('have.value', 'mentoria')

})

it('marca todo tipo de atendimento', () => {
      cy.get('input[value="feedback"]').check()
      .should('have.value', 'feedback')
      cy.get('input[value="elogio"]').check()
      .should('have.value', 'elogio')
      cy.get('input[value="ajuda"]').check()
      .should('have.value', 'ajuda')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
cy.get('input[name="firstName"]')
    .type ('Alexandre')
    cy.get('input[name="firstName"]')
    .should('have.value', 'Alexandre')

    cy.get('input[name="lastName"]')
    .type ('Carriço')
    cy.get('input[name="lastName"]')
    .should('have.value', 'Carriço')

    cy.get('input[id="email"]')
    .type ('alexandre.ccury@gmail.com')
    cy.get('input[id="email"]')
    .should('have.value','alexandre.ccury@gmail.com')

    cy.get('textarea[id="open-text-area"]')
    .type ('Muito bom, parabéns!')
    cy.get('textarea[id="open-text-area"]')
    .should('have.value', 'Muito bom, parabéns!')

    cy.get ('#phone-checkbox').check()

    cy.get('button[type="submit"]').click();

    cy.get('.error')
    .should ('be.visible')

    })

     it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
    
  })

   it('seleciona um arquivo utilizando um alias', () => {
    cy.fixture('example.json').as('teste-alias')
    cy.get('input[type="file"]').selectFile("@teste-alias")
    
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
   cy.get('a[href="privacy.html"]')
   

})

})