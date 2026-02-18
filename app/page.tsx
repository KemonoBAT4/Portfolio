"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // let age_container = document.querySelector("")
    
    
  }, []);
  return (
    <div className="min-h-screen bg-black text-white font-sans">

    {/* Header (Name, surname and nav bar) */}
    <header className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-bold">Marco Battisti</h1>

        {/* Top right nav bar */}
        <nav className="space-x-6">
        <a href="#about" className="hover:text-gray-400 transition">About</a>
        <a href="#skills" className="hover:text-gray-400 transition">Skills</a>
        <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </nav>

    </header>

      {/* <div className="bg-red-500"> */}
      <div>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center px-8">
          <h2 className="text-5xl font-light mb-4">Junior Full Stack Developer</h2>

          <h3 className="text-2xl font-light mb-5">(website in W.I.P. for more info see my <a href="https://www.linkedin.com/in/marco-battisti-kb4/" className="text-gray-400 hover:text-white">LinkedIn</a>)</h3>

          <p className="text-lg text-gray-300 max-w-2xl">
            Passionate about building modern web & desktop applications with clean code and innovative solutions.
          </p>
          <a href="#projects" className="mt-8 px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
            View My Work
          </a>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light mb-8">About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            Junior developer with a strong focus on full stack development,
            passionate about learning and experimenting with the latest technologies.
            I am constantly working to improve my skills in order to design and develop
            innovative, efficient, and scalable solutions that meet
            the ever-evolving needs of the industry.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="text-xl mb-2">Frontend</h4>
              <p className="text-gray-400">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl mb-2">Backend</h4>
              <p className="text-gray-400">Node.js, Express, MongoDB</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl mb-2">Tools</h4>
              <p className="text-gray-400">Git, Docker, VS Code</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl mb-2">Other</h4>
              <p className="text-gray-400">TypeScript, REST APIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Display: Cardinal, Midnight, Programming-Language) */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light mb-8">My Projects</h3>
          <div className="space-y-12">

            <div className="border border-gray-700 p-6 rounded">
              <h4 className="text-2xl mb-4">Project 1: Cardinal</h4>
              <p className="text-gray-300 mb-4">
                A management application that can interact with other external application and manage different realities made with python, Flask, and sqlalchemy
              </p>
              <a href="#" className="text-gray-400 hover:text-white">View on GitHub</a>
            </div>

            <div className="border border-gray-700 p-6 rounded">
              <h4 className="text-2xl mb-4">Project 2: Midnight</h4>
              <p className="text-gray-300 mb-4">
                A windows / mobile application, powered with AI to enhance daily routine madw with the Electron JS framework for the client and python (still under W.I.P.) for the server side & AI agents
              </p>
              <a href="#" className="text-gray-400 hover:text-white">View on GitHub</a>
            </div>

            <div className="border border-gray-700 p-6 rounded">
              <h4 className="text-2xl mb-4">Project 3: Programming-Library</h4>
              <p className="text-gray-300 mb-4">
                A exapandable Library for programming utility (still under W.I.P.) like functions, utilities classes for different languages and helpfull explenations for different topics made with Node Js Express for the client & C# DOTNET for the server side
              </p>
              <a href="#" className="text-gray-400 hover:text-white">View on GitHub</a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-8">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            Interested in collaborating? Let's connect!
          </p>
          <div className="space-x-6">
            <a href="mailto:your.marco.battisti004@gmail.com" className="text-gray-400 hover:text-white">Email</a>
            <a href="https://www.linkedin.com/in/marco-battisti-kb4/" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="https://github.com/KemonoBAT4" className="text-gray-400 hover:text-white">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center text-gray-500">
        <p>&copy; 2026 Marco Battisti. All rights reserved.</p>
      </footer>
    </div>
  );
}