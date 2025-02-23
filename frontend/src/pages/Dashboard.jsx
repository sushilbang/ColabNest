import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import ProjectList from "../components/dashboard/ProjectList";
import SearchBar from "../components/dashboard/Searchbar";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { authStore } from "@/stores/authStore";

const Dashboard = () => {
  const [searchType, setSearchType] = useState("projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const user = authStore((state) => state.user); // Get user from authStore
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar />
      <main className="relative flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="flex items-start justify-between gap-4">
            <div className="w-80">
              <SearchBar
                searchType={searchType}
                onSearchTypeChange={setSearchType}
                onSearchQueryChange={setSearchQuery}
                selectedSkills={selectedSkills}
                onSkillsChange={setSelectedSkills}
              />
            </div>
          </div>
          <ProjectList searchQuery={searchQuery} selectedSkills={selectedSkills} />
        </div>
        <button
          className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700"
          aria-label="Create Project"
        >
          <Plus size={24} />
        </button>
      </main>
    </div>
  );
};

export default Dashboard;