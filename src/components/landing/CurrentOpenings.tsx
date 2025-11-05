import * as React from "react";

interface JobCardProps {
  title: string;
  imageUrl: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, imageUrl }) => {
  return (
    <article className="min-w-60 overflow-hidden w-[410px] rounded-[30px] border-2 border-solid border-[#E0E0E0] hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={imageUrl}
        alt={`${title} position`}
        className="aspect-[1.69] object-contain w-full rounded-[30px_30px_0px_0px]"
      />
      <div className="justify-center flex w-full flex-col bg-white p-10 rounded-[0_0_30px_30px] max-md:px-5">
        <h3 className="text-[#181818] text-2xl font-semibold leading-[1.3]">
          {title}
        </h3>
      </div>
    </article>
  );
};

const CurrentOpenings: React.FC = () => {
  const jobOpenings = [
    {
      title: "AI Cloud Architect",
      imageUrl: "AI cloud.png"
    },
    {
      title: "Cloud-Native Developer",
      imageUrl: "cloud native.png"
    },
    {
      title: "DevOps Engineer",
      imageUrl: "dev-ops.png"
    },
    {
      title: "Big Data Engineer",
      imageUrl: "data engineer.png"
    },
    {
      title: "IoT Solutions Developer",
      imageUrl: "iot solutions.png"
    },
    {
      title: "Technical Support Specialist",
      imageUrl: "support.png"
    }
  ];

  return (
    <section className="z-0 w-full text-center bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
            Current Openings
          </h2>
          <p className="text-[#393C3D] text-lg font-normal self-center mt-2 max-md:max-w-full">
            Explore exciting career opportunities in areas like:
          </p>
        </div>
        <div className="flex w-full gap-[40px_0px] text-2xl text-[#181818] font-semibold leading-[1.3] justify-between flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          {jobOpenings.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              imageUrl={job.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
