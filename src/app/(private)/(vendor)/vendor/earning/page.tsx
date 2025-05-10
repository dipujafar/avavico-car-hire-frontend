import React from 'react';
import EarningStatistic from './_components/EarningStatistic';

const EarningPage = () => {
    return (
        <div>
            <h2 className='2xl:text-[40px] md:text-4xl text-2xl font-medium text-[#333] lg:mb-3 mb-2'>Earning</h2>
            <hr className='border-[#AAA]' />
            <EarningStatistic></EarningStatistic>
        </div>
    );
};

export default EarningPage;