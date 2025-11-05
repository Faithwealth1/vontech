import React from 'react';

const ChallengeSection: React.FC = () => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
        The Challenge
      </h2>
      <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        <p className="mb-4">
          CarAid was running a monolithic architecture that limited
          scalability and real-time responsiveness. Their existing backend,
          hosted on Firebase (GCP), couldn't support their future vision of
          microservices and AI-driven support.
        </p>
        <p className="mb-2">Pain points included:</p>
        <ul className="list-none space-y-1 ml-4">
          <li>• Limited scalability and flexibility with their monolith</li>
          <li>• Lack of real-time inventory updates for parts and tools</li>
          <li>• Need for intelligent routing of user requests to the nearest support center</li>
          <li>• No automated, AI-powered user engagement via chat or phone</li>
          <li>• Requirement for AWS startup credits to support migration and development</li>
        </ul>
      </div>
    </section>
  );
};

export default ChallengeSection;
