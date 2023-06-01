import React from "react";

function Note({ id, title, content, dlt }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => dlt(id)}>DELETE</button>
    </div>
  );
}

export default Note;