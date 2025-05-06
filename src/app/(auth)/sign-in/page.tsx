import PageTopSection from '@/components/shared/PageTopSection';
import React from 'react';
import SignInForm from './_components/SignInForm';

const SingInPage = () => {
    return (
        <div className="lg:space-y-12 space-y-7 md:pb-16  pb-8">
        <PageTopSection title="Welcome Back! Log In to Continue"></PageTopSection>
        <SignInForm></SignInForm>
      </div>
    );
};

export default SingInPage;