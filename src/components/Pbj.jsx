import React from "react";
import Step from "./Step";
import PropTypes from "prop-types";

class Pbj extends React.Component{

  constructor(props) {
    super(props);
    this.state = {message: "1. Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)"};
    console.log(this.state);
  }

  componentWillMount() {
    console.log("2. Open jar of peanut butter by twisting the lid counter-clockwise.");
  }

  render(){
    return (
      <div>
        <Step
          stepID="1"
          instruction="put peanut butter on bread"
        />
      </div>
    );
  }

  componentDidMount() {
    // this.continueLogging = setInterval(() =>
      console.log("3. Pick up a butter knife by the handle and insert into the jar of peanut butter"
    );
  }

  componentWillReceiveProps() {
    console.log("4. Withdraw the knife from the peanut butter, and evenly spread it onto one slice of bread.");
  }

  shouldComponentUpdate() {
    console.log("5. Grab a second slice of bread.");
    return true;
  }

  componentWillUpdate() {
    console.log("6. Repeat steps 2-4 with second slice of bread, using jelly instead of peanut butter.");
  }

  componentDidUpdate() {
    console.log("7. Press the two slices of bread together so that the peanut butter and jelly meet.");
  }

  componentWillUnmount(){
    console.log("8. Cut the sandwich diagonally using one of the knives.");
    // clearInterval(this.continueLogging);
  }
}

export default Pbj;
