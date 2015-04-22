// UAM.Store = function () {
// 	UAM.EventEmitter.call(this);
// 	this.data  = [];
// };

// UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

// UAM.Store.prototype.add = function (data) {};
// UAM.Store.prototype.update = function (id, data) {};
UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.toDoList  = [];
	this.active = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);
function Task(el_text, el_status){
	this.text = el_text;
	this.status = el_status || false;
	return this;
}
UAM.Store.prototype.add = function (el_text, el_status) {
	var newTask = new Task(el_text, el_status)
	this.toDoList.push(newTask);
	this.emit("addedTask", newTask.text, newTask.status, this.toDoList.length);
};
