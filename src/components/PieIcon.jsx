import React from "react";
import { IconContext } from "react-icons";
import { FiPieChart } from "react-icons/fi";

const PieIcon = () => {
	return (
		<IconContext.Provider value={{ size: "25px", color: "white" }}>
			<div>
				<FiPieChart />
			</div>
		</IconContext.Provider>
	);
};

export default PieIcon;
