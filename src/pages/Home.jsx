import Header from "../components/Header";
import Infon from "../components/Infon";
import Section from "../components/Section";
import Products from "../components/Products";
import { productsSection } from "../constants/constant";




const Home = () => {

    return (
       
                <>
                    <Header />
                    <Infon />
                    <Section data={productsSection.iphonePro} />
                    <Section data={productsSection.iphone} />
                    <Section data={productsSection.macbookpro} />
                    <Products />
                </>
    
    )
}

export default Home;
