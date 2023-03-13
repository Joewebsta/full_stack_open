describe('Note app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function () {
    cy.contains('Notes')
  })

  it('login form can be opened', function () {
    cy.contains('log in').click()
  })

  it('user can login', function () {
    cy.contains('log in').click()
    cy.get('#username').type('joewebster')
    cy.get('#password').type('nike')
    cy.get('#login-button').click()

    cy.contains('Joe Webster logged in')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.contains('log in').click()
      cy.get('input:first').type('joewebster')
      cy.get('input:last').type('nike')
      cy.get('#login-button').click()
    })

    it('a new note can be created', function () {
      cy.contains('new note').click()
      cy.get('input').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })
  })
})