import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

class Pbj extends React.Component{

  constructor(props) {
    super(props);
    this.state = "Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)";
    console.log(this.state);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  render(){
    return (
      <div>
        <TicketList ticketList = {this.state.masterTicketList}/>
        <NewTicketControl onNewTicketCreation= {this.addNewTicketToList}/>
      </div>
    );
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updateTicketTimeSinceOpened(),
      5000
    );
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceOpenedChecker);
  }
}

export default Queue;
