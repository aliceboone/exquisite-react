import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [inputForm, setInputForm] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const onFormChange = (e) => {
    setInputForm({
      ...inputForm, 
      [e.target.name]: e.target.value})
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    props.sendSubmission(inputForm);

    setInputForm({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });

  }

  const [poemLines, setPoemsLines] = useState([]);

  const onSubmitForm(e, newPoem) {
    setPoemsLines([...inputForm, newPoem]);
  }
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitForm} >

        <div className="PlayerSubmissionForm__poem-inputs">

          <span>The</span>
          <input
            name="adj1"
            placeholder="adjective"
            type="text"
            onChange={onFormChange}
            value={inputForm.adj1} />

          <input	         
            name="noun1"
            placeholder="noun"
            type="text" 
            onChange={onFormChange}
            value={inputForm.noun1} />

          <input
            name="adv"
            placeholder="adverb"
            type="text"
            onChange={onFormChange}
            value={inputForm.adv} />

          <input
            name="verb"
            placeholder="verb"
            type="text"
            onChange={onFormChange} 
            value={inputForm.verb}/>

          <span>the</span>

          <input
            name="adj2"
            placeholder="adjective"
            type="text"
            onChange={onFormChange}
            value={inputForm.adj2} />
          <input
            name="noun2"
            placeholder="noun"
            type="text"
            onChange={onFormChange}
            value={inputForm.noun2} />

          <span>.</span>
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;