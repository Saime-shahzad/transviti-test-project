import { Input, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function JobsSearchSection() {
  return (
    <div className="flex-1">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Job Search Heading */}
      <h1 className="text-2xl font-semibold text-gray-900">
        Find your <span className="text-blue-700 font-bold">Dream Job, Albert!</span>
      </h1>
      <p className="text-gray-500">
        Explore the latest job openings and apply for the best opportunities available today!
      </p>

      {/* Job Search Bar */}
      <div className="bg-gray-100 p-3 mt-4 rounded-lg flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
        {/* Job Title Input */}
        <Input
          placeholder="Job Title, Company, or Keywords"
          className="flex-1 border-none focus:ring-0"
        />

        {/* Location Dropdown */}
        <Select defaultValue="Select Location" className="w-full md:w-48">
          <Select.Option value="new-york">New York</Select.Option>
          <Select.Option value="san-francisco">San Francisco</Select.Option>
          <Select.Option value="remote">Remote</Select.Option>
        </Select>

        {/* Job Type Dropdown */}
        <Select defaultValue="Job Type" className="w-full md:w-40">
          <Select.Option value="full-time">Full-Time</Select.Option>
          <Select.Option value="part-time">Part-Time</Select.Option>
          <Select.Option value="freelance">Freelance</Select.Option>
        </Select>

        {/* Search Button */}
        <Button type="primary" className="bg-blue-700 w-full md:w-auto">
          <SearchOutlined className="mr-2" /> Search
        </Button>
      </div>

      {/* Suggested Job Categories */}
      <div className="mt-4">
        <p className="text-gray-600 mb-2">Similar:</p>
        <div className="flex flex-wrap gap-3">
          <Button className="border-gray-300">Frontend</Button>
          <Button className="border-gray-300">Backend</Button>
          <Button className="border-gray-300">Graphic Designer</Button>
        </div>
      </div>
    </div>
  </div>
  );
}
