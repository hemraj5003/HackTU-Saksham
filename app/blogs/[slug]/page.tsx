"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const blogPosts = [
  {
    slug: "zero-day-exploits",
    title: "Zero-Day Exploits: How Attackers Take Advantage of Unknown Vulnerabilities",
    description: "Dive deep into the world of zero-day vulnerabilities and learn how cybercriminals exploit unknown security gaps.",
    category: "Cybersecurity",
    date: "January 15, 2025",
    readTime: "7 min read",
    author: "Alex Rodriguez",
    authorBio: "Cybersecurity researcher and ethical hacker",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/zero-day-exploits.jpg",
    tags: ["security", "vulnerability", "hacking"],
    content: [
      { type: "paragraph", text: "Zero-day exploits represent one of the most dangerous threats in cybersecurity. These vulnerabilities are unknown to the software vendor and can be exploited before a patch is available." },
      { type: "heading", text: "Understanding Zero-Day Vulnerabilities" },
      { type: "paragraph", text: "A zero-day vulnerability is a software security flaw that is unknown to those who should be interested in its mitigation, like the vendor. The term 'zero-day' refers to the fact that the developers have had zero days to create a patch or fix." },
      { type: "list", title: "Key Characteristics of Zero-Day Exploits", items: [
        "Completely unknown to the software vendor",
        "No existing patches or fixes",
        "High potential for significant damage",
        "Valuable in underground markets"
      ]}
    ]
  },
  {
    slug: "ai-powered-cyber-attacks",
    title: "The Rise of AI-Powered Cyber Attacks in 2025",
    description: "Explore how artificial intelligence is transforming the landscape of cyber threats and defense strategies.",
    category: "AI Security",
    date: "February 1, 2025",
    readTime: "9 min read",
    author: "Dr. Emily Chen",
    authorBio: "AI and cybersecurity expert",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/ai-cyber-attacks.jpg",
    tags: ["AI", "machine learning", "cybersecurity"],
    content: [
      { type: "paragraph", text: "Artificial Intelligence is revolutionizing cybersecurity, but it's a double-edged sword that's equally empowering attackers and defenders." },
      { type: "heading", text: "AI in Cyber Threat Landscape" },
      { type: "list", title: "AI-Driven Attack Techniques", items: [
        "Automated vulnerability discovery",
        "Intelligent social engineering",
        "Dynamic malware generation",
        "Adaptive penetration testing"
      ]}
    ]
  },
  {
    slug: "blockchain-security",
    title: "Blockchain: Beyond Cryptocurrency - A New Frontier in Cybersecurity",
    description: "Uncover how blockchain technology is reshaping security protocols and creating new paradigms of digital trust.",
    category: "Blockchain",
    date: "March 10, 2025",
    readTime: "8 min read",
    author: "Marcus Wong",
    authorBio: "Blockchain security architect",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/blockchain-security.jpg",
    tags: ["blockchain", "cryptography", "security"],
    content: [
      { type: "paragraph", text: "Blockchain is no longer just about cryptocurrencies. Its decentralized and immutable nature offers groundbreaking solutions to complex security challenges." },
      { type: "heading", text: "Security Innovations in Blockchain" },
      { type: "list", title: "Blockchain Security Applications", items: [
        "Decentralized identity management",
        "Secure multi-party computation",
        "Tamper-proof audit trails",
        "Smart contract security"
      ]}
    ]
  },
  {
    slug: "cloud-security-challenges",
    title: "Navigating Cloud Security in the Era of Distributed Computing",
    description: "A comprehensive guide to understanding and mitigating security risks in cloud infrastructure.",
    category: "Cloud Computing",
    date: "April 5, 2025",
    readTime: "10 min read",
    author: "Sarah Thompson",
    authorBio: "Cloud security strategist",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/cloud-security.jpg",
    tags: ["cloud", "infrastructure", "security"],
    content: [
      { type: "paragraph", text: "As organizations increasingly migrate to cloud environments, understanding and implementing robust security measures becomes paramount." },
      { type: "heading", text: "Key Cloud Security Challenges" },
      { type: "list", title: "Critical Cloud Security Considerations", items: [
        "Data privacy and encryption",
        "Access management",
        "Compliance and regulatory requirements",
        "Continuous monitoring and threat detection"
      ]}
    ]
  },
  {
    slug: "quantum-computing-cybersecurity",
    title: "Quantum Computing: The Next Cybersecurity Battlefield",
    description: "Explore how quantum technologies are set to disrupt current encryption and security paradigms.",
    category: "Emerging Tech",
    date: "May 20, 2025",
    readTime: "9 min read",
    author: "Dr. Raj Patel",
    authorBio: "Quantum computing researcher",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/quantum-security.jpg",
    tags: ["quantum", "cryptography", "future tech"],
    content: [
      { type: "paragraph", text: "Quantum computing promises unprecedented computational power, but it also poses significant threats to current cryptographic systems." },
      { type: "heading", text: "Quantum Threats to Cybersecurity" },
      { type: "list", title: "Quantum Computing Security Implications", items: [
        "Breaking current encryption algorithms",
        "Quantum key distribution",
        "Post-quantum cryptography",
        "Quantum-resistant security protocols"
      ]}
    ]
  },
  {
    slug: "zero-trust-architecture",
    title: "Zero Trust: Revolutionizing Cybersecurity in the Remote Work Era",
    description: "Discover how Zero Trust architecture is transforming organizational security in an increasingly distributed workplace.",
    category: "Network Security",
    date: "June 15, 2025",
    readTime: "8 min read",
    author: "Lisa Nakamura",
    authorBio: "Enterprise security architect specializing in modern authentication strategies",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/zero-trust.jpg",
    tags: ["security", "network", "remote-work"],
    content: [
      { type: "paragraph", text: "The traditional perimeter-based security model is obsolete. Zero Trust architecture represents a paradigm shift in how organizations approach cybersecurity." },
      { type: "heading", text: "Understanding Zero Trust Principles" },
      { type: "list", title: "Core Zero Trust Concepts", items: [
        "Never trust, always verify",
        "Least privilege access",
        "Micro-segmentation",
        "Continuous authentication",
        "Comprehensive monitoring"
      ]}
    ]
  },
  {
    slug: "iot-security-challenges",
    title: "IoT Security: Protecting the Expanding Digital Ecosystem",
    description: "Explore the critical security challenges and innovative solutions in the Internet of Things landscape.",
    category: "IoT Security",
    date: "July 8, 2025",
    readTime: "9 min read",
    author: "Carlos Mendez",
    authorBio: "IoT security researcher and embedded systems expert",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/iot-security.jpg",
    tags: ["IoT", "embedded-systems", "security"],
    content: [
      { type: "paragraph", text: "The Internet of Things is rapidly expanding, bringing unprecedented connectivity but also introducing complex security vulnerabilities." },
      { type: "heading", text: "IoT Security Landscape" },
      { type: "list", title: "Critical IoT Security Challenges", items: [
        "Diverse and fragmented device ecosystems",
        "Limited computational resources",
        "Inadequate authentication mechanisms",
        "Potential for large-scale attacks",
        "Privacy concerns"
      ]}
    ]
  },
  {
    slug: "machine-learning-threat-detection",
    title: "Machine Learning: The New Frontier of Cybersecurity Defense",
    description: "How advanced machine learning algorithms are revolutionizing threat detection and response strategies.",
    category: "AI Security",
    date: "August 22, 2025",
    readTime: "7 min read",
    author: "Dr. Elena Petrova",
    authorBio: "Machine learning expert in cybersecurity threat intelligence",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/ml-security.jpg",
    tags: ["machine-learning", "AI", "threat-detection"],
    content: [
      { type: "paragraph", text: "Machine learning is transforming cybersecurity from a reactive to a predictive discipline, enabling organizations to anticipate and neutralize threats before they materialize." },
      { type: "heading", text: "ML in Threat Intelligence" },
      { type: "list", title: "Machine Learning Security Applications", items: [
        "Anomaly detection",
        "Predictive threat modeling",
        "Automated incident response",
        "Behavioral analysis",
        "Real-time risk assessment"
      ]}
    ]
  },
  {
    slug: "5g-network-security",
    title: "5G Networks: Navigating the Security Challenges of Hyper-Connectivity",
    description: "Unpack the complex security implications of 5G technology and its transformative potential.",
    category: "Network Security",
    date: "September 5, 2025",
    readTime: "10 min read",
    author: "Rajesh Kumar",
    authorBio: "Telecommunications security specialist",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/5g-security.jpg",
    tags: ["5G", "network", "telecommunications"],
    content: [
      { type: "paragraph", text: "5G technology promises unprecedented speed and connectivity, but it also introduces a new spectrum of security challenges that organizations must carefully navigate." },
      { type: "heading", text: "5G Security Ecosystem" },
      { type: "list", title: "5G Network Security Considerations", items: [
        "Increased attack surface",
        "Network slicing vulnerabilities",
        "Enhanced encryption requirements",
        "IoT device authentication",
        "Edge computing security"
      ]}
    ]
  },
  {
    slug: "ransomware-evolution",
    title: "Ransomware 2025: The Sophisticated Threat Landscape",
    description: "A deep dive into the evolving tactics of ransomware attacks and cutting-edge defense strategies.",
    category: "Threat Intelligence",
    date: "October 17, 2025",
    readTime: "8 min read",
    author: "Michael Zhang",
    authorBio: "Cybercrime researcher and incident response expert",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/ransomware-trends.jpg",
    tags: ["ransomware", "cybercrime", "incident-response"],
    content: [
      { type: "paragraph", text: "Ransomware has evolved from simple encryption schemes to complex, multi-stage attacks that target critical infrastructure and organizational resilience." },
      { type: "heading", text: "Modern Ransomware Tactics" },
      { type: "list", title: "Emerging Ransomware Strategies", items: [
        "Double extortion techniques",
        "Supply chain targeting",
        "AI-powered attack vectors",
        "Cryptocurrency ransom models",
        "Geopolitical motivations"
      ]}
    ]
  },
  {
    slug: "ethical-hacking-career",
    title: "Ethical Hacking in 2025: A Comprehensive Career Guide",
    description: "Navigate the exciting world of ethical hacking, from skills and certifications to career paths and industry demand.",
    category: "Cybersecurity Career",
    date: "November 5, 2025",
    readTime: "9 min read",
    author: "David Kim",
    authorBio: "Certified ethical hacker and cybersecurity career consultant",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/ethical-hacking.jpg",
    tags: ["career", "ethical-hacking", "cybersecurity"],
    content: [
      { type: "paragraph", text: "Ethical hacking has emerged as a critical profession in the cybersecurity landscape, offering professionals a chance to defend against malicious threats." },
      { type: "heading", text: "Becoming an Ethical Hacker" },
      { type: "list", title: "Key Skills and Certifications", items: [
        "Penetration testing",
        "Network security",
        "Vulnerability assessment",
        "CEH (Certified Ethical Hacker)",
        "OSCP (Offensive Security Certified Professional)"
      ]}
    ]
  },
  {
    slug: "deepfake-security-risks",
    title: "Deepfakes: The Emerging Threat to Digital Identity and Security",
    description: "Explore the sophisticated world of deepfake technology and its potential risks to personal and organizational security.",
    category: "Digital Forensics",
    date: "December 12, 2025",
    readTime: "8 min read",
    author: "Dr. Sophia Rodriguez",
    authorBio: "Digital forensics expert specializing in AI-generated media",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/deepfake-security.jpg",
    tags: ["AI", "digital-identity", "security"],
    content: [
      { type: "paragraph", text: "Deepfake technology has advanced rapidly, presenting unprecedented challenges to digital authentication and personal privacy." },
      { type: "heading", text: "Understanding Deepfake Risks" },
      { type: "list", title: "Deepfake Security Implications", items: [
        "Identity theft",
        "Misinformation campaigns",
        "Social engineering",
        "Reputation manipulation",
        "Financial fraud"
      ]}
    ]
  },
  {
    slug: "cloud-native-security",
    title: "Cloud-Native Security: Protecting Distributed Applications",
    description: "A comprehensive guide to securing cloud-native architectures and microservices in modern enterprise environments.",
    category: "Cloud Security",
    date: "January 20, 2026",
    readTime: "10 min read",
    author: "Alex Patel",
    authorBio: "Cloud architecture and security specialist",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/cloud-native-security.jpg",
    tags: ["cloud", "microservices", "security"],
    content: [
      { type: "paragraph", text: "Cloud-native architectures have revolutionized application development, but they also introduce complex security challenges that require innovative approaches." },
      { type: "heading", text: "Cloud-Native Security Strategies" },
      { type: "list", title: "Key Security Considerations", items: [
        "Container security",
        "Kubernetes hardening",
        "Service mesh security",
        "Continuous security monitoring",
        "Serverless security"
      ]}
    ]
  },
  {
    slug: "biometric-authentication",
    title: "Beyond Passwords: The Future of Biometric Authentication",
    description: "Dive into the cutting-edge world of biometric security technologies and their potential to replace traditional authentication methods.",
    category: "Authentication",
    date: "February 15, 2026",
    readTime: "7 min read",
    author: "Emma Thompson",
    authorBio: "Biometric security and identity management expert",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/biometric-auth.jpg",
    tags: ["authentication", "biometrics", "identity"],
    content: [
      { type: "paragraph", text: "Biometric authentication is rapidly evolving, offering more secure and user-friendly alternatives to traditional password-based systems." },
      { type: "heading", text: "Emerging Biometric Technologies" },
      { type: "list", title: "Advanced Biometric Authentication Methods", items: [
        "Facial recognition",
        "Behavioral biometrics",
        "Voice authentication",
        "Continuous authentication",
        "Multi-modal biometrics"
      ]}
    ]
  },
  {
    slug: "cyber-physical-systems",
    title: "Cyber-Physical Systems: Securing the Intersection of Digital and Physical Worlds",
    description: "Explore the critical security challenges in cyber-physical systems that bridge digital technologies with physical infrastructure.",
    category: "Critical Infrastructure",
    date: "March 10, 2026",
    readTime: "9 min read",
    author: "Dr. Marcus Chen",
    authorBio: "Critical infrastructure and cyber-physical systems security researcher",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/cyber-physical-security.jpg",
    tags: ["infrastructure", "critical-systems", "security"],
    content: [
      { type: "paragraph", text: "Cyber-physical systems are transforming industries, but they also create complex security vulnerabilities that can have real-world physical consequences." },
      { type: "heading", text: "Protecting Cyber-Physical Infrastructures" },
      { type: "list", title: "Security Challenges in Cyber-Physical Systems", items: [
        "Industrial control system protection",
        "Smart city vulnerabilities",
        "Healthcare system security",
        "Transportation infrastructure risks",
        "Energy grid protection"
      ]}
    ]
  },
  {
    slug: "sustainable-tech-innovation",
    title: "Sustainable Technology: Innovations Driving Environmental Solutions",
    description: "Explore groundbreaking technological innovations that are addressing critical environmental challenges and promoting sustainability.",
    category: "Green Tech",
    date: "April 22, 2026",
    readTime: "8 min read",
    author: "Dr. Olivia Green",
    authorBio: "Environmental technology researcher and sustainability expert",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/sustainable-tech.jpg",
    tags: ["sustainability", "green-tech", "innovation"],
    content: [
      { type: "paragraph", text: "As climate change becomes an increasingly urgent global challenge, technological innovations are emerging as powerful tools for environmental solutions." },
      { type: "heading", text: "Cutting-Edge Sustainable Technologies" },
      { type: "list", title: "Innovative Green Tech Solutions", items: [
        "Carbon capture technologies",
        "Renewable energy advancements",
        "Circular economy platforms",
        "Smart grid systems",
        "Sustainable materials engineering"
      ]}
    ]
  },
  {
    slug: "augmented-reality-enterprise",
    title: "Augmented Reality: Transforming Enterprise Workflows and Collaboration",
    description: "Discover how augmented reality is revolutionizing business processes, training, and remote collaboration across industries.",
    category: "Enterprise Technology",
    date: "May 15, 2026",
    readTime: "9 min read",
    author: "Michael Torres",
    authorBio: "AR/VR technology strategist and enterprise innovation consultant",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/augmented-reality.jpg",
    tags: ["AR", "enterprise", "innovation"],
    content: [
      { type: "paragraph", text: "Augmented reality is no longer a futuristic concept, but a transformative technology reshaping how businesses operate and collaborate." },
      { type: "heading", text: "AR in Enterprise Environments" },
      { type: "list", title: "AR Application Domains", items: [
        "Remote assistance and training",
        "Design and prototyping",
        "Maintenance and repair",
        "Sales and marketing visualization",
        "Complex data visualization"
      ]}
    ]
  },
  {
    slug: "edge-computing-revolution",
    title: "Edge Computing: Decentralizing Data Processing and Enhancing Real-Time Capabilities",
    description: "Explore the transformative potential of edge computing in creating faster, more efficient, and secure data processing ecosystems.",
    category: "Cloud Computing",
    date: "June 10, 2026",
    readTime: "10 min read",
    author: "Dr. Raj Patel",
    authorBio: "Distributed computing and edge technology researcher",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/edge-computing.jpg",
    tags: ["edge-computing", "distributed-systems", "technology"],
    content: [
      { type: "paragraph", text: "Edge computing is revolutionizing how we process and manage data, bringing computational power closer to the source of data generation." },
      { type: "heading", text: "Edge Computing Ecosystem" },
      { type: "list", title: "Edge Computing Applications", items: [
        "IoT device management",
        "Real-time analytics",
        "Autonomous vehicle systems",
        "Smart city infrastructure",
        "Industrial automation"
      ]}
    ]
  },
  {
    slug: "digital-privacy-revolution",
    title: "The Digital Privacy Revolution: Reclaiming Control in the Age of Big Data",
    description: "Examine the evolving landscape of digital privacy, emerging technologies, and strategies for protecting personal information.",
    category: "Privacy & Security",
    date: "July 8, 2026",
    readTime: "8 min read",
    author: "Emma Rodriguez",
    authorBio: "Digital privacy advocate and technology ethics researcher",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/digital-privacy.jpg",
    tags: ["privacy", "data-protection", "ethics"],
    content: [
      { type: "paragraph", text: "As digital technologies become more pervasive, the battle for personal privacy has become more critical than ever." },
      { type: "heading", text: "Privacy-Enhancing Technologies" },
      { type: "list", title: "Emerging Privacy Solutions", items: [
        "Decentralized identity systems",
        "Zero-knowledge proofs",
        "Federated learning",
        "Privacy-preserving AI",
        "Blockchain-based privacy tools"
      ]}
    ]
  },
  {
    slug: "neuromorphic-computing",
    title: "Neuromorphic Computing: Building Computers That Think Like the Human Brain",
    description: "Dive into the cutting-edge world of neuromorphic computing and its potential to revolutionize artificial intelligence and computing.",
    category: "Artificial Intelligence",
    date: "August 5, 2026",
    readTime: "9 min read",
    author: "Dr. Sarah Chen",
    authorBio: "Neuromorphic engineering and AI research scientist",
    authorImage: "/images/author-placeholder.jpg",
    image: "/images/neuromorphic-computing.jpg",
    tags: ["AI", "neuroscience", "computing"],
    content: [
      { type: "paragraph", text: "Neuromorphic computing represents a radical approach to artificial intelligence, designing computer architectures inspired by the human brain's neural networks." },
      { type: "heading", text: "Neuromorphic Computing Principles" },
      { type: "list", title: "Key Neuromorphic Technologies", items: [
        "Spiking neural networks",
        "Neuromorphic hardware",
        "Energy-efficient AI",
        "Adaptive learning systems",
        "Brain-inspired computing"
      ]}
    ]
  }
];

