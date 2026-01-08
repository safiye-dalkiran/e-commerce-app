import HomeSlider from '../components/HomeSlider'
import EditorPick from './EditorPick';
import FeaturedProducts from './FeaturedProducts';
import VitaClassic from '../components/VitaClassic';
import NeuralUniverse from './NeuralUniverse';
import FeaturedPosts from './FeaturedPosts';

const HomePage = () => {


    return (
        <div className="flex flex-col font-montserrat">
            <HomeSlider />
            {/*Editör Pick Section*/}
            <EditorPick />
            {/* Featured Products Section */}
            <FeaturedProducts />
            {/* Vita Classic Section*/}
            <VitaClassic />
            {/*Neural Universe Section*/}
            <NeuralUniverse />

            {/*Featured Posts Section*/}
            <FeaturedPosts />
        </div>
    );
};

export default HomePage;