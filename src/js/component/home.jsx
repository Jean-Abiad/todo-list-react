import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [tasksList, setTasksList] = useState([]);

	const handleTask = (e) => {
		if (e.key == "Enter") {
		setTasksList([...tasksList, { label: task, done: false }]);
		setTask("");
		 } 
		

		

	};

	const deleteItems = (label) => {

		const taskFiltered = tasksList.filter(item => item.label != label)
		setTasksList(taskFiltered)
	};

	return (
		<>
			<h1 className="d-flex justify-content-center my-4 titulo">To do List {task}</h1>

			<div className="caja" style={{ width: "55%", margin: "auto" }}>
				<form onSubmit={(e) => e.preventDefault()}>
					<input
						className="border border-0 caja   py-3 px-3 "
						type="text"
						placeholder="What needs to be done?"
						onKeyUp={(evt) => handleTask(evt)}
						value={task}
						onChange={(e) => setTask(e.target.value)}


					/>
				</form>

				{tasksList.map((item, index) => {
					return (
						<div className="caja" key={index}>
							<div className="margen d-flex ">
								<p className="px-4 py-3 m-0 ">{item.label}</p>
								<div className="delete">
								<p
									onClick={() => deleteItems(item.label)}
									className="text-danger d-flex align-items-center m-3 anm">X
								</p>
								</div>
							</div>
						</div>
					);
				})}
				<div className="border-top px-4 py-3 m-0 ">
					<span className="itm">{tasksList.length > 1 ? tasksList.length + " " + "Tasks left" : tasksList.length + " " + "Task left"}</span>
				</div>
			</div>
		</>
	);
};

export default Home;
