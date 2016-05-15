$(function(){
	var Person = Backbone.Model.extend({

	});
	var PersonList = Backbone.collection.extend({
		model: Person
	});
	var people = new PersonList;
	var ShowView = Backbone.View.extend({
		tagName: 'div',
		className: 'show',
		template: _.template($('#tpl-show').html()),
		events: {
			'click .edit': 'showEdit',
		},
		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},
		showEdit: function(){
			
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});
});