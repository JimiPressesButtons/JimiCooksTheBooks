console.log('test3');


let React = require('react');
let ReactDOM = require('react-dom');
let Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

let LedgerComponent = require('./components/LedgerComponent.js');
let NavComponent = require('./components/NavComponent.js');
let nav = document.getElementById('nav');
let main = document.getElementById('main');

let Router = Backbone.Router.extend({
	routes:{
		'':'report'
	},
	report: function(){
		ReactDOM.render(<LedgerComponent />,main);
	}
});
let r = new Router();
Backbone.history.start();

ReactDOM.render(<NavComponent router={r}/>,nav);