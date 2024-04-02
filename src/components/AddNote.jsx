import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddNote = ({ setNotes }) => {
	const [newNote, setNewNote] = useState("");
	const characterLimit = 200;

	const date = new Date();
	const todaysDate = date.toLocaleDateString();

	const handleChange = (e) => {
		setNewNote(e.target.value.slice(0, characterLimit)); // Limiting the input to characterLimit
	};

	const handleSave = () => {
		const note = {
			id: uuidv4(),
			text: newNote,
			date: todaysDate,
		};

		setNotes((prevNotes) => {
			const updatedNotes = [...prevNotes, note];
			localStorage.setItem("notes", JSON.stringify(updatedNotes));
			return updatedNotes;
		});
		setNewNote("");
	};

	return (
		<div className="bg-slate-400 h-52 p-3 rounded-lg flex flex-col justify-between">
			<textarea
				name="note"
				id="note"
				cols="20"
				rows="6"
				className="w-full bg-slate-400 outline-none resize-none placeholder:text-black"
				placeholder="Type your notes here..."
				value={newNote}
				onChange={handleChange}
			></textarea>
			<div className="flex items-center justify-between">
				<p>{characterLimit - newNote.length} remaining</p>
				<button
					className="bg-slate-300  px-3 rounded-lg"
					onClick={handleSave}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
