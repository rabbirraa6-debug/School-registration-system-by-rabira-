import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              School Registration
            </h1>
            <p className="text-xs text-slate-500">
              Student registration portal
            </p>
          </div>

          <Link
            href="/admin"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Staff Login
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Online School Portal
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Simple and secure school registration.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Register as a new student, submit your required documents, or
            check the status of an existing registration.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Start Registration
            </Link>

            <Link
              href="/status"
              className="rounded-xl border border-slate-200 px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
            >
              Check Registration Status
            </Link>
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              New Students
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Grade 9 students can verify their administration number and
              complete their registration.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Returning Students
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Grade 10–12 students can find their records using their student
              ID.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Check Status
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Check registration and payment progress online.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
            }
