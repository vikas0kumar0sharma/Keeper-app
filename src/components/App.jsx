import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [tit, setTit] = useState("");
  const [cont, setCont] = useState("");
  const [data, setData] = useState([]);

  function onCont(e) {
    setCont(e.target.value);
  }
  function onTit(e) {
    setTit(e.target.value);
  }

  function onAdd(e) {
    e.preventDefault();
    setData([
      ...data,
      {
        title: tit,
        content: cont
      }
    ]);
    setTit("");
    setCont("");
  }

  function dlt(id) {
    setData(
      data.filter((it, index) => {
        return id !== index;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea
        onTit={onTit}
        onCont={onCont}
        onAdd={onAdd}
        tit={tit}
        cont={cont}
      />
      {data.map((it, index) => (
        <Note
          key={index}
          id={index}
          title={it.title}
          content={it.content}
          dlt={dlt}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;