/**
 * Component that represents one letter of the word to guess
 */
import PropTypes from 'prop-types'
import React from 'react'

import './WordLetter.css'

const HIDDEN_SYMBOL = '_'

const WordLetter = ({ wordLetter, feedback}) => (
    <div className={`wordLetter ${feedback}`}>
        <span className="symbol">
          {feedback === 'hidden' ? HIDDEN_SYMBOL : wordLetter}
        </span>
    </div>
)

WordLetter.propTypes = {
    wordLetter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'visible',
    ]).isRequired
}

export default WordLetter
