// CronJobList.js
import React from "react";
import CronJobCard from "./CronJobCard";

export default function CronJobList() {
  return (
    <div className="container">
      {cronJobs.map((job, index) => (
        <CronJobCard
          key={index}
          title={job.title}
          description={job.description}
          command={job.command}
        />
      ))}
    </div>
  );
}

const cronJobs = [
  {
    title: "Execute Schedule",
    description: "(for execute the queue jobs)",
    command: "* * * * * /www/wwwroot/jobi.nexilate.xyz/artisan schedule:run",
  },
  {
    title: "Notify to Customer Before Subscription Expiry",
    description: "(Everyday)",
    command: "curl -s https://jobi.thedevstation.com/cron/notify-to-user",
  },
];
