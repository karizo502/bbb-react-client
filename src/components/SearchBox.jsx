import React, { Component } from "react";
import { connect } from "react-redux";
import SearchItem from "Components/SearchItem";
import { searchUser } from "Redux/actions/userActions";
import Popover from 'react-simple-popover';

const PopoverStyle = {
  width: ''
};

class SearchBox extends Component {
  componentWillMount(){
    this.props.searchUser();
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
 
  handleClick(e) {
    console.log("before :" + this.state.open)
    if(!this.state.open){
      this.setState({open: !this.state.open});
      console.log("after :" + this.state.open)
    }
    //this.setState({open: !this.state.open});
    //console.log(this.state.open)
  }
 
  handleClose(e) {
    
    this.setState({open: false});
    //console.log(this.state.open)
  }
  render() {
     const { user_list } = this.props.user;
    //console.log(event_list)
    return (
      <div>
   
        <div className="control has-addons searchbox">
          <input className="input" ref="target" type="text" placeholder="Search Wingkan" onClick={this.handleClick.bind(this)} />
          <a className="button is-dark" onClick={this.handleClick.bind(this)}>
            {" "}&nbsp; <i className="fa fa-search" /> &nbsp;
          </a>
        </div>
        <Popover
          placement='bottom'
          style={PopoverStyle}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)} >
          {user_list.map((usr,index)=>{
                return <SearchItem p key={index} user={usr}></SearchItem>
            })}
        </Popover>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state.event);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { searchUser })(SearchBox);
