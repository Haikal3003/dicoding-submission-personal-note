import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { path: '/', text: 'Catatan' },
    { path: '/arsip', text: 'Arsip' },
  ];

  const { pathname } = useLocation();

  return (
    <nav className="sidebar">
      <div className="sidebar-wrapper">
        <h1 className="logo-text">NoteEase</h1>
        <ul className="menu-list">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <Link to={link.path} className={`menu-link ${pathname === link.path || (link.path === '/' && pathname.startsWith('/add-note')) ? 'active' : ''} `}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
