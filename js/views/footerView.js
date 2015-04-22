UAM.footerView = function (content) {
	UAM.basicView.call(this);
	this.content = content;
	this.setCount = function(count) {
    this.content.querySelector('#countAll').textContent = "All items: " + count;
	};
	this.setActiveCount = function(count) {
	this.content.querySelector('#countActive').textContent = "Active items: " + count;
	};
}

UAM.utils.inherits(UAM.basicView, UAM.footerView);