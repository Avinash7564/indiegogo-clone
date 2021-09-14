// import CarouselContainer  from "../component/jsx/carousel";
import CleverThings from "./CleverThings";
import Footer from "../Components/Footer";
import HomepageCollections from "./HomepageCollections";
import HomepageReview from "./HomepageReview";
import IntrestYou from "./IntrestYou";
import Navbar from "./jsx/Navbar";
import HomepagePopularProject from "./PopularProject";
import TakeRide from "./TakeRide";
import Carosal from "./Carosal";



export default function HomePage() {
  return (
    <>
<Navbar />
<Carosal />

<div className="homepageMainDiv">

<HomepagePopularProject />
<HomepageCollections />

<TakeRide />
<IntrestYou />

<HomepageReview />

<CleverThings />



<Footer />

</div>{/* MainDiv */}
    </>
  );
}

