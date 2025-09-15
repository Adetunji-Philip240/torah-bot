import { useMemo, memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sample topics (truncated for brevity)
const sampleTopics = [
  {
    topicId: "mishnah_berachot",
    title: "Mishnah Tractate Berachot",
    summaryShort: "Comprehensive study of blessing laws and prayers.",
    progressPercent: 67,
    lessonsCompleted: 42,
    lessonsTotal: 63,
    timeSpentMinutes: 1240,
    streakDays: 12,
    weeklyMinutes: [
      { week: "Week 35", minutes: 180 },
      { week: "Week 36", minutes: 220 },
      { week: "Week 37", minutes: 160 },
      { week: "Week 38", minutes: 280 },
    ],
  },
  {
    topicId: "parashat_vayera",
    title: "Parashat Vayera",
    summaryShort:
      "Abraham's hospitality, Sodom's destruction, and the Binding of Isaac.",
    progressPercent: 85,
    lessonsCompleted: 34,
    lessonsTotal: 40,
    timeSpentMinutes: 890,
    streakDays: 8,
    weeklyMinutes: [
      { week: "Week 35", minutes: 200 },
      { week: "Week 36", minutes: 240 },
      { week: "Week 37", minutes: 190 },
      { week: "Week 38", minutes: 260 },
    ],
  },
];

// Memoized Progress Component
const ProgressOverview = memo(({ topic }) => {
  const milestones = useMemo(() => {
    const progress = topic.progressPercent;
    if (progress < 33)
      return {
        beginner: "current",
        intermediate: "locked",
        advanced: "locked",
      };
    if (progress < 66)
      return {
        beginner: "completed",
        intermediate: "current",
        advanced: "locked",
      };
    return {
      beginner: "completed",
      intermediate: "completed",
      advanced: "current",
    };
  }, [topic.progressPercent]);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl font-bold">{topic.progressPercent}%</div>
        <div className="text-sm text-gray-700">
          {topic.lessonsCompleted} of {topic.lessonsTotal} lessons
        </div>
      </div>

      <div className="relative">
        <div
          className="w-full h-4 mb-4 bg-gray-200 rounded-full"
          role="progressbar"
        >
          <div
            className="h-4 transition-all duration-300 bg-[#B8860B] rounded-full"
            style={{ width: `${topic.progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          {["Beginner", "Intermediate", "Advanced"].map((level, index) => {
            const states = ["beginner", "intermediate", "advanced"];
            const status = milestones[states[index]];
            return (
              <div
                key={level}
                className={`flex items-center gap-1 ${
                  status === "completed"
                    ? "text-[#B8860B]"
                    : status === "current"
                    ? "text-gray-900"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    status === "completed"
                      ? "bg-[#B8860B]"
                      : status === "current"
                      ? "bg-gray-900"
                      : "bg-gray-300"
                  }`}
                />
                {level}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

// Analytics Chart Component
const WeeklyChart = memo(({ topic }) => (
  <ResponsiveContainer width="100%" height={120}>
    <BarChart data={topic.weeklyMinutes}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="minutes" fill="#B8860B" />
    </BarChart>
  </ResponsiveContainer>
));

// Main Grid Component
const TorahMainContentGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {sampleTopics.map((topic) => (
        <div
          key={topic.topicId}
          className="w-11/12 p-5 mx-auto bg-white border border-gray-300 rounded-lg lg:w-3/4"
        >
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-bold">{topic.title}</h2>
            <span className="px-2 font-bold text-white bg-[#B8860B] rounded">
              Track
            </span>
          </div>
          <p className="mb-3 text-gray-700">{topic.summaryShort}</p>

          <ProgressOverview topic={topic} />

          <WeeklyChart topic={topic} />

          <div className="flex w-full gap-2 mt-4">
            <button
              onClick={() => navigate(`/topic/${topic.topicId}`)}
              className="flex items-center justify-center flex-[0.95] bg-[#B8860B] text-white py-2 px-4 rounded"
            >
              <Play className="w-5 h-5 mr-2" /> Continue
            </button>
            <button className="flex items-center justify-center flex-[0.05] bg-gray-200 text-gray-700 py-2 rounded">
              <Star className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TorahMainContentGrid;
