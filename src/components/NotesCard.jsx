import { MdDeleteForever } from "react-icons/md";

const NotesCard = ({ notes, deleteNote }) => {
	return (
		<>
			{notes?.map((note) => (
				<div
					key={note.id}
					className="bg-yellow-400 h-52 p-3 rounded-lg flex flex-col justify-between gap-2"
				>
					<p className="">{note.text}</p>
					<div className="flex items-center justify-between">
						<p>{note.date}</p>
						<button onClick={() => deleteNote(note.id)}>
							<MdDeleteForever className="h-6 w-6 cursor-pointer" />
						</button>
					</div>
				</div>
			))}
		</>
	);
};

export default NotesCard;
