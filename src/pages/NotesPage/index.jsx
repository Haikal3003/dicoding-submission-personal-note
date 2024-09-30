import React, { useState } from 'react';
import ActiveNote from '../../components/CardNote/ActiveNote';
import { Link } from 'react-router-dom';

const NotesPage = ({ notes, setNotes, setArchiveNotes, showFormattedDate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const deleteNote = (id) => {
    const isConfirmed = window.confirm('Apakah kamu yakin ingin menghapus catatan ini ?');

    if (isConfirmed) {
      const updatedNote = notes.filter((note) => note.id !== id);
      setNotes(updatedNote);
    }
  };

  const archiveNote = (id) => {
    const isConfirmed = window.confirm('Apakah kamu yakin ingin mengarsipkan catatan ini ?');

    if (isConfirmed) {
      const archivedNote = notes.find((note) => note.id === id);

      if (archiveNote) {
        setArchiveNotes((prevArchiveNotes) => [...prevArchiveNotes, { ...archivedNote, archived: true }]);
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      }
    }
  };

  return (
    <section className="notes-page">
      <div className="notes-page-wrapper">
        <div className="header">
          <h1 className="heading-text">Catatan</h1>
          <input type="text" placeholder="Cari catatan..." className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Link to={'/add-note'}>
            <button type="button" className="add-note-button">
              Buat catatan
            </button>
          </Link>
        </div>

        {filteredNotes.length > 0 ? (
          <div className="note-container">
            {filteredNotes.map((note) => (
              <ActiveNote key={note.id} note={note} showFormattedDate={showFormattedDate} onDeleteNote={deleteNote} onArchiveNote={archiveNote} />
            ))}
          </div>
        ) : (
          <p className="no-notes-message">Tidak ada catatan yang ditemukan.</p>
        )}
      </div>
    </section>
  );
};

export default NotesPage;
