UAM.listView = function(content){
	UAM.EventEmitter.call(this);
	this.ListElements = [];
	mainList = content;
	this.addItem = function(text, status){
		var ul = document.querySelector("ul");
    	var li = document.createElement("li");
    	var children = ul.children.length + 1
    	li.setAttribute("class", "list-group-item")
    	li.appendChild(document.createTextNode(text));
    	ul.appendChild(li)
		this.ListElements[text] = li;
		adding = function(){
			this.emit("listItemClicked", text);
		}
		li.addEventListener('click', adding.bind(this));
	}
}
UAM.utils.inherits(UAM.EventEmitter, UAM.listView);