import userData from "../fixtures/user-data.json"

describe('Orange HRM Demo', () => {
  it('should allow users to login if they use valid credentials', () => {
    cy.visit('/auth/login')
    cy.get("[name='username']").type(userData.validUserData.username)
    cy.get("[name='password']").type(userData.validUserData.password).type('{enter}')
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb').contains('Dashboard')
  })

  it('should not allow users to login with invalid credentials', () => {
    cy.visit('/auth/login')
    cy.get("[name='username']").type(userData.invalidUserData.username)
    cy.get("[name='password']").type(userData.validUserData.password).type('{enter}')
    cy.get('[role=alert]')
  })
})