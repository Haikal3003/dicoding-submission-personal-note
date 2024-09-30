import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNotePage = ({ notes, setNotes }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [characterLimit, setCharacterLimit] = useState(50);
  const navigate = useNavigate();

  const onInputValueChange = (field, value) => {
    if (field === 'title') {
      if (value.length <= 50) {
        setTitle(value);
        setCharacterLimit(50 - value.length);
      }
    } else if (field === 'body') {
      setBody(value);
    }
  };

  const onAddNote = () => {
    if (!title || !body) {
      alert('Harap diisi judul dan catatannya');
      return;
    }

    const newId = notes.length > 0 ? Math.max(...notes.map((note) => note.id)) + 1 : 1;

    const newNote = {
      id: newId,
      title: title,
      body: body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes([...notes, newNote]);

    setTitle('');
    setBody('');
    navigate(-1);
  };

  return (
    <div className="add-note-page">
      <div className="add-note-wrapper">
        <h1 className="heading-text">Buat catatan</h1>
        <form className="form-add-note">
          <span className="limit-title">Sisa karakter: {characterLimit}</span>
          <input type="text" placeholder="Masukan judul..." className="title-input" value={title} onChange={(e) => onInputValueChange('title', e.target.value)} maxLength={50} />
          <textarea name="" id="" placeholder="Tulis catatan disini..." value={body} onChange={(e) => onInputValueChange('body', e.target.value)}></textarea>
          <button type="button" className="add-button" onClick={onAddNote}>
            Buat
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotePage;
