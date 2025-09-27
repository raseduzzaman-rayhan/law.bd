import React, { createContext, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import LawyerList from '../../components/LawyerList/LawyerList';
import OurServices from '../../components/OurServices/OurServices';
import { useLoaderData } from 'react-router';

export const HomeContext = createContext(null);

const Home = () => {

    const lawyersListData = useLoaderData();
    const lawyers = lawyersListData;
    const [showAll, setShowAll] = useState(false);
    // first 6 lawyers showing :
    const visibleLawyers = showAll ? lawyers : lawyers.slice(0, 6);


    return (
        <div>
            <HomeContext.Provider value={{ visibleLawyers, showAll, setShowAll }}>
                <Banner></Banner>
                <LawyerList ></LawyerList>
                <OurServices></OurServices>
            </HomeContext.Provider>
        </div>
    );
};

export default Home;