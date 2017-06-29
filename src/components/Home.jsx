import React, { Component } from 'react'
import styles from 'Components/css/timeline.css'
import { connect } from "react-redux";
import Profilebox from 'Components/Profilebox'
import EventList from 'Components/EventList'

class Home extends Component {

  render() {
    return (<div>
    <section className="section main">
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <Profilebox />
          <div className="spacer"></div>
          <div className="box trending">
            <p className="trend-title"><span className="title is-5">Trends</span> · <a href="#">change</a></p>
            <p className="trend-hashtag"><a href="#">#hashtag1</a><br />13k statuses</p>
            <p className="trend-hashtag"><a href="#">#hashtag2</a><br />29k statuses</p>
            <p className="trend-hashtag"><a href="#">#hashtag3</a><br />2k statuses</p>
            <p className="trend-hashtag"><a href="#">#hashtag4</a><br />9k statuses</p>
            <p className="trend-hashtag"><a href="#">#hashtag5</a><br />18k statuses</p>
            <p className="trend-hashtag"><a href="#">#hashtag6</a><br />168k statuses</p>
          </div>
        </div>
        <div className="column is-6">
          
          <EventList />
        </div>
        <div className="column is-3">
          <div className="box">
            <p><span className="title is-5">Who to follow</span> · <a href="#">Refresh</a> · <a href="#">View All</a></p>
            <hr />
            <div className="columns">
              <div className="column is-3 is-marginless">
                <div className="image">
                  <img src="https://placehold.it/200x200" />
                </div>
              </div>
              <div className="column is-9">
                <p>
                  <a href="#">
                    <strong>John Smith</strong>
                    @jsmith
                  </a> 
                  <a href="#">
                    <i className="fa fa-times"></i>
                  </a>
                </p>
                <a className="button is-primary is-small">
                  <span>
                    + Follow
                  </span>
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-3 is-marginless">
                <div className="image">
                  <img src="https://placehold.it/200x200" />
                </div>
              </div>
              <div className="column is-9">
                <p>
                  <a href="#">
                    <strong>Jane Smith</strong>
                    @janesmith
                  </a> 
                  <a href="#">
                    <i className="fa fa-times"></i>
                  </a>
                </p>
                <a className="button is-primary is-small">
                  <span>
                    + Follow
                  </span>
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-3 is-marginless">
                <div className="image">
                  <img src="https://placehold.it/200x200" />
                </div>
              </div>
              <div className="column is-9">
                <p>
                  <a href="#">
                    <strong>Mike Scott</strong>
                    @mscott
                  </a> 
                  <a href="#">
                    <i className="fa fa-times"></i>
                  </a>
                </p>
                <a className="button is-primary is-small">
                  <span>
                    + Follow
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  </div> )
  }

  
}
export default connect(null, { })(Home);