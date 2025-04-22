import React from 'react';
import pmskillindia from '../assets/Skill-India.webp';
import pmkvy from '../assets/pmkvy.jpeg';
import workforce from '../assets/skillforce.jpeg';
import upsdm from '../assets/upsdm.png';
import our1 from '../assets/class2.jpg';
import our2 from '../assets/skill1.jpeg';
import our3 from '../assets/skill2.jpg';

function Skill() {
  return (
    <div className="pt-24 px-6 md:px-12 bg-white">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">🛠️ Skill Development Initiatives at Saraswati SEP Kendra</h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          At Saraswati SEP Kendra, we are proud to be an active partner in India's mission to empower youth through skill development. Our collaborations with key national and state-level programs have enabled us to train and transform the lives of thousands of students.
        </p>
      </section>

      {/* What is Skill Development */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🔍 What is Skill Development?</h2>
        <p className="text-gray-700 text-lg mb-4">
          Skill development refers to the identification and cultivation of abilities that enhance an individual's employability and productivity. These skills range from technical knowledge to soft skills and play a pivotal role in shaping a competent workforce.
        </p>
        <img
  src={pmskillindia}
  alt="Skill India"
  className="w-full max-w-md mx-auto rounded-xl shadow-md mb-4"
/>
      </section>

      {/* Importance of Skill Development */}
      <section className="mb-12">
        <p className="text-gray-700 text-lg mb-4">
          In an era driven by technology and innovation, skill development bridges the gap between education and employability. It equips youth with tools to adapt, innovate, and succeed in an ever-evolving job market.
        </p>
      </section>

      {/* India’s Position in the World */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🌍 India on the Global Skill Map</h2>
        <p className="text-gray-700 text-lg mb-4">
          Despite being one of the youngest nations globally, India faces a large skill gap. Less than 5% of the Indian workforce has received formal skill training compared to countries like South Korea (96%) and Germany (75%).
        </p>
        <img
  src={workforce}
  alt="Workforce Training Comparison"
  className="w-full max-w-md mx-auto rounded-xl shadow-md mb-4"
/>
      </section>

      {/* Skill Development’s Role in India's Growth */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🚀 How Skill Development Can Transform India</h2>
        <p className="text-gray-700 text-lg mb-4">
          Skilling the youth can catalyze economic growth, reduce unemployment, and enhance global competitiveness. With the right training, India's demographic dividend can be turned into a global human resource powerhouse.
        </p>
      </section>

      {/* PMKVY */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">🇮🇳 Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</h2>
        <p className="text-gray-700 text-lg mb-2">
          <strong>Overview:</strong> Launched by the Ministry of Skill Development & Entrepreneurship, PMKVY aims to provide industry-relevant skill training to youth. It offers free training, short-term courses, RPL (Recognition of Prior Learning), and special projects.
        </p>
        <img
  src={pmkvy}
  alt="PMKVY Program"
  className="w-full max-w-md mx-auto rounded-xl shadow-md mb-4"
/>
        <p className="text-gray-700 text-lg mb-4">
          <strong>Our Contribution:</strong> We have successfully trained numerous students under PMKVY, equipping them with skills needed to thrive in today's job market.
        </p>
      </section>

      {/* UPSDM */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">🏢 Uttar Pradesh Skill Development Mission (UPSDM)</h2>
        <p className="text-gray-700 text-lg mb-2">
          <strong>Overview:</strong> A state initiative offering vocational training in over 650 trades across 53 sectors for youth aged 14–35. Emphasizes inclusivity with reservations for women and minorities.
        </p>
        <img
  src={upsdm}
  alt="UPSDM Banner"
  className="w-full max-w-md mx-auto rounded-xl shadow-md mb-4"
/>
        <p className="text-gray-700 text-lg mb-4">
          <strong>Our Contribution:</strong> As an empaneled partner, we have provided training to thousands, helping them move towards gainful employment.
        </p>
      </section>

      {/* Glimpses of Our Work */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">📸 Glimpses of Our Work</h2>
        <p className="text-gray-700 text-lg mb-4">
          Below are some snapshots and highlights from our training centers, community outreach, and student success stories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src={our1} alt="Training Session" className="rounded-xl shadow-md h-48 w-full object-cover" />
          <img src={our2} alt="Skill Workshop" className="rounded-xl shadow-md h-48 w-full object-cover" />
          <img src={our3} alt="Practical Training" className="rounded-xl shadow-md h-48 w-full object-cover" />
        </div>
      </section>
    </div>
  );
}

export default Skill;
