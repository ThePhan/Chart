import React from 'react';
import linkState from 'react-link';

var State = React.createClass({
  getInitialState: function(){
    return{
      message: 'hello',
      user: []
    };
  },
  handleOnChange:function(field, e){
    var newuser = this.state.user;
    newuser[field] = e.target.value;
    this.setState({user: newuser});
  },
  render: function(){
    return(
      <div>
      <p>kasdakjdkakdjad</p>
        <input type="text" placeholder="kadkadkjda" valueLink={linkState(this, 'message')} />
        {this.state.message}
        <br />
        <input type="text" placeholder="onchange...." value={this.state.user.firstName  } onChange={this.handleOnChange.bind(this, 'firstName')}/>
        <input type="text" placeholder="ddddddddddddddddd" value={this.state.user.lastName} onChange={this.handleOnChange.bind(this, 'lastName')} />
        {this.state.user.firstName} <br />
        {this.state.user.lastName}
      </div>
    );
  }
});
module.exports = State;
