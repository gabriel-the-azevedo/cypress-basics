describe('Orange HRM Demo', () => {
  it('should allow users to login if they use valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123').type('{enter}')
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb').contains('Dashboard')
  })

  it('should not allow users to login with invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin012').type('{enter}')
    cy.get('[role=alert]')
  })
})