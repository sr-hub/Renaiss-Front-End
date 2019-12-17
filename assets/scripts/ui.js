'use strict'
const store = require('./store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const onChangePassSuccess = () => {
  onSuccess('You Changed Your Password!')
}

const onChangePassFailure = () => {
  onFailure('Change Password Failed!')
}

const onDeleteSkillSuccess = () => {
  onSuccess('You Deleted A Skill!')
}

const onDeleteSkillFailure = () => {
  onFailure('Oh no. Something went wrong. Did you try to delete the right skill?')
}

const onGetSkillByIDSuccess = (response) => {
  console.log(response)
  $('#getSkillByID').text(response.skills)
}

const onGetSkillsSuccess = (response) => {
  console.log(response)
  $('#getSkills1').text('You have ' + response.skills.length + ' skills!')
  $('#getSkills2').text(response.skills)
}

const onGetSkillsFailure = () => {
  onFailure('Something Went Wrong! Are You Sure There Are Stored Skills?')
}

const onSignOutSuccess = () => {
  onSuccess('You Signed Out! Come Back Soon!')
  $('#afterAuth').hide()
  $('#beforeAuth').show()
  $('#duringPlay').hide()
  store.user = {}
}

const onSignOutFailure = () => {
  onFailure("You Couldn't Be Logged Out.")
}

const onSignUpSuccess = () => {
  onSuccess('You Signed Up! Welcome to Skill Tracker!')
}

const onSignUpFailure = () => {
  onFailure('Something Went Wrong! Does Your Account Already Exist?')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  // console.log(store)
  onSuccess('Sign In Successful! Welcome Back.')
  $('#afterAuth').show()
  $('#beforeAuth').hide()
}

const onSignInFailure = () => {
  onFailure("Oops. Couldn't Sign You In. Please Try Again or Create An Account.")
}

module.exports = {
  onDeleteSkillFailure,
  onDeleteSkillSuccess,
  onGetSkillByIDSuccess,
  onGetSkillsSuccess,
  onGetSkillsFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePassSuccess,
  onChangePassFailure,
  onSignOutSuccess,
  onSignOutFailure
}
