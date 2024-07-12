"use client";

import "../styles/globals.css";
import { useState } from "react";
import Image from "next/image";

interface Template {
  id: number;
  name: string;
  content: string;
  imageUrl: string;
}

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  const templates: Template[] = [
    {
      id: 1,
      name: "Template 1",
      content: "This is template 1 content",
      imageUrl: "/images/template1.jpg",
    },
    {
      id: 2,
      name: "Template 2",
      content: "This is template 2 content",
      imageUrl: "/images/template2.jpg",
    },
    {
      id: 3,
      name: "Template 3",
      content: "This is template 3 content",
      imageUrl: "/images/template3.jpg",
    },
    // 추가 템플릿을 여기에 입력
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-gray-800">
            초대장 웹사이트
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                홈
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                템플릿
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                연락처
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={template.imageUrl}
                alt={template.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {template.name}
                </h2>
                <button
                  onClick={() => setSelectedTemplate(template)}
                  className="mt-2 text-blue-500 hover:text-blue-700"
                >
                  선택하기
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedTemplate && (
          <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              선택된 템플릿: {selectedTemplate.name}
            </h2>
            <p className="text-gray-600">{selectedTemplate.content}</p>
          </div>
        )}
      </main>
    </div>
  );
}
