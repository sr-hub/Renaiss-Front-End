'use strict'

const api = require('./api')
const formFields = require('../../lib/get-form-fields')
const ui = require('./ui')
//

const onGetSkills = () => {
  event.preventDefault()
  console.log('get skills button')
  const form = event.target
  const formData = formFields(form)

  api.getSkills(formData)
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}

const onGetGames = (id) => {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)

  gameApi.getAllGames(formData)
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}

const onNewGame = (event) => {
  event.preventDefault()
  // const class1 = $('.TTT').attr('class')
  // console.log(class1)

  gameApi.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onChangePass = event => {
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  api.changePass(formData)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassFailure)
}

const onSignUp = event => {
  event.preventDefault()
  console.log('button click')

  const form = event.target
  const formData = formFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = () => {
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const addHandlers = event => {
  $('#skillProgress').on('click', onGetSkills)
  // $('.TTT').on('click', classClicked)
  // $('.TTT').on('click', addArray)
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#changePass').on('submit', onChangePass)
  $('#signOut').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
