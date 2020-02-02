'use strict'

// contains all AJAX calls to the API

// access the API's URL via the config file (dev. & prod. URLs)
const config = require('./../config')
const store = require('./../store')

const createGame = () => {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: '{}'
  })
}

const updateGame = () => {
  return $.ajax({
    url: `${config.apiUrl}/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: store.move
  })
}

const indexOfGamesPlayed = () => {
  return $.ajax({
    url: `${config.apiUrl}/games?over=true`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: ''
  })
}

const indexOfAllGames = () => {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: ''
  })
}

module.exports = {
  createGame,
  updateGame,
  indexOfGamesPlayed,
  indexOfAllGames
}
