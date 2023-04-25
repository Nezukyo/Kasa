import {Link} from 'react-router-dom';

function card({id, title, cover}) {
    return (
        <Link to={`/Housing/${id}`} className="main-card">
            <img src={cover} alt={title} className="main-img"/>
            <h2 className="card-title">{title}</h2>
        </Link>
    )
}

export default card;