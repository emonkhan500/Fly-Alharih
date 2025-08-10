import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Hotel, Plane, TentTree } from "lucide-react";
import { useLocation } from "react-router-dom";
import InnerTab from "./InnerTab";

// Map paths to tab indices
const pathToIndex = {
  "/flight": 0,
  "/": 0,
  "/hotel": 1,
  "/holiday": 2,
};

const TabSystem = () => {
  const location = useLocation();

  const [selectedIndex, setSelectedIndex] = useState(
    pathToIndex[location.pathname] || 0
  );

  const commonTabClass = `relative flex flex-col lg:flex-row items-center gap-1 lg:gap-2 px-3 py-1 font-semibold lg:font-bold transition-all duration-300 text-base lg:text-lg
  text-black
  before:content-[''] before:absolute before:-bottom-1 lg:before:-bottom-3 before:left-0 before:h-[2px]
  before:bg-black before:w-0 before:transition-all before:duration-300`;

  // Update tab when URL changes
  useEffect(() => {
    const newIndex = pathToIndex[location.pathname];
    if (newIndex !== undefined && newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
    }
  }, [location.pathname]);

  // Update URL when tab changes
  const handleTabChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="max-w-[1280px] flex justify-center px-7 py-5 mx-auto bg-white dark:bg-white rounded-lg mb-10 shadow-lg shadow-gray-300  border-2">
      <div className="w-full">
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="flex items-center justify-center gap-4 lg:justify-start">
            <Tab
              className={({ selected }) =>
                `${commonTabClass}
                 ${selected ? "before:w-full" : "before:w-0"}`
              }
            >
              <Plane />
              Flight
            </Tab>
            <Tab
              className={({ selected }) =>
                `${commonTabClass}
                 ${selected ? "before:w-full" : "before:w-0"}`
              }
            >
              <Hotel />
              Hotel
            </Tab>
            <Tab
              className={({ selected }) =>
                `${commonTabClass}
                 ${selected ? "before:w-full" : "before:w-0"}`
              }
            >
              <TentTree />
              Holiday
            </Tab>
          </TabList>
          <div className="w-full h-1/90 border-black/30 border-[1px] mt-1 lg:mt-3"></div>
          <TabPanels className="mt-3">
            <TabPanel>
              <InnerTab />
            </TabPanel>
            <TabPanel className="p-10 text-4xl text-center text-black">
              Hotel Booking Is Under Construction
            </TabPanel>
            <TabPanel className="p-10 text-4xl text-center text-black">
              Holiday Booking Is Under Construction
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default TabSystem;
