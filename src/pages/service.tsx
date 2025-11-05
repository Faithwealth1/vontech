import React from 'react';
import Header from '@/components/landing/Header';
import ServiceSection from '@/components/landing/ServiceSection';
import IndustryCard from '@/components/landing/IndustryCard';
import FeatureCard from '@/components/landing/FeatureCard';
import Footer from '@/components/landing/Footer';
const checkIcon = "/Check.png";
const cardBanking = "/Card_banking.png";
const healthCard = "/health.png";
const retailCard = "/retail.png";
const manufacturingCard = "/manufacturing.png";
const educationCard = "/education.png";
const technologyCard = "/technology.png";
const card1 ="/card 1.png";
const card2 = "/card 2.png";
const card3 = "/card 3.png";
const ctaImage = "/cta.png";

const Index = () => {
  const cloudManagedServicesCheckpoints = [
    { text: "24/7 cloud monitoring and support" },
    { text: "Backup, disaster recovery, and compliance" },
    { text: "Proactive issue resolution and optimization" }
  ];

  const cloudNativeCheckpoints = [
    { text: "Microservices architecture" },
    { text: "Serverless application development" },
    { text: "Kubernetes and containerized solutions" }
  ];

  const cloudMigrationCheckpoints = [
    { text: "Post-migration optimization" },
    { text: "Data and application migration" },
    { text: "Comprehensive migration assessment" }
  ];

  const iotSolutionsCheckpoints = [
    { text: "Data collection and analytics" },
    { text: "Secure connectivity and control" },
    { text: "IoT device integration and management" }
  ];

  const devopsCheckpoints = [
    { text: "Automated testing and deployment" },
    { text: "CI/CD pipeline setup and management" },
    { text: "Infrastructure as Code (IaC) implementation" }
  ];

  const bigDataCheckpoints = [
    { text: "Data warehousing and lakes" },
    { text: "Big data strategy and architecture" },
    { text: "Advanced analytics and visualization" }
  ];

  const industries = [
    {
      imageSrc: cardBanking,
      alt: "Banking & Finance"
    },
    {
      imageSrc: healthCard,
      alt: "Healthcare"
    },
    {
      imageSrc: retailCard,
      alt: "Retail & E-Commerce"
    },
    {
      imageSrc: manufacturingCard,
      alt: "Manufacturing"
    },
    {
      imageSrc: educationCard,
      alt: "Education"
    },
    {
      imageSrc: technologyCard,
      alt: "Technology & Startups"
    }
  ];

  const features = [
    {
      imageSrc: card1,
      alt: "Expertise in multiple industries"
    },
    {
      imageSrc: card2,
      alt: "Tailored solutions for unique challenges"
    },
    {
      imageSrc: card3,
      alt: "Proven success with leading organizations"
    }
  ];

  return (
    <div className="w-full max-md:max-w-full">
      <div className="bg-white relative flex w-full flex-col overflow-hidden items-stretch max-md:max-w-full">
        <Header />
        
        {/* Hero Section */}
        <section className="relative">
          <img
            src="footer bg.png"
            alt="VonTech Group Services Hero"
            className="aspect-[1.97] object-contain w-full z-0 min-h-[731px] max-md:max-w-full"
          />
        </section>

        <main>
          {/* Cloud Managed Services */}
          <ServiceSection
            title="Cloud Managed Services"
            description="We provide end-to-end cloud management solutions, ensuring optimal performance, security, and cost-efficiency. From infrastructure monitoring to disaster recovery, our team handles everything so you can focus on your core business activities."
            checkPoints={cloudManagedServicesCheckpoints}
            imageSrc="Cloud managed Service.png"
            imageAlt="Cloud Managed Services"
            imageOnLeft={true}
          />

          {/* Cloud-Native Development */}
          <ServiceSection
            title="Cloud-Native Development"
            description="Leverage our expertise in building cloud-native applications that are scalable, resilient, and aligned with your business objectives. Our solutions are designed to harness the full potential of the cloud."
            checkPoints={cloudNativeCheckpoints}
            imageSrc="Cloud-Native development.png"
            imageAlt="Cloud-Native Development"
            imageOnLeft={false}
          />

          {/* Cloud Migration Services */}
          <ServiceSection
            title="Cloud Migration Services"
            description="Transition your legacy systems to the cloud with minimal downtime. Our experts design and execute migration strategies that are cost-effective, secure, and aligned with your business goals"
            checkPoints={cloudMigrationCheckpoints}
            imageSrc="cloud migration services.png"
            imageAlt="Cloud Migration Services"
            imageOnLeft={true}
          />

          {/* IoT Solutions */}
          <ServiceSection
            title="Internet of Things (IoT) Solutions"
            description="From smart devices to intelligent networks, our IoT solutions help businesses unlock new opportunities by connecting physical and digital worlds. Transform your operations and gain real-time insights."
            checkPoints={iotSolutionsCheckpoints}
            imageSrc="internet of things.png"
            imageAlt="Internet of Things (IoT) Solutions"
            imageOnLeft={true}
          />

          {/* DevOps Services */}
          <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-white px-20 py-[60px] max-md:max-w-full max-md:px-5">
            <div className="flex w-full items-center gap-[40px_60px] justify-center flex-wrap max-md:max-w-full">
              <div className="aspect-[1.56] object-contain w-[545px] self-stretch min-w-60 my-auto max-md:max-w-full md:order-2 order-2">
                <img
                  src="devOps.png"
                  alt="DevOps Services and Solutions"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center w-[574px] my-auto max-md:max-w-full md:order-1 order-1">
                <div className="w-full max-md:max-w-full">
                  <div className="w-full text-4xl font-bold leading-none max-md:max-w-full">
                    <h2 className="bg-clip-text max-md:max-w-full">
                      DevOps Services and Solutions
                    </h2>
                    <div className="min-h-0.5 max-w-full w-[126px] bg-[#181818] mt-2 border-[rgba(24,24,24,1)] border-solid border-2" />
                  </div>
                  <p className="text-[#393C3D] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
                    Streamline your development and operations processes with our DevOps expertise. We enable faster delivery of high-quality applications through automation, collaboration, and best practices.
                  </p>
                </div>
                <div className="flex w-full flex-col items-stretch text-xl text-[#181818] font-medium justify-center mt-10 max-md:max-w-full">
                  {devopsCheckpoints.map((point, index) => (
                    <div key={index} className={`flex w-full items-center gap-4 flex-wrap ${index > 0 ? 'mt-5' : ''} max-md:max-w-full`}>
                      <img src={checkIcon} alt="Check" className="w-10 h-10 self-stretch my-auto" />
                      <div className="text-[#181818] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                        {point.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Big Data Consulting */}
          <ServiceSection
            title="Big Data Consulting Services"
            description="Unlock the power of big data with our consulting services. We help you collect, process, and analyze massive datasets to uncover actionable insights and drive informed decision-making."
            checkPoints={bigDataCheckpoints}
            imageSrc="big-data solutions.png"
            imageAlt="Big Data Consulting Services"
            imageOnLeft={true}
          />

          {/* Industries We Serve */}
          <section className="z-0 w-full bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
            <div className="w-full max-md:max-w-full">
              <div className="flex w-full flex-col items-stretch text-center justify-center max-md:max-w-full">
                <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
                  Industries We Serve
                </h2>
                <p className="text-[#393C3D] text-lg font-normal leading-[27px] self-center w-[688px] mt-2 max-md:max-w-full">
                  Vontech Group partners with businesses in diverse sectors, delivering tailored cloud and IT solutions that empower innovation and growth
                </p>
              </div>
              <div className="flex w-full items-center gap-6 flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
                {industries.map((industry, index) => (
                  <IndustryCard
                    key={index}
                    imageSrc={industry.imageSrc}
                    alt={industry.alt}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Vontech */}
          <section className="z-0 w-full text-center bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
            <div className="w-full max-md:max-w-full">
              <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
                <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
                  Why Choose Vontech for Your Industry?
                </h2>
                <p className="text-[#393C3D] text-lg font-normal leading-[27px] self-center w-[780px] mt-2 max-md:max-w-full">
                  Our deep understanding of diverse sectors allows us to create tailored solutions that align with your specific needs and goals.
                </p>
              </div>
              <div className="flex w-full items-center gap-6 justify-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    imageSrc={feature.imageSrc}
                    alt={feature.alt}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <img
            src="/CTA@2x.png"
            alt="Get Free Consultation - No matter your industry, our team is here to help you leverage the power of technology for growth and innovation"
            className="w-full object-cover z-0 max-md:max-w-full"
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
