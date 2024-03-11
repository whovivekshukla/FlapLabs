import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>

      <p className="mb-4">
        Welcome to FlapLabs! These Terms and Conditions govern your use of our
        user-centric apps. By accessing or using our apps, you agree to be bound
        by these terms. If you do not agree with any part of these terms, please
        do not use our apps.
      </p>

      <h3 className="text-xl font-bold mb-2">1. Eligibility</h3>
      <p>
        Our apps are intended for individuals who are at least 18 years old or
        have reached the age of majority in their respective jurisdictions. If
        you are under 18, you must have the consent of a parent or legal
        guardian to use our apps.
      </p>

      <h3 className="text-xl font-bold mb-2">2. Account Registration</h3>
      <p>
        To access certain features of our apps, you may be required to create an
        account. You agree to provide accurate, current, and complete
        information during the registration process. You are solely responsible
        for maintaining the confidentiality of your account credentials and for
        any activity that occurs under your account.
      </p>

      <h3 className="text-xl font-bold mb-2">3. User Conduct</h3>
      <p>
        You agree to use our apps in compliance with all applicable laws and
        regulations. You shall not engage in any activity that:
      </p>
      <p>
        a. Infringes upon the intellectual property rights of others.
        <br />
        b. Is harmful, threatening, abusive, defamatory, or obscene.
        <br />
        c. Disrupts or interferes with the services provided by FlapLabs.
      </p>

      <h3 className="text-xl font-bold mb-2">4. Intellectual Property</h3>
      <p>
        All content, features, and functionality within our apps are owned by
        FlapLabs or our licensors, and are protected by intellectual property
        laws. You may not reproduce, modify, distribute, or create derivative
        works from our apps without our prior written consent.
      </p>

      <h3 className="text-xl font-bold mb-2">
        5. Third-Party Links and Services
      </h3>
      <p>
        Our apps may contain links to third-party websites or services. We are
        not responsible for the content, privacy practices, or terms and
        conditions of these third-party sites or services. Your use of such
        third-party sites or services is at your own risk.
      </p>

      <h3 className="text-xl font-bold mb-2">6. Limitation of Liability</h3>
      <p>
        FlapLabs shall not be liable for any indirect, incidental, special, or
        consequential damages arising from your use of our apps, including but
        not limited to lost profits, data loss, or business interruption.
      </p>

      <h3 className="text-xl font-bold mb-2">7. Termination</h3>
      <p>
        We reserve the right to terminate or suspend your access to our apps at
        any time, without prior notice or liability, for any reason, including
        but not limited to a violation of these Terms and Conditions.
      </p>

      <h3 className="text-xl font-bold mb-2">
        8. Modifications to Terms and Conditions
      </h3>
      <p>
        We may update these Terms and Conditions from time to time. The updated
        terms will be effective immediately upon posting on our website or
        within our apps. By continuing to use our apps after any modifications,
        you agree to be bound by the updated Terms and Conditions.
      </p>

      <h3 className="text-xl font-bold mb-2">9. Contact Us</h3>
      <p>
        If you have any questions or concerns regarding these Terms and
        Conditions, please contact us at{" "}
        <a href="mailto:contact@flaplabs.tech" className="text-blue-500">
          contact@flaplabs.tech
        </a>
        .
      </p>

      <p>
        By using our apps, you acknowledge that you have read, understood, and
        agreed to these Terms and Conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;
