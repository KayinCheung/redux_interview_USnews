import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAPI } from './actions/fetchActions'

class InputBox extends Component {
    render() {
      return (
        <div className="control has-icons-left has-icons-right">
        <input className="input is-fullwidth" type="text" placeholder="Search" id="searchBox"
        onKeyPress={(e) => {

          //Search on enter press
          if (e.key === "Enter"){
            this.props.fetchAPI(e.target.value, 1)
          }}}
        
        //Search on change
        onChange={(e) => this.props.fetchAPI(e.target.value, 1)}  
          />
        <span className="icon is-medium is-left">
          <i className="fas fa-search clickableIcon"></i>
        </span>
      </div>
      );
    }
  }

 
export default connect(null, { fetchAPI })(InputBox);

