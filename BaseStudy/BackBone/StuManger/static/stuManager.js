$(function(){
	var Student = Backbone.Model.extend({

	});
	var StudentList = Backbone.Collection.extend({
		model : Student,
		localStorage: new Backbone.LocalStorage("stuManager-backbone"),
	});

	var students = new StudentList;

	var StudentView = Backbone.View.extend({
		tagName: 'li',
		className: 'stu-row',
		template: _.template($('#stu-template').html()),
		events: {
			'blur .goal-input ': 'update',
			'click .destory': 'des',
			'click .goal-span': 'editGoal',
		},
		initialize: function(){
			this.goal = this.$('.goal');
			this.goalInput = this.$('.goal-input');
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		editGoal: function(){
			this.$('.goal').addClass('edit');
			this.$('.goal-input').focus();
		},
		update: function(){
			var goalNew = this.$('.goal-input').val();
			if(isNaN(goalNew)){
				alert("总分只能是数字");
				this.$('.goal-input').focus();
			} else {
				this.$('.goal').removeClass('edit');
				this.model.save({goal: goalNew});
			}
		},
		des: function(){
			this.model.destroy();
		},
	});

	var ManagerView = Backbone.View.extend({
		el: '#stu-manager',
		events: {
			'click #add-btn' :  'addStu'
		},
		initialize: function(){
			this.ul = this.$('#stu-list');
			this.stu = {};
			this.stu.stuNum = this.$('#stu-num');
			this.stu.sex = this.$('#sex');
			this.stu.name = this.$('#name');
			this.stu.goal = this.$('#goal');
			this.listenTo(students, 'add', this.add);
			students.fetch();
		},
		addStu: function(){
			var stuNum = this.stu.stuNum.val();
			var sex = this.stu.sex.val();
			var name = this.stu.name.val();
			var goal = this.stu.goal.val();
			students.create({stuNum: stuNum, sex: sex, name: name, goal: goal});
		},
		add: function(stu){
			var studentView = new StudentView({model: stu});
      		this.ul.append(studentView.render().el);
		}
	});
	var managerView = new ManagerView;
})