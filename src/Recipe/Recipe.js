import React from 'react';

export const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="container">
      <div className="box">
        <div className="food-img">
          <img src={image} />
        </div>
        <div className="content">
          <h3 className="cal">{title}</h3>
          <h5 className="cal">Calories: {Math.floor(calories)}</h5>
          <ol>
            {ingredients.map((ingredients) => (
              <li>{ingredients.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
