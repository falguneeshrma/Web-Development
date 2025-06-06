import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
	let [todos, setTodos] = useState([
		{ task: "sample-task", id: uuidv4(), isDone: false },
	]);
	let [newTodo, setNewTodo] = useState("");

	let addNewTodo = () => {
		setTodos((prevTodos) => {
			return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
		});
		setNewTodo("");
	};

	let updateTodoValue = (event) => {
		setNewTodo(event.target.value);
	};

	let deleteTodo = (id) => {
		setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
	};

	// let upperCaseAll = () => {
	// 	setTodos((todos) =>
	// 		todos.map((todo) => {
	// 			return {
	// 				...todo,
	// 				task: todo.task.toUpperCase(),
	// 			};
	// 		})
	// 	);
	// };

	let markAsDoneAll = () => {
		setTodos((todos) =>
			todos.map((todo) => {
				return {
					...todo,
					isDone: true,
				};
			})
		);
	};

	// let upperCaseOne = (id) => {
	// 	setTodos((prevTodos) =>
	// 		prevTodos.map((todo) => {
	// 			if (todo.id == id) {
	// 				return {
	// 					...todo,
	// 					task: todo.task.toUpperCase(),
	// 				};
	// 			} else {
	// 				return todo;
	// 			}
	// 		})
	// 	);
	// };

	let markAsDone = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id == id) {
					return {
						...todo,
						isDone: true,
					};
				} else {
					return todo;
				}
			})
		);
	};

	return (
		<div>
			<input
				placeholder="Add a task"
				value={newTodo}
				onChange={updateTodoValue}></input>
			&nbsp;&nbsp;&nbsp;
			<button onClick={addNewTodo}>Add</button>
			&nbsp;&nbsp;&nbsp;
			<button onClick={markAsDoneAll}>Mark done to all</button>
			<hr />
			<h4>Todo List: </h4>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<span
							style={
								todo.isDone
									? { textDecorationLine: "line-through" }
									: { textDecorationLine: "none" }
							}>
							{todo.task}
						</span>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button onClick={() => deleteTodo(todo.id)}>Delete</button>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<button onClick={() => markAsDone(todo.id)}>Mark as done</button>
						&nbsp;&nbsp;&nbsp;&nbsp;
					</li>
				))}
			</ul>
		</div>
	);
}
