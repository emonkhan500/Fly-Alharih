import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import MyCalendar from "./MyCalender";
import TabCard from "./TabCard";
import { ArrowRightLeft } from "lucide-react";

const InnerTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commonTabClass = `relative flex flex-col lg:flex-row items-center gap-1 lg:gap-2 px-3 py-1 font-semibold lg:font-bold/50 text-black/50 transition-all duration-300`;

  return (
    <div className="max-w-[1280px] flex justify-center mx-auto mt-5">
      <div className="w-full">
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList className="flex items-center justify-center gap-4 lg:justify-start">
            <Tab className={commonTabClass}>
              <div
                className={`w-4 h-4 border-2 rounded-full ${
                  selectedIndex == 0
                    ? "border-blue-400 border-4 scale-110 transition-all"
                    : ""
                }`}
              ></div>
              One Way
            </Tab>
            <Tab className={commonTabClass}>
              <div
                className={`w-4 h-4 border-2 rounded-full ${
                  selectedIndex == 1
                    ? "border-blue-400 border-4 scale-110 transition-all"
                    : ""
                }`}
              ></div>
              Round Trip
            </Tab>
            <Tab className={commonTabClass}>
              <div
                className={`w-4 h-4 border-2 rounded-full ${
                  selectedIndex == 2
                    ? "border-blue-400 border-4 scale-110 transition-all"
                    : ""
                }`}
              ></div>
              Multi City
            </Tab>
          </TabList>

          <TabPanels className="mt-3">
            {/* first tabpnel : one way */}
            <TabPanel className="relative flex flex-col gap-3 lg:flex-row">
              <TabCard
                fromTo="From"
                cityCode="DAK"
                city="Dhaka"
                airport="Bangladesh, Shahjalal International Airport"
                showArrow
              />

              <TabCard
                fromTo="To"
                cityCode="KUL"
                city="Kuala Lumpur"
                airport="Malaysia, Kuala Lampur International Airport"
              />
              <TabCard dateField styling="cursor-pointer" enableDatePicker />
              <TabCard economy />
            </TabPanel>

            {/* second tab panel : Round trip */}
            <TabPanel className="relative flex flex-col gap-3 lg:flex-row">
              <TabCard
                fromTo="From"
                cityCode="DAK"
                city="Dhaka"
                airport="Bangladesh, Shahjalal International Airport"
                showArrow
              />

              <TabCard
                fromTo="To"
                cityCode="KUL"
                city="Kuala Lumpur"
                airport="Malaysia, Kuala Lampur International Airport"
              />
              <TabCard dateField styling="cursor-pointer" enableDatePicker />
              <TabCard dateField styling="cursor-pointer" enableDatePicker />
              <TabCard economy />
            </TabPanel>

            {/* third tab panel : multi city */}
            <TabPanel className="relative flex flex-col gap-3 lg:flex-row">
              <TabCard
                fromTo="From"
                cityCode="DAK"
                city="Dhaka"
                airport="Bangladesh, Shahjalal International Airport"
                showArrow
              />

              <TabCard
                fromTo="To"
                cityCode="KUL"
                city="Kuala Lumpur"
                airport="Malaysia, Kuala Lampur International Airport"
              />
              <TabCard dateField styling="cursor-pointer" enableDatePicker />
              <TabCard economy />
            </TabPanel>

            <div className="flex items-center justify-center mt-5 mb-3">
              <button
                to="/login"
                className="flex gap-2 px-5 py-2 text-base font-bold text-white bg-teal-500 rounded-lg cursor-pointer lg:px-10 lg:text-lg"
              >
                Search Flight
              </button>
            </div>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default InnerTab;
