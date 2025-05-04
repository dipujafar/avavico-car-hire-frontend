import React from 'react';
import DetailsPageHeader from './DetailsPageHeader';
import Container from '@/components/shared/Container';
import DisplayBlogImage from './DisplayBlogImage';
import DetailsDescription from './DetailsDescription';


const userData = {
    category : "Road Trips",
    title : "The complete guide to choosing the right rental car for your next adventure",
    author : {
      name: "John Doe",
      role: "Travel Blogger",
      avatar: "/user_Image1.png",
    },
    date : "April 10, 2025",
  }
const DetailsPageContainer = () => {
    return (
        <Container className='xl:space-y-10 space-y-7'>
            <DetailsPageHeader data={userData}></DetailsPageHeader>
            <DisplayBlogImage></DisplayBlogImage>
            <DetailsDescription></DetailsDescription>
        </Container>
    );
};

export default DetailsPageContainer;