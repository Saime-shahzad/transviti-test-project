import { useState } from "react";
import { Collapse, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export default function DropDownSecComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="w-[350px] bg-white rounded-lg shadow-md  mt-2 p-4">
      {/* Header with Toggle Icon */}
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleCollapse}>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">My calendar</h2>
          <p className="text-gray-500 text-sm">Upcoming Interviews</p>
        </div>
        {isOpen ? <UpOutlined className="text-gray-500" /> : <DownOutlined className="text-gray-500" />}
      </div>

      {/* dropdown elements for Interview section>>> */}
      <Collapse activeKey={isOpen ? "1" : ""} ghost>
        <Panel key="1" showArrow={false}>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                    alt="Figma Logo"
                    className="w-8 h-8"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">UI UX Designer</h3>
                    <p className="text-gray-500 text-sm">Figma</p>
                    <p className="text-gray-500 text-sm">16th Feb | 13:45 | Remote</p>
                  </div>
                </div>

                {/* Button Section>>>>> */}
                <div className="flex items-center space-x-3">
                  <span className="bg-green-200 text-green-700 px-3 py-1 rounded-lg text-sm">Accepted</span>
                  <Button type="text" className="text-gray-500">Deny</Button>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
