import React, { useState } from 'react';
import RainGrid from './components/RainGrid';
import { Play, Pause, RefreshCw } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Digital Rain Pattern</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause size={20} /> Pause
                </>
              ) : (
                <>
                  <Play size={20} /> Play
                </>
              )}
            </button>
            <button
              onClick={() => {
                // Reset animation logic here
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RefreshCw size={20} /> Reset
            </button>
          </div>

          {/* Rain Grid */}
          <div className="bg-gray-800 p-4 rounded-xl shadow-2xl">
            <RainGrid />
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Grid Size</h3>
              <p className="text-2xl font-bold text-indigo-400">15 x 20</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Active Drops</h3>
              <p className="text-2xl font-bold text-indigo-400">Random</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Colors</h3>
              <p className="text-2xl font-bold text-indigo-400">6</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;