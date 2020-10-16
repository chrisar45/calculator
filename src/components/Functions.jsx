import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({ onContentClear, onDelete, onPercent}) => (
    <section className="functions">
        <Button type={"button-long-text"} text={"AC"} clickHandler={onContentClear}/>
        <Button type={"button-long-text"} text={"C"} clickHandler={onDelete}/>
        <Button type={"button-long-text"} text={"%"} clickHandler={onPercent}/>
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onPercent: PropTypes.func.isRequired
}

export default Functions