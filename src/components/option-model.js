import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Options!"
        onRequestClose={props.handleSelectedOption}
        className="modal"
    >
        <h3 className='modal__title'>Selected Options</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleSelectedOption}>okay</button>
    </Modal>
)

export default OptionModal