import React, { useState } from 'react';
import './Contacts.css';
import Contact from '../Contact/Contact'

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

const Contacts = () => {

    const [list] = useState(contacts);

    const [search, setSearch] = useState("");
    const [checkedMale, setCheckedMale] = useState(true);
    const [checkedFemale, setCheckedFemale] = useState(true);
    const [checkedNoGender, setCheckedNoGender] = useState(true);


    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleChangeMale = () => {
        setCheckedMale(!checkedMale)
    }
    const handleChangeFemale = () => {
        setCheckedFemale(!checkedFemale)
    }
    const handleChangeNoGender = () => {
        setCheckedNoGender(!checkedNoGender)
    }

    let checked = {
        "male": checkedMale,
        "female": checkedFemale,
        "undefined": checkedNoGender,
    }

    const filteredList = list.filter((contact) => {
        const checkFilter = (contact.firstName + contact.lastName + contact.phone)
            .toLowerCase()
            .includes(search.toLowerCase());

        const checkBoxes = checked[String(contact.gender)];

        return checkFilter && checkBoxes;
    });

    return (
        <div>
            <input placeholder='Search contact...' type="text" className="Contacts-search" onChange={handleSearchChange}></input>
            <form className="Contacts-genders">
                <div>
                    <input type="checkbox" id="male" name="gender" value="male" className='checkBox' onChange={handleChangeMale} checked={checkedMale} />
                    <label htmlFor="male">Чол.</label>
                </div>
                <div>
                    <input type="checkbox" id="female" name="gender" value="female" className='checkBox' onChange={handleChangeFemale} checked={checkedFemale} />
                    <label htmlFor="female">Жін.</label>
                </div>
                <div>
                    <input type="checkbox" id="undefined" name="gender" value={undefined} className='checkBox' onChange={handleChangeNoGender} checked={checkedNoGender} />
                    <label htmlFor="undefined">Не вказано</label>
                </div>
            </form>
            <div className="Contacts">
                {filteredList.map((contact, i) => <Contact data={contact} key={i} />)
                }
            </div >
        </div>
    );
}

export default Contacts;
