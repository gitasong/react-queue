import React from "react";
import PropTypes from "prop-types";

function Step(props){

  return (
    <div>
      <span>{props.stepID}</span> - <span>{props.instruction}</span>
      <h2>Lovin dat jelly</h2>
      <button type="click" onClick={this.showSteps}>See the rest</button>
    </div>
  );

}

Step.propTypes = {
  stepID: PropTypes.string,
  instruction: PropTypes.string,
};

export default Step;
