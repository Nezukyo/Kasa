import { useParams } from "react-router-dom";
//import housings from "../../accommodation.json";
import Collapse from "../Collapsible";
import Slideshow from "../Slideshow";
import Rating from "../Rating";
import "../Main/Housing-main-style.css";

import Error from "../../components/Error";

function Housing({housings}) {
  const { housingId } = useParams();
  const housing = housings.find((housing) => housing.id === housingId);
  if (housing === undefined) {
    return <Error />;
  }
  document.title = housing.title;
  const equipments = housing.equipments.map((equipment) => (
    <p key={equipment} className="equipment-style">
      {equipment}
    </p>
  ));

  return (
    <div className="housingMain">
      <Slideshow className="housing-slideshow" slide={housing.pictures} />

      <div className="housing-styling">
        <div className="housing-info-bloc">
          <div className="housing-info">
            <h1 className="housing-title">{housing.title}</h1>
            <p className="housing-location">{housing.location}</p>
          </div>
          <div className="tags">
            {housing.tags.map((tag) => (
              <p key={tag} className="tags-style">
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="housing-rating-tag">
            <div className="stars-style">
              <Rating className="housing-rating" stars={housing.rating} />
            </div>
          </div>

          <div className="housing-host-info">
            <div className="housing-host-name">
              <p className="housing-host">{housing.host.name}</p>
            </div>
            <div className="host-picture">
              <img
                src={housing.host.picture}
                alt={housing.host.picture}
                className="housing-host-picture"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="housing-content">
        <div className="style-housing">
          <Collapse
            title="Description"
            content={housing.description}
            collapseHousing={true}
          />
        </div>
        <div className="style-housing">
          <Collapse
            title="Equipements"
            content={equipments}
            collapseHousing={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Housing;
