import { useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const MyCalendar = ({ selected, onClose, onDateSelect }) => {
  const calendarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={calendarRef}
      className="absolute z-10 p-4 sm:p-5 w-[90vw] sm:w-auto max-w-sm rounded-lg shadow-lg bg-slate-50
  top-full mt-2 sm:-top-1/4 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-full"
    >
      <DayPicker
        mode="single"
        selected={selected} // ✅ Reflect the selected date
        onSelect={(date) => {
          if (date) {
            onDateSelect(date);
          }
        }}
      />
    </div>
  );
};

export default MyCalendar;
