UAM.listCtrl = function(listView, store){
	listView.on('listItemClicked', function(text){
		store.changeStatus(text);
	})
	store.on('addedTask',function(text, status, len){
		listView.addItem(text, status);
	})
	store.on("changedStatus", function(text, status, active){
		listView.changeStatus(text, status);
	})
}