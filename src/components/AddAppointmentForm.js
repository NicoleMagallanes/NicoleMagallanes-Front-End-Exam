import React, { useState } from "react";
import axios from "axios";
import { MdArrowDropDown } from "react-icons/md"; // Dropdown arrow icon

const AddAppointmentForm = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submission

    try {
      await axios.post("http://localhost:3000/appointments", {
        name,
        date,
        status,
      });
      // Optionally, refresh appointments list
      setName("");
      setDate("");
      setStatus("Pending");
    } catch (error) {
      console.error("Failed to add appointment", error);
    } finally {
      setIsSubmitting(false); // End submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex mb-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm ${
            darkMode ? "bg-gray-700 text-white border-none" : ""
          }`}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="relative mb-2">
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm ${
            darkMode ? "bg-gray-700 text-white border-none" : ""
          }`}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="relative mb-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={`appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm ${
            darkMode ? "bg-gray-700 text-white border-none" : ""
          }`}
          disabled={isSubmitting}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <MdArrowDropDown
          className={`pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 ${
            darkMode ? "text-white" : "text-gray-500"
          }`}
        />
      </div>
      <button
        type="submit"
        className={`mt-4 ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white py-2 px-4 rounded-md focus:outline-none ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding..." : "Add Appointment"}
      </button>
    </form>
  );
};

export default AddAppointmentForm;
