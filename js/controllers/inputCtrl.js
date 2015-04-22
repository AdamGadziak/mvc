UAM.inputCtrl = function(inputView, store){
	inputView.on('addButtonClicked',function(text){
		store.add(text);
	})
}
