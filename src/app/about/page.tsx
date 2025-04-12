async function getData() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

export default async function About() {
  await getData(); // This will trigger the loading state

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Page</h1>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
          <p className="text-lg mb-4">
            This is a simple Next.js application demonstrating routing capabilities.
          </p>
          <p className="text-lg">
            The file structure in the <code>src/app</code> directory determines the routes:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><code>src/app/page.tsx</code> → <code>/</code> (home route)</li>
            <li><code>src/app/about/page.tsx</code> → <code>/about</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 