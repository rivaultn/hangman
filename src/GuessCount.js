/**
 * Component that represents the number of attempts
 */

import PropTypes from 'prop-types'
import React from 'react'

import './GuessCount.css'

const GuessCount = ({ guesses }) => (
    <div className="guesses">
        Nombres de tentatives : {guesses}</div>
)

GuessCount.propTypes = {
  guesses: PropTypes.number.isRequired,
}

export default GuessCount
