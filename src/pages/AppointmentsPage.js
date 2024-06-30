import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import AddAppointmentForm from "../components/AddAppointmentForm"; // Import AddAppointmentForm component

const AppointmentsPage = ({ darkMode }) => {
  const { isLoggedIn } = useAuth();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const {
    data: appointments,
    isLoading,
    isError,
  } = useQuery(["appointments", filterStatus, searchTerm], async () => {
    let url = "https://nicole-fe-server.netlify.app/appointments"; // Update URL
    if (filterStatus !== "all") {
      url += `?status=${filterStatus}`;
    }
    const response = await axios.get(url);
    return response.data.filter((appointment) =>
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const toggleStatusMutation = useMutation(
    (id) =>
      axios.patch(`https://nicole-fe-server.netlify.app/appointments/${id}`, {
        // Update URL
        status:
          appointments.find((appointment) => appointment.id === id).status ===
          "Completed"
            ? "Pending"
            : "Completed",
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          "appointments",
          filterStatus,
          searchTerm,
        ]);
      },
      onError: (error) => {
        console.error("Toggle status mutation error:", error);
        // Add error handling logic as needed
      },
    }
  );

  const deleteAppointmentMutation = useMutation(
    (id) =>
      axios.delete(`https://nicole-fe-server.netlify.app/appointments/${id}`), // Update URL
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          "appointments",
          filterStatus,
          searchTerm,
        ]);
      },
      onError: (error) => {
        console.error("Delete appointment mutation error:", error);
        // Add error handling logic as needed
      },
    }
  );

  const handleToggleStatus = (id) => {
    toggleStatusMutation.mutate(id);
  };

  const handleDeleteAppointment = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      deleteAppointmentMutation.mutate(id);
    }
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching appointments</div>;
  }

  return (
    <div
      className={`container mx-auto px-4 py-8 bg-white${
        darkMode ? "dark" : ""
      } bg-gray-800 text-gray-900`}
    >
      <h1
        className={`text-3xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Appointments
      </h1>

      {/* Add Appointment Form */}
      <AddAppointmentForm darkMode={darkMode} />

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`px-3 py-2 border ${
            darkMode
              ? "bg-gray-700 text-white border-none"
              : "bg-white text-gray-900"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm`}
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className={`ml-4 px-3 py-2 border ${
            darkMode
              ? "bg-gray-700 text-white border-none"
              : "bg-white text-gray-900"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm`}
        >
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`bg-white p-4 shadow-md rounded-md ${
              darkMode ? "dark:bg-gray-700 text-white" : "text-gray-900"
            }`}
          >
            <p
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {appointment.name}
            </p>
            <p
              className={`text-gray-600 mb-2 ${
                darkMode ? "text-gray-200" : ""
              }`}
            >
              {appointment.date}
            </p>
            <p>
              Status:{" "}
              <span
                className={`inline-block px-2 py-1 rounded ${
                  appointment.status === "Completed"
                    ? "bg-green-500  text-white"
                    : "bg-yellow-500 opacity-50 text-gray-800"
                }`}
              >
                {appointment.status}
              </span>
            </p>
            <div className="mt-2 space-x-2">
              <button
                className={`${
                  darkMode
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-red-500 hover:bg-red-600"
                } text-white py-1 px-4 rounded-md focus:outline-none`}
                onClick={() => handleDeleteAppointment(appointment.id)}
              >
                Delete
              </button>
              <button
                className={`${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white py-1 px-4 rounded-md focus:outline-none`}
                onClick={() => handleToggleStatus(appointment.id)}
              >
                {appointment.status === "Completed" ? "Update" : "Update"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;
