import React from "react";

const FeedbackSideTable = ({ cilDetails, sideTable }) => {
  return (
    <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 h-full">
      <div className="bg-primary text-white rounded-t-lg text-base px-2 py-2 font-semibold w-full">
        Other Details
      </div>
      <div className="md:max-h-[65vh] sm:max-h-[71vh] xs:max-h-[50vh] overflow-y-auto">
        <table className="min-w-full">
          {"id" in cilDetails ? (
            <tbody className="relative text-balance">
              {sideTable.map((item, index) => (
                <>
                  <tr className="bg-[#fafafa]">
                    <td className="font-semibold px-2 py-2 border-b">
                      {item.title}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="text-sm px-2 py-2 border-b">
                      {item.key === "priority" &&
                        (cilDetails[item.key] === 0 ? "Low" : "High")}
                      {item.key !== "priority" &&
                        (cilDetails[item.key] ? cilDetails[item.key] : "TBD")}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          ) : (
            <div className="flex justify-center xs:text-lg sm:text-lg lg:text-xl font-semibold p-3 text-redColor">
              Click on row to view details
            </div>
          )}
        </table>
      </div>
    </div>
  );
};

export default FeedbackSideTable;
