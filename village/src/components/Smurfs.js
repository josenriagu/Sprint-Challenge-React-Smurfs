import React from 'react';
import Smurf from './Smurf';

const Smurfs = ({ smurfs, setEdit, deleteSmurf }) => {
  return (
    <div className="smurfs-wrapper">
        {smurfs.map(smurf => {
          return (
            <Smurf
              key={smurf.id}
              id={smurf.id}
              url={smurf.url}
              name={smurf.name}
              age={smurf.age}
              height={smurf.height}
              setEdit={setEdit}
              deleteSmurf={deleteSmurf}
            />
          );
        })}
    </div>
  );
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
