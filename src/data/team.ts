export type Executive = {
  role: string;
  name: string;
  handle: string;
  imageSrc: string;
};

export type SubcommitteeMember = {
  name: string;
  handle: string;
};

export type TeamYearData = {
  year: number;
  executives: Executive[];
  directors: Executive[];
  eventsTeam: SubcommitteeMember[];
  mediaTeam: SubcommitteeMember[];
  productionTeam: SubcommitteeMember[];
  eventsTeamPhoto: string;
  mediaTeamPhoto: string;
  productionTeamPhoto?: string;
};

export const CURRENT_TEAM_YEAR = 2026;

export const teamByYear: TeamYearData[] = [
  {
    year: 2026,
    executives: [
      {
        role: "President",
        name: "Alan Nguyen",
        handle: "@HaveANiceDay!",
        imageSrc: "/Images/riotsocteam/2026/Alan.png",
      },
      {
        role: "Vice President",
        name: "Dominic Nelson",
        handle: "@Ya big Fat Mum",
        imageSrc: "/Images/riotsocteam/2026/Dominic.png",
      },
      {
        role: "Treasurer / Secretary",
        name: "Atakan Ozturk",
        handle: "@Slick",
        imageSrc: "/Images/riotsocteam/2026/Atakan.png",
      },
      {
        role: "Vice President (PartnerShips and Community)",
        name: "Jaylon Cheung",
        handle: "@squidgy",
        imageSrc: "/Images/riotsocteam/2026/Jaylon.png",
      },
      {
        role: "Vice President (Events)",
        name: "Brian Vu",
        handle: "@Ryndyroke",
        imageSrc: "/Images/riotsocteam/2026/Brian.png",
      },
      {
        role: "Vice President (Marketing and Media)",
        name: "Kris Hasko",
        handle: "@PlatinumBeast35",
        imageSrc: "/Images/riotsocteam/2026/Kris.png",
      },
    ],
    directors: [
      {
        role: "Events Director",
        name: "Abhinav Talasani",
        handle: "@AbbsKebabs",
        imageSrc: "/Images/riotsocteam/2026/Abhinav.png",
      },
      {
        role: "Events Director",
        name: "Leonardo Darrell",
        handle: "@Las",
        imageSrc: "/Images/riotsocteam/2026/Leo.png",
      },
      {
        role: "Production Director",
        name: "Dedrick Zheng",
        handle: "@Drink",
        imageSrc: "/Images/riotsocteam/2026/Dedrick.png",
      },
      {
        role: "IT Director",
        name: "Tim Yang",
        handle: "@Zef",
        imageSrc: "/Images/riotsocteam/2026/Tim.png",
      },
    ],
    eventsTeam: [
      { name: "Cong Minh Duc Nguyen", handle: "@kreideprintz" },
      { name: "Eddie Dien", handle: "@FurinaFeet" },
      { name: "Gabrielle Zhong", handle: "@chimology" },
      { name: "Jasz Sandhu", handle: "@jasz" },
      { name: "Jimmy Quan", handle: "@Jimmygodlight" },
      { name: "Lewis Duong", handle: "@ywel" },
      { name: "Nimal Sivakumar", handle: "@nimmy317" },
      { name: "Octavio Rodriguez Alva", handle: "@kingsquidfish" },
      { name: "Raymond Song", handle: "@ilovetzuyu." },
      { name: "Samuel Cropper", handle: "@eeulsam" },
      { name: "Soham Tilekar", handle: "@sovasniper21" },
      { name: "Bea Li-Turner", handle: "@hallwaycrush" },
      { name: "Timothy Truong", handle: "@Jelloshi" },
      { name: "Kimmy Kwok", handle: "@filteredpepsi" },
    ],
    mediaTeam: [
      { name: "Alessandro Aranda Altamirano", handle: "@betoale" },
      { name: "Dora Bowen Xia", handle: "@DolalaBanana" },
      { name: "Katherine Liu", handle: "@quiem" },
      { name: "Elisabeth Sorrell", handle: "@lissie" },
      { name: "Kelly Zhang", handle: "@xkg" },
      { name: "Lachlan Mcarthur", handle: "@--(^_^)--" },
      { name: "Maple Truong", handle: "@maplebean" },
    ],
    productionTeam: [
      { name: "Leo Hewett", handle: "@komandok" },
      { name: "Ling Zhu", handle: "@asiansensation000" },
      { name: "Michael Xue", handle: "@conquestm" },
      { name: "Raymond Dang", handle: "@rayomnd" },
      { name: "Kai Nguyen", handle: "@GothKaiser" },
    ],
    eventsTeamPhoto: "/Images/riotsocteam/2026/eventsteam.jpg",
    mediaTeamPhoto: "/Images/riotsocteam/2026/mediateam.jpg",
    productionTeamPhoto: "/Images/riotsocteam/2026/productionteam.jpg",
  },
  {
    year: 2025,
    executives: [
      {
        role: "President",
        name: "Alan Nguyen",
        handle: "@HaveANiceDay!",
        imageSrc: "/Images/riotsocteam/2025/Alan.png",
      },
      {
        role: "Vice President",
        name: "Dominic Nelson",
        handle: "@Ya big Fat Mum",
        imageSrc: "/Images/riotsocteam/2025/Dominic.png",
      },
      {
        role: "Treasurer / Secretary",
        name: "Edward Zhang",
        handle: "@Chezburger4lyfe",
        imageSrc: "/Images/riotsocteam/2025/Edward.png",
      },
      {
        role: "GEDI Officer",
        name: "Melanie Daixing",
        handle: "@ILIGHTNING",
        imageSrc: "/Images/riotsocteam/2025/Melanie.png",
      },
    ],
    directors: [
      {
        role: "Events Director",
        name: "Samuel Hong",
        handle: "@Han_Jinsung_Stan",
        imageSrc: "/Images/riotsocteam/2025/Sam.png",
      },
      {
        role: "Events Director",
        name: "Brian Vu",
        handle: "@Ryndyroke",
        imageSrc: "/Images/riotsocteam/2025/Brian.png",
      },
      {
        role: "Media Director",
        name: "Steven Lee",
        handle: "@Steventgj",
        imageSrc: "/Images/riotsocteam/2025/Steven.png",
      },
      {
        role: "Media Director",
        name: "Kris Hasko",
        handle: "@WeedWizard26",
        imageSrc: "/Images/riotsocteam/2025/Kris.png",
      },
    ],
    eventsTeam: [
      { name: "Atakan Ozturk", handle: "@Slick" },
      { name: "Dedrick Zheng", handle: "@Drink" },
      { name: "Diana Daixing", handle: "@diana" },
      { name: "Donny Chung", handle: "@donnyツ" },
      { name: "Gabby Zhong", handle: "@chimology" },
      { name: "Timothy Truong", handle: "@Jelloshi" },
      { name: "Lewis Duong", handle: "@meow" },
      { name: "Patrick Cheung", handle: "@Platicookie" },
      { name: "Ringo Jiang", handle: "@Ognir" },
      { name: "Sean Diep", handle: "@Sheep" },
      { name: "Tim Yang", handle: "@Zef" },
      { name: "Jaylon Cheung", handle: "@Squidgy" },
    ],
    mediaTeam: [
      { name: "Ava Kim", handle: "@Aba" },
      { name: "Henry Tat", handle: "@somelazyturtle" },
      { name: "Katherine Liu", handle: "@quiem" },
      { name: "Kei Nguyen", handle: "@valorant kei" },
      { name: "Khai Pham", handle: "@Kyhii" },
      { name: "Reggie Fox", handle: "@sharkbroth" },
      { name: "Will Guan", handle: "@stor79" },
      { name: "Jaylon Cheung", handle: "@Squidgy" },
    ],
    productionTeam: [],
    eventsTeamPhoto: "/Images/riotsocteam/2025/eventsteam.jpg",
    mediaTeamPhoto: "/Images/riotsocteam/2025/mediateam.jpg",
  },
];

export const teamYears = teamByYear.map((t) => t.year).sort((a, b) => b - a);

export function getTeamYear(year: number): TeamYearData {
  return teamByYear.find((t) => t.year === year) ?? teamByYear[0];
}
