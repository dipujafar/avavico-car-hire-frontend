import PageTopSection from "@/components/shared/PageTopSection";
import UserRoleContainer from "./_components/UserRoleContainer";
import Container from "@/components/shared/Container";

const SignUpPage = () => {
  return (
    <div className="lg:space-y-12 space-y-7 md:pb-16  pb-8">
      <PageTopSection title="Choose Your  Role"></PageTopSection>
      <Container>
        <UserRoleContainer></UserRoleContainer>
      </Container>
    </div>
  );
};

export default SignUpPage;
