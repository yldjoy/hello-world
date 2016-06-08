var TodoItem = React.createClass({
	getInitialState: function() {
    		return {
    			editState: false
    		};
  	},
	render: function(){
		return (
			   <li className={this.state.editState ? 'editing' : ''} >
			   <div className="view" onDoubleClick={this.edit} >
			   <input ref="checkbox" className="toggle" type="checkbox" checked={this.props.todoInfo.done? true : false} onClick={this.toggle} />
			   <label>{this.props.todoInfo.todo}</label>
			   <a className="destroy" onClick={this.remove}>已完成</a>
			   </div>
			   <input ref="input" type="text" className="edit" value={this.props.todoInfo.todo} onKeyPress={this.saveEdit} onBlur={this.saveEdit} />
			   </li>
			);
	},
	toggle: function(){
		this.props.toggleTodoDone(this.props.todoInfo.id);
	},
	edit: function(){
		this.setState({editState: true});
		$(this.refs.input).focus();
	},
	remove: function(){
		this.props.deleteTodo(this.props.todoInfo.id);
	},
	saveEdit: function(e){
		alert(e.keyCode);
		if(e.type === "blur" || (e.type === "keypress" && e.keyCode === 13)){
			var newTodo = {};
			newTodo.todo = this.refs.input.value;
			this.props.updateTodo(this.props.todoInfo.id, newTodo);
	    }
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
    	return {todos: [{id:1, todo: '看javascript高级程序设计第一章', done: false},
    				   {id:2, todo: '用react写todos', done: false}],
    		    completed: 0,
    		    remained: 1
    			};
  	},
	render: function(){
		return (<div>
					<header>
						<h1>Todos</h1>
						<input id="new-todo" type="text" placeholder="What needs to be done?" />
					</header>
					<section id="main">
      					<input id="toggle-all" type="checkbox" />
      					<label for="toggle-all">Mark all as complete</label>
      					<TodoList  todoList={this.state.todos}
      							   toggleTodoDone={this.toggleTodoDone}
								   deleteTodo={this.deleteTodo}
								   updateTodo={this.updateTodo}/>
    				</section>
    				<footer>
    				</footer>
			   </div>);
	},
	toggleTodoDone: function(id){
		this.state.todos.map(function(todo){
			if(todo.id === id){
				todo.done = !todo.done;
			}
		});
		this.setState(this.state.todos);
	},
	deleteTodo: function(id){
		var list = this.state.todos;
		for(var i=0, len=list.length; i < len; i++){
			if(id === list[i].id){
				list.splice(i, 1);
				break;
			}
		}
		this.setState(this.state.todos);
	},
	updateTodo: function(id, newTodo){
		this.state.todos.map(function(todo){
			if(todo.id === id){
				todo.done = newTodo.done;
				todo.todo = newTodo.todo;
			}
		});
		this.setState(this.state.todos);
	}
});

ReactDOM.render(<TodoApp />, document.getElementById('todoapp'));