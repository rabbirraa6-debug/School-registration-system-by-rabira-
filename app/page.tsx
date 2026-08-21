export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold">
          School Management System
        </h1>

        <p className="mt-3 text-gray-600">
          Student registration and school management portal.
        </p>

        <div className="mt-6 grid gap-4">
          <button className="rounded-xl bg-blue-600 p-4 text-white">
            Register Student
          </button>

          <button className="rounded-xl bg-white p-4 shadow">
            Check Status
          </button>
        </div>
      </div>
    </main>
  );
}
