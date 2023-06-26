import { IMG_CDN_URL } from "../../constants";
import {Link} from 'react-router-dom'
const PizzaCard = (props) => {
    const {id,  name, cuisines, cloudinaryImageId, lastMileTravelString,}=props;
    return (
        <Link to={`/restaurent/${id}`} className="card-container">
            <img src={IMG_CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3><br/>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{lastMileTravelString} min</h5>
        </Link>
    );
}

export default PizzaCard;