import React from 'react';

function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(c => {
        return (
          <li key={c.id}>
            <p>
              {c.name}-{c.number}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
