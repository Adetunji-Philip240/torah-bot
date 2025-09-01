import React, { useState, useEffect } from "react";
import { Heart, Play, Gauge, Clock, Award, Flame } from "lucide-react";

const TorahMainContentGrid = () => {
  return (
    <div>
      <div className="mt-4 text-center">
        <h2 className="text-3xl font-bold">Your Torah Learning Journey</h2>

        <p>Choose a track to continue your spiritual growth</p>

        <div className="lg:w-3/4 w-50 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="text-start flex">
              <Gauge className="w-6 h-6 text-green-700 mx-4" /> 147 lessons
              completed
            </div>
            <div className="text-end flex">
              <Clock className="w-6 h-6 text-blue-700 mx-4" /> 42h 15m total
              study time
            </div>
            <div className="text-end flex">
              <Award className="w-6 h-6 text-yellow-700 mx-4" /> 23 badges
              earned
            </div>
            <div className="text-end flex">
              <Flame className="w-6 h-6 text-red-700 mx-4" /> Current streak: 23
              days
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-100 lg:w-3/4 w-50 p-5 border border-red-400 mx-auto mt-4 rounded-lg">
        <div className="flex justify-between">
          <h2 className="font-bold">Jewish Ethics & Mussar</h2>
          <span className="bg-yellow-100 text-yellow-600 px-2 font-bold rounded">
            Intermediate
          </span>
        </div>
        <small className="mx-20">משנה</small>
        <p>Character development through classical Mussar teachings </p>
        <div className="mt-2 flex justify-between">
          <p className="font-bold">Progress</p>
          <p className="font-bold">5/12 lessons</p>
        </div>
        <div className="w-full mt-3 bg-gray-200 rounded-full h-4">
          <div
            className="bg-red-600 h-4 rounded-full"
            style={{ width: "42%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <p>42% complete</p>
          <p>No streak</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p>Current</p>
            <p>Last studied</p>
            <p>Time spent</p>
            <p>Est. lesson time</p>
          </div>
          <div className="text-end">
            <p className="font-bold">Humility & Pride</p>
            <p>1 week agp</p>
            <p>3h 18m</p>
            <p className="text-blue-800">15-25 min</p>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-4">
          {/* First button - 95% */}
          <button className="flex items-center justify-center flex-[0.95] bg-red-600 text-white py-2 px-4 rounded">
            <Play className="w-5 h-5 mr-2" /> Continue
          </button>

          {/* Second button - 5% */}
          <button className="flex items-center justify-center flex-[0.05] bg-gray-200 text-gray-700 py-2 rounded">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-yellow-100 lg:w-3/4 w-50 p-5 border border-yellow-400 mx-auto mt-4 rounded-lg">
        <div className="flex justify-between">
          <h2 className="font-bold">Aggadic Stories</h2>
          <span className="bg-green-100 text-green-600 px-2 font-bold rounded">
            Beginner
          </span>
        </div>
        <small className="mx-20">משנה</small>
        <p>Timeless stores from Chazal with moral lessons</p>
        <div className="mt-2 flex justify-between">
          <p className="font-bold">Progress</p>
          <p className="font-bold">5/25 lessons</p>
        </div>
        <div className="w-full mt-3 bg-gray-200 rounded-full h-4">
          <div
            className="bg-yellow-600 h-4 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <p>60% complete</p>
          <p className="text-yellow-600">7 day streak 🔥</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p>Current</p>
            <p>Last studied</p>
            <p>Time spent</p>
            <p>Est. lesson time</p>
          </div>
          <div className="text-end">
            <p className="font-bold">Rabbi Akiva's Wisdom </p>
            <p>4 days agp</p>
            <p>5h 45m</p>
            <p className="text-blue-800">10-15 min</p>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-4">
          {/* First button - 95% */}
          <button className="flex items-center justify-center flex-[0.95] bg-yellow-600 text-white py-2 px-4 rounded">
            <Play className="w-5 h-5 mr-2" /> Continue
          </button>

          {/* Second button - 5% */}
          <button className="flex items-center justify-center flex-[0.05] bg-gray-200 text-gray-700 py-2 rounded">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-blue-100 lg:w-3/4 w-50 p-5 border border-blue-400 mx-auto mt-4 rounded-lg">
        <div className="flex justify-between">
          <h2 className="font-bold">Jewish Holidays</h2>
          <span className="bg-green-100 text-green-600 px-2 font-bold rounded">
            Beginner
          </span>
        </div>
        <small className="mx-20">משנה</small>
        <p>Origins, laws, and spiritual meanings of Jewish holidays</p>
        <div className="mt-2 flex justify-between">
          <p className="font-bold">Progress</p>
          <p className="font-bold">7/9 lessons</p>
        </div>
        <div className="w-full mt-3 bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: "79%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <p>79% complete</p>
          <p className="text-yellow-600">12 day streak 🔥</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p>Current</p>
            <p>Last studied</p>
            <p>Time spent</p>
            <p>Est. lesson time</p>
          </div>
          <div className="text-end">
            <p className="font-bold">Chanukah Preparation</p>
            <p>1 day agp</p>
            <p>4h 12m</p>
            <p className="text-blue-800">12-18 min</p>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-4">
          {/* First button - 95% */}
          <button className="flex items-center justify-center flex-[0.95] bg-blue-600 text-white py-2 px-4 rounded">
            <Play className="w-5 h-5 mr-2" /> Continue
          </button>

          {/* Second button - 5% */}
          <button className="flex items-center justify-center flex-[0.05] bg-gray-200 text-gray-700 py-2 rounded">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-green-100 lg:w-3/4 w-50 p-5 border border-green-400 mx-auto mt-4 rounded-lg">
        <div className="flex justify-between">
          <h2 className="font-bold">Biblical Figures</h2>
          <span className="bg-yellow-100 text-yellow-600 px-2 font-bold rounded">
            Intermediate
          </span>
        </div>
        <small className="mx-20">משנה</small>
        <p>Character studies of key Torah and Biblical personalities</p>
        <div className="mt-2 flex justify-between">
          <p className="font-bold">Progress</p>
          <p className="font-bold">10/20 lessons</p>
        </div>
        <div className="w-full mt-3 bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-600 h-4 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <p>50% complete</p>
          <p className="text-blue-600">5 day streak</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p>Current</p>
            <p>Last studied</p>
            <p>Time spent</p>
            <p>Est. lesson time</p>
          </div>
          <div className="text-end">
            <p className="font-bold">King David's Leadership</p>
            <p>5 days agp</p>
            <p>7h 23m</p>
            <p className="text-blue-800">15-20 min</p>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-4">
          {/* First button - 95% */}
          <button className="flex items-center justify-center flex-[0.95] bg-green-600 text-white py-2 px-4 rounded">
            <Play className="w-5 h-5 mr-2" /> Continue
          </button>

          {/* Second button - 5% */}
          <button className="flex items-center justify-center flex-[0.05] bg-gray-200 text-gray-700 py-2 rounded">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TorahMainContentGrid;
