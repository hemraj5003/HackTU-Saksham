"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

// Expanded blog posts with varied content and importance
const allBlogPosts = [
  {
    slug: "ai-cybersecurity-revolution",
    title: "AI: The New Frontier of Cybersecurity",
    description: "How artificial intelligence is transforming threat detection and response strategies.",
    category: "AI Security",
    image: "/images/ai-security.jpg",
    size: "large",
    tags: ["AI", "machine-learning", "cybersecurity"]
  },
  {
    slug: "zero-trust-architecture",
    title: "Zero Trust: Redefining Network Security",
    description: "Exploring the principles and implementation of Zero Trust security models.",
    category: "Network Security",
    image: "/images/zero-trust.jpg",
    size: "medium",
    tags: ["network-security", "zero-trust", "enterprise"]
  },
  {
    slug: "blockchain-security-innovations",
    title: "Blockchain Beyond Cryptocurrency",
    description: "Innovative security applications of blockchain technology.",
    category: "Blockchain",
    image: "/images/blockchain-security.jpg",
    size: "small",
    tags: ["blockchain", "security", "innovation"]
  },
  {
    slug: "cloud-security-challenges",
    title: "Navigating Cloud Security Complexities",
    description: "Understanding and mitigating security risks in cloud environments.",
    category: "Cloud Security",
    image: "/images/cloud-security.jpg",
    size: "medium",
    tags: ["cloud", "security", "enterprise"]
  },
  {
    slug: "quantum-cryptography",
    title: "Quantum Cryptography: The Future of Secure Communication",
    description: "How quantum mechanics is revolutionizing encryption techniques.",
    category: "Cryptography",
    image: "/images/quantum-crypto.jpg",
    size: "small",
    tags: ["quantum", "cryptography", "future-tech"]
  },
  {
    slug: "iot-security-landscape",
    title: "IoT Security: Protecting the Connected World",
    description: "Comprehensive guide to securing Internet of Things devices and networks.",
    category: "IoT Security",
    image: "/images/iot-security.jpg",
    size: "medium",
    tags: ["iot", "security", "networking"]
  },
  {
    slug: "deepfake-detection-techniques",
    title: "Combating Deepfakes: Advanced Detection Strategies",
    description: "Cutting-edge techniques to identify and mitigate AI-generated synthetic media threats.",
    category: "AI Ethics",
    image: "/images/deepfake-detection.jpg",
    size: "medium",
    tags: ["deepfakes", "AI", "media-security"]
  },
  {
    slug: "supply-chain-cyber-risks",
    title: "Supply Chain Cybersecurity: Invisible Vulnerabilities",
    description: "Analyzing the critical security risks in global technology supply chains.",
    category: "Enterprise Security",
    image: "/images/supply-chain-security.jpg",
    size: "small",
    tags: ["supply-chain", "risk-management", "cybersecurity"]
  },
  {
    slug: "5g-network-security",
    title: "5G Networks: Revolutionizing and Challenging Cybersecurity",
    description: "Exploring the security implications of 5G technology and its potential risks.",
    category: "Network Security",
    image: "/images/5g-security.jpg",
    size: "medium",
    tags: ["5g", "network-security", "telecommunications"]
  },
  {
    slug: "biometric-authentication-evolution",
    title: "Beyond Passwords: The Future of Biometric Authentication",
    description: "Advanced biometric technologies reshaping digital identity verification.",
    category: "Authentication",
    image: "/images/biometric-security.jpg",
    size: "small",
    tags: ["biometrics", "authentication", "identity"]
  },
  {
    slug: "ransomware-threat-landscape",
    title: "Ransomware 2025: Evolving Tactics and Defense Strategies",
    description: "Comprehensive analysis of modern ransomware techniques and mitigation approaches.",
    category: "Cyber Threats",
    image: "/images/ransomware-landscape.jpg",
    size: "large",
    tags: ["ransomware", "cyber-threats", "defense"]
  },
  {
    slug: "privacy-preserving-ai",
    title: "Privacy-Preserving AI: Balancing Innovation and Protection",
    description: "Techniques for developing AI systems that protect individual privacy.",
    category: "AI Ethics",
    image: "/images/privacy-ai.jpg",
    size: "medium",
    tags: ["AI", "privacy", "ethics"]
  },
  // Additional blogs can be added here
  {
    slug: "automotive-cybersecurity",
    title: "Connected Cars: The New Cybersecurity Frontier",
    description: "Exploring the complex cybersecurity challenges in modern connected and autonomous vehicles.",
    category: "IoT Security",
    image: "/images/automotive-security.jpg",
    size: "medium",
    tags: ["automotive", "iot", "connected-vehicles"]
  },
  {
    slug: "zero-day-vulnerability-management",
    title: "Zero-Day Vulnerabilities: Proactive Defense Strategies",
    description: "Comprehensive guide to identifying, mitigating, and managing unknown security vulnerabilities.",
    category: "Threat Intelligence",
    image: "/images/zero-day-vulnerability.jpg",
    size: "large",
    tags: ["zero-day", "vulnerability", "threat-management"]
  }
];

export default function BlogsPage() {
  const [visiblePosts, setVisiblePosts] = useState(12);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  const loadMorePosts = () => {
    // If we've reached the end, reset to initial state
    if (visiblePosts >= allBlogPosts.length) {
      setVisiblePosts(12);
    } else {
      // Otherwise, load more posts
      setVisiblePosts(prevVisible => 
        Math.min(prevVisible + 6, allBlogPosts.length)
      );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-center">Cybersecurity Insights</h1>
          <Link 
            href="/blogs/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>Create Blog</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allBlogPosts.slice(0, visiblePosts).map((post) => (
            <Link 
              href={`/blogs/${post.slug}`} 
              key={post.slug}
              className={`
                bg-gray-900 rounded-xl overflow-hidden 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl
                border border-gray-800
                ${getSizeClasses(post.size)}
                flex flex-col
              `}
            >
              <div className="relative w-full h-48 md:h-64 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-blue-400 mb-2">{post.category}</span>
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.description}</p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="
                        bg-gray-800 text-gray-300 
                        px-2 py-1 rounded-full 
                        text-xs
                        hover:bg-blue-800 hover:text-white
                        transition-colors
                      "
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Blogs Button - Always Visible */}
        <div className="text-center mt-8">
          <button 
            onClick={loadMorePosts}
            className="
              bg-blue-600 text-white 
              px-6 py-3 rounded-full 
              hover:bg-blue-700 
              transition-colors 
              font-semibold
              flex items-center 
              mx-auto 
              space-x-2
            "
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>
              {visiblePosts >= allBlogPosts.length 
                ? "Reset to Initial View" 
                : "Load More Blogs"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
