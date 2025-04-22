import React, { useEffect, useState } from "react";

function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(stored);
  }, []);

  const deleteFeedback = (index) => {
    const updated = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(updated);
    localStorage.setItem("feedbacks", JSON.stringify(updated));
  };

  const clearAll = () => {
    localStorage.removeItem("feedbacks");
    setFeedbacks([]);
  };

  return (
    <section className="p-10 min-h-screen bg-white">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Admin Feedback Control</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-600">No feedbacks yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map((fb, i) => (
            <li key={i} className="bg-gray-100 p-4 rounded shadow flex justify-between items-start">
              <div>
                <p className="font-semibold">{fb.name}</p>
                <p>{fb.message}</p>
              </div>
              <button
                className="text-red-500 font-semibold"
                onClick={() => deleteFeedback(i)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {feedbacks.length > 0 && (
        <button onClick={clearAll} className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Delete All
        </button>
      )}
    </section>
  );
}

export default AdminFeedback;
