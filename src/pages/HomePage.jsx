import HomeSlider from '../components/Home/HomeSlider'
import EditorPick from '../components/Home/EditorPick';
import FeaturedProducts from '../components/Shop/FeaturedProducts';
import VitaClassic from '../components/Home/VitaClassic';
import NeuralUniverse from '../components/Home/NeuralUniverse';
import FeaturedPosts from '../components/Home/FeaturedPosts';

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