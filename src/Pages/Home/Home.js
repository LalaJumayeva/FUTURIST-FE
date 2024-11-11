import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Discounts from "./Sections/Discounts";
import Header from "./Sections/Header";
import Info from "./Sections/Info";
import MenSection from "./Sections/MenSection";
import Trending from "./Sections/Trending";

function HomeScreen() {
    return (
        <>
            <Header />
            <Info/>
            <Trending/>
            <MenSection/>
            <Discounts />
            <Banner/>
            <About/>
        </>
    );
}

export default HomeScreen;
