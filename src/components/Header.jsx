import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ toggleMode, setToggleMode }) => {
	return (
		<div className="flex items-center justify-between">
			<h1 className={`${toggleMode && "text-white"} font-bold text-2xl`}>
				Google Notes
			</h1>
			<button
				className={`${
					toggleMode ? "bg-transparent" : "bg-slate-400"
				} p-1 rounded-full`}
				onClick={() => setToggleMode(!toggleMode)}
			>
				{toggleMode ? (
					<MdLightMode className="h-6 w-6 text-white" />
				) : (
					<MdDarkMode className="h-6 w-6" />
				)}
			</button>
		</div>
	);
};

export default Header;
