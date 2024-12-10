import HeroBanner from "../components/HeroSection/HeroBanner";
import Contact from "../pages/Contact/Contact";
import Portfolios from "../pages/Portfolios/Portfolios";
import Services from "../pages/Services/Services";


const HomeLayout = () => {
    return (
        <div>
            <HeroBanner/>
            <Services/>
            <Portfolios/>
            <Contact/>
            
        </div>
    );
};

export default HomeLayout;