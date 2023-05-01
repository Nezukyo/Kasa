import { useParams } from "react-router-dom";
import housings from "../../accommodation.json";
import Collapse from "../../components/Collapsible";
import "../Housing/style.css";

function Housing() {
  const { housingId } = useParams();
  const housing = housings.find((housing) => housing.id === housingId);

  return (
    <div className="housingMain">
        <div className="housing-slideshow"></div>
            <div className="housing-info-bloc">
                <div className="housing-info">
                    <h1 className="housing-title">{housing.title}</h1>
                    <p className="housing-location">{housing.location}</p>
                </div>
                <div className="housing-host-info">
                    <div className="host-name-picture">
                        <p className="housing-host">{housing.host.name}</p>
                        <img src={housing.host.picture} alt={housing.host.picture} className="housing-host-picture"></img>
                    </div>
                    <div className="housing-rating"></div>
                </div>
            </div>
        <div className="housing-content">
            <Collapse className="housing-description" title="Description" content={housing.description}></Collapse>
            <Collapse className="housing-equipments" title="Equipements" content={housing.equipments}></Collapse>
        </div>
    </div>
  )
}

export default Housing;
