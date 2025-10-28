# 🚖 Rida - Smart Ride Booking Platform

Rida is a modern ride-sharing application designed to simplify commuting for riders and drivers alike. Built with React 19, TypeScript, Redux Toolkit, and Tailwind CSS, it offers real-time ride tracking, secure payments, and comprehensive dashboard controls for all user roles.

## 🌐 Try it Live https://rida-six.vercel.app/

### 📋Project Context

This is an assignment project for Advanced Web Technologies, demonstrating full-stack development, role-based systems, and real-time functionality. Rida provides seamless interaction between riders, drivers, and administrators in a single ecosystem.

## ✨ Core Features Implemented

### 🏠 Public Pages (Accessible Without Login)

- **Homepage** - 5+ distinct sections: Hero Banner, How-it-works, Features, Testimonials, CTA
- **About Us** - Company background, mission, and team information
- **Features** - Detailed breakdown of Rider, Driver, and Admin capabilities
- **Contact** - Fully validated contact form with simulated submission
- **FAQ** - Searchable frequently asked questions section

### 🔐 Authentication & Authorization System

- **JWT-based Authentication** - Secure login/registration with role selection
- **Role-based Access Control** - Rider, Driver, and Admin specific dashboards
- **Account Status Handling** - Blocked/suspended user redirection
- **Driver Online/Offline Status** - Control ride acceptance availability
- **Persistent Sessions** - Maintain authentication state across browser sessions

### 🚴‍♂️ Rider Features

- **Ride Booking** - Pickup/destination selection with fare estimation
- **Real-time Tracking** - Live ride status updates with driver details
- **Ride History** - Paginated list with search and filter capabilities
- **Profile Management** - Edit personal information and change password
- **Payment Methods** - Secure payment option management

### 🚗 Driver Features

- **Availability Toggle** - Online/Offline status control
- **Ride Acceptance** - Accept/reject incoming ride requests
- **Ride Management** - Status updates (Accepted → Picked Up → In Transit → Completed)
- **Earnings Dashboard** - Visual charts for daily/weekly/monthly earnings
- **Vehicle Management** - Update vehicle details and documents

### 👨‍💼 Admin Features

- **User Management** - Comprehensive user CRUD operations with search/filter
- **Ride Oversight** - View all platform rides with advanced filtering
- **Analytics Dashboard** - Data visualizations for platform metrics
- **System Monitoring** - Platform performance and activity tracking

### 🆘 Safety Features

- **Emergency SOS Button** - Visible during active rides
- **Live Location Sharing** - Real-time GPS location sharing with emergency contacts
- **Multiple Emergency Options** - Police, emergency contacts, location sharing
- **Safety Settings** - Configurable emergency contacts and preferences

## 🛠 Complete Tech Stack

### Frontend Framework & Language

- **React 19** - Latest React with concurrent features and hooks
- **TypeScript** - Full type safety with strict configuration
- **React Router v7** - Declarative routing with protected routes

### State Management & API

- **Redux Toolkit** - Modern Redux with simplified syntax
- **RTK Query** - Powerful data fetching and caching
- **Axios** - HTTP client for API communications

### UI & Styling

- **Tailwind CSS v4** - Utility-first CSS framework with custom configuration
- **Shadcn/ui** - Reusable component library built on Radix UI
- **Radix UI Primitives** - Unstyled, accessible component foundations
- **Lucide React** - Beautiful & consistent icons
- **Framer Motion** - Smooth animations and transitions

### Forms & Validation

- **React Hook Form** - High-performance form management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Zod integration for form validation

### Notifications & UX

- **Sonner** - Beautiful toast notifications
- **Skeleton Loaders** - Loading states for better UX
- **Error Boundaries** - Graceful error handling

### Build Tools & Development

- **Vite** - Fast development server and build tool
- **TypeScript ESLint** - Code quality and type checking
- **Tailwind CSS Vite Plugin** - Optimized CSS processing

## 🚀 Quick Start Guide

### Prerequisites

- Node.js 18+
- npm or yarn
- Modern web browser

### Installation & Setup

1. **Clone and Install**
   ```bash
   git clone
   cd ride-management-system-frontend
   npm install
   ```
