var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentDidMount:function() {
	    $(document).ready(function(){
		});        
	},
	render:function(){
		return(
			<div>
				<button>Add transaction </button>
				 <table className='striped'>
					<thead>
						<tr>
							<th data-field="id">Transaction ID</th>
							<th data-field="date">Date</th>
							<th data-field="agent">Agent</th>
							<th data-field="amount">Amount</th>
							<th data-field="status">Status</th>
							<th data-field="note">Note</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
						</tr>
						<tr>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
						</tr>
						<tr>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
							<td>Shit</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
});