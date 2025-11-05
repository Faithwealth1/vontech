import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-10 w-full max-sm:gap-[30px]">
      <h2 className="w-full text-4xl font-bold leading-[45px] bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent max-md:text-3xl max-sm:text-2xl">
        The Solution
      </h2>
      <div className="w-full text-[#181818] text-xl font-normal leading-[30px] max-sm:text-base">
        <p className="mb-4">
          Vontech Group is designing and implementing a comprehensive AWS architecture for Tusenti, focusing on scalability, security, and reliability. The proposed architecture leverages a range of AWS services:
        </p>
        
        <div className="space-y-4">
          <div>
            <span className="font-bold">Compute:</span> The architecture utilizes scalable compute resources, likely Amazon EC2 or Elastic Kubernetes Service (EKS), to host Tusenti's microservices, which are currently Dockerized.
          </div>
          
          <div>
            <span className="font-bold">Database:</span> Amazon Relational Database Service (RDS) is being used to host Tusenti's PostgreSQL database. The architecture also includes Redis, with each service having its own Redis store. MongoDB is used for log management.
          </div>
          
          <div>
            <span className="font-bold">Storage:</span> Amazon S3 provides object storage for the platform.
          </div>
          
          <div>
            <span className="font-bold">Networking:</span> The architecture uses Application Load Balancers (ALB) to distribute traffic and enhance availability. The design also incorporates Virtual Private Cloud (VPC) to isolate resources and enhance security, with applications and databases in private subnets, and an internet gateway for public access.
          </div>
          
          <div>
            <span className="font-bold">Security:</span>
            <ul className="ml-4 mt-2 space-y-1 list-disc">
              <li>AWS Shield to protect against Distributed Denial of Service (DDoS) attacks.</li>
              <li>AWS WAF (Web Application Firewall) to protect web applications from common exploits.</li>
              <li>Amazon GuardDuty for threat detection and security monitoring.</li>
              <li>Amazon Inspector to scan for vulnerabilities.</li>
              <li>AWS Macie to discover and protect sensitive data.</li>
              <li>AWS Systems Manager to automate security rule configurations and patching.</li>
              <li>AWS Config to manage WAF rule configurations.</li>
              <li>AWS Security Hub to centralize security findings.</li>
              <li>AWS Firewall Manager to simplify WAF administration across multiple accounts.</li>
            </ul>
          </div>
          
          <div>
            <span className="font-bold">Containerization:</span> Amazon Elastic Container Registry (ECR) is used to store and manage Docker container images.
          </div>
          
          <div>
            <span className="font-bold">Messaging:</span> Amazon MQ is used as a managed message broker service for communication between distributed applications.
          </div>
          
          <div>
            <span className="font-bold">Logging and Monitoring:</span> Amazon CloudWatch Logs is used to capture, monitor, and store web request logs.
          </div>
        </div>
        
        <p className="mt-6 mb-4">The architecture is designed to address Tusenti's specific needs, including:</p>
        
        <div className="space-y-3">
          <div>
            <span className="font-bold">Scalability:</span> The use of services like EC2 Auto Scaling or EKS allows Tusenti to easily scale its resources as its user base grows.
          </div>
          
          <div>
            <span className="font-bold">Security:</span> The multi-layered security approach, incorporating services like AWS Shield, WAF, and GuardDuty, ensures a secure environment for Tusenti's sensitive data and transactions.
          </div>
          
          <div>
            <span className="font-bold">Reliability:</span> The architecture is designed for high availability and fault tolerance, minimizing downtime.
          </div>
          
          <div>
            <span className="font-bold">Migration:</span> Vontech Group is facilitating the migration from Azure to AWS.
          </div>
          
          <div>
            <span className="font-bold">Hybrid Cloud:</span> Vontech Group is assisting Tusenti in setting up a local server to mirror the cloud setup.
          </div>
          
          <div>
            <span className="font-bold">Cost Optimization:</span> Vontech Group is designing the architecture to be cost-effective, leveraging appropriate AWS services and configurations.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;