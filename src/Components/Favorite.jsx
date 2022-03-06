import React from "react";
import { FaStar } from "react-icons/fa"; //have to npm install react-icons
import { Favorites } from "./Favorites";
import "../css/FavoriteStar.css";

// Keep together an item and its favorite status
// Elsewhere, keep together a list of items (in a parent)

export const Favorite = (props) => {
  return (
    <div>
      <input type="radio" name="favstar" onClick={props.updateFn} />
      <FaStar
        className="star"
        size={20}
        color={!props.isFavorite ? "#e4e5e9" : "#ffc107"}
        onClick={props.updateFn}
      />
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.imageUrl}</p>
      <p>{props.imageAlt}</p>
      <p>{props.description}</p>

      <p>{props.price}</p>
    </div>
  );
};
