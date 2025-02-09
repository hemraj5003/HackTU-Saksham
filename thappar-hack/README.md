# Saksham Platform - Next.js Security Dashboard

## Project Overview
Saksham Platform is a comprehensive security management dashboard built with Next.js 15, featuring both organizational and individual user workflows for threat management, security monitoring, and collaborative defense strategies.

## Project Structure

```
:root
|
app/
├── api/                          # API routes directory
├── dashboard/                    # Main dashboard features
│   ├── individual/              # Individual user features
│   │   └── threats/            # Threat monitoring & analysis
│   ├── layout.tsx              # Dashboard layout wrapper
│   ├── organization/           # Organization-specific features
│   │   ├── firewalls/         # AI-Driven firewall management
│   │   ├── honeypots/         # Honeypot deployment & monitoring
│   │   └── ids/               # Intrusion Detection Systems
│   └── page.tsx               # Dashboard home page
├── layout.tsx                  # Root layout
├── (pages)/                    # Route groups for better organization
│   ├── (auth)/                # Authentication route group
│   │   ├── logIn/            # Login functionality
│   │   │   └── page.tsx
│   │   └── signUp/          # Registration functionality
│   │       └── page.tsx
│   └── page.tsx             # Landing page
├── StoreProvider.tsx        # Global state management wrapper
components
├── Dashboards.tsx           # Dashboard Component
├── Home.tsx                 # Home component
lib/
├── constants.ts            # Constants accross the app
├── types.ts                # Typing for ts
├── fonts.tsx               # All the fonts used accross the app
├── store/
│   ├── features/           # Features to be added as a <feature>Slice.ts
│   ├── hooks.ts            # Hooks used by Redux for statemanagment 
│   └── store.ts            # Store which will aid as a single source of truth
public/                     # For adding static assets
|
styles/                     # All of the tailwind stylings 
└── globals.css
```

## Key Features & Implementations

### Authentication ((auth) Group)
- Isolated authentication routes using route groups
- Separate login and signup flows
- Protected dashboard routes

### Dashboard
- **Organization Features**
  - AI-Driven Firewalls Management
  - Honeypot Deployment & Monitoring
  - IDS Configuration & Alerts
  
- **Individual User Features**
  - Real-time Threat Insights
  - Personal Security Dashboard
  - Activity Tracking

### State Management
- Global state handled by StoreProvider.tsx

## Getting Started

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```