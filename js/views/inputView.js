UAM.inputView = function(){
	UAM.basicView.call(this);
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
UAM.utils.inherits(UAM.basicView, UAM.inputView);



// document.querySelector('.button').click(function(input){
// 	UAM.EventEmitter.prototype.emit()
// });
