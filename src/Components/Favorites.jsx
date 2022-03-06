import React, { useState } from "react";
import { Favorite } from "./Favorite";

export const Favorites = (props) => {
    let productArray = [
        {
          id: 0,
          name: 'Plant Pots 1',
          description: [
            'Indoor & Outdoor Use: A simple modern aesthetic and clean matte finish planters indoor plants will perfectly match any home or office décor. it can bear extreme temperature environment and is suitable for indoor and outdoor . With better breathabiity and water absorption, it\'s beneficial to the healthy growth of plants.',
            'Practical Set of 2:This set features 2 pieces, 8 inch in diameter each.Planters are lightweight and easy-to-handle.The indoor & outdoor planters sizes fit nearly all small to medium-sized indoor house plants and herb spice gardens. Works well with orchid, cactus, succulents, aloe vera, basil, flowers, Peace Lily, air plants, snake plant.',
            'Easy draim holses Movable tray:Excess water flows out the dual drainage holes to prevent overwatering and flooding. Plates capture overflow water for easy cleanup. It is recommended to shop a layer of filler in the bottom of the flower pot.',
            'Environmental Material:Made of durable recyclable plastic,solid plastic plant pots protect plants and soil. Premium polypropylene planters feel sturdy in hand but not too heavy. Thick sidewalls from 2mm to 3mm in size keep everything in place.',
            'Perfect shopping experience:We aim to improve planting experience. Guarantee the quality of the product is our responsibility. If you have any questions, please feel free to contact us.'
          ],
          price: '$19.99',
          imageUrl: 'https://m.media-amazon.com/images/I/71smkmbWsgL._AC_SL1500_.jpg',
          imageAlt: '2 plant pots',
          
        },
        {
          id: 1,
          name: 'Plant Pots 2',
          description: [
            'Indoor & Outdoor Use: A simple modern aesthetic and clean matte finish planters indoor plants will perfectly match any home or office décor. it can bear extreme temperature environment and is suitable for indoor and outdoor . With better breathabiity and water absorption, it\'s beneficial to the healthy growth of plants.',
            'Practical Set of 2:This set features 2 pieces, 8 inch in diameter each.Planters are lightweight and easy-to-handle.The indoor & outdoor planters sizes fit nearly all small to medium-sized indoor house plants and herb spice gardens. Works well with orchid, cactus, succulents, aloe vera, basil, flowers, Peace Lily, air plants, snake plant.',
            'Easy draim holses Movable tray:Excess water flows out the dual drainage holes to prevent overwatering and flooding. Plates capture overflow water for easy cleanup. It is recommended to shop a layer of filler in the bottom of the flower pot.',
            'Environmental Material:Made of durable recyclable plastic,solid plastic plant pots protect plants and soil. Premium polypropylene planters feel sturdy in hand but not too heavy. Thick sidewalls from 2mm to 3mm in size keep everything in place.',
            'Perfect shopping experience:We aim to improve planting experience. Guarantee the quality of the product is our responsibility. If you have any questions, please feel free to contact us.'
          ],
          price: '$19.99',
          imageUrl: 'https://m.media-amazon.com/images/I/71smkmbWsgL._AC_SL1500_.jpg',
          imageAlt: '2 plant pots',
        
        },
        {
          id: 2,
          name: 'Plant Pots 3',
          description: [
            'Indoor & Outdoor Use: A simple modern aesthetic and clean matte finish planters indoor plants will perfectly match any home or office décor. it can bear extreme temperature environment and is suitable for indoor and outdoor . With better breathabiity and water absorption, it\'s beneficial to the healthy growth of plants.',
            'Practical Set of 2:This set features 2 pieces, 8 inch in diameter each.Planters are lightweight and easy-to-handle.The indoor & outdoor planters sizes fit nearly all small to medium-sized indoor house plants and herb spice gardens. Works well with orchid, cactus, succulents, aloe vera, basil, flowers, Peace Lily, air plants, snake plant.',
            'Easy draim holses Movable tray:Excess water flows out the dual drainage holes to prevent overwatering and flooding. Plates capture overflow water for easy cleanup. It is recommended to shop a layer of filler in the bottom of the flower pot.',
            'Environmental Material:Made of durable recyclable plastic,solid plastic plant pots protect plants and soil. Premium polypropylene planters feel sturdy in hand but not too heavy. Thick sidewalls from 2mm to 3mm in size keep everything in place.',
            'Perfect shopping experience:We aim to improve planting experience. Guarantee the quality of the product is our responsibility. If you have any questions, please feel free to contact us.'
          ],
          price: '$19.99',
          imageUrl: 'https://m.media-amazon.com/images/I/71smkmbWsgL._AC_SL1500_.jpg',
          imageAlt: '2 plant pots',
        },
        {
          id: 3,
          name: 'Plant Pots 4',
          description: [
            'Indoor & Outdoor Use: A simple modern aesthetic and clean matte finish planters indoor plants will perfectly match any home or office décor. it can bear extreme temperature environment and is suitable for indoor and outdoor . With better breathabiity and water absorption, it\'s beneficial to the healthy growth of plants.',
            'Practical Set of 2:This set features 2 pieces, 8 inch in diameter each.Planters are lightweight and easy-to-handle.The indoor & outdoor planters sizes fit nearly all small to medium-sized indoor house plants and herb spice gardens. Works well with orchid, cactus, succulents, aloe vera, basil, flowers, Peace Lily, air plants, snake plant.',
            'Easy draim holses Movable tray:Excess water flows out the dual drainage holes to prevent overwatering and flooding. Plates capture overflow water for easy cleanup. It is recommended to shop a layer of filler in the bottom of the flower pot.',
            'Environmental Material:Made of durable recyclable plastic,solid plastic plant pots protect plants and soil. Premium polypropylene planters feel sturdy in hand but not too heavy. Thick sidewalls from 2mm to 3mm in size keep everything in place.',
            'Perfect shopping experience:We aim to improve planting experience. Guarantee the quality of the product is our responsibility. If you have any questions, please feel free to contact us.'
          ],
          price: '$19.99',
          imageUrl: 'https://m.media-amazon.com/images/I/71smkmbWsgL._AC_SL1500_.jpg',
          imageAlt: '2 plant pots',
          
        },
        {
          id: 4,
          name: 'Plant Pots 5',
          description: [
            'Indoor & Outdoor Use: A simple modern aesthetic and clean matte finish planters indoor plants will perfectly match any home or office décor. it can bear extreme temperature environment and is suitable for indoor and outdoor . With better breathabiity and water absorption, it\'s beneficial to the healthy growth of plants.',
            'Practical Set of 2:This set features 2 pieces, 8 inch in diameter each.Planters are lightweight and easy-to-handle.The indoor & outdoor planters sizes fit nearly all small to medium-sized indoor house plants and herb spice gardens. Works well with orchid, cactus, succulents, aloe vera, basil, flowers, Peace Lily, air plants, snake plant.',
            'Easy draim holses Movable tray:Excess water flows out the dual drainage holes to prevent overwatering and flooding. Plates capture overflow water for easy cleanup. It is recommended to shop a layer of filler in the bottom of the flower pot.',
            'Environmental Material:Made of durable recyclable plastic,solid plastic plant pots protect plants and soil. Premium polypropylene planters feel sturdy in hand but not too heavy. Thick sidewalls from 2mm to 3mm in size keep everything in place.',
            'Perfect shopping experience:We aim to improve planting experience. Guarantee the quality of the product is our responsibility. If you have any questions, please feel free to contact us.'
          ],
          price: '$19.99',
          imageUrl: 'https://m.media-amazon.com/images/I/71smkmbWsgL._AC_SL1500_.jpg',
          imageAlt: '2 plant pots',
          
        }
      ];

      //Initializes two lists, one with the unfavorited items, initialized as the state of the default products
      //And one empty list with favorited items
    
    const [unfavoriteList, setUnfavorite] = useState(productArray);
    const [favoriteList, setFavorite] = useState([]);

    const moveToFavorite = (id) => {
        //takes item (using id) and adds it to the new favorite array
        let tempFavorites = [...favoriteList, unfavoriteList.find(item => item.id === id)];
        //puts in right order by id
        tempFavorites.sort((a, b) => a.id - b.id);
        setFavorite(tempFavorites);
        
        //removes the item from the original list by filtering out all items with other ids into the new unfav array
        //was originally .idx, check Arthur's original file
        setUnfavorite(unfavoriteList.filter(item => item.id !== id ));
}
const moveToUnFavorite = (id) => {
    //toggles clicked item to unfavorite list by taking the item with that id and putting it in the unfav array
    let tempUnfavorites = [...unfavoriteList, favoriteList.find(item =>  item.id === id )];
    //puts in right order by id
    tempUnfavorites.sort((a, b) => a.id - b.id);
    setUnfavorite(tempUnfavorites);

    //removes the item from the favorited list by filtering out all items with other ids into the fav array
    setFavorite(favoriteList.filter(item => item.id !== id));
    }

return (
    <>
        <div>
            <p>Available Products: </p>
            <br />
            <p>Click the star to add the product to your favorites list. </p>
            {unfavoriteList.map((item) => {
              return (
                <Favorite updateFn={() => moveToFavorite(item.id)} id={item.id} name={item.name} imageUrl={props.imageUrl} imageAlt={props.imageAlt} description={item.description} price={item.price} isFavorite={false} />);
            })}
        </div>

        <br />
        <br />

        <div>
            <p>Your Favorites: </p>
            <br />
            <p>Click the star to remove the product from your favorites list. </p>
            {favoriteList.map((item) => {
              return(
                <Favorite updateFn={() => moveToUnFavorite(item.id)} id={item.id} name={item.name} imageUrl={props.imageUrl} imageAlt={props.imageAlt} description={item.description} price={item.price} isFavorite={true} /> );
            })}
        </div>
    </>
);

}