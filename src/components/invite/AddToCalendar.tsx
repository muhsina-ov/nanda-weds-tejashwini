import { motion } from "motion/react";
import { useState } from "react";
import { downloadIcs, googleCalendarUrl } from "@/lib/calendar";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

const tapFeedback = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(10);
};

export function AddToCalendar() {
  const [saved, setSaved] = useState(false);

  return (
    <section className="px-4 pb-20 text-center sm:px-6 sm:pb-32">
      <Reveal>
        <Divider className="mb-8 sm:mb-10" />
        <p className="caps text-[0.55rem] sm:text-[0.6rem] text-olive">Keep the evening free</p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mx-auto mt-6 sm:mt-7 flex max-w-xs flex-col items-stretch gap-3">
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              tapFeedback();
              downloadIcs();
              setSaved(true);
              setTimeout(() => setSaved(false), 3000);
            }}
            className="caps flex min-h-12 sm:min-h-14 items-center justify-center rounded-full bg-ink px-6 sm:px-7 text-[0.52rem] sm:text-[0.55rem] text-paper transition-opacity duration-500 hover:opacity-88"
          >
            {saved ? "Added to calendar" : "Add to calendar"}
          </motion.button>

          <motion.a
            whileTap={{ scale: 0.96 }}
            onClick={tapFeedback}
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="caps flex min-h-12 sm:min-h-14 items-center justify-center rounded-full border border-ink/25 px-6 sm:px-7 text-[0.52rem] sm:text-[0.55rem] text-ink transition-colors duration-500 hover:border-ink"
          >
            Google Calendar
          </motion.a>
        </div>
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm italic text-sepia/80">
          A reminder will nudge you a day before.
        </p>
      </Reveal>
    </section>
  );
}
