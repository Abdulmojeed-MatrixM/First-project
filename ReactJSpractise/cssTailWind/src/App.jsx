import './App.css'

function App() {

  return (
    <>
    

      <h1 className="bg-yellow-500 p-7 rounded-2xl text-amber-900">PathBreakerM</h1>
      
      <p className="text-3xl font-bold underline">
        Welcome to my TailWind CSS in React using VITE
      </p>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-blue-100">
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

    <div class="@container">
  <div class="grid grid-cols-2 @sm:grid-cols-3">
    <img
      src="/img/photo-1.jpg"
      class="aspect-square @sm:aspect-3/2 object-cover"
    />
    <img
      src="https://assets.entrepreneur.com/content/3x2/2000/20170720143824-image-search-phone.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"
      class="aspect-square @sm:aspect-3/2 object-cover"
    />
    <img
      src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="aspect-square @sm:aspect-3/2 object-cover"
    />
    <img
      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="aspect-square @sm:aspect-3/2 object-cover"
    />
  </div>
</div>

<div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  </div>
  <div class="flex">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex">
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
