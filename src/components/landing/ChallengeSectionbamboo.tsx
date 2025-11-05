import React from 'react';

const ChallengeSectionbamboo = () => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
        The Challenge
      </h2>
      <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        <p className="mb-4">
          Bamboo needed to quickly develop and deploy a Stock Recommender POC.
          This required:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Rapid Development:</strong> A fast turnaround time to validate the concept and gather user feedback.
          </li>
          <li>
            <strong>Scalability:</strong> The ability to handle increasing data volumes and user traffic as the POC evolved.
          </li>
          <li>
            <strong>Cost-Effectiveness:</strong> Optimizing infrastructure costs during the POC phase.
          </li>
          <li>
            <strong>Reliability:</strong> Ensuring the POC was stable and available for testing and demonstration.
          </li>
          <li>
            <strong>Efficient Deployment:</strong> A streamlined process to deploy and update the application.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChallengeSectionbamboo;
