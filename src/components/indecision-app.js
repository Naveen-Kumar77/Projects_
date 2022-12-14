import React from 'react';
import AddOption from './add-option';
import Options from './options';
import Action from './action';
import Header from './header';
import OptionModal from './option-model';

export default class Indecision extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options){
                this.setState(() => ({ options }))
            }
        }
        catch(e){
            // 
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handlepick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() => ({
                selectedOption: option
            }))
    }
    handleSelectedOption = () => {
        this.setState(() => ({ selectedOption:undefined }))
    }
    handleRemoveAll = () => {
        this.setState( () => ({options: []}));
    }
    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handleAddOption = (option) => {

        if (!option){
            return "Enter a valid option!!"
        }
        else if (this.state.options.indexOf(option) > -1 ){
            return "This option already exists"
        }

        this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }
    render() {
        const title = "Indecision";
        const subtitle = "Pay your life in the hands of computer";
        return (
            <div>   
                <Header title={title} subtitle={subtitle} />
                <div className='container'>
                    <Action handlepick={this.handlepick} hasOptions={this.state.options.length > 0}/>
                    <div className='widget'>
                        <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveOption={this.handleRemoveOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleSelectedOption={this.handleSelectedOption}/>
            </div>
        )
    }
}