import React from 'react';

const ActiveNote = ({ note, showFormattedDate, onDeleteNote, onArchiveNote }) => {
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
          <button type="button" className="archive-button" onClick={() => onArchiveNote(note.id)}>
            Arsipkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveNote;
