import React from "react"; 
import redStar from "../../Assets/red-star.png";
import whiteStar from "../../Assets/white-star.png";

function Rating (props) {
    const stars = props.stars
    const allStars = [];
    for (let i = 0; i <= 4; i++){
        if (stars > i){
            allStars.push(<img src={redStar} className="red-star star" alt="redStar"/>)
        } else {
            allStars.push(<img src={whiteStar} className="white-star star" alt="whiteStar"/>)
        }
    }
    return (
        <div className="housing-stars-style">
            {allStars}
        </div>
    )
};

export default Rating;
