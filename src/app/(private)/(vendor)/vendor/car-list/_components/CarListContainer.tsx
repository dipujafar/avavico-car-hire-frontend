import ProductCard from '@/components/shared/cards/ProductCard';
import { Button } from '@/components/ui/button';
import { carData } from '@/lib/dummyData';
import { Plus } from 'lucide-react';
import React from 'react';

const CarListContainer = () => {
    return (
        <>
            <div className='flex justify-between mb-5'>
                <div></div>
                <Button className='bg-primary-cyan hover:bg-gray-500'><Plus></Plus> Add a new car</Button>
            </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3    gap-4 xl:gap-6 ">
                  {carData?.slice(0, 9)?.map((carData) => (
                    // @ts-ignore
                    <ProductCard data={carData} key={carData.id}></ProductCard>
                  ))}
                </div>
        </>
    );
};

export default CarListContainer;