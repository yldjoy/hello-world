var TodoItem = React.createClass({
	getInitialState: function() {
    		return {
    			editState: false,
    			text: ''
    		};
  	},
  	componentWillMount: function(){
  		this.setState({text: this.props.todoInfo.todo});
  	},
  	componentWillReceiveProps : function(nextProp){
  		this.setState({text: nextProp.todoInfo.todo});
  	},
	render: function(){
		return (
			   <li className={this.state.editState ? 'editing' : ''} >
			   <div className="view" onDoubleClick={this.edit} >
			   <input ref="checkbox" className="toggle" type="checkbox" checked={this.props.todoInfo.done? true : false} onClick={this.toggle} />
			   <label>{this.props.todoInfo.todo}</label>
			   <a className="destroy" onClick={this.remove}>已完成</a>
			   </div>
			   <input ref="input" type="text" className="edit" value={this.state.text} onKeyUp={this.saveEdit} onBlur={this.show} onChange={this.textChange} />
			   </li>
			);
	},
	toggle: function(){
		this.props.toggleTodoDone(this.props.todoInfo.id);
	},
	edit: function(){
		this.setState({editState: true},function(){
			this.refs.input.focus();	
		});
	},
	remove: function(){
		this.props.deleteTodo(this.props.todoInfo.id);
	},
	textChange: function(){
		this.setState({text: this.refs.input.value});
	},
	saveEdit: function(e){
		if( e.keyCode === 13){
			var newTodo = {};
			newTodo.todo = this.refs.input.value;
			this.props.updateTodo(this.props.todoInfo.id, newTodo);
	    	this.setState({editState: false});
	    }
	},
	show: function(){
		this.setState({editState: false});
	}
});
var TodoList = React.createClass({
	render: function(){
		var  {todoList, ...other} = this.props;
		var createTodo = function(todo){
			return <TodoItem todoInfo={todo} {...other}/>
		}
		return (<ul id="todo-list">
					{this.props.todoList.map(createTodo)}
			   </ul>);
	},
});

var TodoApp = React.createClass({
	getInitialState: function() {
    	return {todos: [{id:1, todo: '看javascript高级程序设计第一章', done: true},
    				   {id:2, todo: '用react写todos', done: false}],
    		    completed: 0,
    		    remained: 0
    			};
  	},
	render: function(){
		return (<div>
					<header>
						<h1>Todos</h1>
						<input ref="newTodo" id="new-todo" type="text" placeholder="What needs to be done?" onKeyUp={this.addTodo}/>
					</header>
					<section id="main">
      					<input ref="toggleAll" id="toggle-all" type="checkbox" onClick={this.toggleAll}/>
      					<label for="toggle-all">Mark all as complete</label>
      					<TodoList  todoList={this.state.todos}
      							   toggleTodoDone={this.toggleTodoDone}
								   deleteTodo={this.deleteTodo}
								   updateTodo={this.updateTodo}/>
    				</section>
    				<footer>
    					 <a id="clear-completed" onClick={this.clearDone}>Clear {this.state.completed} {this.state.completed > 1 ? 'items' : 'item'}</a>
    					 <div class="todo-count"><b>{this.state.remained}</b> {this.state.remained > 1 ? 'items' : 'item'} left </div>
    				</footer>
			   </div>);
	},
	getCompleted: function(todos){
		return _.filter(todos, function(item){return item.done}).length;
	},
	getRemained: function(todos){
		return _.filter(todos, function(item){return !item.done}).length;
	},
	componentWillMount: function(){
		this.setState({completed: this.getCompleted(this.state.todos), remained: this.getRemained(this.state.todos)});
	},
	addTodo: function(e){
		if(e.keyCode === 13 && this.refs.newTodo.value !== ""){
			var newTodo = {};
			newTodo.done = false;
			newTodo.todo = this.refs.newTodo.value;
			newTodo.id = _.last(this.state.todos).id +　1;
			this.state.todos.push(newTodo);
			this.updateState(this.state.todos);
			this.refs.newTodo.value = '';
		}
	},
	toggleAll: function(){
		var done = this.refs.toggleAll.checked;
		this.state.todos.map(function(item){
			item.done = done;
		})
		this.updateState(this.state.todos);
	},
	clearDone: function(){
		this.updateState(_.filter(this.state.todos, function(item){return !item.done}));
	},
	toggleTodoDone: function(id){
		this.state.todos.map(function(todo){
			if(todo.id === id){
				todo.done = !todo.done;
			}
		});
		this.updateState(this.state.todos);
	},
	deleteTodo: function(id){
		var list = this.state.todos;
		for(var i=0, len=list.length; i < len; i++){
			if(id === list[i].id){
				list.splice(i, 1);
				break;
			}
		}
		this.updateState(this.state.todos);
	},
	updateTodo: function(id, newTodo){
		this.state.todos.map(function(todo){
			if(todo.id === id){
				todo.done = newTodo.done;
				todo.todo = newTodo.todo;
			}
		});
		this.updateState(this.state.todos);
	},
	updateState: function(newTodos){
		this.setState({todos: newTodos, completed: this.getCompleted(newTodos), remained: this.getRemained(newTodos)});
	}
});

ReactDOM.render(<TodoApp />, document.getElementById('todoapp'));