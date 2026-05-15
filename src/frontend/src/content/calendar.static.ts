export interface WorkshopEvent {
  id: string;
  workshopName: string;
  date: string; // ISO date string: YYYY-MM-DD
  time?: string;
  spots?: number;
}

export const workshopEvents: WorkshopEvent[] = [
  // March 2026
  {
    id: "1",
    workshopName: "Pintura em Aguarela",
    date: "2026-03-07",
    time: "10:00 - 12:30",
    spots: 8,
  },
  {
    id: "2",
    workshopName: "Caligrafia Moderna",
    date: "2026-03-14",
    time: "15:00 - 17:00",
    spots: 10,
  },
  {
    id: "3",
    workshopName: "Encadernação Artesanal",
    date: "2026-03-21",
    time: "10:00 - 13:00",
    spots: 6,
  },
  {
    id: "4",
    workshopName: "Ilustração para Crianças",
    date: "2026-03-28",
    time: "10:00 - 12:00",
    spots: 12,
  },

  // April 2026
  {
    id: "5",
    workshopName: "Introdução à Cerâmica",
    date: "2026-04-04",
    time: "10:00 - 13:00",
    spots: 8,
  },
  {
    id: "6",
    workshopName: "Serigrafia Básica",
    date: "2026-04-11",
    time: "10:00 - 14:00",
    spots: 6,
  },
  {
    id: "7",
    workshopName: "Pintura em Aguarela",
    date: "2026-04-18",
    time: "10:00 - 12:30",
    spots: 8,
  },
  {
    id: "8",
    workshopName: "Caligrafia Moderna",
    date: "2026-04-25",
    time: "15:00 - 17:00",
    spots: 10,
  },

  // May 2026
  {
    id: "9",
    workshopName: "Encadernação Artesanal",
    date: "2026-05-09",
    time: "10:00 - 13:00",
    spots: 6,
  },
  {
    id: "10",
    workshopName: "Ilustração para Crianças",
    date: "2026-05-10",
    time: "10:00 - 12:00",
    spots: 12,
  },
  {
    id: "11",
    workshopName: "Introdução à Cerâmica",
    date: "2026-05-16",
    time: "10:00 - 13:00",
    spots: 8,
  },
  {
    id: "12",
    workshopName: "Serigrafia Básica",
    date: "2026-05-23",
    time: "10:00 - 14:00",
    spots: 6,
  },
  {
    id: "13",
    workshopName: "Pintura em Aguarela",
    date: "2026-05-30",
    time: "10:00 - 12:30",
    spots: 8,
  },

  // June 2026
  {
    id: "14",
    workshopName: "Caligrafia Moderna",
    date: "2026-06-06",
    time: "15:00 - 17:00",
    spots: 10,
  },
  {
    id: "15",
    workshopName: "Encadernação Artesanal",
    date: "2026-06-13",
    time: "10:00 - 13:00",
    spots: 6,
  },
  {
    id: "16",
    workshopName: "Ilustração para Crianças",
    date: "2026-06-20",
    time: "10:00 - 12:00",
    spots: 12,
  },
  {
    id: "17",
    workshopName: "Introdução à Cerâmica",
    date: "2026-06-27",
    time: "10:00 - 13:00",
    spots: 8,
  },
];
