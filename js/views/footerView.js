UAM.footerView = function (content) {
	UAM.EventEmitter.call(this);
	this.content = content;
	this.setCount = function(count) {
    this.content.querySelector('#countAll').textContent = "All items: " + count;
	};
}

UAM.utils.inherits(UAM.EventEmitter, UAM.footerView);