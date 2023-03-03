import { IconContext } from "react-icons";
import { FaMoon } from "react-icons/fa";

const MoonIcon = () => {
	return (
		<IconContext.Provider value={{ color: "#7E88C3" }}>
			<FaMoon />
		</IconContext.Provider>
	);
};

export default MoonIcon;
