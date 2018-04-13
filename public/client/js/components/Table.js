import React, {Component} from 'react'
import { connect } from "react-redux"

class Table extends Component {

	render(){
		let searchRes

		if (this.props.filterWord != "" && this.props.searchWord != "") {
			console.log("BOTH EXISTS");
			searchRes = this.props.rows.filter(
				(row) => {
					let nameString = row.firstName + " " + row.lastName
					if(nameString.toLowerCase().indexOf(this.props.searchWord) !== -1 && row.office.toLowerCase().indexOf(this.props.filterWord) !== -1) {
						return true
					} else {
						return false
					}
				}
			)
		} else if(this.props.searchWord != ""){
			console.log("SEARCHWORK EXISTS");
			searchRes = this.props.rows.filter(
				(row) => {
					let nameString = row.firstName + " " + row.lastName
					console.log("HEHE: " + nameString.toLowerCase().indexOf(this.props.searchWord) !== -1);
					return nameString.toLowerCase().indexOf(this.props.searchWord) !== -1
				}
			)
		} else if (this.props.filterWord != "") {
				console.log("FILTER EXISTS");
				searchRes = this.props.rows.filter(
				(row) => {
					return row.office.toLowerCase().indexOf(this.props.filterWord) !== -1
				}
			)
		} else {
			searchRes = this.props.rows.filter(
				(row) => {
					let nameString = row.firstName + " " + row.lastName
					return nameString.toLowerCase().indexOf(this.props.searchWord) !== -1
				}
			)
		}

	  return (
      <table>
			 <tbody>
				 <tr className="tableCat">
					 <th>Name</th>
					 <th>Title</th>
					 <th>Office</th>
					 <th>Email</th>
				 </tr>
				{searchRes.map((row, i) =>
					 <tr key={i}>
						 <th>{row.firstName.concat(' ', row.lastName)}</th>
						 <th>{row.title}</th>
						 <th>{row.office}</th>
						 <th>{row.email}</th>
					 </tr>
				)}
				</tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
		rows: state.rows,
		searchWord: state.searchWord,
		filterWord: state.filterWord
	}
}

export default connect(mapStateToProps)(Table);