export default function BlogPostPage() {
  const [visiblePosts, setVisiblePosts] = useState(10);

  const loadMorePosts = () => {
    // If we've reached the end, reset to initial state or start from beginning
    if (visiblePosts >= blogPosts.length) {
      setVisiblePosts(10);
    } else {
      // Otherwise, load more posts
      setVisiblePosts(prevVisible => Math.min(prevVisible + 5, blogPosts.length));
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <div 
              key={post.slug}
              className={`
                bg-white shadow-lg rounded-xl overflow-hidden 
                transition-all duration-300 hover:scale-105 hover:shadow-xl
                flex flex-col
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : 
                  index === 1 ? 'md:col-span-2' : 
                  'md:col-span-1'}
              `}
            >
              <div className="relative h-full">
                {/* Blog Post Image */}
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="absolute inset-0 object-cover w-full h-full"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                  flex flex-col justify-end p-4 text-white">
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold line-clamp-2 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-300 line-clamp-2 mb-2">
                      {post.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Image 
                        src={post.authorImage} 
                        alt={post.author} 
                        width={32} 
                        height={32} 
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="bg-white/20 text-white px-2 py-1 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={loadMorePosts}
            className="
              bg-blue-600 text-white 
              px-6 py-3 rounded-full 
              hover:bg-blue-700 
              transition-colors duration-300
              flex items-center space-x-2
            "
          >
            <span>
              {visiblePosts >= blogPosts.length 
                ? 'Back to Top' 
                : 'Load More Blogs'}
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
