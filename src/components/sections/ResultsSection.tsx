import React from 'react';

export const ResultsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-10 w-full max-sm:gap-[30px]">
      <h2 className="w-full text-4xl font-bold leading-[45px] bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent max-md:text-3xl max-sm:text-2xl">
        Results
      </h2>
      <div className="w-full text-[#181818] text-xl font-normal leading-[30px] max-sm:text-base">
        <p className="mb-4">The implemented AWS architecture will provide Tusenti with:</p>
        
        <div className="space-y-3">
          <div>
            <span className="font-bold">A scalable and reliable platform:</span> Capable of handling rapid user growth and ensuring high availability.
          </div>
          
          <div>
            <span className="font-bold">Enhanced security:</span> Protecting user data and financial transactions with a robust security posture.
          </div>
          
          <div>
            <span className="font-bold">Streamlined operations:</span> Automating deployments and infrastructure management.
          </div>
          
          <div>
            <span className="font-bold">Reduced risk:</span> Mitigating potential threats and vulnerabilities.
          </div>
          
          <div>
            <span className="font-bold">Cost-effectiveness:</span> Optimizing AWS spending.
          </div>
          
          <div>
            <span className="font-bold">Faster time to market:</span> Enabling Tusenti to focus on innovation and quickly deploy new features.
          </div>
        </div>
      </div>
    </section>
  );
};