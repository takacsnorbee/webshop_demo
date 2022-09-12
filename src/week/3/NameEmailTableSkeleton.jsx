/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';

const initialUsers = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@corp.co.uk'
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@corp.co.uk'
  },
  {
    id: 3,
    name: 'John',
    email: 'john@corp.co.uk'
  }
];

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState(initialUsers);

  const handleChangeName = (e) => {
    // Todo
  };

  const handleChangeEmail = (e) => {
    // Todo
  };

  const generateNextId = () => {
    // Todo
  };

  const resetInputFields = () => {
    // Todo
  };

  const handleClickAdd = () => {
    // Todo
  };

  const handleClickDelete = (deletedUserId) => {
    // Todo
  };

  const handleClickSortName = (order) => {
    // Todo
  };

  return (
    <>
      <table border="1px" cellPadding="5px">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Name{' '}
              <button type="button" onClick={() => handleClickSortName('ASC')}>
                Sort Asc
              </button>
              <button type="button" onClick={() => handleClickSortName('DES')}>
                Sort Des
              </button>
            </th>
            <th>Email</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button type="button" onClick={() => handleClickDelete(u.id)}>
                  Delete!
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td />
            <td>
              <input
                onChange={handleChangeName}
                type="text"
                id="name"
                name="name"
              />
            </td>
            <td>
              <input
                onChange={handleChangeEmail}
                type="text"
                id="email"
                name="email"
              />
            </td>
            <td>
              <button type="button" onClick={handleClickAdd}>
                Add!
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
