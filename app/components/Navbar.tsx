import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = "CyberShield" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [likes, setLikes] = useState([
    { id: 1, blogTitle: "Zero Day Exploits", author: "Alex Rodriguez" },
    { id: 2, blogTitle: "AI Cyber Attacks", author: "Dr. Emily Chen" }
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New blog post on AI Security", time: "5m ago" },
    { id: 2, message: "Your article got 100 views", time: "1h ago" }
  ]);
  const [showLikes, setShowLikes] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const categories = [
    { name: "Bug Bounty", href: "/bug-bounty" },
    { name: "DevSecOps", href: "/devsecops" },
    { name: "Data Science", href: "/data-science" },
    { name: "DevOps", href: "/devops" },
    { name: "Tech", href: "/tech" },
    { name: "AI/ML", href: "/ai-ml" },
    { name: "Blockchain", href: "/blockchain" },
    { name: "Web Dev", href: "/web-dev" },
    { name: "Security", href: "/security" },
    { name: "Cloud Comp", href: "/cloud-computing" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-black text-white border-b border-gray-700">
      {/* Categories and Search */}
      <div className="bg-gray-800 py-3 px-8 flex justify-between items-center flex-wrap">
        {/* Categories */}
        <div className="flex justify-center space-x-6 flex-wrap flex-grow">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.href} 
              className="text-gray-300 hover:text-white transition-colors duration-200 mb-1"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center ml-4 mb-1">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blogs..." 
            className="bg-gray-700 text-white px-2 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600 transition-colors"
          >
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
