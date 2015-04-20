UAM.inputView = function () {
	UAM.basicView.call(this);
	
	this.addButton = document.querySelector('#addButton');
	this.input = document.querySelector('#newItem');

};

UAM.utils.inherits(UAM.basicView, UAM.inputView);
// document.querySelector('.button').click(function(input){
// 	UAM.EventEmitter.prototype.emit()
// });
