UAM.inputView = function (content) {
	UAM.basicView.call(this);
	
	this.addButton = content.querySelector('#addButton');
	this.input = content.querySelector('#newItem');

	this.add = function() {
		text = this.input.value;
			if(text){
				this.emit("btnClick", text);
			}
	}
	this.addButton.addEventListener('click', this.add.bind(this));

};

UAM.utils.inherits(UAM.basicView, UAM.inputView);
// document.querySelector('.button').click(function(input){
// 	UAM.EventEmitter.prototype.emit()
// });
