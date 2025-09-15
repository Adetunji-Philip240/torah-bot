import { useState, useMemo, useCallback, memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BookOpen,
  Clock,
  Target,
  TrendingUp,
  Download,
  Save,
  Play,
  FileText,
  MessageSquare,
} from "lucide-react";

// Comprehensive Torah study topics
const sampleTopics = [
  {
    topicId: "mishnah_berachot",
    title: "Mishnah Tractate Berachot",
    summaryShort: "Comprehensive study of blessing laws and prayers.",
    progressPercent: 67,
    lessonsCompleted: 42,
    lessonsTotal: 63,
    timeSpentMinutes: 1240, // 20h 40m
    avgSessionMinutes: 22,
    streakDays: 12,
    sessionsCount: 18,
    confidenceScore: 0.78,
    insight:
      "Strong in Shema timing laws. Focus review on food blessing categories.",

    // 👇 this is where weeklyMinutes goes
    weeklyMinutes: [
      { week: "Week 1", minutes: 120 },
      { week: "Week 2", minutes: 95 },
      { week: "Week 3", minutes: 150 },
      { week: "Week 4", minutes: 80 },
    ],

    modules: [
      { name: "Chapter 1: Shema Times", completed: 8, total: 10 },
      { name: "Chapter 2: Prayer Laws", completed: 12, total: 15 },
      {
        name: "Chapter 4: Food Blessings",
        completed: 6,
        total: 14,
        needsReview: true,
      },
    ],

    sessions: [
      {
        title: "Morning Shema",
        summaryShort: "Reviewed timing rules",
        timeSpentMinutes: 25,
      },
      {
        title: "Prayer Laws Intro",
        summaryShort: "Focused on Amidah structure",
        timeSpentMinutes: 18,
      },
    ],
  },
];

// Memoized Progress Component - prevents unnecessary re-renders
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
        <div className="text-4xl font-bold font-title text-darkbrown">
          {topic.progressPercent}%
        </div>
        <div className="text-sm text-darkbrown/70">
          {topic.lessonsCompleted} of {topic.lessonsTotal} lessons
        </div>
      </div>

      <div className="relative">
        <div
          className="w-full h-4 mb-4 rounded-full bg-parchment/50"
          role="progressbar"
        >
          <div
            className="h-4 transition-all duration-300 rounded-full bg-gradient-to-r from-yellow-500 to-green-700"
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
                    ? "text-gold"
                    : status === "current"
                    ? "text-darkbrown"
                    : "text-darkbrown/40"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    status === "completed"
                      ? "bg-gold"
                      : status === "current"
                      ? "bg-olive"
                      : "bg-darkbrown/20"
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

// Memoized Analytics Cards
const DeepAnalytics = memo(({ topic }) => {
  const stats = useMemo(() => {
    const formatTime = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
    };

    return [
      {
        icon: Clock,
        label: "Total Time",
        value: formatTime(topic.timeSpentMinutes),
        color: "text-olive",
      },
      {
        icon: Target,
        label: "Avg Session",
        value: `${topic.avgSessionMinutes}m`,
        color: "text-gold",
      },
      {
        icon: TrendingUp,
        label: "Streak",
        value: `${topic.streakDays} days`,
        color: "text-maroon",
      },
      {
        icon: BookOpen,
        label: "Sessions",
        value: topic.sessionsCount,
        color: "text-darkbrown",
      },
    ];
  }, [
    topic.timeSpentMinutes,
    topic.avgSessionMinutes,
    topic.streakDays,
    topic.sessionsCount,
  ]);

  return (
    <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 rounded-lg shadow-sm bg-white/60">
          <div className="flex items-center gap-2 mb-1">
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
            <span className="text-xs font-medium text-darkbrown/70">
              {stat.label}
            </span>
          </div>
          <div className="text-lg font-bold text-darkbrown">{stat.value}</div>
        </div>
      ))}
    </div>
  );
});

// Optimized Chart Component - lazy loading
const ChartsPanel = memo(({ topic }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
      <div className="p-4 rounded-lg bg-white/60">
        <h4 className="mb-3 font-medium text-darkbrown">Weekly Consistency</h4>
        <div className="w-full px-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topic.weeklyMinutes}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F7EFE2" />
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#4B2E2A" }} />
              <YAxis tick={{ fontSize: 12, fill: "#4B2E2A" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#F7EFE2",
                  border: "1px solid #CFAF61",
                  borderRadius: "8px",
                  color: "#4B2E2A",
                }}
              />
              <Bar dataKey="minutes" fill="#CFAF61" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
});

