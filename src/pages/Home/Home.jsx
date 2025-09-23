import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import LawyerList from '../../components/LawyerList/LawyerList';

const Home = () => {

    const lawyersListPromise = fetch('./lawyersList.json').then(res => res.json());

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span>loaddinggg.......</span>}>
                <LawyerList lawyersListPromise={lawyersListPromise}></LawyerList>
            </Suspense>
        </div>
    );
};

export default Home;