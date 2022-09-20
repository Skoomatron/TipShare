import React from 'react';
import {useState} from 'react';


const Names = () => {

  const [inputFields, setInputFields] = useState([{name: '', hours: ''}]);
  const [totalValue, setTotal] = useState(0);

  const handleFormInputs = (index, event) => {
    let currentData = [...inputFields];
    currentData[index][event.target.name] = event.target.value;
    setInputFields(currentData);
  }

  const addMorePeople = () => {
    let newField = {name: '', hours: ''};
    setInputFields([...inputFields, newField]);
  }

  const totalUp = () => {
    inputFields.forEach((item) => {
      setTotal(...item.hours);
    })
  }

  return (
    <div>
      Enter Names And Hours Of Employees On Shift
      <form>
        {
          inputFields.map((input, index) => {
            return (
              <div key={index}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={input.name}
                  onChange={event => handleFormInputs(index, event)}
                />
                <input
                  name="hours"
                  type="number"
                  placeholder="0"
                  value={input.hours}
                  onChange={event => handleFormInputs(index, event)}
                />
              </div>
            )
          })
        }
        Enter Total Pool Amount
        <input
          type="currency"
          name="total"
          placeholder="$0.00"
        />
      </form>
        <button onClick={addMorePeople}>Add More People</button>
        <button onClick={totalUp}>Total Up</button>
        <div>
          {totalValue}
        </div>
    </div>
  )
}

export default Names;