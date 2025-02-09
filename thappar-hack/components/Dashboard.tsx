"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole") || "user"; // Default to "user" if no role is found
    setRole(userRole);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center space-y-6 px-8 py-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-cyan-400">
          Welcome, {role === "organization" ? "Organization" : "Cyber Guardian"}!
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
          {role === "organization"
            ? "Gain access to enterprise-grade cybersecurity tools powered by AI."
            : "Stay secure with real-time cyber threat insights and earn token rewards."}
        </p>
      </motion.div>

      {/* Dashboard Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16">
        {role === "user" && (
          <>
            {userFeatures.map((feature, index) => (
              <DashboardCard key={index} {...feature} />
            ))}
          </>
        )}

        {role === "organization" && (
          <>
            {organizationFeatures.map((feature, index) => (
              <DashboardCard key={index} {...feature} />
            ))}
          </>
        )}
      </div>

      {/* Back Button */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full" onClick={() => router.push("/")}>
          Back to Home
        </button>
      </motion.div>
    </div>
  );
}
interface DashboardCardProps {
    title: string;
    description: string;
    link: string;
  }
const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, link }) => {
  const router = useRouter();
  return (
    <motion.div
      className="p-6 bg-gray-800 rounded-xl shadow-lg border-l-4 border-cyan-400 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      onClick={() => router.push(link)}
    >
      <h3 className="text-2xl font-semibold text-cyan-300 mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const userFeatures = [
  {
    title: "Real-Time Threat Insights",
    description: "Stay ahead of cyber threats with real-time intelligence.",
    link: "/real-time-threat-insights",
  },
  {
    title: "Engage in Cybersecurity Tasks",
    description: "Contribute to security challenges and earn token rewards.",
    link: "/tasks-activities",
  },
  {
    title: "Community Solutions",
    description: "Collaborate with experts to solve security problems.",
    link: "/community-driven-solutions",
  },
];

const organizationFeatures = [
  {
    title: "AI-Powered Firewalls",
    description: "Defend against cyber threats with adaptive AI security.",
    link: "/ai-driven-firewalls",
  },
  {
    title: "Honeypots for Threat Analysis",
    description: "Detect and analyze threats using honeypots.",
    link: "/honeypots",
  },
  {
    title: "Intrusion Detection System",
    description: "Monitor and prevent security breaches proactively.",
    link: "/ids",
  },
];
