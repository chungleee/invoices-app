import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";

const CreateNewIcon = () => {
	return (
		<IconContext.Provider value={{ size: "2rem" }}>
			<div>
				<AiFillPlusCircle />
			</div>
		</IconContext.Provider>
	);
};

export default CreateNewIcon;
