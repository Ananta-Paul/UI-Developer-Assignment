// Test component to verify Tailwind is working
import React from "react";

export default function TestStyles() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind Test</h1>
      <div className="bg-red-500 text-white p-4 rounded-lg">
        Basic Tailwind Classes
      </div>
      <div className="bg-primary text-primary-foreground p-4 rounded-lg">
        Custom CSS Variables
      </div>
      <div className="bg-gradient-primary text-white p-4 rounded-lg">
        Custom Gradient
      </div>
    </div>
  );
}
