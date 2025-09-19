import './App.css'

function App() {

  return (
    <>      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-blue-100">
      <h1 className="bg-emerald-500 p-7 rounded-2xl text-amber-900">PathBreakerM</h1>
      <p className="text-2xl font-light text-black">
        Welcome to my TailWind CSS in React using VITE
      </p>
      <br />
      <h1 className="text-5xl font-bold text-blue-700 mb-4">Hello Tailwind!</h1>
      <p className="text-lg text-gray-700">
        Your Vite + React + Tailwind CSS setup is working 🎉
      </p>
      <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Test Button
      </button>
    </div>

    <h1 className="bg-yellow-700"> PathBreakerM </h1>

    <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
  <div class="flex items-center">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>

    </>
  )
}

export default App
