import { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !details) return;

    setTask([...task, { title, details }]);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="app">

      {/* FORM */}
      <form className="form-section" onSubmit={submitHandler}>
        <h1 className="title">Add Notes</h1>

        <input
          className="input"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="textarea"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="button">Add Note</button>
      </form>

      {/* NOTES */}
      <div className="notes-section">
        <h1 className="title">Recent Notes</h1>

        <div className="notes-container">

          {task.length === 0 ? (
            <p className="empty">No notes yet...</p>
          ) : (
            task.map((elem, idx) => (
              <div key={idx} className="card">

                <div>
                  <h3>{elem.title}</h3>
                  <p>{elem.details}</p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteNote(idx)}
                >
                  Delete
                </button>

              </div>
            ))
          )}

        </div>
      </div>

    </div>
  );
};

export default App;