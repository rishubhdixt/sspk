import React from 'react';
import RekhaDixitImg from '../assets/rekhaDixit.jpeg';
import earlyimage from '../assets/class1.jpg';
import covidimage from '../assets/class4.jpeg';
import activityimage from '../assets/class5.jpeg';

function AboutUs() {
  return (
    <div className="bg-white pt-24 pb-16 px-6 md:px-12 text-gray-800">
      <section className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">About Us</h1>

        {/* Vision */}
        <p className="text-lg">
          Saraswati Shikshan Evam Prashikshan Kendra is more than an NGO – it’s a movement to nurture minds, empower individuals, and build a stronger India through education and skills. Guided by the vision of our founder Rekha Dixit, our organization has remained committed to transforming lives since 2010.
        </p>

        {/* Founder Rekha Dixit */}
        <div className="w-full flex justify-center">
          <img
            src={RekhaDixitImg}
            alt="Rekha Dixit"
            className="w-full md:w-2/3 h-64 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* History Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">📜 Our Journey Since 2010</h2>

          <p className="text-base">
            Founded in 2010 by Rekha Dixit, <strong>Saraswati Shikshan Evam Prashikshan Kendra</strong> began with a simple yet powerful mission: to empower individuals through education, skill development, and long-term vision. What started as a grassroots initiative with limited resources has evolved into a recognized force in youth development and social impact across Uttar Pradesh.
          </p>

          {/* Early Days Image */}
          <div className="w-full flex justify-center">
            <img
              src={earlyimage}
              alt="Early Training Center – 2012"
              className="w-full md:w-2/3 h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          <p className="text-base">
            In the early years, the focus was on spreading awareness about basic education in underserved communities. Through consistent outreach and unwavering commitment, the NGO established its first training center in 2012, offering courses in tailoring, computer literacy, and soft skills. These efforts gradually gained momentum as local trust and participation grew.
          </p>

          {/* COVID-19 Relief Image */}
          <div className="w-full flex justify-center">
            <img
              src={covidimage}
              alt="COVID-19 Relief Activities – 2020"
              className="w-full md:w-2/3 h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          <p className="text-base">
            The COVID-19 pandemic in 2020 tested our resilience. Instead of halting operations, we pivoted—conducting online classes, distributing essential supplies, and offering mental health support. Our commitment during crisis earned us recognition and deeper community ties.
          </p>

          <p className="text-base">
            Post-pandemic, we expanded into government-recognized programs like <strong>PMKVY</strong>, <strong>UPSDM</strong>, and <strong>DDU-GKY</strong>, training thousands of youth with industry-relevant skills. Today, under the visionary leadership of Rekha Dixit, we continue to evolve—building future-ready citizens, embracing technology, and setting new benchmarks in social development.
          </p>

          {/* Modern Activities Image */}
          <div className="w-full flex justify-center">
            <img
              src={activityimage}
              alt="Training Activities – Present"
              className="w-full md:w-2/3 h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          <p className="text-base">
            We believe our journey is far from over. With a clear mission and an unstoppable team, the future looks brighter than ever.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
