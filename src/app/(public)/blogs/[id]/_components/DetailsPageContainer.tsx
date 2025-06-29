"use client"
import React from 'react';
import DetailsPageHeader from './DetailsPageHeader';
import Container from '@/components/shared/Container';
import DisplayBlogImage from './DisplayBlogImage';
import DetailsDescription from './DetailsDescription';
import { useGetSingleBlogQuery } from '@/redux/api/blogApi';
import BlogDetailsSkeleton from '@/components/skeletons/BlogSkeleton/BlogDetailsSkeleton';


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
const DetailsPageContainer = ({ id }: { id: string }) => {
  const {data: blogDetailsData, isLoading} = useGetSingleBlogQuery(id, {skip: !id});

  console.log(blogDetailsData?.data);
  
  if(isLoading){
    return (
      <Container>
        <BlogDetailsSkeleton/>
      </Container>
    )
  }
    return (
        <Container className='xl:space-y-10 space-y-7'>
            <DetailsPageHeader data={blogDetailsData?.data}></DetailsPageHeader>
            <DisplayBlogImage data={blogDetailsData?.data?.blogImage}></DisplayBlogImage>
            <DetailsDescription data={blogDetailsData?.data?.details}></DetailsDescription>
        </Container>
    );
};

export default DetailsPageContainer;