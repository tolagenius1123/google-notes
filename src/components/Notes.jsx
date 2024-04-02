import { useState } from "react";
import AddNote from "./AddNote";
import NotesCard from "./NotesCard";

const Notes = ({ searchText }) => {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("notes") ?? "[]")
	);
	console.log(notes);

	const deleteNote = (noteId) => {
		const updatedNotes = notes.filter((note) => note.id !== noteId);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
		setNotes(updatedNotes);
	};

	return (
		<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<NotesCard
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText.toLowerCase())
				)}
				deleteNote={deleteNote}
			/>
			<AddNote setNotes={setNotes} />
		</div>
	);
};

export default Notes;
