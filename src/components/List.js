import React from "react";

const List = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card">
            <img src={item.image} alt={item.id}/>
            <div className="card-body">
                <h3 className="card-title">Nome: {item.name}</h3>
                <span>Status: {item.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
