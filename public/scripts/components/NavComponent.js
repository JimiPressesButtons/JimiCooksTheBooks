var React = require('react');

module.exports = React.createClass({
	componentDidMount: function(){
		$(document).ready(function(){
			$('.dropdown-toggle').dropdown();
		})
	},
	render: function(){
		return(
			<div className="nav-wrapper">
				<a href="#" className="brand-logo">Jimi Cooks the Books</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="">Shit</a></li>
					<li><a href="">Shit</a></li>
					<li><a href="">Shit</a></li>
				</ul>
			</div>
		);
	}
});