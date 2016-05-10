$(function(){

  var Todo = Backbone.Model.extend({
    urlRoot: '/todo',
    defaults:{
      title : 'todo',
      done: false,
      orderNo: function(){return Todos.nextOrder()}
    },

    toggle: function(){
      this.save({done: !this.get('done')});
    }
  });

  var TodoList = Backbone.Collection.extend({
    //python后台
    url: '/todos/',
    model: Todo,

    //localStorage存储数据
    //localStorage: new Backbone.LocalStorage("todos-backbone"),
    nextOrder: function(){
      if(!this.length) return 1;
      return this.last().get('orderNo') + 1;
    },
    done: function(){
      return this.where({done: true})
    },
    remaining: function(){
      return this.where({done: false});
    }
  });
  var Todos = new TodoList;

  var TodoView = Backbone.View.extend({
    tagName : 'li',
    template: _.template($('#item-template').html()),
    events : {
      'click .toggle' : 'toggleDone',
      'dblclick .view' : 'edit',
      'click a.destroy' : 'clear',
      'blur .edit' : 'show',
      'keypress .edit' : 'update'
    },
    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },
    render: function(){
      this.input = $(this.el).html(this.template(this.model.toJSON())).toggleClass('done', this.model.get('done')).find('.edit');
      return this;
     // this.input = $(this.el).find('.edit');
    },
    toggleDone : function(){
      this.model.toggle();
    },
    edit: function(){
      this.$el.addClass('editing');
      this.input.focus();
    },
    clear: function(){
      this.model.destroy();
    },
    update: function(e){
      if(e.keyCode == 13) this.show();
    },
    show: function(){
      var value = this.input.val();
      if(!value){
        this.clear();
      } else {
        this.model.save({title: value});
        this.$el.removeClass('editing');
      }
    }
  });

  var AppView = Backbone.View.extend({
    el: '#todoapp',
    stateTemp : _.template($('#stats-template').html()),
    events: {
      'keypress #new-todo' : 'createTodo',
      'click #clear-completed' : 'clearCompleted',
      'click #toggle-all' : 'toggleAll'
    },
    initialize: function(){
      this.input = this.$('#new-todo');
      this.checkAllBox = this.$('#toggle-all')[0];
      this.footer = this.$('footer');
      this.main = this.$('#main');
      this.list = this.$('#todo-list');
      this.listenTo(Todos, 'add', this.addOne);
      this.listenTo(Todos, 'reset', this.addAll);
      this.listenTo(Todos, 'all', this.render);
      Todos.fetch();
    },
    createTodo: function(e) {
      if(e.keyCode == 13) {
        var td = this.input.val();
        if (td) {
          Todos.create({title: td});
          this.input.val('');
        }
      }
    },
    clearCompleted: function(){
      _.invoke(Todos.done(), 'destroy');
    },
    toggleAll: function(){
      var done = this.checkAllBox.checked;
      Todos.each(function(todo){todo.save({'done': done}); });
    },
    addOne: function(todo){
      var todoView = new TodoView({model: todo});
      this.list.append(todoView.render().el);
    },
    addAll: function(){
      Todos.each(this.addOne, this);
    },
    render: function(){
      var done = Todos.done().length;
      var remaining =Todos.remaining().length;

      if(Todos.length){
        this.main.show();
        this.footer.show();
        this.footer.html(this.stateTemp({'done':done, 'remaining': remaining}));
      } else {
        this.main.hide();
        this.footer.hide();
      }
      this.checkAllBox.checked = !remaining;
    }
  });

  var App = new AppView;
});