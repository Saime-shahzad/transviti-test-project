import { Card, Button } from "antd";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import DropDownSecComponent from "./DropDownSecComponent";

const jobData = new Array(5).fill({
  title: "UI/UX Designer",
  company: "Teams",
  location: "Seattle, USA (Remote)",
  posted: "1 day ago",
  applicants: "22 applicants",
  promoted: true,
});

export default function FeaturedJobSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-12 pt-2">
      {/* Left Section - Profile Stats & Calendar >>>>>>>>> section addtion>>> */}
      <div className="lg:col-span-1 space-y-6">
        
        <div className="detail-info-parent ">
          <div className=" bg-white rounded-lg shadow-md p-4 w-[22rem] ">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-800">Profile Visitors</span>
              <span className="text-blue-600 font-medium">140</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-800">Resume Viewers</span>
              <span className="text-blue-600 font-medium">20</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-800">My Jobs</span>
              <span className="text-blue-600 font-medium">88</span>
            </div>
          </div>
        </div>

        {/* My Calendar  >>>>>>>>> section addtion>>> */}
        <DropDownSecComponent />
      </div>

      <div className="lg:col-span-3 space-y-6">
        {/* Featured Jobs >>>>>>>>> section addtion>>> */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Featured Jobs</h2>
            <a href="#" className="text-blue-600 text-sm">See Featured Jobs</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {jobData.map((job, index) => (
              <Card key={index} className="p-4 shadow-md">
                <p className="text-xs font-semibold text-gray-600">Promoted</p>
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.company}</p>
                <p className="text-gray-500 text-sm">{job.location}</p>
                <p className="text-gray-500 text-sm">
                  {job.posted} | <span className="text-blue-600">{job.applicants}</span>
                </p>
                <Button type="primary" className="bg-blue-700 w-full mt-2">
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Jobs Section>>> */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Recommended Jobs</h2>
            <a href="#" className="text-blue-600 text-sm">See Recommended Jobs</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {jobData.map((job, index) => (
              <Card key={index} className="p-4 shadow-md">
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.company}</p>
                <p className="text-gray-500 text-sm">{job.location}</p>
                <p className="text-gray-500 text-sm">
                  {job.posted} | <span className="text-blue-600">{job.applicants}</span>
                </p>
                <Button type="primary" className="bg-blue-700 w-full mt-2">
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
