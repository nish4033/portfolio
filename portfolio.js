import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5">
      <Card className="w-full max-w-3xl text-center">
        <CardContent>
          <h1 className="text-4xl font-bold mb-4">Nishant Ranjan</h1>
          <p className="text-lg mb-6">Senior Software Engineer | Backend Developer | System Architect</p>
          <p className="mb-4">
            Experienced in Python, Django, FastAPI, PostgreSQL, MongoDB, AWS, and more. Passionate about building
            scalable and high-performance systems.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button asChild>
              <a href="https://github.com/nish4033" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2" /> GitHub
              </a>
            </Button>
            <Button asChild>
              <a href="https://linkedin.com/in/nishranjan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
