import ArrowListItem from "@/components/ArrowListItem";
import ProgressBarWithSkill from "@/components/ProgressBarWithSkill";
import React from "react";

export default function Resume() {
  return (
    <div className="text-[#776B5D]">
      <h2 className="text-3xl font-semibold mb-8 text-[#776B5D]">Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-medium mb-8">Programming Skills</h4>

          <ProgressBarWithSkill name="Wordpress" percentage="95" />
          <ProgressBarWithSkill name="JavaScript" percentage="90" />
          <ProgressBarWithSkill name="Angular" percentage="85" />
          <ProgressBarWithSkill name="NextJs" percentage="95" />
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">Language Skills</h4>

          <ProgressBarWithSkill name="Bangla" percentage="100" />
          <ProgressBarWithSkill name="English" percentage="30" />
          <ProgressBarWithSkill name="Hindi" percentage="10" />
          <ProgressBarWithSkill name="Arabic" percentage="0" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h4 className="text-xl font-medium mb-8">Knowledge</h4>
          <ArrowListItem title="React, NextJs" />
          <ArrowListItem title="Bootstrap, Tailwind Css" />
          <ArrowListItem title="PHP, Laravel" />
          <ArrowListItem title="MySQL" />
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">Interests</h4>

          <ArrowListItem title="Make UI/UX Design" />
          <ArrowListItem title="Site Optimization" />
          <ArrowListItem title="Custom Website" />
          <ArrowListItem title="Learn Ecommerce" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h4 className="text-xl font-medium mb-8">Education</h4>
          <div className="bg-[#F3EEEA] rounded-[0.75rem] p-6 flex flex-col gap-2 mb-4">
            <p>2021-2023</p>
            <h4 className="text-lg font-medium">Ph.D in Horriblensess</h4>
            <p>ABC University, Los Angeles, CA</p>
          </div>
          <div className="bg-[#F3EEEA] rounded-[0.75rem] p-6 flex flex-col gap-2 mb-4">
            <p>2021-2023</p>
            <h4 className="text-lg font-medium">Ph.D in Horriblensess</h4>
            <p>ABC University, Los Angeles, CA</p>
          </div>
          <div className="bg-[#F3EEEA] rounded-[0.75rem] p-6 flex flex-col gap-2 mb-4">
            <p>2021-2023</p>
            <h4 className="text-lg font-medium">Ph.D in Horriblensess</h4>
            <p>ABC University, Los Angeles, CA</p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">Experience</h4>
          <div className="bg-[#F3EEEA] rounded-[0.75rem] p-6 flex flex-col gap-2 mb-4">
            <p>2021-2023</p>
            <h4 className="text-lg font-medium">Computer Science</h4>
            <p>Imperialize Technical Institute</p>
          </div>
          <div className="bg-[#F3EEEA] rounded-[0.75rem] p-6 flex flex-col gap-2 mb-4">
            <p>2021-2023</p>
            <h4 className="text-lg font-medium">Computer Science</h4>
            <p>Imperialize Technical Institute</p>
          </div>
          <div className="bg-[#F3EEEA] rounded-[0.75rem] p-6 flex flex-col gap-2 mb-4">
            <p>2021-2023</p>
            <h4 className="text-lg font-medium">Computer Science</h4>
            <p>Imperialize Technical Institute</p>
          </div>
        </div>
      </div>
    </div>
  );
}
