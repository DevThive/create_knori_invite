"use client";

import "../styles/globals.css";
import { useState } from "react";

interface Template {
  id: number;
  name: string;
  content: string;
}

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  const templates: Template[] = [
    { id: 1, name: "Template 1", content: "This is template 1 content" },
    { id: 2, name: "Template 2", content: "This is template 2 content" },
    { id: 3, name: "Template 3", content: "This is template 3 content" },
    // 추가 템플릿을 여기에 입력
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        초대장 템플릿 선택
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => setSelectedTemplate(template)}
              className="text-lg font-semibold text-blue-500 hover:text-blue-700"
            >
              {template.name}
            </button>
          </div>
        ))}
      </div>
      {selectedTemplate && (
        <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            선택된 템플릿: {selectedTemplate.name}
          </h2>
          <p className="text-gray-600">{selectedTemplate.content}</p>
        </div>
      )}
    </div>
  );
}
