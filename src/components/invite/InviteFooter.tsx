import { motion } from "motion/react";
import { useRef } from "react";
import footerBg from "@/assets/footer-bg.jpg";
import { invite } from "@/config/invite";
import { useParallax } from "@/hooks/use-parallax";
import { ScriptNames } from "./Reveal";

export function InviteFooter() {
  const ref = useRef<HTMLElement>(null);
  // Slower, spring-smoothed drift so the marigold texture glides on touch.
  const { y } = useParallax(ref, [-70, 40], ["start end", "end end"]);

  return (
    <footer
      ref={ref}
      className="grain relative flex min-h-[55svh] sm:min-h-[70svh] items-center justify-center overflow-hidden px-4 pb-32 pt-20 text-center sm:px-6 sm:pb-36 sm:pt-24"
    >
      <motion.img
        src={footerBg}
        alt=""
        aria-hidden="true"
        width={1536}
        height={1024}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 size-full scale-125 object-cover will-change-transform"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-paper/72" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-paper via-transparent to-paper/90"
      />

      <div className="relative">
        <motion.p
          className="caps text-[0.55rem] sm:text-[0.58rem] text-sepia"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {invite.closing}
        </motion.p>

        <p className="footer-names mt-4 sm:mt-5 text-3xl xs:text-4xl sm:text-5xl text-ink">
          <span className="inline-block whitespace-nowrap">
            <ScriptNames text={invite.groom} />
          </span>
          <motion.span
            aria-hidden="true"
            className="mx-2 sm:mx-3 inline-block font-serif text-gold italic font-normal"
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
          >
            &amp;
          </motion.span>
          <span className="inline-block whitespace-nowrap">
            <ScriptNames text={invite.bride} delay={0.3} />
          </span>
        </p>

        <motion.p
          className="caps mt-8 text-[0.5rem] text-sepia/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {invite.dateLabel} · {invite.venue.name}
        </motion.p>
        <motion.a
          href="https://www.instagram.com/invitestory.in/"
          target="_blank"
          rel="noreferrer"
          className="caps mt-4 inline-block text-[0.5rem] text-sepia/70 transition-colors hover:text-sepia"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Follow @invitestory.in on Instagram
        </motion.a>
      </div>
    </footer>
  );
}
