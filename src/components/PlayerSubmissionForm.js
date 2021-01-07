import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [inputForm, setInputForm] = useState();

  const onFormChange = (e) => {
    setInputForm({
      ...inputForm, 
      [e.target.name]: e.target.value})
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    props.sendSubmission(inputForm);
  }

  const [poemLines, setPoemsLines] = useState([]);

  const onSubmitForm(e, newPoem) {
    setInputForm([...inputForm, newPoem]);
  }
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitForm} >
        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <input
            placeholder="hm..."
            type="text" />

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
