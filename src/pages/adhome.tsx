import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSectionAdhome';
import ContentSection from '@/components/landing/ContentSectionAdhome';
import CTASection from '@/components/landing/CTASectionAdhome';
import Footer from '@/components/landing/Footer';

const Index = () => {
  const handleGetInTouch = () => {
    // Handle contact form or navigation
    console.log('Get in touch clicked');
  };

  const handleGetConsultation = () => {
    // Handle consultation request
    console.log('Get consultation clicked');
  };

  return (
    <div className="flex w-full flex-col items-center relative min-h-screen bg-[#FBFBFB] px-5">
      <Header />
      
      <main className="w-full">
        <HeroSection />
        
        <div className="flex flex-col justify-center items-start gap-10 w-full bg-[#FBFBFB] px-20 pb-20 max-md:px-10 max-md:pb-[60px] max-sm:px-5 max-sm:pb-10">
          <ContentSection title="The Challenge">
            <div className="font-normal">
              Adhome Solutions faced the following challenges with their
              existing infrastructure:
            </div>
            <br />
            <br />
            <div className="font-bold">Distributed Infrastructure:</div>
            <div className="font-normal">
              Adhome Solutions had a distributed infrastructure with components
              hosted across multiple providers, including DigitalOcean, Koyeb,
              Render, and Cloudflare. This added complexity to management,
              monitoring, and scalability. Specifically, they had:
            </div>
            <br />
            <div className="font-normal">
              MySQL database and Redis cache on DigitalOcean.
            </div>
            <br />
            <div className="font-normal">Node.js backend on Koyeb.</div>
            <br />
            <div className="font-normal">
              React applications on AWS (SSR) and Render (static sites).
            </div>
            <br />
            <div className="font-normal">
              Amazon SES integrated into their Node.js backend for email
              sending.
            </div>
            <br />
            <div className="font-normal">Cloudinary for image storage.</div>
            <br />
            <div className="font-normal">
              Cloudflare for web app monitoring and DNS management.
            </div>
            <br />
            <br />
            <div className="font-bold">Lack of Centralization:</div>
            <div className="font-normal">
              The lack of a centralized platform made it difficult to maintain
              consistency, enforce security policies, and optimize costs.
            </div>
            <br />
            <br />
            <div className="font-bold">Scalability Concerns:</div>
            <div className="font-normal">
              Their existing infrastructure may have presented challenges in
              scaling resources efficiently to meet growing user demands.
            </div>
            <br />
            <br />
            <div className="font-bold">Migration to AWS:</div>
            <div className="font-normal">
              Adhome Solutions needed to migrate their entire infrastructure
              from its current state to AWS.
            </div>
          </ContentSection>

          <ContentSection title="The Solution">
            <div className="font-normal">
              Vontech Group designed a comprehensive AWS architecture and
              migration plan to address Adhome Solutions' challenges and achieve
              their goals. The proposed solution leverages a range of AWS
              services to create a secure, scalable, and cost-effective
              environment.
            </div>
            <br />
            <br />
            <div className="font-bold">Centralized AWS Infrastructure:</div>
            <div className="font-normal">
              The solution consolidates Adhome Solutions' infrastructure onto
              AWS, providing a centralized platform for management and
              operations.
            </div>
            <br />
            <br />
            <div className="font-bold">Scalable Architecture:</div>
            <div className="font-normal">
              The architecture is designed to scale, enabling Adhome Solutions
              to handle increased traffic and user growth. Key components
              include:
            </div>
            <br />
            <div className="font-normal">
              Compute: Amazon EC2 instances within a Virtual Private Cloud (VPC)
              and Auto Scaling Groups (ASG) to automatically adjust capacity.
            </div>
            <br />
            <br />
            <div className="font-bold">Database:</div>
            <div className="font-normal">
              Amazon Relational Database Service (RDS) to manage data using
              database engines like MySQL or PostgreSQL.
            </div>
            <br />
            <br />
            <div className="font-bold">Caching:</div>
            <div className="font-normal">
              Amazon ElastiCache for in-memory data storage to improve
              application performance.
            </div>
            <br />
            <br />
            <div className="font-bold">Storage:</div>
            <div className="font-normal">
              Amazon S3 for scalable and cost-effective object storage.
            </div>
            <br />
            <br />
            <div className="font-bold">Networking:</div>
            <br />
            <div className="font-normal">
              Virtual Private Cloud (VPC) to logically isolate resources.
            </div>
            <br />
            <div className="font-normal">
              Availability Zones (AZs) in the EU (Ireland) region for fault
              tolerance and high availability.
            </div>
            <br />
            <div className="font-normal">
              Internet Gateway to enable communication between the VPC and the
              internet.
            </div>
            <br />
            <div className="font-normal">
              Application Load Balancer (ALB) to distribute application
              workloads across multiple instances.
            </div>
            <br />
            <div className="font-normal">
              NAT Gateway to allow instances in private subnets to connect to
              external services.
            </div>
            <br />
            <div className="font-normal">
              Amazon Route 53 for DNS routing and domain registration.
            </div>
            <br />
            <br />
            <div className="font-bold">Security:</div>
            <br />
            <div className="font-normal">
              Security Groups to control inbound and outbound traffic.
            </div>
            <br />
            <div className="font-normal">
              AWS Certificate Manager (ACM) to create and manage SSL/TLS
              certificates.
            </div>
            <br />
            <br />
            <div className="font-bold">Migration Plan:</div>
            <div className="font-normal">
              Vontech Group developed a detailed migration plan, including:
            </div>
            <br />
            <div className="font-normal">
              Project Overview: Defining the scope, goals, and key stakeholders.
            </div>
            <br />
            <div className="font-normal">
              Timeline: Estimating the duration and resources required for each
              step.
            </div>
            <br />
            <div className="font-normal">
              Security and Compliance: Implementing measures like data
              encryption, access control, and network security.
            </div>
            <br />
            <div className="font-normal">
              Cost Optimization: Identifying opportunities to minimize expenses.
            </div>
            <br />
            <div className="font-normal">
              Communication and Change Management: Keeping stakeholders informed
              and providing necessary training.
            </div>
            <br />
            <div className="font-normal">
              Testing and Validation: Ensuring successful migration through
              rigorous testing.
            </div>
            <br />
            <div className="font-normal">
              Post-Migration Support: Providing ongoing monitoring, maintenance,
              and incident response.
            </div>
            <br />
            <div className="font-normal">
              Handoff and Documentation: Delivering comprehensive documentation
              for managing the new environment.
            </div>
          </ContentSection>

          <ContentSection title="Results">
            <div className="font-normal">
              Successfully migrated to AWS with $5,000 startup credit support.
              <br />
              Reduced response latency for mobile users across regions.
              <br />
              Improved application security and authentication workflows.
              <br />
              Set the foundation for AI-enabled customer support and logistics.
              <br />
              Achieved high availability and scalability without added
              infrastructure costs
            </div>
          </ContentSection>

          <div className="flex flex-col items-start gap-10 w-full mt-[-20px]">
            <div className="flex flex-col items-start gap-10 w-full">
              <h2 className="w-full text-4xl font-bold leading-[45px] bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent max-md:text-[28px] max-sm:text-2xl">
                Final Thoughts
              </h2>
              <p className="w-full text-[#181818] text-xl font-normal leading-[30px] max-md:text-lg max-sm:text-base">
                By migrating to AWS and leveraging a serverless, modular design,
                CarAid is now primed for the future. The architecture supports
                both current service delivery and planned AI enhancements, all
                while improving performance, reducing costs, and enhancing user
                experience.
              </p>
            </div>
            <p className="w-full text-[#181818] text-xl font-normal leading-[30px] max-md:text-lg max-sm:text-base">
              Contact Vontech Group today to learn how we can help you leverage
              AWS to accelerate your fintech innovation.
            </p>
            <button 
              className="flex justify-center items-center gap-2 cursor-pointer bg-[#FFE21B] px-8 py-3 rounded-[20px] max-sm:px-6 max-sm:py-2.5 hover:bg-[#FFD700] transition-colors"
              onClick={handleGetInTouch}
            >
              <span className="text-[#181818] text-xl font-bold leading-[30px] max-sm:text-lg">
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </main>

      <CTASection
        title={
          <>
            <span className="text-white">
              No matter your industry, our team is here to help you leverage the
              power of technology for{' '}
            </span>
            <span className="text-[#097484]">growth</span>
            <span className="text-white"> and </span>
            <span className="text-[#097484]">innovation</span>
            <span className="text-white">.</span>
          </>
        }
        buttonText="Get Free Consultation"
        onButtonClick={handleGetConsultation}
      />

      <Footer />
    </div>
  );
};

export default Index;
