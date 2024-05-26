import AboutMe from '../AboutMe/AboutMe';
import Brand from './Brand';
import Intro from './Intro';
import NewsSeminor from './NewsSeminor';
import SchoolerShipInfo from './SchoolerShipInfo';
import Testimonial from './Testimonial';

function Home() {
  return (
    <div>
      <Intro />
      <NewsSeminor />
      <SchoolerShipInfo />
      <AboutMe />
      <Testimonial />
      <Brand />
    </div>
  );
}

export default Home;
