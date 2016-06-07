var Todo = Backbone.Model.extend({
	toggle: function(){
		this.save({done: !this.get('done')});
	}
});
var TodoList = Backbone.Collection.extend({
	model: Todo,
	localStorage: new Backbone.LocalStorage("todos-backbone"),
	getDone: function(){
		return this.where({done: true});
	},
	getRemained: function(){
		return this.where({done: false});
	}
});
var todos = new TodoList;

var TodoView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#todo-item').html()),
	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},
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
		this.model.toggle();
	},
	clear: function(){
		this.model.destroy();
	},
    editState: function(){
    	this.$el.addClass('editing');
    	this.$('.edit').focus();
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
		this.toggleAll = this.$el.find('#toggle-all');
		this.todoList = this.$el.find('#todo-list');
		this.footer = this.$el.find('footer');
		this.listenTo(this.collection, 'add', this.addItem);
		this.listenTo(this.collection, 'remove', this.removeItems);
		this.listenTo(this.collection, 'all', this.render);
		_.bindAll(this, 'render');
		this.collection.fetch();
	},
	stateTmp: _.template($('#todos-state').html()),
	render: function(){
		var completed = this.collection.getDone().length;
		var remained = this.collection.getRemained().length;
		this.footer.html(this.stateTmp({completed: completed, remained: remained}));
		this.toggleAll.prop('checked', !remained > 0 ? true : false);
	},
	events: {
	  'keypress #new-todo': 'addOneTodo',
	  'click #toggle-all': 'completeAll',
	  'click #clear-completed':  'clearComplete'
	},
	addItem: function(todo){
		this.todoList.append(new TodoView({model: todo}).render().el)
	},
	addOneTodo: function(e){
		if(e.keyCode == 13){
			var newTodo = this.input.val();
			if(newTodo){
				var todo = this.collection.create({done: false, todo: newTodo});
				this.input.val('');
			}
		}
	},
	completeAll: function(){
		var checkedAll = this.toggleAll.prop('checked');
		this.collection.each(function(item){
			item.save({done: checkedAll})
		});
	},
	clearComplete: function(){
		this.collection.getDone().map(function(item){
			item.destroy();
		});
	}
});

var app = new TodoListView({collection: todos});