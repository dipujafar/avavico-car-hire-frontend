import PageTopSection from "@/components/shared/PageTopSection";
import ForgetPassForm from "./_components/ForgetPassForm";


const ForgetPasswordPage = () => {
  return (
    <div className="lg:space-y-12 space-y-7 md:pb-16  pb-8">
      <PageTopSection title="Forgot Password"></PageTopSection>
      <ForgetPassForm></ForgetPassForm>
    </div>
  );
};

export default ForgetPasswordPage;
