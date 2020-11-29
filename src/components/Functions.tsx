import React, { FC } from 'react'
import Button, { ButtonClickHandler } from './Button'


type Props = {
    onContentClear: ButtonClickHandler, 
    onDelete: ButtonClickHandler, 
    onPercent: ButtonClickHandler
}

const Functions: FC<Props> = ({ onContentClear, onDelete, onPercent}) => (
    <section className="functions">
        <Button type={"button-long-text"} text={"AC"} clickHandler={onContentClear}/>
        <Button type={"button-long-text"} text={"C"} clickHandler={onDelete}/>
        <Button type={"button-long-text"} text={"%"} clickHandler={onPercent}/>
    </section>
)

export default Functions