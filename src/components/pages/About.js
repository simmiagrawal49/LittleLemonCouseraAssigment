import HeroImage from "../../assets/food/food4.webp";

export default function About() {
  return (<>  <header className="reserve-table">
  <img
    className="header-reserve"
    src={HeroImage}
    alt="Little Lemon Ingredients"
  ></img>
</header>
    <div className="reserve-header-text">
    Welcome to a curated collection of restaurant bios, each a glimpse into the unique flavors and stories that define diverse dining experiences.
From quaint bistros to bustling eateries, our compilation encapsulates the essence of culinary artistry, inviting you on a journey through tantalizing tastes and inspiring tales.
Discover the vibrant narratives that breathe life into these gastronomic havens, enticing food enthusiasts and connoisseurs alike to savor the varied palates of the world.
    </div>
    </>
  
  );
}
