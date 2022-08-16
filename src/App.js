import './App.css';
import React, { useState } from 'react';
import Contacts from './components/Contacts/Contacts';

const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male",
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female",
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666",
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female",
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male",
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male",
}];

const App = () => {
  const [state, setSearch] = useState({ contacts: contacts, search: '' });
  const [checked, setChecked] = useState(['male', 'female', undefined]);

  const searchChanged = (e) => {
    setSearch((prevState) => ({
      ...prevState,
      search: e.target.value.toLocaleLowerCase()
    }))
  }

  document.addEventListener('change', () => {
    let checked = [...document.querySelectorAll('.checkBox')]
      .filter(input => input.checked)
      .map(input => input.value === "" ? undefined : input.value);
    setChecked(checked)
    /* return filterContacts().filter(({ gender }) => checkedValues.includes(gender)); */
  });

  const filterContacts = () => {
    const genderFilter = state.contacts.filter(({ gender }) => checked.includes(gender))
    const filterContacts = [];
    if (state.search === '') {
      return genderFilter
    }
    for (let i = 0; i < genderFilter.length; i++) {
      if (genderFilter[i].firstName.toLocaleLowerCase().includes(state.search) ||
        genderFilter[i].lastName.toLocaleLowerCase().includes(state.search) ||
        genderFilter[i].phone.includes(state.search)) {
        filterContacts.push(genderFilter[i])
      }
    }
    return filterContacts;
  }

  return (
    <div className="App">
      <div className="App-container">
        <input placeholder='Search contact...' type="text" className="Contacts-search" onChange={searchChanged}></input>
        <form className="Contacts-genders">
          <div>
            <input type="checkbox" id="male" name="gender" value="male" className='checkBox' defaultChecked />
            <label htmlFor="male">Чол.</label>
          </div>
          <div>
            <input type="checkbox" id="female" name="gender" value="female" className='checkBox' defaultChecked />
            <label htmlFor="female">Жін.</label>
          </div>
          <div>
            <input type="checkbox" id="undefined" name="gender" value={undefined} className='checkBox' defaultChecked />
            <label htmlFor="undefined">Не вказано</label>
          </div>
        </form>
        <Contacts data={filterContacts()} />
      </div>
    </div>
  );
}

export default App;
