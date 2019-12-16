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

const deleteSkill = () => {
  // console.log('your update game function worked!')
  // console.log(store.game)
  return $.ajax({
    url: config.apiUrl + '/skills/' + store.game.id,
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

const updateSkill = (index, symbol, gameOver) => {
  // console.log('your update game function worked!')
  // console.log(store.game)
  return $.ajax({
    url: config.apiUrl + '/skills/' + store.skill.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': symbol
        },
        'over': gameOver
      }
    },
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  changePass,
  getSkills,
  signUp,
  signIn,
  signOut,
  updateSkill
}
