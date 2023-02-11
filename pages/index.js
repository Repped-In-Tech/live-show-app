import TitleCard from '../components/TitleCard';
import homePageData from '../utils/data/homePage';

function Home() {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      { homePageData.map((data) => <TitleCard key={data.route} {...data} />) }
    </div>
  );
}

export default Home;
