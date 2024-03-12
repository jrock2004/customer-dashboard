import { AboutSection } from "@/components/AboutSection";
import { PageTitle } from "@/components/PageTitle";

const About = () => {
  const liClassNames = "pl-4";

  return (
    <div className="flex flex-col">
      <PageTitle additionalClasses="mb-3" title="About" variant="h1" />
      <p className="mb-8">
        Welcome to our Customer Dashboard! We&apos;re thrilled to have you on
        board and excited to provide you with an overview of what we&apos;re all
        about.
      </p>
      <AboutSection title="Our Mission">
        <p>
          At our core, we&apos;re driven by a single mission: to empower our
          customers with intuitive tools and insights that streamline their
          experience and drive success in their endeavors. We believe in
          harnessing the power of technology to simplify complex processes and
          enhance productivity.
        </p>
      </AboutSection>
      <AboutSection title="What We Offer">
        <div className="mb-4">
          <p>
            Our Customer Dashboard is designed to be your central hub for
            managing all aspects of your experience with us. From tracking
            orders to accessing support, our dashboard puts everything you need
            right at your fingertips.
          </p>
          <h3 className="text-md mb-1 ml-4 mt-6 font-semibold">
            Key Features:
          </h3>
          <ol className="ml-4 list-inside list-decimal">
            <li className={liClassNames}>
              <span className="font-bold">Order Tracking:</span> Keep tabs on
              your orders in real-time, from processing to delivery.
            </li>
            <li className={liClassNames}>
              <span className="font-bold">Account Management:</span> Easily
              update your account information and preferences with just a few
              clicks.
            </li>
            <li className={liClassNames}>
              <span className="font-bold">Support Center:</span> Access our
              comprehensive support resources and reach out to our dedicated
              team for assistance.
            </li>
            <li className={liClassNames}>
              <span className="font-bold">Analytics Dashboard:</span> Gain
              valuable insights into your usage patterns and performance metrics
              through interactive analytics tools.
            </li>
            <li className={liClassNames}>
              <span className="font-bold">Customization Options:</span> Tailor
              your dashboard experience to suit your specific needs and
              preferences.
            </li>
          </ol>
        </div>
      </AboutSection>
      <AboutSection title="Our Commitment to You">
        <p>
          We&apos;re committed to providing you with the highest level of
          service and support. Our team is here to listen to your feedback,
          address your concerns, and continuously improve your dashboard
          experience.
        </p>
      </AboutSection>
      <AboutSection title="Get in Touch">
        <p>
          Have questions or feedback? We&apos;d love to hear from you! Reach out
          to us through the contact information provided in your dashboard, and
          we&apos;ll be happy to assist you.
        </p>
        <p>
          Thank you for choosing our Customer Dashboard. We&apos;re honored to
          be a part of your journey, and we look forward to serving you!
        </p>
      </AboutSection>
    </div>
  );
};

export default About;
