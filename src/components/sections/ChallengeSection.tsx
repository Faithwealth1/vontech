import React from 'react';

export const ChallengeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-10 w-full max-sm:gap-[30px]">
      <h2 className="w-full text-4xl font-bold leading-[45px] bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent max-md:text-3xl max-sm:text-2xl">
        The Challenge
      </h2>
      <div className="w-full text-[#181818] text-xl font-normal leading-[30px] max-sm:text-base">
        <p className="mb-4">Tusenti faced several key infrastructure requirements:</p>
        
        <div className="space-y-3">
          <div>
            <span className="font-bold">Scalability:</span> Tusenti anticipates a rapid increase in users, from under 1,000 to hundreds of thousands, and needs an infrastructure that can scale to meet this demand.
          </div>
          
          <div>
            <span className="font-bold">Security:</span> As a mobile money platform, Tusenti requires the highest levels of security to protect user data and financial transactions. They specifically plan to host their database and security infrastructure on AWS.
          </div>
          
          <div>
            <span className="font-bold">Reliability:</span> Tusenti needs a highly reliable platform to ensure uninterrupted service for its users.
          </div>
          
          <div>
            <span className="font-bold">Migration:</span> Tusenti is currently hosted on Azure and needs to migrate to AWS.
          </div>
          
          <div>
            <span className="font-bold">Hybrid Cloud:</span> Tusenti has a requirement to set up a local server to mirror their cloud setup for security compliance.
          </div>
          
          <div>
            <span className="font-bold">Cost Optimization:</span> While scalability and reliability are paramount, Tusenti also needs a cost-effective solution.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;