UAM.inputView = function(){
	UAM.EventEmitter.call(this);
	this.addButton = document.querySelector('button');
	this.input = document.querySelector('input');
	this.add = function(){	
		item = this.input.value;
			if (item){
				this.emit("addButtonClicked", item);
			}
	}
	this.addButton.addEventListener('click',this.add.bind(this))
}
UAM.utils.inherits(UAM.EventEmitter, UAM.inputView);



// document.querySelector('.button').click(function(input){
// 	UAM.EventEmitter.prototype.emit()
// });
