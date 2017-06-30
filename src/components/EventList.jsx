import React, { Component } from "react";
import { connect } from "react-redux";
import EventItem from 'Components/EventItem'
import { geteventlist } from "Redux/actions/eventActions";

class EventList extends Component {
  
  componentWillMount(){
    this.props.geteventlist();
  }
  
  render() {
    const { event_list } = this.props.event;
    //console.log(event_list)
    return (<div>
         {/*<div className="notification is-danger">
            <button className="delete" ></button>
            This template is not yet finished, it may change. Please check the readme for more information.
          </div>*/}
          
          <div>
          
             {event_list.map((ev,index)=>{
                return <EventItem p key={index} event={ev}></EventItem>
            })}
          </div>
          </div>)
  }

  
}

function mapStateToProps(state) {
  //console.log(state.event);
  return {
    event: state.event
  };
}


export default connect(mapStateToProps, { geteventlist })(EventList);
