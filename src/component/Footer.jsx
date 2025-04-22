import React from 'react';
import { Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* About */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Saraswati Shikshan Evam Prashikshan Kendra</h4>
          <p className="text-sm text-gray-300">
            Empowering youth through skill development and education. Join us in building a brighter future.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">📞 +91-8299081110</li>
            <li className="flex items-center gap-2">📧 sarswaticlasses2010@gmail.com</li>
            <li>📍 Lucknow, Uttar Pradesh, India</li>
          </ul>
        </div>

        {/* Developed By */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Developed By</h4>
          <div className="flex flex-col gap-2 text-gray-300 text-sm">
            <a
              href="https://github.com/rishubhdixt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Github size={18} /> GitHub: rishubhdixt
            </a>
            <a
              href="https://www.linkedin.com/in/rishubh-dixit-0269801a0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Linkedin size={18} /> LinkedIn: Rishubh Dixit
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Saraswati Shikshan Evam Prashikshan Kendra. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
