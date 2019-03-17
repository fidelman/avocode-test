describe('App initialization', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('.cy-sidebar')
      .first()
      .as('start')
  })

  it('should have width 500px', () => {
    cy.get('@start')
      .trigger('mousedown', 'right')
      .trigger('mousemove', { clientX: 500 })
      .trigger('mouseup')
      .should('have.css', 'width', '500px')
  })

  it('should have height 500px', () => {
    cy.get('@start')
      .trigger('mousedown', 'bottom')
      .trigger('mousemove', { clientY: 500 })
      .trigger('mouseup')
      .should('have.css', 'height', '500px')
  })
})
