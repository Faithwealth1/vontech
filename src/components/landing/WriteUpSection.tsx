import React from 'react';
import   HeroSectionLend from './HeroSectionLend';
import   ContentSection  from './ContentSection';
import { TestimonialSection } from './TestimonialSection';
import { CallToActionButton } from './CallToActionButton';
import  Header from './Header';
import  CTASectionLend  from './CTASectionLend';
import  Footer from './Footer';

export const WriteUpSection: React.FC = () => {
  return (
    <>
      <Header />
      <article className="justify-center items-stretch self-stretch flex flex-col overflow-hidden bg-[#FBFBFB] pt-10 pb-20 px-20 max-md:pt-8 max-md:px-5">
      <HeroSectionLend
        title="How Vontech Helped Lendsqr Build a High-Accuracy, Scalable Loan Scoring System, Without Breaking the Bank"
        imageSrc="lendsqr-cs.png"
      />

      <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        At Vontech, we live and breathe cloud-native innovation. When Lendsq,
        one of Nigeria's most promising fintech platforms came to us with a
        challenge, we knew it was a perfect match.
        <br />
        <br />
        Lendsqr is on a mission to{' '}
        <span className="font-bold">democratize access to credit</span> for
        small and medium-sized lenders. They provide everything a lender needs,
        from onboarding to disbursement to collections without requiring heavy
        infrastructure or massive upfront costs.
        <br />
        <br />
        But as their user base grew, so did their need for{' '}
        <span className="font-bold">
          smarter, faster, and more cost-effective decision-making
        </span>{' '}
        in loan approvals.
      </div>

      <ContentSection
  title="The Challenge"
        subtitle="Balancing Cost, Accuracy & Scale"
      >
        Lendsqr needed a{' '}
        <span className="font-bold">modern loan scoring engine</span> that
        could:
        <br />
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            Deliver decisions in{' '}
            <span className="font-bold">real time.</span>
          </li>
          <li>
            Plug directly into their{' '}
            <span className="font-bold">
              existing AWS infrastructure.
            </span>
          </li>
          <li>Scale seamlessly with increasing demand.</li>
          <li>
            Minimize infrastructure and{' '}
            <span className="font-bold">operational costs.</span>
          </li>
          <li>
            Provide{' '}
            <span className="font-bold">high scoring accuracy</span> to
            reduce default risk.
          </li>
        </ul>
        <br />
        The challenge wasn't just technical, it was also strategic. They
        wanted a system that wouldn't slow them down, require a full data
        science team to maintain, or demand costly infrastructure upgrades.
      </ContentSection>

      <ContentSection
  title="The Solution"
        subtitle="Cloud-Native, Serverless, and Fully Integrated"
      >
        Vontech got to work designing a solution that was{' '}
        <span className="font-bold">
          simple, efficient, and cloud-native
        </span>{' '}
        from the ground up.
        <br />
        <br />
        <span className="font-bold">
          Step 1: Architecture Built for Agility
        </span>
        <br />
        We began by designing a{' '}
        <span className="font-bold">minimalist architecture</span> that
        could be implemented and tested quickly. The scoring logic was
        containerized and trained using existing loan application data to
        ensure it reflected Lendsqr's unique borrower profiles.
        <br />
        <br />
        We intentionally kept it modular, so updates to the model, or
        integration with new data sources could be done without major system
        overhauls.
        <br />
        <br />
        <span className="font-bold">
          Step 2: Seamless AWS Integration
        </span>
        <br />
        Lendsqr was already operating in AWS, so we ensured our solution
        integrated natively with:
        <br />
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <span className="font-bold">Amazon CloudWatch</span> for
            monitoring and alerting.
          </li>
          <li>
            <span className="font-bold">Amazon S3</span> for storing model
            artifacts and logs.
          </li>
          <li>
            <span className="font-bold">API Gateway + AWS Lambda</span>{' '}
            for exposing the scoring engine to front-end and backend
            services.
          </li>
          <li>
            <span className="font-bold">
              IAM (Identity and Access Management)
            </span>{' '}
            for secure, role-based access.
          </li>
        </ul>
        This meant Lendsqr didn't have to build or manage any new
        infrastructure. It all worked within their existing setup.
        <br />
        <br />
        <span className="font-bold">
          Step 3: Serverless Scoring with AWS Lambda
        </span>
        <br />
        The core scoring logic was deployed on{' '}
        <span className="font-bold">AWS Lambda</span>, giving Lendsqr all
        the benefits of serverless computing:
        <br />
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <span className="font-bold">Automatic scaling</span> — handles
            any load, from 10 to 10,000 scoring requests.
          </li>
          <li>
            <span className="font-bold">Ultra-low latency</span> — average
            response time &lt; 1 second.
          </li>
          <li>
            <span className="font-bold">No idle cost</span> — only pays
            for what's used, down to the millisecond.
          </li>
        </ul>
        It also made the system incredibly resilient and easy to manage—no
        worrying about provisioning servers or managing scaling logic.
      </ContentSection>

  <ContentSection title="Results">
        The new scoring engine was deployed and went live in under 6 weeks.
        Here's what Lendsqr gained:
        <br />
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <span className="font-bold">Lightning-Fast Scoring</span>{' '}
            Sub-second decision times, even during peak usage hours.
          </li>
          <li>
            <span className="font-bold">Over 40% Cost Reduction</span>{' '}
            Compared to their previous manual scoring process and batch
            infrastructure setup.
          </li>
          <li>
            <span className="font-bold">Smarter Lending Decisions</span>{' '}
            More accurate scoring led to fewer defaults and increased
            confidence from lending partners.
          </li>
          <li>
            <span className="font-bold">Effortless Scalability</span> No
            re-architecture needed as user demand increased. The system scaled
            itself, on demand.
          </li>
        </ul>
        <span className="font-bold">Model Flexibility</span> New features
        or model updates can be deployed with zero downtime and minimal DevOps
        effort.
      </ContentSection>

      <TestimonialSection
          quote="Partnering with Vontech was one of the best infrastructure decisions we've made. They didn't just build us a scoring engine, they helped us future-proof our lending operations. The system is fast, scalable, and incredibly cost-effective."
          author="Senior Engineering Manager, Lendsqr"
          additionalContent={
            <>
              <span className="font-semibold text-2xl leading-[31px]">
                Collaboration That Delivered
              </span>
            <br />
            <br />
            What made this project successful wasn't just the tech, it was the{' '}
            <span className="font-bold">collaboration</span>. Vontech's
            engineering team worked closely with Lendsqr from start to finish,
            conducting:
            <br />
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Regular syncs with product managers and engineers.</li>
              <li>Joint test cycles to simulate real-world loan applications.</li>
              <li>
                Knowledge transfer sessions to help Lendsqr's team maintain and
                expand the system internally
              </li>
            </ul>
          </>
        }
      />

      <section className="flex w-full flex-col items-stretch mt-10 max-md:max-w-full">
  <ContentSection title="Final Thoughts">
          This project is a perfect example of how{' '}
          <span className="font-bold">
            cloud-native solutions can deliver outsized impact
          </span>{' '}
          when built with the right strategy. Lendsqr now has a smarter,
          leaner, and more reliable scoring engine powering its growth, and
          we're proud to be part of that journey.
          <br />
          <br />
          Whether you're a fintech startup or an enterprise looking to
          modernize your workflows, Vontech brings the{' '}
          <span className="font-bold">technical depth</span>,{' '}
          <span className="font-bold">agility</span>, and{' '}
          <span className="font-bold">partnership spirit</span> to make it
          happen.
        </ContentSection>

        <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
          <span className="font-semibold text-2xl leading-[31px]">
            Want to Build Smarter, Scalable Cloud Systems Like This?
          </span>
          <br />
          <br />
          Let's talk about how Vontech can help your team solve big challenges
          without the big bills.
        </div>

        <CallToActionButton>
          Get In Touch
        </CallToActionButton>
      </section>
    </article>
    <CTASectionLend />
    <Footer />
    </>
  );
};

export default WriteUpSection;
