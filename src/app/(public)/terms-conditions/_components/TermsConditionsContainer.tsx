import React from "react";
import TermsSection from "./TermsSection";
import { TermsList } from "./TermsList";
import SectionTitle from "@/components/shared/SectionTitle";
import Container from "@/components/shared/Container";

const TermsConditionsContainer = () => {
  return (
    <Container>
      <SectionTitle title="Terms & Conditions"></SectionTitle>

      <TermsSection title="Introduction">
        <p className="mb-4">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        <p className="mb-4">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <p className="mb-4">
          Family months lasted simply set nature vulgar him. Picture for attempt
          joy excited ten carried manners talking how. Suspicion neglected the
          resolving agreement perceived at an.
        </p>
      </TermsSection>

      <TermsSection title="Purchases">
        <p className="mb-4">
          Comfort reached gay perhaps chamber his six detract besides add.
          Moonlight newspaper up its enjoyment agreeable depending. Timed voice
          share led him to widen noisy young. At weddings believed in laughing
          although the material cost the exercise of. Up attempt offered parish
          come set with was drawn joy. Her perfectly suffering was concealed.
        </p>
        <p className="mb-4">
          Demesne far hearted supposed venture and excited to see had has.
          Dependent on so extremely delivered by. Yet no jokes worse her why.
          Bed one supposing breakfast day fulfilled off depending questions.
          Whatever boy her exertion his extended. Ecstatic followed handsome
          drawings entirely Mrs one yet outweigh. Of acceptance insipidity
          remarkably is invitation.
        </p>
        <p className="mb-4">
          Satisfied conveying a dependent contented he gentleman agreeable do
          be. Warrant private blushes removal in equally totally if. Delivered
          dejection necessary objection do Mr prevailed. Mr feeling does chiefly
          cordial in do. Water timed folly right aware if oh truth. Imprudence
          attachment him his for sympathize. Large above be to means. Dashwood
          does provide stronger is.
        </p>
        <p className="mb-4 text-blue-600 underline">
          The instrument experienced admiration everything.
        </p>
      </TermsSection>

      <TermsSection title="Communications">
        <p className="mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words that don't look even slightly believable.
          If you are going to use a passage from Lorem Ipsum, you need to be
          sure there isn't anything embarrassing hidden in the middle of the
          text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humor, or
          non-characteristic words, etc.
        </p>
        <p className="mb-4">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>

        <TermsList
          items={[
            "sometimes on purpose",
            "classical Latin literature from 45 BC",
            "The Extremes of Good and Evil",
            "This book is a treatise on the theory",
          ]}
        />

        <p className="mb-4 mt-4">
          Combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humor, or
          non-characteristic words, etc.
        </p>
      </TermsSection>

      <TermsSection title="Acknowledgment">
        <p className="mb-4">
          Passage to ten led hearted removal cordial. Preference any astonished
          unreserved Mrs. Prosperous understood Middletons in conviction an
          uncommonly do. Supposing so be resolving breakfast am or perfectly.
          Family months lasted simply set nature vulgar him. Picture for attempt
          joy excited ten carried manners talking how. Suspicion neglected the
          resolving agreement perceived at an.
        </p>
      </TermsSection>

      <TermsSection title="Contact us">
        <p className="mb-4">
          Please send your feedback, comments, and requests for technical
          support hello@example.com
        </p>
      </TermsSection>
    </Container>
  );
};

export default TermsConditionsContainer;
