const subscription = [
  {
    name: "M1",
    isSub: true,
  },
  {
    name: "M2",
    isSub: true,
  },
  {
    name: "M3",
    isSub: true,
    subMod: [
      {
        name: "M3A",
        isSub: false,
      },
      {
        name: "M3B",
        isSub: true,
      },
    ],
  },
  {
    name: "M4",
    isSub: false,
    subMod: [
      {
        name: "M4A",
        isSub: false,
      },
      {
        name: "M4B",
        isSub: true,
      },
    ],
  },
  {
    name: "M5",
    isSub: true,
    subMod: [
      {
        name: "M5A",
        isSub: false,
      },
      {
        name: "M5B",
        isSub: true,

        subMod: [
          {
            name: "M5BA",
            isSub: false,
          },
          {
            name: "M5BB",
            isSub: true,
          },
          {
            name: "M5BC",
            isSub: false,
          },
        ],
      },
      {
        name: "M5C",
        isSub: true,
      },
    ],
  },
];
export default subscription;
