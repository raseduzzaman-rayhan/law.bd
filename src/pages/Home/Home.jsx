import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import LawyerList from '../../components/LawyerList/LawyerList';
import OurServices from '../../components/OurServices/OurServices';

const Home = () => {

    const lawyersListPromise = fetch('./lawyersList.json').then(res => res.json());

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span>loaddinggg.......</span>}>
                <LawyerList lawyersListPromise={lawyersListPromise}></LawyerList>
            </Suspense>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;