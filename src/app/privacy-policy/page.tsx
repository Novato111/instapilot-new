import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        At [Your Company Name], we take your privacy seriously. This Privacy
        Policy outlines the information we collect, how we use it, and the
        measures we take to protect your data when you use our Instagram DM
        automation services.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p className="text-lg mb-2">
          We collect the following types of information:
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>
            Personal information you provide when registering for the service
            (e.g., name, email).
          </li>
          <li>
            Instagram account data, including access tokens and account
            settings.
          </li>
          <li>
            Usage data, including interaction with the service (e.g., how you
            use our features).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-lg mb-2">
          The information we collect is used for the following purposes:
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>To provide, maintain, and improve the service.</li>
          <li>
            To personalize your experience and offer tailored automation
            features.
          </li>
          <li>
            To communicate with you, including service updates and support.
          </li>
          <li>To monitor and analyze usage to improve service quality.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. Data Sharing and Disclosure
        </h2>
        <p className="text-lg mb-2">
          We do not sell or rent your personal data. However, we may share your
          information with third parties in the following cases:
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>
            With service providers who help us operate and maintain the service.
          </li>
          <li>To comply with legal obligations or protect our rights.</li>
          <li>
            In the event of a business transfer (e.g., merger or acquisition).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p className="text-lg mb-2">
          We take appropriate security measures to protect your personal data,
          including encryption and secure storage. However, please note that no
          method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p className="text-lg mb-2">
          You have the following rights regarding your data:
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>Access to your personal data.</li>
          <li>The right to correct or update your personal data.</li>
          <li>
            The right to delete your data, subject to legal and contractual
            obligations.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Changes to This Privacy Policy
        </h2>
        <p className="text-lg mb-2">
          We may update this Privacy Policy from time to time. When we do, we
          will post the updated policy on this page and notify you via email if
          necessary.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p className="text-lg mb-2">
          If you have any questions or concerns about this Privacy Policy or our
          practices, please contact us at:
        </p>
        <p className="text-lg">
          Email:{" "}
          <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
