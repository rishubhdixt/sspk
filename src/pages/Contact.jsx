import React, { useEffect, useState } from "react";

function Contact() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({ name: "", message: "" });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = [...feedbacks, formData];
    setFeedbacks(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(newFeedback));
    setFormData({ name: "", message: "" });
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Page Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-blue-700">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We’d love to hear from you. Visit our centers or drop us a message using the form below.
          </p>
        </div>

        {/* General Contact Info */}
        <div className="text-center space-y-2">
          <p className="text-lg">📞 <strong>Phone:</strong> +91-8299081110</p>
          <p className="text-lg">✉️ <strong>Email:</strong> sarswaticlasses2010@gmail.com</p>
          <p className="text-lg">🌐 <strong>Location:</strong> Lucknow, Uttar Pradesh, India</p>
        </div>

        {/* Centers */}
        <div className="space-y-12">

          {/* Head Office */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-700">🏢 Head Office – Telibagh,Lucknow</h3>
            <p className="text-gray-700">
              <strong>Address:</strong> Kaka Market, Lucknow - Prayagraj Rd, Telibagh Bazar, Nilmatha Bazar, Telibagh, Lucknow, Uttar Pradesh 226002
            </p>
            <p className="text-gray-700"><strong>Visit Timings:</strong> 8:00 AM to 8:00 PM (Mon–Sun)</p>
            <iframe
              title="Lucknow Head Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56985.94597625378!2d80.8821600170914!3d26.788328640438227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb8194409785%3A0x9ff1534cdc168473!2sSaraswati%20Computer%20Classes!5e0!3m2!1sen!2sin!4v1745324396046!5m2!1sen!2sin"
              className="w-full h-64 rounded border"
              loading="lazy"
            ></iframe>
          </div>

          {/* Second Center */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-700">Alambagh Center</h3>
            <p className="text-gray-700">
              <strong>Address:</strong> Parashar Campus, Awadh Chauraha, VIP Road, Alambagh, Lucknow, Uttar Pradesh 226005
            </p>
            <p className="text-gray-700"><strong>Visit Timings:</strong> 8:00 AM to 8:00 PM (Mon–Sun)</p>
            <iframe
              title="Parashar Campus"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56979.0710349756!2d80.82029434863281!3d26.802016400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfea718e4b805%3A0x6f4b56feedb22fba!2sSaraswati%20Computer%20Classes!5e0!3m2!1sen!2sin!4v1745324576045!5m2!1sen!2sin"
              className="w-full h-64 rounded border"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-2xl font-semibold text-blue-700">📝 Submit Your Feedback</h3>
          <input
            type="text"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            rows="4"
            required
            placeholder="Your Feedback"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border px-4 py-2 rounded"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>

        {/* Feedback Display */}
        <div className="pt-6 border-t">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">💬 Visitor Feedback</h3>
          {feedbacks.length === 0 ? (
            <p className="text-gray-500">No feedback submitted yet. Be the first to share your thoughts!</p>
          ) : (
            <ul className="space-y-4">
              {feedbacks.map((fb, i) => (
                <li key={i} className="bg-white shadow p-4 rounded">
                  <p className="font-semibold">{fb.name}</p>
                  <p className="text-gray-700 text-sm">{fb.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
