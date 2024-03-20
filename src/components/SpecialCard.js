import {Link} from 'react-router-dom';
export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <h1>{props.name}</h1>
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                
                <h3>{props.price}</h3>
                <p>{props.description}</p>
               {props.addlink && <Link className="special-button"to="/book">Reserve a Table</Link>}
            </section>
        </article>
    );
}