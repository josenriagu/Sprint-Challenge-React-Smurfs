import React from 'react';

const SmurfForm = ({ editMode, changeHandler, addSmurf, name, age, height, smurfToEdit, updateSmurf }) => {
  return (
    <div className="smurfform-wrapper">
      {
        (editMode)
          ?
          <h4>Edit Smurf</h4>
          :
          <h4>Create Smurf</h4>
      }
      <form
        onSubmit={(event) => {
          (editMode)
            ?
            updateSmurf(event, smurfToEdit.id)
            :
            addSmurf(event)
        }
        }
      >
        <div className="field">
          <span>Name: </span>
          <input
            required
            type="text"
            onChange={(event) => changeHandler(event)}
            placeholder="enter smurf's name"
            value={name}
            name="name"
          />
        </div>
        <div className="field">
          <span>Age: </span>
          <input
            type="number"
            min="1"
            required
            onChange={(event) => changeHandler(event)}
            placeholder="enter smurf's age"
            value={age}
            name="age"
          />
        </div>
        <div className="field">
          <span>Height: </span>
          <input
            type="number"
            min="1"
            required
            onChange={(event) => changeHandler(event)}
            placeholder="enter smurf's height"
            value={height}
            name="height"
          />
        </div>
        {
          (editMode)
            ?
            <button
              type="submit"
            >Update Smurf</button>
            :
            <button
              type="submit"
            >Add Smurf</button>
        }
      </form>
    </div>
  );
}


export default SmurfForm;