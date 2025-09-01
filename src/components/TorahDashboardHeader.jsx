import React, { useState, useEffect } from "react";
import {
  Bell,
  Menu,
  Home,
  LineChart,
  Star,
  Download,
  Settings,
  Search,
  X,
  ArrowRight,
  Play,
} from "lucide-react";

const TorahDashboardHeader = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const texts = [
    "📚 'Much have I learned from my teachers, more from my colleagues, but most of all from my students' - Talmud",
    "✨ 'Every day they should be as new in your eyes' - Rashi on the daily mitzvot",
    "🌟 'Who is wise? One who learns from every person' - Pirkei Avot",
    "📖 'Great is learning that leads to action' - Talmud Kiddushin",
    "💡 'In a place where there are no menschen, strive to be a mensch' - Pirkei Avot",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <div className="bg-gray-50 shadow relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Sidebar Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpenSidebar(true)}
                className="p-2 rounded-md hover:bg-gray-200"
              >
                <ArrowRight className="w-6 h-6 text-gray-700" />
              </button>
              <div className="flex-shrink-0 text-2xl font-bold">TLH</div>
            </div>

            {/* Center: Search bar (desktop only) */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Torah content... / חיפוש"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Desktop Menu Bar */}
            <div className="hidden md:flex space-x-6 font-medium text-gray-700 items-center">
              <a
                href="/"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Home className="w-4 h-4" /> Home
              </a>
              <a
                href="/"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <LineChart className="w-4 h-4" /> My Progress
              </a>
              <a
                href="/"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Star className="w-4 h-4" /> Favorites
              </a>
              <a
                href="/"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Download className="w-4 h-4" /> Downloads
              </a>
              <a
                href="/"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Settings className="w-4 h-4" /> Settings
              </a>
            </div>

            {/* Right: Bell + User */}
            <div className="flex items-center">
              <div className="relative mx-4">
                <button
                  onClick={() => setShowNotif(!showNotif)}
                  className="relative p-2 rounded-full hover:bg-gray-200"
                >
                  <Bell className="w-6 h-6 text-gray-700" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {showNotif && (
                  <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-2 text-gray-800 font-semibold border-b">
                      Notifications
                    </div>
                    <ul className="max-h-60 overflow-y-auto">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        🔔 New badge unlocked: Shabbat Scholar!
                        <br /> <span className="italic">2 hours ago</span>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        📋 Daily Halacha lesson available
                        <br /> <span className="italic">1 day ago</span>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        ✅ Sarah completed Parashat Vayera
                        <br /> <span className="italic">2 days ago</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="text-2xl font-bold">DC</div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="ml-4 md:hidden p-2 rounded-md hover:bg-gray-200"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {openMenu && (
            <div className="md:hidden mt-2 space-y-2 px-2 pb-3">
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Torah content... / חיפוש"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <Home className="w-5 h-5 text-gray-600" /> Home
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <LineChart className="w-5 h-5 text-gray-600" /> My Progress
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <Star className="w-5 h-5 text-gray-600" /> Favorites
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <Download className="w-5 h-5 text-gray-600" /> Downloads
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <Settings className="w-5 h-5 text-gray-600" /> Settings
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Drawer */}
      {openSidebar && (
        <div className="fixed inset-0 z-30 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-40"
            onClick={() => setOpenSidebar(false)}
          ></div>

          {/* Sidebar content */}
          <div className="relative w-65 bg-white shadow-lg p-6">
            <button
              onClick={() => setOpenSidebar(false)}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <h2 className="text-lg font-bold mb-6 ">Study Hub</h2>
            <div className="h-1 bg-gray-300 "></div>

            <div className="max-w-4xl mx-auto mt-10">
              {/* Buttons */}
              <div className="flex space-x-4 border-b pb-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-2 rounded-t-md ${
                    activeTab === "overview"
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("badges")}
                  className={`px-4 py-2 rounded-t-md ${
                    activeTab === "badges"
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Badges
                </button>
                <button
                  onClick={() => setActiveTab("calendar")}
                  className={`px-4 py-2 rounded-t-md ${
                    activeTab === "calendar"
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Calendar
                </button>
              </div>

              {/* Content */}
              <div className="mt-6 p-4 border rounded-lg shadow-sm bg-white max-h-96 overflow-y-auto">
                {activeTab === "overview" && (
                  <div>
                    <h2 className="text-xl font-bold mb-2">💡 Quick Actions</h2>
                    <div className="text-center d-block mx-auto">
                      <button className="flex bg-blue-600 py-2 text-white px-10 rounded">
                        <Play className="w-5 h-5 mx-2" />{" "}
                        <span>Resume Last Lesson</span>
                      </button>
                      <button className="flex border border-gray-500 text-gray-500 py-2 text-white px-6 rounded mt-2">
                        <Bell className="w-5 h-5 mx-2" />{" "}
                        <span>Daily Reminder Settings</span>
                      </button>
                    </div>

                    <h2 className="text-xl font-bold mb-2 mt-6 flex">
                      📈 Today's Progress
                    </h2>
                    <div class="grid grid-cols-2 gap-4 text-center">
                      <div class="bg-blue-100 border border-blue-400 rounded-lg p-4 text-blue-800">
                        <span className="font-bold text-2xl">23</span> <br />
                        Day Streak
                      </div>
                      <div class="bg-green-100 border border-green-400 p-4 rounded-lg text-green-800">
                        <span className="font-bold text-2xl">45m</span> <br />
                        Study Time
                      </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 text-center mt-3">
                      <div class="bg-purple-100 border border-purple-400 rounded-lg p-4 text-purple-800">
                        <span className="font-bold text-2xl">3</span> <br />
                        Lessons Done
                      </div>
                      <div class="bg-orange-100 border border-orange-400 p-4 rounded-lg text-orange-800">
                        <span className="font-bold text-2xl">95%</span> <br />
                        Quiz Average
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-2 mt-6 flex">
                      🧠 Recommended for You
                    </h2>

                    <div className="bg-orange-100 p-5 border border-orange-300 rounded">
                      <p className="font-bold">Continue Daily Halacha</p>
                      <small>You're on a 23-day streak</small> <br />
                      <small>5 min</small>
                    </div>

                    <div className="bg-purple-100 p-5 border border-purple-300 mt-3 rounded">
                      <p className="font-bold">Explore Talmud Stories</p>
                      <small>Based on your Aggadah progress</small> <br />
                      <small>15 min</small>
                    </div>

                    <div className="bg-blue-100 p-5 border border-blue-300 mt-3 rounded">
                      <p className="font-bold">Review Mishnah Berachot</p>
                      <small>Speed repetition reminder</small> <br />
                      <small>10 min</small>
                    </div>
                  </div>
                )}

                {activeTab === "badges" && (
                  <div>
                    <h2 className="text-xl font-bold mb-2">🏅 Badges</h2>
                    <p>You’ve unlocked 5 badges so far.</p>
                  </div>
                )}

                {activeTab === "calendar" && (
                  <div>
                    <h2 className="text-xl font-bold mb-2">📅 Calendar</h2>
                    <p>Check your learning schedule.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quotes Section */}
      <div className="text-center h-16 overflow-hidden bg-gray-100 py-5 text-sm relative">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`${
              visibleIndex === index ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 absolute inset-0 flex items-center justify-center`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TorahDashboardHeader;
