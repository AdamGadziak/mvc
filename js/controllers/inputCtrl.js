UAM.inputCtrl = function(inputView, store){
	inputView.on('btnClick', function(item) {
		store.add(item);
		console.log('yolo'+item);
	})
}