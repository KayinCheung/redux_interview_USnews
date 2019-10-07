import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAPI } from './actions/fetchActions'

class InputBox extends Component {

    render() {
      if (this.props.error){
        document.getElementById("searchBox").disabled = true
        document.getElementById("searchBox").placeholder = "Search Unavailable"
      }
      return (
        <div className="control has-icons-left has-icons-right is-flex">
        <input className="input" type="text" placeholder="Search" id="searchBox"
        
        onKeyPress={(e) => {
          //Search on enter press
          if (e.key === "Enter" && !this.props.error){
            this.props.fetchAPI(e.target.value, 1)
          }}}
        
        //Search on change
        onChange={(e) => {
          if (!this.props.error){
            this.props.fetchAPI(e.target.value, 1)
          }}
        }  
          />
        <span className="icon is-medium is-left">
          <i className="fas fa-search clickableIcon"></i>
        </span>
      </div>
      );
    }
  }

const mapStateToProps = state => ({
  error: state.fetch.error,
})
export default connect(mapStateToProps, { fetchAPI })(InputBox);

