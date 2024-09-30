import React from 'react';
import ArchiveNote from '../../components/CardNote/ArchiveNote';

const ArchivePage = ({ archiveNotes, showFormattedDate, setArchiveNote, setNotes }) => {
  const deleteNote = (id) => {
    const isConfirmed = window.confirm('Apakah kamu yakin ingin menghapus catatan ini ?');

    if (isConfirmed) {
      const updateNote = archiveNotes.filter((note) => note.id !== id);
      setArchiveNote(updateNote);
    }
  };

  const moveNote = (id) => {
    const isConfirmed = window.confirm('Apakah kamu yakin ingin memindahkan catatan ini ?');

    if (isConfirmed) {
      const movedNote = archiveNotes.find((note) => note.id === id);

      if (movedNote) {
        setNotes((prevNotes) => {
          const updatedNotes = [...prevNotes, { ...movedNote, archiveNote: false }];

          return updatedNotes.sort((a, b) => a.id - b.id);
        });

        setArchiveNote((prevArchiveNote) => prevArchiveNote.filter((note) => note.id !== id));
      }
    }
  };

  return (
    <section className="archive-page">
      <div className="archive-page-wrapper">
        <h1 className="heading-text">Arsip</h1>
        <div className="note-container">
          {archiveNotes.map((note) => (
            <ArchiveNote key={note.id} note={note} showFormattedDate={showFormattedDate} onDeleteNote={deleteNote} onMoveNote={moveNote} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchivePage;
