import { motion } from "motion/react";
import mapImg from "@/assets/map.jpg";
import { directionsUrl, invite, mapsUrl } from "@/config/invite";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

const tapFeedback = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(10);
};

export function Venue() {
  return (
    <section className="px-4 pb-16 text-center sm:px-6 sm:pb-28">
      <Reveal>
        <Divider className="mb-8 sm:mb-10" />
        <p className="caps text-[0.55rem] sm:text-[0.6rem] text-olive">The venue</p>
        <h2 className="script mt-3 text-3xl sm:mt-4 sm:text-5xl text-ink">{invite.venue.name}</h2>
        <p className="mx-auto mt-2 max-w-xs text-sm sm:mt-3 sm:text-base leading-relaxed text-sepia">
          {invite.venue.address}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <motion.a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          onClick={tapFeedback}
          whileTap={{ scale: 0.985 }}
          className="grain group mx-auto mt-6 sm:mt-8 block max-w-md overflow-hidden rounded-sm border border-border shadow-[0_20px_40px_-34px_rgba(60,45,25,0.75)]"
        >
          <div className="relative">
            <img
              src={mapImg}
              alt={`Map showing the location of ${invite.venue.name}`}
              width={1024}
              height={768}
              loading="lazy"
              className="h-44 xs:h-48 sm:h-60 w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ring-8 ring-gold/20"
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.75, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="caps absolute bottom-3 left-1/2 flex min-h-10 sm:min-h-11 -translate-x-1/2 items-center rounded-full bg-paper/85 px-4 sm:px-5 text-[0.48rem] sm:text-[0.5rem] text-ink backdrop-blur-sm shadow-sm">
              Open in maps
            </span>
          </div>
        </motion.a>
      </Reveal>

      <Reveal delay={0.25}>
        <motion.a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          onClick={tapFeedback}
          whileTap={{ scale: 0.96 }}
          className="caps mt-5 sm:mt-6 inline-flex min-h-12 sm:min-h-14 items-center gap-2 rounded-full border border-ink/25 px-6 sm:px-8 text-[0.52rem] sm:text-[0.55rem] text-ink transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-paper"
        >
          Get directions
        </motion.a>
      </Reveal>
    </section>
  );
}
