import React from "react";
import missionImg from "../../../assets/img/mission.jpg";

const OurMission = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image section */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={missionImg} 
            alt="Our Mission" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At WheelsDeal, our mission is to revolutionize the car buying experience
            by providing exceptional service, transparent dealings, and a wide selection
            of quality vehicles. We strive to make your dream car a reality while
            ensuring complete satisfaction throughout your journey with us.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-700">Expert Vehicle Inspection</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-700">Transparent Pricing</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-700">Quality Assurance</span>
            </div>
          </div>
          <button className="bg-primary text-white py-2 px-6 rounded-md hover:scale-95 transition duration-150 ease-linear">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;