UAM.listView = function(content){
	UAM.basicView.call(this);
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

	this.changeStatus = function(text, status){
		element = this.ListElements[text];
		if (status){
			element.setAttribute('class', "list-group-item active");
		}
		else{
			element.setAttribute('class', "list-group-item");
		}
		
	}
	}
}
UAM.utils.inherits(UAM.basicView, UAM.listView);