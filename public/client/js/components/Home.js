import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchAll } from "../redux/actions/index"

import image from '../../img/four.jpg';
import Posts from './Posts.js'

var bgStyle = {
  width: "100vw",
  minHeight: "90vh",
  backgroundImage: "url(" + image + ")"
}

class Home extends Component {
  constructor(props){
    super(props)

    const URL = 'https://jsonplaceholder.typicode.com/posts'
    this.props.fetchAll(URL)
  }

  render(){
    return (
      <div className="bg" style={bgStyle}>
        <div className="home-wrapper">
          <Posts/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAll}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
