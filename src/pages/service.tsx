import React from 'react';
import Header from '@/components/landing/Header';
import ServiceSection from '@/components/landing/ServiceSection';
import IndustryCard from '@/components/landing/IndustryCard';
import FeatureCard from '@/components/landing/FeatureCard';
import Footer from '@/components/landing/Footer';
const checkIcon = "/Check.png";
const cardBankingIcon = "/icon4.png";
const healthCardIcon = "/icon5.png";
const retailCardIcon = "/icon6.png";
const manufacturingCardIcon = "/icon7.png";
const educationCardIcon = "/icon8.png";
const technologyCardIcon = "/icon9.png";
const iconLan = "/lan.png";
const icon2 = "/icon2.png";
const icon3 = "/icon3.png";
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
      icon: cardBankingIcon,
      category: "Banking & Finance",
      title: "Secure and Scalable Solutions for Financial Growth",
      description:
        "We enable financial institutions to streamline operations, enhance customer experiences, and maintain regulatory compliance with robust cloud and IT solutions."
    },
    {
      icon: healthCardIcon,
      category: "Healthcare",
      title: "Transforming Patient Care Through Technology",
      description:
        "Our cloud solutions help healthcare providers enhance patient outcomes, protect sensitive data, and optimize operations."
    },
    {
      icon: retailCardIcon,
      category: "Retail & E-Commerce",
      title: "Empowering Retailers in the Digital Age",
      description:
        "From inventory management to personalized customer experiences, we provide solutions that help retailers adapt and thrive."
    },
    {
      icon: manufacturingCardIcon,
      category: "Manufacturing",
      title: "Optimizing Operations for Greater Efficiency",
      description:
        "Vontech helps manufacturers leverage technology to streamline processes, reduce costs, and enhance productivity."
    },
    {
      icon: educationCardIcon,
      category: "Education",
      title: "Innovative Solutions for Modern Learning",
      description:
        "We empower educational institutions to deliver engaging, accessible, and secure learning experiences."
    },
    {
      icon: technologyCardIcon,
      category: "Technology & Startups",
      title: "Fueling Innovation for Tech Companies & Startups",
      description:
        "From development environments to scalable hosting, we provide tools and infrastructure to help you succeed."
    }
  ];

  const features = [
    {
      icon: iconLan,
      title: "Expertise in multiple industries",
      description:
        "Our diverse experience across sectors allows us to deliver solutions that align with industry best practices and emerging trends."
    },
    {
      icon: icon2,
      title: "Tailored solutions for unique challenges",
      description:
        "We design strategies that address your organization's specific needs, ensuring measurable impact and long-term growth."
    },
    {
      icon: "/icon3.png",
      title: "Proven success with leading organizations",
      description:
        "Our track record with top companies demonstrates our ability to drive transformation and deliver results that matter."
    }
  ];

  return (
    <div className="w-full max-md:max-w-full">
      <div className="bg-white relative flex w-full flex-col overflow-hidden items-stretch max-md:max-w-full">
        <Header />
        
        {/* Hero Section */}
        <section className="relative">
          <img
            src="/Heroservice.png"
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
            headingClassName="text-[#097484]"
          />

          {/* Cloud-Native Development */}
          <ServiceSection
            title="Cloud-Native Development"
            description="Leverage our expertise in building cloud-native applications that are scalable, resilient, and aligned with your business objectives. Our solutions are designed to harness the full potential of the cloud."
            checkPoints={cloudNativeCheckpoints}
            imageSrc="Cloud-Native development.png"
            imageAlt="Cloud-Native Development"
            imageOnLeft={false}
            headingClassName="text-[#097484]"
          />

          {/* Cloud Migration Services */}
          <ServiceSection
            title="Cloud Migration Services"
            description="Transition your legacy systems to the cloud with minimal downtime. Our experts design and execute migration strategies that are cost-effective, secure, and aligned with your business goals"
            checkPoints={cloudMigrationCheckpoints}
            imageSrc="cloud migration services.png"
            imageAlt="Cloud Migration Services"
            imageOnLeft={true}
            headingClassName="text-[#097484]"
          />

          {/* IoT Solutions */}
          <ServiceSection
            title="Internet of Things (IoT) Solutions"
            description="From smart devices to intelligent networks, our IoT solutions help businesses unlock new opportunities by connecting physical and digital worlds. Transform your operations and gain real-time insights."
            checkPoints={iotSolutionsCheckpoints}
            imageSrc="internet of things.png"
            imageAlt="Internet of Things (IoT) Solutions"
            imageOnLeft={true}
            headingClassName="text-[#097484]"
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
                    <h2 className="text-[#097484] max-md:max-w-full">
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
            headingClassName="text-[#097484]"
          />

          {/* Industries We Serve */}
          <section className="z-0 w-full bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
            <div className="w-full max-md:max-w-full">
              <div className="flex w-full flex-col items-stretch text-center justify-center max-md:max-w-full">
                <h2 className="text-4xl font-bold leading-none text-[#097484] max-md:max-w-full">
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
                    icon={industry.icon}
                    category={industry.category}
                    title={industry.title}
                    description={industry.description}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Vontech */}
          <section className="z-0 w-full text-center bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
            <div className="w-full max-md:max-w-full">
              <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
                <h2 className="text-4xl font-bold leading-none text-[#097484] max-md:max-w-full">
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
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
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
