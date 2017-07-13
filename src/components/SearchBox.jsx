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
      open: false,
      value: ''

    };
    
  }
 
  handleClick(e) {
    //this.props.searchUser(this.state.value);
    if(!this.state.open){
      this.setState({open: !this.state.open});
      //console.log("after :" + this.state.open)
    }
  }
 
  handleChange(e) {
    this.setState({value: e.target.value});
    //console.log(this.props.user.user_list.length)
    this.props.searchUser(this.refs.target.value);
    if(this.refs.target.value == "" || this.props.user.user_list.length == 0){
      this.setState({open: false});
      return ;
    }
    if(!this.state.open){
      this.setState({open: true});
    }
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
          <input className="input" ref="target" type="text" placeholder="Search Wingkan" onChange={this.handleChange.bind(this)} onClick={this.handleChange.bind(this)} />
          <a className="button is-dark" onClick={this.handleClick.bind(this)}>
            {" "}&nbsp; <i className="fa fa-search" /> &nbsp;
          </a>
        </div>
        <Popover
          placement='bottom'
          style={PopoverStyle}
          contrainer={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)} >
          <ul className="menu-list">
            {user_list.map((usr,index)=>{
                return <li key={index}><a><SearchItem  user={usr}></SearchItem></a></li>
            })}
          </ul>
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
