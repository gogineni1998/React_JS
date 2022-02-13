import React, { useContext, useRef, useState } from "react";
import { Button, Form, Alert, CloseButton, ListGroup } from "react-bootstrap";

import { MyContext } from "../context";

const Stage_1 = () => {
	const [error, setError] = useState([false, ""]);
	const textInput = useRef();
	const context = useContext(MyContext);

	const handelSubmit = (e) => {
		e.preventDefault();
		const value = textInput.current.value;
		if (validate(value)) {
			textInput.current.value = "";
			context.addPlayerHandler(value);
		}
	};

	const validate = (value) => {
		if (value === "") {
			setError([false, "please add name"]);
			return false;
		} else if (value.length <= 2) {
			setError([false, "min length should be 3"]);
			return false;
		}
		setError([true, ""]);
		return true;
	};

	const changeStage = () => {
		if (context.obj.players.length >= 3) {
			context.changeStage();
		} else {
			setError([false, "Minimum 3 players"]);
		}
	};

	return (
		<>
			{error[0] === false && error[1] !== "" ? (
				<Alert variant="danger">{error[1]}</Alert>
			) : (
				""
			)}
			<Form onSubmit={handelSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Add players</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Player name"
						ref={textInput}
					/>
				</Form.Group>
				<button className="miami" variant="primary" type="submit">
					Add Player
				</button>
			</Form>
			<br></br>

			<ListGroup>
				{context.obj.players.map((item, idx) => {
					return (
						<li
							key={idx}
							className="list-group-item d-flex justify-content-between align-items-start"
						>
							{item}
							<span
								className="badge badge-danger"
								onClick={() => context.removePlayer(item)}
							>
								x
							</span>
						</li>
					);
				})}
			</ListGroup>
			<br></br>
			<div className="action_button" onClick={changeStage}>
				Next
			</div>
		</>
	);
};

export default Stage_1;
