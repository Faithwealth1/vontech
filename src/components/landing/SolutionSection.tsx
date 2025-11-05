import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
        The Solution
      </h2>
      <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        <p className="mb-6">
          Vontech Group redesigned CarAid's architecture using the AWS
          Well-Architected Framework to prioritize scalability, reliability,
          security, and operational excellence.
        </p>
        
        <h3 className="font-bold mb-4">Key Elements of the New Architecture:</h3>
        <ul className="space-y-3 mb-6">
          <li>
            <span className="font-bold">Amazon VPC:</span> To isolate
            resources and secure communication between components
          </li>
          <li>
            <span className="font-bold">AWS Lambda:</span> Enables
            serverless compute for real-time functions and task automation
          </li>
          <li>
            <span className="font-bold">Amazon DynamoDB:</span> Provides
            low-latency, highly scalable NoSQL database capabilities
          </li>
          <li>
            <span className="font-bold">Amazon Cognito:</span>{" "}
            Simplifies authentication and user management securely
          </li>
          <li>
            <span className="font-bold">AWS AppSync & GraphQL:</span>{" "}
            Powers real-time data interactions for their mobile app
          </li>
          <li>
            <span className="font-bold">Amazon S3:</span> Scalable
            object storage for logs, data, and media files
          </li>
          <li>
            <span className="font-bold">AWS Amplify:</span> Supports
            rapid development and deployment of full-stack applications
          </li>
          <li>
            <span className="font-bold">Security Groups & WAF:</span>{" "}
            Protect the workloads from external threats
          </li>
        </ul>
        
        <div>
          <span className="font-bold">AI-Readiness Built In:</span>
          {" "}CarAid's future goals like implementing a real-time chatbot to
          check spare part availability or AI switchboards to assist customer
          support are now supported by a modular, API-driven infrastructure
          that can grow with their business.
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
