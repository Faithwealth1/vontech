import React from 'react';

const ResultsSection: React.FC = () => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
        Results
      </h2>
      <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        <ul className="space-y-2">
          <li>• Successfully migrated to AWS with $5,000 startup credit support.</li>
          <li>• Reduced response latency for mobile users across regions.</li>
          <li>• Improved application security and authentication workflows.</li>
          <li>• Set the foundation for AI-enabled customer support and logistics.</li>
          <li>• Achieved high availability and scalability without added infrastructure costs</li>
        </ul>
      </div>
    </section>
  );
};

export default ResultsSection;