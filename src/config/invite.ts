// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE ONLY when cloning this template for a client.
// ─────────────────────────────────────────────────────────────

export const invite = {
  bride: "Tejaswini",
  groom: "Nanda",
  /** Shown big in the hero */
  dateLabel: "24.10.26",
  /** Local start / end of the main function (ISO, no timezone) */
  start: "2026-10-24T19:00:00",
  end: "2026-10-24T23:00:00",
  /** IANA timezone of the venue */
  timeZoneOffset: "+05:30",
  dayLine: "Saturday, 24th October 2026",
  timeLine: "7:00 PM onwards",
  eventTitle: "Wedding Reception of Nanda & Tejaswini",
  invitationNote:
    "Together with their families, we invite you to share in the joy of our wedding reception — an evening of blessings, laughter and good food.",
  venue: {
    name: "The Grand Krishna",
    address: "78, Hosur Rd, near to Ayyappa Temple, Old Madiwala, BTM 1st Stage, Bengaluru, Karnataka 560068",
    /** Used for the Google Maps deep link */
    query: "The Grand Krishna Party Hall, Hosur Rd, Madiwala, Bengaluru, Karnataka 560068",
    city: "Bengaluru",
    lat: 12.9259,
    lng: 77.6171,
  },
  closing: "See you there",
} as const;

export const mapsUrl = "https://maps.app.goo.gl/AYZqyDE4TpnvbKzCA";

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  invite.venue.query,
)}`;
