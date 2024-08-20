import React, { useEffect, useState } from 'react';

function DisplayData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('admissionData'));
    setData(storedData);
  }, []);

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h2>Admission Enquiry Details</h2>
      <p><strong>Student Name:</strong> {data.studentName}</p>
      <p><strong>Student Details:</strong> {data.studentDetails}</p>
      <p><strong>Parent Name:</strong> {data.parentName}</p>
      <p><strong>Parent Number:</strong> {data.parentNumber}</p>
    </div>
  );
}

export default DisplayData;