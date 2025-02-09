import { 
  ShieldCheck, 
  Building2, 
  Bolt 
} from 'lucide-react';

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const FEATURE_ITEMS: FeatureCard[] = [
  {
    title: "Individual Cybersecurity",
    description: "Protect your digital identity with our advanced cybersecurity solutions.",
    icon: <ShieldCheck className="w-12 h-12" />,
    color: "text-green-500"
  },
  {
    title: "Enterprise Defense",
    description: "Comprehensive security strategies for businesses of all sizes.",
    icon: <Building2 className="w-12 h-12" />,
    color: "text-blue-500"
  },
  {
    title: "Threat Intelligence",
    description: "Stay ahead of emerging cyber threats with real-time intelligence.",
    icon: <Bolt className="w-12 h-12" />,
    color: "text-yellow-500"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Our Cutting-Edge Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering individuals and enterprises with state-of-the-art cybersecurity solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_ITEMS.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className={`mb-4 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
