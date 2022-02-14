import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { MyProvider } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
	return (
		<MyProvider>
			<ToastContainer />
			<App />
		</MyProvider>
	);
};
ReactDOM.render(<Main />, document.getElementById("root"));
