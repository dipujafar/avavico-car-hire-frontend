import PaginationSection from "@/components/shared/pagination/PaginationSection";
import BlogsPageContainer from "./_components/BlogsPageContainer";

export const metadata = {
    title: "Blogs",
    description: "All your Uploaded Blogs find here",
}

const BlogPage = () => {
    return (
        <>
            <BlogsPageContainer></BlogsPageContainer>
            <PaginationSection totalItems={10} className="mt-3"></PaginationSection>
        </>
    );
};

export default BlogPage;