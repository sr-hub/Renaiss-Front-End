'use strict'

const api = require('./api')
const formFields = require('../../lib/get-form-fields')
const ui = require('./ui')
//

const onGetSkillByID = event => {
  event.preventDefault()
  console.log('get skills button')
  const form = event.target
  const formData = formFields(form)

  api.getSkillByID(formData)
    .then(ui.onGetSkillByIDSuccess)
    .catch(ui.onGetSkillsFailure)
}

const onDeleteSkill = event => {
  event.preventDefault()
  console.log('get skills button')
  const form = event.target
  const formData = formFields(form)

  api.deleteSkill(formData)
    .then(ui.onDeleteSkillSuccess)
    .catch(ui.onDeleteSkillFailure)
}

const onGetSkills = () => {
  event.preventDefault()
  console.log('get skills button')
  const form = event.target
  const formData = formFields(form)

  api.getSkills(formData)
    .then(ui.onGetSkillsSuccess)
    .catch(ui.onGetSkillsFailure)
}

const onNewSkill = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  console.log('form data is', formData)

  api.createSkill(formData)
    .then(console.log('api works'))
    .catch(console.error)
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
  $('#deleteSkill').on('submit', onGetSkills)
  $('#skillProgress').on('submit', onGetSkills)
  $('#skillProgressID').on('submit', onGetSkillByID)
  $('#newSkill').on('submit', onNewSkill)
  // $('.TTT').on('click', addArray)
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#changePass').on('submit', onChangePass)
  $('#signOut').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
