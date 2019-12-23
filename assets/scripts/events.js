'use strict'

const api = require('./api')
const formFields = require('../../lib/get-form-fields')
const ui = require('./ui')
//

// const onGetSkillByID = event => {
//   event.preventDefault()
//   // console.log('get skills button')
//   const form = event.target
//   const formData = formFields(form)
//
//   api.getSkillByID(formData)
//     .then(ui.onGetSkillByIDSuccess)
//     .catch(ui.onGetSkillsFailure)
// }

// const onDeleteSkill = event => {
//   event.preventDefault()
//   // console.log('get skills button')
//   const form = event.target
//   const formData = formFields(form)
//
//   api.deleteSkill(formData)
//     .then(ui.onDeleteSkillSuccess)
//     .catch(ui.onDeleteSkillFailure)
// }

const onDeleteButton = event => {
  event.preventDefault()
  const skillID = $(event.target).data('id')
  // console.log(skillID)
  // console.log('onDeleteSkill works')
  api.deleteButton(skillID)
    .then(function () {
      onGetSkills(event)
    })
    .then(ui.onDeleteSkillSuccess)
    .catch(ui.onDeleteSkillFailure)
}

const onHideSkills = event => {
  // console.log('hide click')
  event.preventDefault()
  $('#getSkills2').hide()
  $('#getSkills1').hide()
  $('.show_skills').show()
  $('.hide_skills').hide()
}

const onGetSkills = event => {
  event.preventDefault()

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
  // console.log('form data is', formData)

  api.createSkill(formData)
    .then(function () {
      onGetSkills(event)
    })
    .then(ui.onCreateSkillSuccess)
    .catch(ui.onCreateSkillFailure)
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
  // console.log('button click')

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

const onUpdateSkill = event => {
  const skillID = $(event.target).data('id')
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  api.updateSkill(skillID, formData)
    .then(ui.onUpdateSkillSuccess)
    .then(function (form) {
      onGetSkills(event)
    })
    .catch(ui.onUpdateSkillFailure)
}

// const onUpdateSleep = event => {
//   event.preventDefault()
//
//   const sleepdata = event.target
//   const formData = getFormField(sleepdata)
//   const sleepid = $(event.target).data('id')
//   api.updateSleep(formData, sleepid)
//     .then(function (sleepdata) {
//       onGetSleeps(event)
//     })
//     .then(ui.updateSleep)
//     .catch(ui.failure)
// }

const addHandlers = event => {
  // $('#deleteSkill').on('submit', onDeleteSkill)
  $('#getSkills2').on('submit', '.deleteSkill', onDeleteButton)
  $('#skillProgress').on('submit', onGetSkills)
  $('#hide_skill').on('click', onHideSkills)
  // $('#skillProgressID').on('submit', onGetSkillByID)
  $('#newSkill').on('submit', onNewSkill)
  $('#getSkills2').on('submit', '.updateSkill', onUpdateSkill)
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#changePass').on('submit', onChangePass)
  $('#signOut').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
