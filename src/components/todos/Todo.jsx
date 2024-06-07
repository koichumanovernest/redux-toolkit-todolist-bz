import { Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { deleteTodos } from "../../store/slice/todoSlice";

const Todo = ({ photo, title, discription, id }) => {
	const dispatch = useDispatch();

	const deleteHandlerTodos = () => {
		dispatch(deleteTodos({ id }));
	};
	return (
		<div>
			<img src={photo} alt="cdsd" />
			<Typography>{title}</Typography>
			<Typography>{discription}</Typography>
			<Button variant="outlined" onClick={deleteHandlerTodos}>
				delete
			</Button>
		</div>
	);
};

export default Todo;
