import React, {Component} from 'react';
import { connect } from "react-redux";

class Table extends Component {
	render(){
	  return (
      <table>
			 <tbody>
				 <tr className="tableCat">
					 <th>Name</th>
					 <th>Title</th>
					 <th>Office</th>
					 <th>Email</th>
				 </tr>
				 {this.props.rows.map((post, i) =>
						<tr key={i}>
							<th>{post.firstName}</th>
							<th>{post.title}</th>
							<th>{post.office}</th>
							<th>{post.email}</th>
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
		search: state.search
	}
}

export default connect(mapStateToProps)(Table);
