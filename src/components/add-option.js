import React  from "react";

export default class AddOption extends React.Component {
    
    state = {
        error : undefined
    }
    addOption =  (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);  
        
        this.setState(() => ({error}))

        if (!error) {
            e.target.elements.option.value = "";
        }
    }
    render() {
        return (
            <div className="add-option">
                {this.state.error && <p className="add-option-message">{this.state.error}</p>}
                <form onSubmit={this.addOption} className="add-option-form">
                    <input className="add-option-input" type="text" name="option" id="option" />
                    <button className="button" >add option</button>
                </form>
            </div>
        )
    }
}