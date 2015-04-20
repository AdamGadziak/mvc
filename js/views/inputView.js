UAM.InputView = function () {
	UAM.BasicView.call(this);
	var input = document.querySelector(input).value();
	this.emit();
};

UAM.utils.inherits(UAM.BasicView, UAM.InputView);
// document.querySelector('.button').click(function(input){
// 	UAM.EventEmitter.prototype.emit()
// });
