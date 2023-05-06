import { useParams } from "react-router-dom";
import housings from "../../accommodation.json";
import Collapse from "../../components/Collapsible";
import Slideshow from "../../components/Slideshow";
import "../Housing/style.css";

function Housing() {
  const { housingId } = useParams();
  const housing = housings.find((housing) => housing.id === housingId);

  return (
    <div className="housingMain">
      <Slideshow
        className="housing-slideshow"
        slide={housing.pictures}
      ></Slideshow>
      <div className="housing-info-bloc">
        <div className="housing-info">
          <h1 className="housing-title">{housing.title}</h1>
          <p className="housing-location">{housing.location}</p>
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
            ></img>
          </div>
          <div className="housing-rating"></div>
        </div>
      </div>
      <div className="housing-content">
        <div className="style-housing">
          <Collapse
            title="Description"
            content={housing.description}
          ></Collapse>
        </div>
        <div className="style-housing">
          <Collapse title="Equipements" content={housing.equipments}></Collapse>
        </div>
      </div>
    </div>
  );
}

export default Housing;
