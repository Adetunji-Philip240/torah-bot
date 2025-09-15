import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

function AccordionItem({ id, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden border shadow-sm rounded-2xl">
      <button
        aria-expanded={open}
        aria-controls={`accordion-panel-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full p-4 bg-white md:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
      >
        <div className="text-left">
          <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
            {title}
          </h3>
        </div>

        <svg
          className={`w-5 h-5 ml-4 transition-transform duration-300 ${
            open ? "transform rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <motion.div
        id={`accordion-panel-${id}`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden bg-gray-50"
      >
        <div className="p-4 md:p-5">{children}</div>
      </motion.div>
    </div>
  );
}

const page = () => {
  return (
    <div className="block w-3/4 mx-auto">
      <div className="p-5 mt-3 text-center rounded-lg shadow ">
        <h2 className="text-4xl font-bold text-blue-600">כִּי תֵצֵא</h2>
        <p className="mt-2">Ki Teitzei</p>
        <p className="mt-3 text-gray-500">September 5 - September 12, 2025</p>

        <button className="px-5 py-3 mt-4 text-white bg-blue-600 rounded-lg">
          Start This Week's Study
        </button>
        <small className="block mt-3 text-gray-400 ">
          Estimated time: 15-20 minutes
        </small>
      </div>

      <div className="p-4 md:p-8">
        <AccordionItem
          id="parashat-ki-teitzei"
          title="Portion Summary"
          defaultOpen={false}
        >
          <div className="prose-sm prose md:prose-base max-w-none">
            <p>
              In <strong>Parashat Ki Teitzei</strong>, Moses continues his final
              discourse with detailed laws covering social justice, family
              relations, and ethical conduct. This portion contains{" "}
              <strong>74 mitzvot (commandments)</strong> - more than any other
              Torah portion - addressing everything from warfare ethics to
              business practices, marriage laws, and care for the vulnerable.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-2xl font-bold text-blue-600">
              <div>דברים כא:י</div>
              <div>
                <Play className="w-5 h-5 mr-2 float-end" />
              </div>
            </div>
            <p className="mt-2">
              <em>Devarim 21:10</em>
            </p>

            <blockquote className="p-3 mt-2 bg-white border-l-4 border-indigo-200 rounded-lg">
              When you go out to war against your enemies, and the Lord your God
              delivers them into your hands, and you take them captive.
            </blockquote>
          </div>
        </AccordionItem>
      </div>

      <div>
        <h2 className="text-lg font-bold ">Midrashic Insights</h2>

        <div className="p-5 mt-2 rounded shadow">
          <p>
            The commandment to return lost objects teaches us about social
            responsibility and building trust within community.
          </p>
          <p className="text-blue-600">Talmud Bava Metzia 30a</p>
          <div className="h-px mt-3 bg-gray-200"></div>
          <p className="mt-3 text-sm font-bold">Reflection:</p>
          <p className="text-sm">
            How can we apply this principle of caring for others' property in
            our modern digital age?
          </p>
        </div>

        <div className="p-5 mt-3 rounded shadow">
          <p>
            The requirement for honest weights and measures reflects divine
            concern for economic justice.
          </p>
          <p className="text-blue-600">Sifrei Devarim 294</p>
          <div className="h-px mt-3 bg-gray-200"></div>
          <p className="mt-3 text-sm font-bold">Reflection:</p>
          <p className="text-sm">
            What are the modern equivalents of "honest weights" in our
            professional lives?
          </p>
        </div>

        <div className="p-5 mt-3 rounded shadow">
          <p>
            The law of the mother bird teaches compassion even in permitted
            acts.
          </p>
          <p className="text-blue-600">Rambam, Guide for the Perplexed 3:48</p>
          <div className="h-px mt-3 bg-gray-200"></div>
          <p className="mt-3 text-sm font-bold">Reflection:</p>
          <p className="text-sm">
            How do we balance necessary actions with maintaining our capacity
            for empathy?
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
