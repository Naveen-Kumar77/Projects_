import React from "react"
import Option from "./option"

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header-title">Your Options</h3>
            <button onClick={props.handleRemoveAll} className="button button--link">Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget-message">Please add some options!</p>}
        {props.options.map((option, index)=>{
            return <Option key={option} optionText={option} handleRemoveOption={props.handleRemoveOption} count={index + 1}></Option>
        })}
    </div>
)

export default Options