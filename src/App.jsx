import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import NotesPage from './pages/NotesPage';
import ArchivePage from './pages/ArchivePage';
import { notes as initialNote, showFormattedDate } from '../src/utils/index';
import AddNotePage from './pages/AddNotePage';

function App() {
  const [notes, setNotes] = useState(initialNote);
  const [archiveNotes, setArchiveNotes] = useState([]);

  return (
    <BrowserRouter>
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<NotesPage notes={notes} setNotes={setNotes} setArchiveNotes={setArchiveNotes} showFormattedDate={showFormattedDate} />} />
          <Route path="/arsip" element={<ArchivePage archiveNotes={archiveNotes} showFormattedDate={showFormattedDate} setArchiveNote={setArchiveNotes} setNotes={setNotes} />} />
          <Route path="/add-note" element={<AddNotePage notes={notes} setNotes={setNotes} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
