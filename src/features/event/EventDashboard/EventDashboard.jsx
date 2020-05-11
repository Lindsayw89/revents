import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList';

import cuid from 'cuid';
import{connect} from 'react-redux';
import {createEvent, deleteEvent, updateEvent} from '../eventActions';

const mapStateToProps = (state)=> ({
  events: state.events
})
const mapDispatchToProps = {
  createEvent, deleteEvent, updateEvent
}

class EventDashboard extends Component {
 


  // handleCreateFormOpen = () => {   dont need, personal example
  //   this.setState({
  //     isOpen: true,               dont need, personal example
  //     selectedEvent: null
  //   })
  //   }

    // handleFormCancel = () => {
    //   this.setState({              dont need, personal example
    //     isOpen: false
    //   })
    // }

  // handleCreateEvent=(newEvent) =>{
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL ='/assests/user.png';
  //   this.props.createEvent(newEvent);
  
  // };

  // handleSelectEvent = (event) => {
  //   this.setState({
  //   selectedEvent: event,        dont need, personal example
  //   isOpen: true
  // });
  // };
  
//   handleUpdateEvent =(updatedEvent) => {
//    this.props.updateEvent(updatedEvent)
//     this.setState(({ events})=> ({
//   isOpen: false,                   dont need, personal example
//   selectedEvent: null
// }))
// }

handleDeleteEvent = (id) =>{
  this.props.deleteEvent(id);
}
    render() {
      const {events}= this.props
        return (
    <Grid>
        <Grid.Column width={10}>
    <EventList events={events} 
   
    deleteEvent={this.handleDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
        <h2> Activity Feed</h2>
        </Grid.Column>
    </Grid>
        )
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(EventDashboard);