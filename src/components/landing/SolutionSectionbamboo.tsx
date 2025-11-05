import React from 'react';

const SolutionSectionbamboo = () => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
        The Solution
      </h2>
      <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        <p className="mb-4">
          Vontech Group designed and implemented a serverless architecture on
          AWS to address Bamboo's needs. The architecture is as follows:
        </p>
        <ul className="space-y-2 mb-6">
          <li>
            <strong>Data Storage:</strong> Amazon S3 was used for storing the datasets.
          </li>
          <li>
            <strong>Data Processing:</strong> AWS Glue was used for Extracting, Transforming, and Loading (ETL) the data.
          </li>
          <li>
            <strong>Model Building:</strong> Amazon SageMaker was used to build the recommendation models.
          </li>
          <li>
            <strong>API:</strong> A REST API was created using Amazon API Gateway.
          </li>
          <li>
            <strong>Compute:</strong> AWS Lambda was used to host the application's business logic.
          </li>
          <li>
            <strong>Deployment:</strong> AWS CodePipeline was used for continuous integration and continuous deployment (CI/CD).
          </li>
          <li>
            <strong>Orchestration:</strong> AWS Step Functions was used to orchestrate the workflow.
          </li>
        </ul>
        <p className="mb-4">The solution architecture enabled:</p>
        <ul className="space-y-2">
          <li>
            <strong>Rapid Development:</strong> Serverless components like Lambda and API Gateway allowed for quick deployment and iteration.
          </li>
          <li>
            <strong>Scalability:</strong> AWS services automatically scale to handle varying workloads.
          </li>
          <li>
            <strong>Cost-Effectiveness:</strong> The pay-as-you-go model of AWS services minimized costs during the POC phase.
          </li>
          <li>
            <strong>Reliability:</strong> AWS's highly available infrastructure ensured the POC's stability.
          </li>
          <li>
            <strong>Efficient Deployment:</strong> CodePipeline automated the deployment process, enabling faster updates.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SolutionSectionbamboo ;
