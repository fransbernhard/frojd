import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import { fetchPostsSuccess, fetchOffices } from "../redux/actions/index"
import Table from './Table.js'
import Header from './Header.js'
import data from '../../data.json'

class Home extends Component {
  constructor(props){
    super(props)
    this.props.fetchPostsSuccess(data)
    this.props.fetchOffices(data)
  }

  render(){
    return (
      <div className="bg">
        <div className="home-wrapper">
          <Header />
          <Table/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostsSuccess, fetchOffices}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
