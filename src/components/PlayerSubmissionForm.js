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
      [e.target.name]: e.target.value
    })
  };

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
  };

  const isEmpty = (name) => {
    return name === '';
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>
      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitForm} >
        <div className="PlayerSubmissionForm__poem-inputs">

          {props.fields.map((value, i) => {
            if (value.key) {
              return (
                <input
                  key={`${i}`}
                  name={`${value.key}`}
                  placeholder={`${value.placeholder}`}
                  onChange={onFormChange}
                  type='text'
                  value={inputForm[value.key] || ''}
                  className={isEmpty(inputForm[`${value.key}`]) ? 'empty' : 'filled'}
                />
              );
            } else {
              return value;
            };
          })}

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

