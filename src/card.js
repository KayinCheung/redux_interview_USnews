import React, { Component } from 'react';
import { offsetDateTime } from './util'
import { connect } from 'react-redux'
import images from './images'

class Card extends Component {
    render() {

      let data = this.props.data || []

      let minWidth = 400;
      if (window.innerWidth < minWidth) minWidth = window.innerWidth
      
      return (
        <div className="container columns is-multiline is-marginless is-paddingless is-centered">
             {data.map((row, i) => (
                <div className='column is-one-third is-flex clickableBox' 
                    style={{minWidth:minWidth}} key={`${i}-${row["title"]}`}>
                <div className="card" key={row["title"]} 
                    onClick={() => window.open(row["url"])}>
                <div className="paddedBox">
                <article className="media is-marginless">
                    <div className="media-left">
                        <div className="circle has-text-centered is-size-4">{(row["source"]["name"][0]).toUpperCase()}</div>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <strong>{row["source"]["name"]}</strong>
                            <br/>
                            <p className="is-size-7">{offsetDateTime(row["publishedAt"])}</p>
                        </div>
                    </div>
                </article>
                </div>
                    <div className="card-image">
                    <figure className="image">
                        <img src={(row["urlToImage"] || images[row["source"]["name"]])} alt="cardimg"/>
                    </figure>
                    </div>

                    <div className="card-content has-text-left">
                    <p className="title is-5">{row["title"]}</p>
                    <div className="content is-size-7">
                        {row["description"]}    

                    <br/>
                    </div>
                    </div>
                </div>
                </div>
          ))}
        </div>
      );
    }
  }


const mapStateToProps = state => ({
  data: state.fetch.data,
  loading: state.fetch.loading

})

export default connect(mapStateToProps, {})(Card);