import React from "react";
import Bar from '../../components/bar'
import Carousel from '../../components/carousel';
import Footer from "../../components/footer";

const Home: React.FC = () => {
    return (
        <>
            <Bar/>
            <Carousel/>
            <Footer/>
        </>
    );
}

export default Home;