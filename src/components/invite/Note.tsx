import { invite } from "@/config/invite";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function Note() {
  return (
    <section className="px-5 py-14 text-center sm:px-7 sm:py-24">
      <Reveal>
        <Divider className="mb-8 sm:mb-10" />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="caps text-[0.55rem] sm:text-[0.6rem] text-olive">With the blessings of our families</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-5 max-w-md text-base leading-[1.8] text-ink/85 sm:mt-7 sm:text-xl sm:leading-[1.9]">
          {invite.invitationNote}
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="script mt-6 text-2xl text-sepia sm:mt-8 sm:text-3xl">{invite.dayLine}</p>
        <p className="caps mt-3 text-[0.55rem] text-sepia sm:mt-4 sm:text-[0.6rem]">{invite.timeLine}</p>
      </Reveal>
    </section>
  );
}
