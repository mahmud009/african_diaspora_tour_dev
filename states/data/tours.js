export const tours = [
  {
    id: 2,
    name: "West Africa Tour",
    locations: [1, 2, 7, 6, 8, 5, 9],
    funFacts: [1, 2, 3, 4, 5, 6],
    darkStories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    startButtons: [2],
    arrows: [1],
    mapState: {
      zoom: 1,
      position: { x: 0, y: 0 },
      dark: 0.5,
      blur: 0,
      freezed: false,
    },
    available: true,
  },
  {
    id: 3,
    name: "East Africa Tour",
    locations: [10, 11, 13, 14, 15],
    funFacts: [7, 8, 9, 10, 11],
    darkStories: [11, 12, 13, 14],
    startButtons: [3],
    arrows: [2],
    mapState: {
      zoom: 1,
      position: { x: -460, y: 0 },
      dark: 0.5,
      blur: 0,
      freezed: false,
    },
    available: true,
  },
  {
    id: 4,
    name: "South Africa Tour",
    locations: [20, 21, 22, 23, 24, 25],
    funFacts: [12, 13, 14, 15, 16],
    darkStories: [15, 16, 17, 18],
    startButtons: [4],
    arrows: [3],
    mapState: {
      zoom: 1,
      position: { x: -400, y: 0 },
      dark: 0.5,
      blur: 0,
      freezed: false,
    },
    available: true,
  },
  {
    id: 1,
    name: "North Africa Tour",
    available: false,
  },
];
//
