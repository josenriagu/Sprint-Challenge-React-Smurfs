import React from 'react';
import { Link } from 'react-router-dom';

// define sticky tag background colors
const colors = ["#d5e9fc", "#dde3fc", "#dfc275", "#3daba0", "#fd25b0", "#82b3ff", "#f16304", "3de5e59", "#5cc1f2", "#8892a0", "#517dbc", "#51b3bc", "#272d2d", "#48d673", "#98d648", "#7948d6", "#be38ea", "#af8956", "#d18779", "#470b20"];

const Smurf = ({ id, url, name, age, height, setEdit, deleteSmurf }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const style = { backgroundColor: `${color}` }
  return (
    <div
      style={style}
      className="smurf"
      draggable
    >
      <h3>Smurf {id + 1}</h3>
      <h4>{name}</h4>
      <strong>{height}cm tall</strong>
      <p>{age} smurf years old</p>
      <div className="action-button">
        <Link
          to="/smurfs/edit-smurf"
          className="link"
        >
          <button
            type="button"
            onClick={() => setEdit(id)}
          >
            Edit
          </button>
        </Link>
        <button
          type="button"
          onClick={() => deleteSmurf(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

