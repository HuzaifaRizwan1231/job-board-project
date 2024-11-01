import React from "react";
import ThemeCard from "./ThemeCard";

export default function ThemesContainer() {
  return (
    <div className="p-4">
      <ThemeCard category="Home" />
      <ThemeCard category="Job Listing" />
      <ThemeCard category="Job Details" />
      <ThemeCard category="Candidate Lists" />
      <ThemeCard category="Company Lists" />
      <ThemeCard category="Blog Lists" />
    </div>
  );
}
