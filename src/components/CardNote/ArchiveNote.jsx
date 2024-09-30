import React from 'react';

const ArchiveNote = ({ note, showFormattedDate, onDeleteNote, onMoveNote }) => {
  return (
    <div className="card-note">
      <div className="card-note-wrapper">
        <div className="content content-container">
          <h2 className="title">{note.title}</h2>
          <span className="date">{showFormattedDate(note.createdAt)}</span>
          <p className="body">{note.body}</p>
        </div>
        <div className="button-container">
          <button type="button" className="delete-button" onClick={() => onDeleteNote(note.id)}>
            Delete
          </button>
          <button type="button" className="move-button" onClick={() => onMoveNote(note.id)}>
            Pindahkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchiveNote;
