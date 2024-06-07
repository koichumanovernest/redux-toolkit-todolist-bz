import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slice/todoSlice";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styled from "styled-components";

const TodoForm = () => {
	const dispatch = useDispatch();

	const [photo, setPhoto] = useState("");
	const [title, setTitle] = useState("");
	const [discription, setDiscription] = useState("");

	const handeleChangePhoto = (e) => setPhoto(e.target.value);
	const handeleChangeTitle = (e) => setTitle(e.target.value);
	const handeleChangeDiscription = (e) => setDiscription(e.target.value);

   const onSubmitHandler = (e)=> {
      e.preventDefault()
      const newData = {
         id:Math.random(),
         photo,
         title,
         discription,
      } 

      dispatch(addTodo(newData))
      setPhoto("")
      setTitle("")
      setDiscription("")
   }
	return <StyledForm onSubmit={onSubmitHandler}>
      <Input onChange={handeleChangePhoto} value={photo} placeholder="Photo please" type="url" />
      <Input onChange={handeleChangeTitle} value={title} placeholder="Title please" type="text" />
      <Input onChange={handeleChangeDiscription} value={discription} placeholder="Discription  please" type="text" />
      <Button variant='contained' type="submit">Add</Button>
   </StyledForm>;
};

export default TodoForm;

const StyledForm = styled.form`
   display: flex;
   justify-content: center;
   gap: 20px;
`