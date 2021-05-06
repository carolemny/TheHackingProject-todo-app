import React from "react";
import Showdown from "showdown";

const converter = new Showdown.Converter();

const NoteDisplay = ({ markdownInput }) => {
  const transformToHtml = (word) => {
    return { __html: converter.makeHtml(word) };
  };

  return (
    <div className="NoteDisplay pt-4 px-4 border mt-5 mx-4 rounded"> 
      <div
        className="NoteDisplayTitle"
        dangerouslySetInnerHTML={transformToHtml(markdownInput.title)}
      ></div>
      <div
        className="NoteDisplayContent"
        dangerouslySetInnerHTML={transformToHtml(markdownInput.content)}
      ></div>
    </div>
  );
};

export default NoteDisplay;
