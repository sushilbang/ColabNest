import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use BrowserRouter as Router
import Dashboard from "@/pages/Dashboard";
import LoginPage from '@/pages/LoginPage.jsx';
import SignupPage from '@/pages/SignupPage.jsx';
import ProfileForm from '@/components/forms/ProfileForm.jsx';
import LandingPage from '@/pages/LandingPage.jsx';
import Task from './pages/Task';
import Projects from './pages/Projects';
import Profile from './pages/Profile';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
            <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
            <Route path="/signup" element={<SignupPage />} /> {/* Signup Page */}
            <Route path="/profileform" element={<ProfileForm />} /> {/* Profile Page */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
            <Route path="/tasks" element={<Task />} /> {/* Task Page */}
            <Route path="/projects" element={<Projects />} /> {/* Projects Page */}
            <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
          </Routes>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;