import React from "react";
import Card from "../component/Card";
import {
  Code,
  PenTool,
  FileText,
  Globe,
  Database,
  Languages,
  Type,
  MonitorSmartphone,
  FileSpreadsheet,
  Terminal,
  MessageSquare,
  BookOpen,
  BarChart3,
  BrainCircuit,
  FileCode2,
  BookText,
} from "lucide-react";

const courses = [
  {
    title: "CCC",
    description: "Course on Computer Concepts (Basic IT skills)",
    price: 1200,
    icon: <MonitorSmartphone />,
    gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
  },
  {
    title: "O Level",
    description: "NIELIT O-Level Govt. certified computer course",
    price: 8000,
    icon: <FileCode2 />,
    gradient: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
  {
    title: "ADCA",
    description: "Advanced Diploma in Computer Applications",
    price: 5000,
    icon: <Database />,
    gradient: "bg-gradient-to-r from-pink-500 to-red-500",
  },
  {
    title: "DCA",
    description: "Diploma in Computer Applications",
    price: 3500,
    icon: <FileText />,
    gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    title: "Hindi Typing",
    description: "Speed and accuracy in KrutiDev & Remington",
    price: 1000,
    icon: <Type />,
    gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    title: "English Typing",
    description: "Improve WPM, accuracy and placement test prep",
    price: 1000,
    icon: <Type />,
    gradient: "bg-gradient-to-r from-blue-400 to-cyan-500",
  },
  {
    title: "Python",
    description: "Learn Python basics, OOPs, and automation",
    price: 4000,
    icon: <BrainCircuit />,
    gradient: "bg-gradient-to-r from-gray-700 to-slate-500",
  },
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React, Hosting",
    price: 6000,
    icon: <Code />,
    gradient: "bg-gradient-to-r from-indigo-600 to-purple-600",
  },
  {
    title: "English Speaking",
    description: "Basic grammar, communication and fluency",
    price: 2000,
    icon: <MessageSquare />,
    gradient: "bg-gradient-to-r from-cyan-600 to-blue-500",
  },
  {
    title: ".NET",
    description: "Learn .NET for enterprise-level applications",
    price: 5000,
    icon: <FileCode2 />,
    gradient: "bg-gradient-to-r from-teal-600 to-cyan-600",
  },
  {
    title: "Tally (Latest Version)",
    description: "Accounting and GST in Tally Prime",
    price: 3000,
    icon: <FileSpreadsheet />,
    gradient: "bg-gradient-to-r from-orange-400 to-yellow-400",
  },
  {
    title: "Video Editing",
    description: "Adobe Premiere, After Effects, basic YouTube",
    price: 4000,
    icon: <PenTool />,
    gradient: "bg-gradient-to-r from-red-500 to-pink-600",
  },
  {
    title: "Steno",
    description: "Shorthand typing practice and dictation drills",
    price: 2000,
    icon: <Type />,
    gradient: "bg-gradient-to-r from-violet-600 to-indigo-600",
  },
  {
    title: "Java",
    description: "Object-oriented programming and basics",
    price: 4000,
    icon: <Terminal />,
    gradient: "bg-gradient-to-r from-red-400 to-orange-400",
  },
  {
    title: "C / C++",
    description: "Low-level programming & data structures",
    price: 3500,
    icon: <Terminal />,
    gradient: "bg-gradient-to-r from-blue-700 to-indigo-700",
  },
  {
    title: "MS Word (Full Package)",
    description: "Docs, templates, formatting, productivity tools",
    price: 1500,
    icon: <BookText />,
    gradient: "bg-gradient-to-r from-rose-500 to-pink-500",
  },
  {
    title: "Excel & Advance Excel",
    description: "Formulas, PivotTables, Dashboards & VBA",
    price: 3000,
    icon: <BarChart3 />,
    gradient: "bg-gradient-to-r from-green-700 to-lime-600",
  },
  {
    title: "Database Management",
    description: "SQL, normalization, ERD, CRUD operations",
    price: 3000,
    icon: <Database />,
    gradient: "bg-gradient-to-r from-zinc-700 to-gray-500",
  },
];

const Courses = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-blue-700">Our Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
