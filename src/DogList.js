import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => {
        <h3 key={dog.name}>
          <Link to={`/dogs/${dog.name.toLowerCase()}`} />
          {dog.name}
          <Link />
        </h3>;
      })}
    </div>
  );
}

export default DogList;
