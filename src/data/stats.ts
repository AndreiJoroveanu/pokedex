interface Stats {
  label: string;
  backgroundColorLight: string;
  backgroundColorDark: string;
  colorLight: string;
  colorDark: string;
}

const stats: Stats[] = [
  {
    label: "HP",
    backgroundColorLight: "#d7f7b9",
    backgroundColorDark: "#4e6c30",
    colorLight: "#94d45c",
    colorDark: "#8ec45a",
  },
  {
    label: "Attack",
    backgroundColorLight: "#fcf0b1",
    backgroundColorDark: "#726530",
    colorLight: "#ddc460",
    colorDark: "#d6c15e",
  },
  {
    label: "Defense",
    backgroundColorLight: "#facbae",
    backgroundColorDark: "#72482f",
    colorLight: "#d88c5c",
    colorDark: "#d6885a",
  },
  {
    label: "Sp. Atk",
    backgroundColorLight: "#a8ecfc",
    backgroundColorDark: "#30687a",
    colorLight: "#5fc4dc",
    colorDark: "#5bbedc",
  },
  {
    label: "Sp. Def",
    backgroundColorLight: "#c7cff7",
    backgroundColorDark: "#3f4970",
    colorLight: "#7d8ccd",
    colorDark: "#798bcc",
  },
  {
    label: "Speed",
    backgroundColorLight: "#f6b2e3",
    backgroundColorDark: "#69325d",
    colorLight: "#cc60b5",
    colorDark: "#c55fb1",
  },
];
export default stats;
