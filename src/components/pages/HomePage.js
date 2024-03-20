import {Link} from 'react-router-dom';
import About from "./About";
import GreekSalad from '../../assets/food/greek-salad.webp';
import Bruschetta from '../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../assets/food/lemon-dessert.webp';
import SpecialCard from '../SpecialCard';

export default function Homepage() {
  return (
    <>
            <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Special Offer</h1>
                    <h2>30% off</h2>
                    <br></br>
                    </section>

                <section className="hero-image">
                <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>
            </article>
      </header>
      <main>
      <section className="specials">

            <section className="specials-cards">
                <SpecialCard name ="Our Menu" image={GreekSalad}  description="Our Menu consists of 12-15 seasonal items and food around multiple cuisines"/>
                <SpecialCard name ="Book a Table" image={Bruschetta} description="Reserve your Table for dining experience"/>
                <SpecialCard name ="Opening Hours" image={LemonDessert}  description="The Little Lemon is open 7 days even on public holidays  2pm - 10pm" addlink={true}/>
            </section>
        </section>
        <About></About>
      </main>
    </>
  );
}
