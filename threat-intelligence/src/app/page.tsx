import React from "react";

async function getShodanData() {
  const SHODAN_API_KEY = process.env.NEXT_PUBLIC_SHODAN_API_KEY;
  const res = await fetch(`https://api.shodan.io/shodan/host/search?key=${SHODAN_API_KEY}&query=apache`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch Shodan data");
  }


  return res.json();
}

export default async function Home() {
  let shodanData;
  try {
    shodanData = await getShodanData();
    console.log(shodanData)
  } catch (error) {
    console.error(error);
    shodanData = { matches: [] };
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold text-center mb-6">🛡 Threat Intelligence Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shodan Threats */}
        <div>
          <h2 className="text-xl font-semibold mb-4">🌍 Shodan - Latest Exposed Devices</h2>
          {shodanData.matches.length > 0 ? (
            shodanData.matches.slice(0, 5).map((device: any, index: number) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg mb-3">
                <h3 className="text-lg font-bold">{device.ip_str}</h3>
                <p className="text-sm">Port: {device.port}</p>
                <p className="text-sm">Organization: {device.org || "Unknown"}</p>
                <p className="text-sm">Country: {device.location?.country_name || "Unknown"}</p>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
