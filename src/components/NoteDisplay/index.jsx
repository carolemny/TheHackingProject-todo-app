import React from "react";
import Showdown from "showdown";

const converter = new Showdown.Converter();

const NoteDisplay = ({ markdownInput }) => {
  // console.log(markdownInput);

  const transformToHtml = (word) => {
    return { __html: converter.makeHtml(word) };
  };

  return (
    <div
      className="NoteDisplay"
      dangerouslySetInnerHTML={transformToHtml(markdownInput)}
    ></div>
  );
};

export default NoteDisplay;
