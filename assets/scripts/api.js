'use strict'
const store = require('./store')
const config = require('./config')

const changePass = formData => {
  // console.log('your change-pass button worked!')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
  // console.log('you changed your password!')
}

const createSkill = formData => {
  console.log('formdata', formData)
  return $.ajax({
    url: config.apiUrl + '/skills',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const deleteSkill = (formData) => {
  console.log(formData + ' formData')
  console.log('deleteSkill runs')
  return $.ajax({
    url: config.apiUrl + '/skills/' + formData.skill.id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getSkills = () => {
  console.log('getSkills api')
  return $.ajax({
    url: config.apiUrl + '/skills',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getSkillByID = (formData) => {
  console.log('getSkillByID api')
  console.log('api formData ' + formData)
  return $.ajax({
    url: config.apiUrl + '/skills/' + formData.skill.id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const signIn = formData => {
  // console.log('your sign-in button worked!')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const signOut = () => {
  // console.log('your sign-out button worked!')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
  // console.log('you signed out!')
}

const signUp = formData => {
  console.log('your sign-up api initiates!')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const updateSkill = (formData) => {
  console.log('formData', formData)
  console.log('updateSkill api works')

  return $.ajax({
    url: config.apiUrl + '/skills/' + formData.skill.id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  changePass,
  createSkill,
  deleteSkill,
  getSkillByID,
  getSkills,
  signUp,
  signIn,
  signOut,
  updateSkill
}
