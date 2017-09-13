import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

class Queue extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.addNewTicketToList = this.addNewTicketToList.bind(this);
    this.updateTicketTimeSinceOpened = this.updateTicketTimeSinceOpened.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
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

  addNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  updateTicketTimeSinceOpened() {
    console.log("check");
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
     ticket.setTimeSinceOpened()
    );
    this.setState({masterTicketList:newMasterTicketList})
  }

  render(){
    return (
      <div>
        <TicketList ticketList = {this.state.masterTicketList}/>
        <NewTicketControl onNewTicketCreation= {this.addNewTicketToList}/>
      </div>
    );
  }
}

export default Queue;
