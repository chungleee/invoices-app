import { BiChevronRight } from "react-icons/bi";
import { IconContext } from "react-icons";

const RightArrowIcon = () => {
	return (
		<IconContext.Provider value={{ size: "2rem" }}>
			<div>
				<BiChevronRight />
			</div>
		</IconContext.Provider>
	);
};

export default RightArrowIcon;
