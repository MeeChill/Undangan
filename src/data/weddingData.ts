export interface WeddingData {
  groom: string;
  bride: string;
  date: string;
  dateObject: Date;
  welcomeMessage: string;
  ayatQuran?: {
    text: string;
    translation: string;
    reference: string;
  };
  song?: {
    title: string;
    artist: string;
    url: string;
  };
  couple: {
    groom: PersonDetails;
    bride: PersonDetails;
  };
  events: {
    akad: EventDetails;
    resepsi: EventDetails;
  };
  timeline: TimelineStep[];
  gift: GiftInfo[];
  gallery: string[];
  footerMessage: string;
  rsvpWhatsApp: {
    name: string;
    number: string;
  }[];
}

export interface PersonDetails {
  fullName: string;
  parentsContext: string;
  fatherName: string;
  motherName: string;
  image: string;
}

export interface GiftInfo {
  bank: string;
  accountNumber: string;
  accountName: string;
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
  groom: "Maulana",
  bride: "Indah",
  date: "16 April 2026",
  dateObject: new Date("2026-04-16T07:30:00+07:00"),
  welcomeMessage: "Dengan penuh cinta dan bahagia, kami mengundang Anda untuk hadir di hari spesial kami.",
  ayatQuran: {
    text: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ",
    translation: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.",
    reference: "QS. Ar-Rum: 21"
  },
  song: {
    title: "Sampai Selamanya",
    artist: "Nadhif Basalamah",
    url: "/music/bg-music.mp3"
  },
  couple: {
    groom: {
      fullName: "Maulana Solihin",
      parentsContext: "Putra dari",
      fatherName: "Bapak Mat Soleh (Alm)",
      motherName: "Ibu Masanih",
      image: "/images/groom_portrait.png"
    },
    bride: {
      fullName: "Indah Maulinda",
      parentsContext: "Putri dari",
      fatherName: "Bapak Dimas Onteng (Alm)",
      motherName: "Ibu Hindun Asmiyati",
      image: "/images/bride_portrait.png"
    }
  },
  events: {
    akad: {
      title: "Akad Nikah",
      date: "16 April 2026",
      time: "07:30 WIB",
      venueName: "KUA Cibinong",
      address: "KUA Cibinong",
      googleMapsUrl: "https://maps.app.goo.gl/XzqhyqF8LQsRuegw5?g_st=iw",
    },
    resepsi: {
      title: "Resepsi",
      date: "16 April 2026",
      time: "10:00 - 12:00 WIB",
      venueName: "Kediaman Mempelai Wanita",
      address: "Gang H. Suwardi RT 06/10",
      googleMapsUrl: "https://maps.app.goo.gl/1MUXoLeGcdNpBs8o7?g_st=iw",
    },
  },
  timeline: [
    { time: "07:30", title: "Akad Nikah" },
    { time: "10:00", title: "Resepsi" },
  ],
  gift: [
    {
      bank: "BCA",
      accountNumber: "6611245987",
      accountName: "Indah Maulinda"
    }
  ],
  gallery: [
    "/images/gallery_hands.png",
    "/images/gallery_venue.png",
    "/images/gallery_bride.png"
  ],
  footerMessage: "\"Terima kasih telah menjadi bagian dari cerita kami. Maulana & Indah.\"",
  rsvpWhatsApp: [
    {
      name: "Indah",
      number: "6287874120155"
    },
    {
      name: "Maulana",
      number: "6281310417421"
    }
  ]
};

