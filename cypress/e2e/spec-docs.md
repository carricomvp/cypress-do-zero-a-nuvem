# 📄 Test Documentation

## Summary

- Total Test Files: **21**
- Total Individual Tests: **127**
- Cypress Files (.cy): **21**

---

## File: **todo.cy.js**

**Path:** 1-getting-started\todo.cy.js

## Describe: **example to-do app**

### Context: **with a checked task**

#### Tests
- can filter for uncompleted tasks
- can filter for completed tasks
- can delete all completed tasks

## File: **actions.cy.js**

**Path:** 2-advanced-examples\actions.cy.js

### Context: **Actions**

#### Tests
- https://example.cypress.io/commands/actions
- .type() - type into a DOM element
- .focus() - focus on a DOM element
- .blur() - blur off a DOM element
- .clear() - clears an input or textarea element
- .submit() - submit a form
- .click() - click on a DOM element
- .dblclick() - double click on a DOM element
- .rightclick() - right click on a DOM element
- .check() - check a checkbox or radio element
- .uncheck() - uncheck a checkbox element
- .select() - select an option in a <select> element
- .scrollIntoView() - scroll an element into view
- .trigger() - trigger an event on a DOM element

## File: **aliasing.cy.js**

**Path:** 2-advanced-examples\aliasing.cy.js

### Context: **Aliasing**

#### Tests
- https://example.cypress.io/commands/aliasing
- .as() - alias a DOM element for later use
- .as() - alias a route for later use

## File: **assertions.cy.js**

**Path:** 2-advanced-examples\assertions.cy.js

## Describe: **Implicit Assertions**

### Context: **Assertions**

#### Tests
- https://example.cypress.io/commands/assertions
- .should() - make an assertion about the current subject
- .and() - chain multiple assertions together
- expect - make an assertion about a specified subject
- pass your own callback function to should()
- finds element by class name regex
- can throw any error
- matches unknown text between two elements
- assert - assert shape of an object
- retries the should callback until assertions pass

## File: **connectors.cy.js**

**Path:** 2-advanced-examples\connectors.cy.js

## Describe: **.then()**

### Context: **Connectors**

#### Tests
- https://example.cypress.io/commands/connectors
- .each() - iterate over an array of elements
- .its() - get properties on the current subject
- .invoke() - invoke a function on the current subject
- .spread() - spread an array as individual args to callback function
- invokes a callback function with the current subject
- yields the returned value to the next command
- yields the original subject without return
- yields the value yielded by the last Cypress command inside

## File: **cookies.cy.js**

**Path:** 2-advanced-examples\cookies.cy.js

### Context: **Cookies**

#### Tests
- https://example.cypress.io/commands/cookies

## File: **cypress_api.cy.js**

**Path:** 2-advanced-examples\cypress_api.cy.js

### Context: **Cypress.Commands**

#### Tests
- https://example.cypress.io/cypress-api
- .add() - create a custom command

### Context: **Cypress.Cookies**

#### Tests
- https://example.cypress.io/cypress-api
- .debug() - enable or disable debugging

### Context: **Cypress.arch**

#### Tests
- https://example.cypress.io/cypress-api
- Get CPU architecture name of underlying OS

### Context: **Cypress.config()**

#### Tests
- https://example.cypress.io/cypress-api
- Get and set configuration options

### Context: **Cypress.dom**

#### Tests
- https://example.cypress.io/cypress-api
- .isHidden() - determine if a DOM element is hidden

### Context: **Cypress.env()**

#### Tests
- https://example.cypress.io/cypress-api
- Get environment variables

### Context: **Cypress.log**

#### Tests
- https://example.cypress.io/cypress-api
- Control what is printed to the Command Log

### Context: **Cypress.platform**

#### Tests
- https://example.cypress.io/cypress-api
- Get underlying OS name

### Context: **Cypress.version**

#### Tests
- https://example.cypress.io/cypress-api
- Get current version of Cypress being run

### Context: **Cypress.spec**

#### Tests
- https://example.cypress.io/cypress-api
- Get current spec information

## File: **files.cy.js**

**Path:** 2-advanced-examples\files.cy.js

### Context: **Files**

#### Tests
- https://example.cypress.io/commands/files

## File: **location.cy.js**

**Path:** 2-advanced-examples\location.cy.js

### Context: **Location**

#### Tests
- https://example.cypress.io/commands/location

## File: **misc.cy.js**

**Path:** 2-advanced-examples\misc.cy.js

### Context: **Misc**

#### Tests
- https://example.cypress.io/commands/misc

### Context: **Cypress.Screenshot**

#### Tests
- Cypress.Screenshot.defaults() - change default config of screenshots

