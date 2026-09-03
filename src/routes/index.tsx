import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import paper from "@/assets/paper.jpg";
import { ActionBar } from "@/components/invite/ActionBar";
import { AddToCalendar } from "@/components/invite/AddToCalendar";
import { Countdown } from "@/components/invite/Countdown";
import { Envelope } from "@/components/invite/Envelope";
import { Hero } from "@/components/invite/Hero";
import { InviteFooter } from "@/components/invite/InviteFooter";
import { Note } from "@/components/invite/Note";
import { ScrollThread } from "@/components/invite/ScrollThread";
import { Venue } from "@/components/invite/Venue";
import { invite } from "@/config/invite";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";


const title = `${invite.groom} & ${invite.bride} — Wedding Reception Invitation`;
const description = `Together with their families, ${invite.groom} & ${invite.bride} invite you to celebrate their wedding reception on ${invite.dayLine} at ${invite.venue.name}, ${invite.venue.city}.`;
const canonicalUrl = `${invite.productionUrl}/`;
const ogImageUrl = invite.ogImage;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${title} · Save the Date` },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: `${title} · Save the Date` },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:secure_url", content: ogImageUrl },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `Wedding Reception Invitation of ${invite.groom} & ${invite.bride}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: canonicalUrl },
      { name: "twitter:title", content: `${title} · Save the Date` },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImageUrl },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: Invitation,
});

function Invitation() {
  useSmoothScroll();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Envelope onOpen={() => setOpened(true)} />
      <ScrollThread />
      <main
        className="grain relative min-h-screen bg-paper text-ink"
        style={{ backgroundImage: `url(${paper})`, backgroundSize: "480px" }}
      >
        <Hero ready={opened} />
        <Note />
        <Countdown />
        <Venue />
        <AddToCalendar />
        <InviteFooter />
      </main>
      <ActionBar />
    </>

  );
}
