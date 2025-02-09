// pages/profile.tsx
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const [role, setRole] = useState<'user' | 'organization' | null>(null);
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    phone: '',
    email: '',
  });
  const router = useRouter();

  const handleRoleChange = (role: 'user' | 'organization') => {
    setRole(role);
  };

  const handleSubmit = () => {
    if (role === 'organization') {
      router.push('/organizationRole');
    } else {
     
      router.push('/userRole');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl mb-4">Select your role</h1>
      <div>
        <button
          onClick={() => handleRoleChange('user')}
          className={`${
            role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          } p-2 rounded-md`}
        >
          User
        </button>
        <button
          onClick={() => handleRoleChange('organization')}
          className={`${
            role === 'organization' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          } p-2 rounded-md ml-4`}
        >
          Organization
        </button>
      </div>

      {role === 'organization' && (
        <div className="mt-4">
          <h2 className="text-xl">Organization Details</h2>
          <input
            type="text"
            placeholder="Company Name"
            value={companyDetails.companyName}
            onChange={(e) =>
              setCompanyDetails({ ...companyDetails, companyName: e.target.value })
            }
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone"
            value={companyDetails.phone}
            onChange={(e) =>
              setCompanyDetails({ ...companyDetails, phone: e.target.value })
            }
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={companyDetails.email}
            onChange={(e) =>
              setCompanyDetails({ ...companyDetails, email: e.target.value })
            }
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="mt-4 bg-indigo-600 text-white p-2 rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default ProfilePage;