## File: **navigation.cy.js**

**Path:** 2-advanced-examples\navigation.cy.js

### Context: **Navigation**

#### Tests
- https://example.cypress.io
- https://example.cypress.io/commands/navigation

## File: **network_requests.cy.js**

**Path:** 2-advanced-examples\network_requests.cy.js

### Context: **Network Requests**

#### Tests
- https://example.cypress.io/commands/network-requests

## File: **querying.cy.js**

**Path:** 2-advanced-examples\querying.cy.js

### Context: **Querying**

#### Tests
- https://example.cypress.io/commands/querying
- .within() - query DOM elements within a specific element
- best practices - selecting elements

## File: **spies_stubs_clocks.cy.js**

**Path:** 2-advanced-examples\spies_stubs_clocks.cy.js

### Context: **Spies, Stubs, and Clock**

#### Tests
- https://example.cypress.io/commands/spies-stubs-clocks
- https://example.cypress.io/commands/spies-stubs-clocks
- https://example.cypress.io/commands/spies-stubs-clocks
- https://example.cypress.io/commands/spies-stubs-clocks
- https://example.cypress.io/commands/spies-stubs-clocks
- matches call arguments using Sinon matchers

## File: **storage.cy.js**

**Path:** 2-advanced-examples\storage.cy.js

### Context: **Local Storage / Session Storage**

#### Tests
- https://example.cypress.io/commands/storage

## File: **traversal.cy.js**

**Path:** 2-advanced-examples\traversal.cy.js

### Context: **Traversal**

#### Tests
- https://example.cypress.io/commands/traversal
- .children() - get child DOM elements
- .closest() - get closest ancestor DOM element
- .eq() - get a DOM element at a specific index
- .filter() - get DOM elements that match the selector
- .find() - get descendant DOM elements of the selector
- .first() - get first DOM element
- .last() - get last DOM element
- .next() - get next sibling DOM element
- .nextAll() - get all next sibling DOM elements
- .nextUntil() - get next sibling DOM elements until next el
- .not() - remove DOM elements from set of DOM elements
- .parent() - get parent DOM element from DOM elements
- .parents() - get parent DOM elements from DOM elements
- .parentsUntil() - get parent DOM elements from DOM elements until el
- .prev() - get previous sibling DOM element
- .prevAll() - get all previous sibling DOM elements
- .prevUntil() - get all previous sibling DOM elements until el
- .siblings() - get all sibling DOM elements

## File: **utilities.cy.js**

**Path:** 2-advanced-examples\utilities.cy.js

### Context: **Utilities**

#### Tests
- https://example.cypress.io/utilities
- Cypress._ - call a lodash method
- Cypress.$ - call a jQuery method
- Cypress.Blob - blob utilities and base64 string conversion
- Cypress.minimatch - test out glob patterns against strings
- Cypress.Promise - instantiate a bluebird promise

## File: **viewport.cy.js**

**Path:** 2-advanced-examples\viewport.cy.js

### Context: **Viewport**

#### Tests
- https://example.cypress.io/commands/viewport

## File: **waiting.cy.js**

**Path:** 2-advanced-examples\waiting.cy.js

### Context: **Waiting**

#### Tests
- https://example.cypress.io/commands/waiting

## File: **window.cy.js**

**Path:** 2-advanced-examples\window.cy.js

### Context: **Window**

#### Tests
- https://example.cypress.io/commands/window

## File: **CAC-TAT.cy.js**

**Path:** CAC-TAT.cy.js

## Describe: **Central de Atendimento ao Cliente TAT**

### Context: **Central de Atendimento ao Cliente TAT**

#### Tests
- ./src/index.html
- verifica o título da aplicação
- verifica os campos obrigatórios e envia o formulário
- seleciona um produto (YouTube) por seu texto
- marca o tipo de atendimento
- marca ambos checkboxes, depois desmarca o último
- seleciona um arquivo da pasta fixtures
- verifica se a política de privacidade abre em uma outra aba
- ex-extra-02md-1
- exibe mensagem de erro ao submeter o formulário com um email com formatação inválida
- verifica se o campo telefone aceita caracteres não-numéricos
- exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário
- preenche e limpa os campos nome, sobrenome, email e telefone
- exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios
- envia o formuário com sucesso usando um comando customizado
- seleciona um produto (blog) por seu texto
- seleciona um produto (Mentoria) por seu texto
- marca todo tipo de atendimento
- exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário
- seleciona um arquivo simulando um drag-and-drop
- seleciona um arquivo utilizando um alias
- acessa a página da política de privacidade removendo o target e então clicando no link

