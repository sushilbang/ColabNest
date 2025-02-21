import React from "react";
import { Search } from "lucide-react";
import TagInput from "@/components/ui/TagInput";

const SearchBar = ({
  searchType,
  onSearchTypeChange,
  onSearchQueryChange,
  selectedSkills,
  onSkillsChange,
}) => {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder={`Search ${searchType}...`}
            className="h-10 w-full rounded-lg border border-neutral-200 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearchQueryChange(e.target.value)}
          />
        </div>
        <select
          value={searchType}
          onChange={(e) => onSearchTypeChange(e.target.value)}
          className="h-10 rounded-lg border border-neutral-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="projects">Projects</option>
          <option value="users">Users</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-neutral-500">Filter:</span>
        <div className="flex-1">
          <TagInput
            value={selectedSkills}
            onChange={onSkillsChange}
            placeholder="Filter by skills..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;