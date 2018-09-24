/**
 * Component that represents one letter of the virtual Alphabet
 */

import React from 'react'
import './Alphabet.css'
import PropTypes from 'prop-types'

const Alphabet = ({ alphabetChar, index, onClick }) => (
    <div className={"spanAlphabetCharacter"}
          key={index}
          onClick={() => onClick(alphabetChar)}>{ alphabetChar }</div>
)

Alphabet.propTypes = {
    alphabetChar: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Alphabet