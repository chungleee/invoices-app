import { BiChevronLeft } from "react-icons/bi";
import { IconContext } from "react-icons";

const LeftArrowIcon = () => {
	return (
		<IconContext.Provider value={{ size: "1.5rem" }}>
			<div>
				<BiChevronLeft />
			</div>
		</IconContext.Provider>
	);
};

export default LeftArrowIcon;
