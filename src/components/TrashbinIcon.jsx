import { IconContext } from "react-icons";
import { FaTrash } from "react-icons/fa";

const TrashbinIcon = () => {
	return (
		<IconContext.Provider value={{ size: "1rem", color: "#888EB0" }}>
			<FaTrash />
		</IconContext.Provider>
	);
};

export default TrashbinIcon;
