import React, { useContext, useState } from "react";
import { MyContext } from "../context";

const Stage_2 = () => {
	let context = useContext(MyContext);
	const [looser, setLooser] = useState({ billPayee: context.getlooser() });

	return (
		<>
			<div className="result_wrapper">
				<h3>The Looser will be </h3>
				<div>{looser.billPayee}</div>
			</div>

			<div
				className="action_button btn_2"
				onClick={() => setLooser({ billPayee: context.getlooser() })}
			>
				Get New Looser
			</div>
			<br />
			<br />
			<div className="action_button " onClick={() => context.startOver()}>
				Start Over
			</div>
		</>
	);
};

export default Stage_2;
