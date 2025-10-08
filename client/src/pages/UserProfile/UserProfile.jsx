import React from "react";
import sideBarBackImage from "../../assets/images/sideBarBackImage.png";
import portFolio from "../../assets/images/port-folio.png";
import NavHeader from "../../components/NavHeader";
import JobsSearchSection from "../../components/JobsSearchSection";
import FeaturedJobSection from "../../components/FeaturedJobSection";

const UserProfile = () => {

  return (
    <div >
      <NavHeader />
      <section className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 lg:px-12 pt-6">
      {/* Left Side - Profile Card >>>>>>>>> section */}

      <div className="w-full lg:w-[350px] flex-shrink-0">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          {/* Profile Cover Image >>>>>>>>> section */}
          <div className="relative">
            <img
              src={sideBarBackImage}
              alt="Cover"
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="absolute left-1/2 top-[100px] transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={portFolio}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
          {/* Profile Details >>>>>>>>> section */}
          <div className="mt-14">
            <h2 className="text-lg font-semibold text-gray-900">Albert Flores</h2>
            <p className="text-gray-600 text-sm mt-1">
              Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
            </p>
            <p className="text-blue-600 text-sm mt-2">Clinton, Maryland</p>
          </div>
        </div>
      </div>

      {/* Right Side - Job Search Section >>>>>>>>> section */}
     <JobsSearchSection />
    </section>

    <section className="middle-section">

<FeaturedJobSection />
    </section>
    </div>
  );
};

export default UserProfile;
