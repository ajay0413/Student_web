import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const StudentForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    studentDetails: "",
    parentName: "",
    parentNumber: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [errors, setErrors] = useState({});

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.studentName) formErrors.studentName = "Student Name is required.";
    if (!formData.studentDetails) formErrors.studentDetails = "Student Details are required.";
    if (!formData.parentName) formErrors.parentName = "Parent Name is required.";
    if (!formData.parentNumber) formErrors.parentNumber = "Parent Number is required.";
    else if (!/^\d+$/.test(formData.parentNumber))
      formErrors.parentNumber = "Parent Number must be numeric.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Save data to local storage
      localStorage.setItem("admissionData", JSON.stringify(formData));

      // Navigate to the DisplayData component
      navigate('/display'); // Redirect to DisplayData
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Form</button>

      <Modal show={showModal} onClose={handleCloseModal}>
        <h2>Student Information Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Student Name:</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
            />
            {errors.studentName && <p className="error">{errors.studentName}</p>}
          </div>
          <div>
            <label>Student Details:</label>
            <textarea
              name="studentDetails"
              value={formData.studentDetails}
              onChange={handleChange}
            />
            {errors.studentDetails && <p className="error">{errors.studentDetails}</p>}
          </div>
          <div>
            <label>Parent Name:</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
            />
            {errors.parentName && <p className="error">{errors.parentName}</p>}
          </div>
          <div>
            <label>Parent Number:</label>
            <input
              type="text"
              name="parentNumber"
              value={formData.parentNumber}
              onChange={handleChange}
            />
            {errors.parentNumber && <p className="error">{errors.parentNumber}</p>}
          </div>
          <button type="submit" className="btn-btn-success">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default StudentForm;