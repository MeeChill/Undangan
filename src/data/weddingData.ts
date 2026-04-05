export interface WeddingData {
  groom: string;
  bride: string;
  date: string;
  dateObject: Date;
  welcomeMessage: string;
  events: {
    akad: EventDetails;
    resepsi: EventDetails;
  };
  timeline: TimelineStep[];
  footerMessage: string;
}

export interface EventDetails {
  title: string;
  date: string;
  time: string;
  venueName: string;
  address: string;
  googleMapsUrl: string;
}

export interface TimelineStep {
  time: string;
  title: string;
  description?: string;
}

export const weddingData: WeddingData = {
  groom: "Maulana ",
  bride: "Indah ",
  date: "16 April 2026",
  dateObject: new Date("2026-04-16T08:00:00+07:00"),
  welcomeMessage: "Dengan penuh cinta dan bahagia, kami mengundang Anda untuk hadir di hari spesial kami.",
  events: {
    akad: {
      title: "Akad Nikah",
      date: "16 April 2026",
      time: "08:00 WIB",
      venueName: "KUA Cibinong",
      address: "KUA Cibinong",
      googleMapsUrl: "https://maps.app.goo.gl/XzqhyqF8LQsRuegw5?g_st=iw",
    },
    resepsi: {
      title: "Resepsi",
      date: "16 April 2026",
      time: "09:00 - 13:00 WIB",
      venueName: "Rumah Mempelai Wanita",
      address: "Gg H. Suwardi, Cilangkap-Cibinong, Bogor",
      googleMapsUrl: "https://maps.app.goo.gl/1MUXoLeGcdNpBs8o7?g_st=iw",
    },
  },
  timeline: [
    { time: "08:00", title: "Akad Nikah" },
    { time: "09:00", title: "Resepsi" },
  ],
  footerMessage: "\"Thank you for being part of our story. Maulana & Indah.\"",
};
