import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  // Default card data
  const [cardData, setCardData] = useState([
    {
      title: "React Development",
      description:
        "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl:
        "https://www.davidayo.com/img/react-js-web-development.webp",
    },
    {
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&q=80&w=800&fit=crop",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100 pt-6">
        My Card Application
      </h1>

      {/* Card List */}
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
