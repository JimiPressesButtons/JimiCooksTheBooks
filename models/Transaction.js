let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let  Account = mongoose.model('Account');
let  Agent = mongoose.model('Agent');

let transactionSchema = new Schema({
	accountId:{type: mongoose.Schema.types.ObjectId, ref: 'Account' ,required:true},
	agentId:{type: mongoose.Schema.types.ObjectId, ref: 'Agent' ,required:true},
	date:{type: Date, required:true},
	credit:{type: Number},
	debit:{type:Number},
	note:{type:String},
},{collection : 'transaction'});

let transaction = mongoose.model('transaction',transactionSchema);

module.exports= {
	Transaction: transaction
}