// Lightweight Bot Component - reduced features for performance
const QuickBotPane = memo(({ onStartLesson }) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const topics = useMemo(
    () => [
      { id: "mishnah_berachot", name: "Mishnah Berachot" },
      { id: "parashat_vayera", name: "Parashat Vayera" },
      { id: "talmud_shabbat", name: "Talmud Shabbat" },
      { id: "pirkei_avot", name: "Pirkei Avot" },
      { id: "rambam_hilchot_teshuvah", name: "Rambam: Laws of Repentance" },
      { id: "parshat_bereishit", name: "Parashat Bereishit" },
      { id: "hilchot_kashrut", name: "Laws of Kashrut" },
      { id: "jewish_calendar", name: "Jewish Calendar & Holidays" },
      { id: "chassidut_tanya", name: "Chassidut: Tanya Foundations" },
      {
        id: "mishneh_torah_yesodei_hatorah",
        name: "Mishneh Torah: Foundations of Torah",
      },
      {
        id: "shulchan_aruch_orach_chaim",
        name: "Shulchan Aruch: Daily Life Laws",
      },
      { id: "modern_jewish_thought", name: "Modern Jewish Thought" },
    ],
    []
  );

  return (
    <div className="mb-8 rounded-lg bg-white/80 shadow-deep-book">
      <div className="p-4 border-b border-parchment/50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full"
        >
          <h2 className="flex items-center gap-2 text-xl font-title text-darkbrown">
            <MessageSquare className="w-5 h-5" />
            Torah Learning Assistant
          </h2>
          <span className="text-darkbrown">{isExpanded ? "−" : "+"}</span>
        </button>
      </div>

      {isExpanded && (
        <div className="p-4 space-y-4">
          <select
            className="w-full p-3 border rounded-lg border-parchment bg-white/80"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="">Select topic...</option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>
            ))}
          </select>

          <button
            className="px-4 py-2 text-white transition-colors rounded-md bg-olive hover:bg-olive/80"
            onClick={() => onStartLesson({ selectedTopic })}
            disabled={!selectedTopic}
          >
            Start Lesson
          </button>
        </div>
      )}
    </div>
  );
});

// Lightweight Session Actions
const QuickActions = memo(({ session, onAction }) => {
  const actions = [
    { icon: Save, label: "Save", action: "save" },
    { icon: Download, label: "PDF", action: "download" },
    { icon: Play, label: "Continue", action: "continue" },
  ];

  return (
    <div className="flex gap-2 mt-2">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onAction(action.action, session)}
          className="flex items-center gap-1 px-2 py-1 text-xs transition-colors rounded bg-white/60 hover:bg-white/80 text-darkbrown"
        >
          <action.icon className="w-3 h-3" />
          {action.label}
        </button>
      ))}
    </div>
  );
});

// Main optimized topic section
const TopicPerformanceSection = memo(
  ({ topic, onModuleClick, onSessionAction }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = useCallback(() => {
      setIsExpanded((prev) => !prev);
    }, []);

    return (
      <div className="p-6 mb-8 bg-parchment rounded-2xl shadow-deep-book">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="mb-2 text-2xl font-title text-darkbrown">
              {topic.title}
            </h2>
            <p className="text-darkbrown/70">{topic.summaryShort}</p>
          </div>
          <button
            onClick={toggleExpanded}
            className="p-2 transition-colors rounded-lg bg-white/60 hover:bg-white/80"
          >
            <FileText className="w-5 h-5 text-darkbrown" />
          </button>
        </div>

        <ProgressOverview topic={topic} />
        <DeepAnalytics topic={topic} />

        {/* Simplified Module List */}
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-title text-darkbrown">Modules</h3>
          <div className="space-y-2">
            {topic.modules.map((module, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 transition-colors rounded-md cursor-pointer bg-parchment/50 hover:bg-parchment/70"
                onClick={() => onModuleClick(module)}
              >
                <div>
                  <div className="font-medium text-darkbrown">
                    {module.name}
                  </div>
                  <div className="text-sm text-darkbrown/60">
                    {module.completed}/{module.total} lessons
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {module.needsReview && (
                    <div className="w-2 h-2 rounded-full bg-maroon" />
                  )}
                  <span className="px-2 py-1 text-xs rounded bg-gold/20">
                    {Math.round((module.completed / module.total) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Insights */}
        <div className="p-4 mb-6 rounded-lg bg-white/60">
          <p className="font-medium text-darkbrown">{topic.insight}</p>
          <div className="mt-2 text-sm text-darkbrown/70">
            Confidence: {Math.round(topic.confidenceScore * 100)}%
          </div>
        </div>

        <ChartsPanel topic={topic} />

        {/* Conditional Session Details */}
        {isExpanded && topic.sessions.length > 0 && (
          <div className="pt-6 mt-6 border-t border-darkbrown/10">
            <h3 className="mb-4 text-lg font-title text-darkbrown">
              Recent Sessions
            </h3>
            <div className="space-y-3">
              {topic.sessions.map((session, index) => (
                <div key={index} className="p-3 rounded-lg bg-white/40">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-darkbrown">
                        {session.title}
                      </h4>
                      <p className="text-sm text-darkbrown/70">
                        {session.summaryShort}
                      </p>
                    </div>
                    <span className="text-xs text-darkbrown/50">
                      {session.timeSpentMinutes}m
                    </span>
                  </div>
                  <QuickActions session={session} onAction={onSessionAction} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

// Main Dashboard with optimizations
const TorahMainContentGrid = () => {
  const [topics] = useState(sampleTopics);

  const handleModuleClick = useCallback((module) => {
    console.log("Module clicked:", module);
  }, []);

  const handleSessionAction = useCallback((action, session) => {
    console.log("Session action:", action, session);
  }, []);

  const handleStartLesson = useCallback((config) => {
    console.log("Starting lesson:", config);
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-parchment via-parchment/80 to-white md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-title text-darkbrown">
            Torah Learning Dashboard
          </h1>
          <p className="text-lg text-darkbrown/70">
            Your comprehensive study companion
          </p>
        </header>

        <QuickBotPane onStartLesson={handleStartLesson} />

        <div className="space-y-6">
          {topics.map((topic) => (
            <TopicPerformanceSection
              key={topic.topicId}
              topic={topic}
              onModuleClick={handleModuleClick}
              onSessionAction={handleSessionAction}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TorahMainContentGrid;
