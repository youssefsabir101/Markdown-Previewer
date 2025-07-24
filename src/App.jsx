// src/App.jsx
import { useState } from 'react'
import { marked } from 'marked'

export default function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer

Type on the left, see the magic on the right ✨

## Features
- Live Preview
- **Bold**, _Italic_, \`inline code\`
- \`\`\`js
// Code block
console.log("Hello, world!");
\`\`\`

> This is a blockquote!

Enjoy writing markdown! 🎉`)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans px-4 py-6">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
        📝 Markdown Previewer
      </h1>

      {/* Two-panel layout */}
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">

        {/* Editor Panel */}
        <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-4 transition-all duration-300 hover:shadow-purple-500/30">
          <h2 className="text-xl font-semibold mb-2 text-purple-300">Markdown Input</h2>
          <textarea
            className="w-full h-[70vh] bg-transparent border border-purple-500/30 rounded p-4 text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none transition-all duration-200"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Start typing Markdown..."
          />
        </div>

        {/* Preview Panel */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 overflow-auto transition-all duration-300 hover:shadow-pink-500/30">
          <h2 className="text-xl font-semibold mb-2 text-pink-300">Preview</h2>
          <div
            className="prose prose-invert max-w-none text-white"
            dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm mt-8 text-gray-400">
        Built with ❤️ using React, Tailwind CSS & Marked
      </footer>
    </div>
  )
}
