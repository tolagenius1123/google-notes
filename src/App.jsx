import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Notes from "./components/Notes";

function App() {
	const [toggleMode, setToggleMode] = useState(false);
	const [searchText, setSearchText] = useState("");

	return (
		<div
			className={`${
				toggleMode && "bg-black"
			} h-screen w-full font-poppins`}
		>
			<main className="min-h-screen max-w-[960px] mx-auto py-4 px-2">
				<Header toggleMode={toggleMode} setToggleMode={setToggleMode} />
				<SearchBar
					searchText={searchText}
					setSearchText={setSearchText}
				/>
				<Notes searchText={searchText} />
			</main>
		</div>
	);
}

export default App;
