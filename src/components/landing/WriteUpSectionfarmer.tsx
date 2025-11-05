import React from 'react';
import  HeroSectionfarmer  from './HeroSectionFarmer';
import  ContentSectionfarmer  from './ContentSectionfarmer';
import  TestimonialSectionfarmer  from './TestimonialSectionfarmer';
import  CallToActionSectionfarmer  from './CallToActionSectionfarmer';

export const WriteUpSection: React.FC = () => {
  return (
    <article className="flex flex-col justify-center items-start gap-10 self-stretch bg-[#FBFBFB] pt-20 pb-20 px-20 max-md:gap-8 max-md:pt-16 max-md:pb-[60px] max-md:px-10 max-sm:gap-6 max-sm:pt-12 max-sm:pb-10 max-sm:px-5">
      <HeroSectionfarmer
        title="Complete Farmer: Enabling Smart Agriculture through AWS IoT Integration"
        imageUrl="farmer-cs.png"
        imageAlt="Complete Farmer IoT Core architecture diagram"
      />
      
      <p className="self-stretch text-[#181818] text-xl font-normal leading-[30px] max-md:text-lg max-sm:text-base">
        Complete Farmer, a tech-driven agritech company, is on a mission to
        digitize Africa's agricultural value chain. With an ecosystem that
        connects farmers, buyers, and service providers, the company wanted to
        deepen its technological edge by harnessing IoT and cloud capabilities
        to enhance real-time decision-making across farms.
      </p>

      <ContentSectionfarmer title="The Challenge">
        <>
          Complete Farmer needed to:
          <br />
          <br />• Integrate real-time environmental and soil data from weather
          stations and sensors.
          <br />• Enable remote, continuous monitoring of farm conditions.
          <br />• Create a centralized cloud platform for data processing,
          analytics, and visualization.
          <br />• Ensure secure, scalable infrastructure for managing large
          volumes of time-series data.
          <br />
          <br />
          Their existing infrastructure, while strong in web/mobile platforms
          and API lacked native IoT data handling capabilities and real-time
          analytics at scale.
        </>
      </ContentSectionfarmer>

      <ContentSectionfarmer title="The Solution">
        <>
          Vontech Group developed and deployed a robust IoT data pipeline on
          AWS:
          <br />
          <br />
          <div className="font-bold">1. IoT Device Integration</div>
          <br />• Used <span className="font-bold">AWS IoT Core</span> for secure
          device connectivity.
          <br />• Deployed <span className="font-bold">AWS IoT Greengrass</span> for
          edge processing, filtering raw data before sending to the cloud.
          <br />
          <br />
          <div className="font-bold">2. Data Storage & Processing</div>
          <br />• Leveraged <span className="font-bold">Amazon Timestream</span> for
          efficient time-series storage.
          <br />• Integrated <span className="font-bold">Amazon S3</span> for
          scalable raw data storage.
          <br />• Implemented{' '}
          <span className="font-bold">Amazon Kinesis Firehose</span> and{' '}
          <span className="font-bold">AWS Lambda</span> for real-time data
          ingestion and transformation.
          <br />• Applied <span className="font-bold">AWS Glue</span> for data
          cleansing and ETL tasks.
          <br />
          <br />
          <div className="font-bold">3. Analytics & Visualization</div>
          <br />• Enabled{' '}
          <span className="font-bold">Amazon QuickSight dashboards</span> for
          stakeholders.
          <br />• Used <span className="font-bold">Amazon Athena</span> for
          on-demand queries on historical data.
          <br />• Introduced <span className="font-bold">AWS SageMaker</span> to lay
          the groundwork for predictive insights.
          <br />
          <br />
          <div className="font-bold">4. Deployment Phases</div>
          <br />• Completed phased implementation, from device registration to
          full deployment with autoscaling and monitoring.
          <br />
          <br />
          Emphasized security, latency optimization, and cost-efficient resource
          allocation.
        </>
      </ContentSectionfarmer>

      <ContentSectionfarmer title="Results">
        <>
          <div className="font-bold">Real-time Monitoring:</div> Continuous data
          insights from farms.
          <br />
          <div className="font-bold">Scalability:</div> Easily scaled to
          integrate more devices and farms.
          <br />
          <div className="font-bold">Improved Security:</div> Encrypted data
          transfers and role-based access controls.
          <br />
          <div className="font-bold">Cost Optimization:</div> Smart data
          processing reduced cloud costs.
          <br />
          <div className="font-bold">Better Decision-Making:</div> Empowered
          stakeholders with analytics to boost yield and productivity.
        </>
      </ContentSectionfarmer>

      <TestimonialSectionfarmer
        quote="Vontech didn't just implement technology, they helped us rethink how we grow. With real-time insights and AWS-powered analytics, we're now operating on a different level. Our farmers are more empowered than ever."
        author="CTO, Complete Farmer"
        collaborationContent={
          <>
            <div className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
              Collaboration That Delivered
            </div>
            <br />
            <br />
            What made this project successful wasn't just the tech, it was the{' '}
            <span className="font-bold">collaboration</span>. Vontech's engineering
            team worked closely with Complete Farmer from start to finish, conducting:
            <br />
            <br />• Regular syncs with product managers and engineers.
            <br />• Joint test cycles to simulate real-world farm monitoring scenarios.
            <br />• Knowledge transfer sessions to help Complete Farmer's team maintain
            and expand the system internally
          </>
        }
      />

      <CallToActionSectionfarmer
        title="Final Thoughts"
        description="Complete Farmer's AWS IoT journey, powered by Vontech, is a blueprint for agricultural innovation in Africa. It demonstrates how cloud technology and data can transform farming, from reactive to proactive."
        ctaTitle={<span>Want to transform your operations with IoT and AWS?</span>}
        ctaDescription="Contact us today to explore how our cloud-native solutions can help you build, innovate, and grow"
        buttonText="Get In Touch"
      />
    </article>
  );
};

export default WriteUpSection;
