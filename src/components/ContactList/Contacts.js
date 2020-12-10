import React from 'react';

function Contacts({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(c => {
        return (
          <li key={c.id}>
            <p>
              <starong>{c.name}:</starong> <b>{c.number}</b>{' '}
              <button onClick={() => onDelete(c.id)}>Delete</button>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
