import React, { Component } from 'react';
import Card from './card'

import { connect } from 'react-redux'
import { fetchAPI } from './actions/fetchActions'


class Body extends Component {


  //Run API calls on load
  componentDidMount(){
    this.props.fetchAPI();

    const options = {
      root: document.querySelector(null), /* or `null` for page as root */
    }
    let callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.props.loading === false) {
          this.props.fetchAPI(this.props.search, (this.props.page + 1));
          //console.log("Intersecting")
        }
      });
    }
    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector('#end');
    observer.observe(target);

  }

  render(){

  return (  
      <div className="container is-centered body" id="checkBody">

        <Card/>
        <br/>

        {this.props.error === true ? <p className="has-text-danger">Error loading more articles. Please refresh and try again.</p> : null}

        {this.props.totalResults === 0 ? <p>No results for the search term: <b>{this.props.search}</b></p> : null}

        {(this.props.totalResults > 0 && this.props.totalResults <= this.props.page*10) ? 
        <p>You have reached the end of search results for search term: <b>{this.props.search}</b></p> : null}

        {this.props.loading === true && this.props.error === false ?
           <i className="fas fa-sync fa-spin has-text-black is-size-1"></i> : null}
        <div id="end"><br/></div>
        <br/>
      </div>
  
  );
}
}

const mapStateToProps = state => ({
  search: state.fetch.search,
  data: state.fetch.data,
  page: state.fetch.page,
  loading: state.fetch.loading,
  error: state.fetch.error,
  totalResults: state.fetch.totalResults
})

export default connect(mapStateToProps, { fetchAPI })(Body);
