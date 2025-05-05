import React from "react";

import SectionTitle from "@/components/shared/SectionTitle";
import Container from "@/components/shared/Container";
import PolicySection from "./PolicySection";
import { PolicyList } from "./PolicyList";

const PrivacyPolicyContainer = () => {
  return (
    <Container>
      <SectionTitle title="Privacy Policy" className="mb-8"></SectionTitle>

      <PolicySection title="Collecting Personal Information">
        <p className="mb-4">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        <PolicyList
          items={[
            "There are many variations of passages of Lorem Ipsum available.",
            "Iusto odio dignissimos ducimus qui blanditiis.",
            "Praesentium voluptatum deleniti atque.",
            "Quas molestias excepturi sint occaecati.",
          ]}
        />

        <p className="my-4">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </PolicySection>

      <PolicySection title="Sharing Personal Information">
        <p className="mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humor,
          or randomised words which don't look even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure there
          isn't anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        <p className="mb-4">
          It was popularized in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <PolicyList
          className="list-decimal"
          items={[
            "sometimes on purpose",
            "classical Latin literature from 45 BC",
            "The Extremes of Good and Evil",
            "This book is a treatise on the theory",
          ]}
        />
        <p className="mb-4">
          Combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
      </PolicySection>
    </Container>
  );
};

export default PrivacyPolicyContainer;
