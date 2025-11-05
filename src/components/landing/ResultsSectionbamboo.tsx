import React from 'react';

const ResultsSection = () => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
        Results
      </h2>
      <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        <ul className="space-y-2">
          <li>
            <strong>A functional Stock Recommender POC:</strong> Vontech Group successfully delivered a working POC that met Bamboo's requirements.
          </li>
          <li>
            <strong>Accelerated time to market:</strong> The serverless architecture and automated deployment pipeline enabled rapid development and deployment.
          </li>
          <li>
            <strong>Scalable and reliable infrastructure:</strong> The solution can handle future growth and increased user demand.
          </li>
          <li>
            <strong>Reduced operational overhead:</strong> Serverless services minimized the need for infrastructure management. The implementation of the AWS-based architecture provided Bamboo with:
          </li>
          <li>
            <strong>Valuable insights:</strong> The POC provided Bamboo with valuable insights into user behavior and the potential of stock recommendations.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ResultsSection;