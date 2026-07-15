export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}

        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 India's AI Commerce Learning Platform
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Learn Commerce with
            <span className="text-blue-600"> AI Teacher</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            GSEB • CBSE • B.Com • Accountancy • Statistics • Economics • Business Administration
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
              Start Learning
            </button>

            <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold">
              Watch Demo
            </button>

          </div>

          <div className="mt-10 flex gap-8">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                50K+
              </h2>
              <p className="text-gray-500">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                100+
              </h2>
              <p className="text-gray-500">
                Courses
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                24×7
              </h2>
              <p className="text-gray-500">
                AI Teacher
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <div className="bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold">
            AI Teacher
          </div>

          <div className="mt-6">

            <div className="bg-gray-100 rounded-xl p-4">
              👨 Student:
              <br />
              Explain Partnership Accounts
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mt-4">
              🤖 AI Teacher:
              <br />
              Partnership means two or more persons carrying on a business together and sharing profit or loss according to an agreement...
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}