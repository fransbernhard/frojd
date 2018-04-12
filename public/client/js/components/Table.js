import React, {Component} from 'react';
import { connect } from "react-redux";

class Table extends Component {
	render(){
		let searchRes = this.props.rows.filter(
			(row) => {
				let nameString = row.firstName + " " + row.lastName
				return nameString.toLowerCase().indexOf(this.props.searchWord) !== -1
			}
		)

		let filteredResult = this.props.rows.filter(
			(row) => {
				return row.office.toLowerCase().indexOf(this.props.filterWord) !== -1
			}
		)
		
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
