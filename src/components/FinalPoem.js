import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const revealedPoem = 
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      { props.submissions.map((value, i) => {
        return <p key={i}>{value}</p>
      })}
    </section>
  
  const poemButton = 
        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn" 
            onClick={ props.revealPoem }/>
        </div>

  const showPoem = props.isSubmitted ? revealedPoem : poemButton
    return (
      <div className="FinalPoem">
        {showPoem}
      </div>
    );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;