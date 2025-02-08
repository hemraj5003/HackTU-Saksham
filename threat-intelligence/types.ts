export interface ShodanDevice {
    ip_str: string;
    port: number;
    org?: string;
    location: {
      country_name?: string;
    };
  }
  
  export interface ShodanResponse {
    matches: ShodanDevice[];
  }
  