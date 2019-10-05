import React, { Component } from 'react';
import debounce from "lodash.debounce";

import './App.scss';
import Card from './card'

import { connect } from 'react-redux'
import { fetchAPI } from './actions/fetchActions'

class Body extends Component {

  //Run API calls on load
  componentDidMount(){

    this.props.fetchAPI();

    //Runs API call when scrolled to bottom of page
    window.onscroll = debounce(() => {
      if (this.props.loading) return;
      console.log(window.innerHeight)
      if (
        (window.innerHeight + document.documentElement.scrollTop + 100)
        >= document.documentElement.offsetHeight
      ) {
        this.props.fetchAPI(this.props.search, (this.props.page + 1));
      }
    }, 100);
  }

  render(){
  return (
    <section className="section">
      
      <div className="container is-centered" style={{flex: 1}}>
        <Card/>
        <br/>
        {this.props.error === true ? <p className="has-text-danger">Error loading more articles. Please refresh and try again.</p> : null}

        {this.props.totalResults === 0 ? <p>No results for the search term: <b>{this.props.search}</b></p> : null}

        {(this.props.totalResults > 0 && this.props.totalResults <= this.props.page*10) ? 
        <p>You have reached the end of search results for search term: <b>{this.props.search}</b></p> : null}

        {this.props.loading === true && this.props.error === false ?
           <i className="fas fa-sync fa-spin has-text-black is-size-1"></i> : null}
        <br/>
      </div>
    </section>
  );
}
}

const mapStateToProps = state => ({
  search: state.fetch.search,
  page: state.fetch.page,
  loading: state.fetch.loading,
  error: state.fetch.error,
  totalResults: state.fetch.totalResults
})

export default connect(mapStateToProps, { fetchAPI })(Body);
