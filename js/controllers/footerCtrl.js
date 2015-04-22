UAM.footerCtrl = function(footerView, store){
	store.on('changedStatus', function(text, status, active){
		footerView.setActiveCount(active);
	})
	store.on('addedTask', function(text, status, len){
		footerView.setCount(len);
	})	
}