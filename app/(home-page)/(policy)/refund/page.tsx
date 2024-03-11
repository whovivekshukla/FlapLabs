import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">No Refund Policy</h2>

      <p className="mb-4">
        At FlapLabs, we strive to provide high-quality apps and services to our
        users. All purchases made through our apps or website are final and
        non-refundable.
      </p>

      <h3 className="text-xl font-bold mb-2">1. No Refunds</h3>
      <p>
        We do not offer refunds for any purchases made on our platform,
        including subscriptions, in-app purchases, or paid apps. By making a
        purchase, you acknowledge and agree that the transaction is final and
        non-refundable.
      </p>

      <h3 className="text-xl font-bold mb-2">2. Exceptions</h3>
      <p>
        In rare and exceptional circumstances, such as a technical issue or a
        bug that significantly impacts the functionality of the app or service,
        we may consider issuing a refund on a case-by-case basis. However, this
        is at our sole discretion and cannot be guaranteed.
      </p>

      <h3 className="text-xl font-bold mb-2">3. Support and Assistance</h3>
      <p>
        If you encounter any issues or have concerns regarding our apps or
        services, please contact our support team at{" "}
        <a href="mailto:support@flaplabs.tech" className="text-blue-500">
          support@flaplabs.tech
        </a>
        . We will do our best to assist you and resolve any problems you may be
        experiencing.
      </p>

      <h3 className="text-xl font-bold mb-2">4. Policy Updates</h3>
      <p>
        We reserve the right to modify or update this No Refund Policy at any
        time. Any changes will be effective immediately upon posting the updated
        policy on our website or within our apps.
      </p>

      <p>
        By using our apps and services, you acknowledge and agree to our No
        Refund Policy. If you do not agree with this policy, please refrain from
        making any purchases on our platform.
      </p>
    </div>
  );
};

export default RefundPolicy;
