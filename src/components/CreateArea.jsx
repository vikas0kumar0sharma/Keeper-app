import React from "react";

function CreateArea({ onAdd, onTit, onCont, tit, cont }) {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={onTit} value={tit} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={onCont}
          value={cont}
        />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;