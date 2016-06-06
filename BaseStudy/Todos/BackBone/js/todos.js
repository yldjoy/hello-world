var Todo = Backbone.Model.extend({

});
var TodoList = Backbone.Collection.extend({
	model: Todo,
	localStorage: new Backbone.LocalStorage("todos-backbone"),
});
var todos = new TodoList;

var TodoView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#todo-item').html()),
	render: function(){
		this.$el.html(this.template({done: this.model.get("done"), todo: this.model.get("todo")}));
		return this;
	},
	events: {
		'click .toggle' : 'toggle',
		'click .destroy' : 'clear',
		'dblclick .view' : 'editState',
		'keypress .edit' : 'saveEdit',
		'blur .edit' : 'show'
	},
	toggle: function(){
		this.model.save({done: !this.model.get('done')});
	},
	clear: function(){
		this.model.destroy();
	},
    editState: function(){
    	this.$el.addClass('editing');
	},
	saveEdit: function(e){
		if(e.keyCode == 13){
			var newValue = this.$el.find('.edit').val();
			if(newValue === ''){
				alert("todo内容必须填写");
				this.$el.find('.edit').focus();
			} else {
				this.model.save({todo: newValue});
		}
	}
	},
	show: function(){
		this.$el.removeClass('editing');
	},
});

var TodoListView = Backbone.View.extend({
	el: '#todoapp',
	initialize: function(){
		this.input = this.$el.find('#new-todo');
		this.toggleAll = this.$el.find('#toggle');
		this.todoList = this.$el.find('#todo-list');
		this.footer = this.$el.find('footer');
		this.listenTo(this.collection, 'change', this.render);
		this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'remove', this.render);
		_.bindAll(this, 'render');
	},
	stateTmp: _.template($('#todos-state').html()),
	render: function(){
		this.todoList.empty();
		var completed = 0, remained = 0;
		var that = this;
		this.collection.each(function(element){
			that.todoList.append(new TodoView({model: element}).render().el);
			element.get('done') ? completed++ : remained++;
		});
		this.footer.html(this.stateTmp({completed: completed, remained: remained}));
	},
	events: {
	  'keypress #new-todo': 'addOneTodo',
	  'click #toggle-all': 'completeAll',
	  'click #clear-completed':  'clearComplete'
	},
	addOneTodo : function(e){
		if(e.keyCode == 13){
			var newTodo = this.input.val();
			if(newTodo){
				this.collection.push({done: false, todo: newTodo});
				this.input.val('');
			}

		}
	},
	completeAll: function(){
		this.collection.each(function(item){
			item.save({done: true})
		});
	},
	clearComplete: function(){
		for(var i = 0, len = this.collection.length; i < len ; i++){
			if(this.collection.at(i).get('done')){
				this.collection.at(i).destroy();
				i--;
				len--;
			}
		}
	}
});

var app = new TodoListView({collection: todos});