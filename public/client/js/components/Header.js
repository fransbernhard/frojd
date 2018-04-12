import React, { Component } from 'react'
import image from '../../img/search.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearch } from '../redux/actions';

var searchIconStyle = {
  padding: "2rem",
  backgroundImage: "url(" + image + ")"
}

var styli = {
	width: '200px',
	height: '52px'
}

class Header extends Component {

  constructor(props){
    super(props)

    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSearchInput(e){
    this.props.updateSearch(e.target.value.substr(0, 20).toLowerCase())
  }

  handleChange(e){
    console.log(e.target.value)
  }

  handleFilterClick(e){
    e.preventDefault()
  }

  render(){
    return(
      <header>
        <div className="search-container">
          <input
            className="btn"
            type="text"
            placeholder="Search.."
            onChange={this.handleSearchInput}
          />
        </div>

        <select className="btn" style={styli} onChange={this.handleChange}>
          {this.props.office.map((off, i) =>
 						<option key={i} value={off}>{off}</option>
 					)}
        </select>

        <button className="btn" onClick={this.handleFilterClick}>Filter</button>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
		rows: state.rows,
    office: state.office
	}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateSearch }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
