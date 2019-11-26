const uuid = require("uuid/v4");

const photos = [
  {
    id: uuid(),
    name: "Mountain Tops & Aspen Groves",
    src:
      "https://lcwphotos.imgix.net/MountainTops&AspenGroves.jpg?s=352328391f19a20174cad84fe03672a2",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "Lone Eagle Sunrise",
    src:
      "https://lcwphotos.imgix.net/LoneEagleSunrise.jpg?s=be743b49cc9b51d081204443238f1e02",
    orientation: "landscape",
    width: 3,
    height: 4
  },
  {
    id: uuid(),
    name: "Cotton Candy Sunrise",
    src:
      "https://lcwphotos.imgix.net/CottonCandySunrise.jpg?s=410876481eaf88a821ec2082021bcfd4",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "Deserted Railroad",
    src:
      "https://lcwphotos.imgix.net/DesertedRailroad.jpg?s=a5a116264831c6f3d6f44cf141769dd4",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "Snake River Overlook",
    src:
      "https://lcwphotos.imgix.net/SnakeRiverOverlook.jpg?s=9bf6db63fa646238c9f699699b6fa9fd",
    orientation: "portrait",
    width: 3,
    height: 4
  },
  {
    id: uuid(),
    name: "Grand Prismatic Spring",
    src:
      "https://lcwphotos.imgix.net/GrandPrismaticSpring.jpg?s=562a8c4d9a121417fae342f00abf8428",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "Lone Eagle Sunset",
    src:
      "https://lcwphotos.imgix.net/LoneEagleSunset.jpg?s=108760115834a666566f9143c57973d7",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "On the Shoulders of Giants",
    src:
      "https://lcwphotos.imgix.net/OntheShouldersofGiants.jpg?s=adad97e3726e31db87e43bc0efa5110d",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "Reflections",
    src:
      "https://lcwphotos.imgix.net/Reflections.jpg?s=ce96b15072ad346a36372017bdcbb256",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "Chasing Waterfalls",
    src:
      "https://lcwphotos.imgix.net/ChasingWaterfalls.jpg?s=91c6b397ca411ceda86b557d118496b4",
    orientation: "portrait",
    width: 3,
    height: 4
  },

  {
    id: uuid(),
    name: "Last Light",
    src:
      "https://lcwphotos.imgix.net/LastLight.jpg?s=ff9e9081c7cb7b7a0f54a9fa64fe7c4c",
    orientation: "portrait",
    width: 3,
    height: 4
  },

  {
    id: uuid(),
    name: "Rustic Barn",
    src:
      "https://lcwphotos.imgix.net/RusticBarn.jpg?s=05bd926121d36e9aa3d7d959de9d5fa3",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "The Archway to the West",
    src:
      "https://lcwphotos.imgix.net/ArchwaytotheWestedit.jpg?s=8612d0c3f43fbb84790857ea5cc24c31",
    orientation: "portrait",
    width: 3,
    height: 4
  },
  {
    id: uuid(),
    name: "Schwabacher Sunrise",
    src:
      "https://lcwphotos.imgix.net/SchwabacherSunrise.jpg?s=ff5e47e75ea9b504b7e1f21449024c16",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "Eye to Eye",
    src:
      "https://lcwphotos.imgix.net/EyeToEye.jpg?s=b22a4cdb8f7c4e942a2c9f99dd7a99e9",
    orientation: "portrait",
    width: 3,
    height: 5
  },
  {
    id: uuid(),
    name: "Switzerland of America",
    src:
      "https://lcwphotos.imgix.net/SwitzerlandofAmerica.jpg?s=3eaa13790bff93dbedc49cb9aaf2c22a",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "The Upside Down",
    src:
      "https://lcwphotos.imgix.net/TheUpsideDown.jpg?s=adcefa722798c19a3b889b17409f4589",
    orientation: "portrait",
    width: 3,
    height: 5
  },
  {
    id: uuid(),
    name: "Teton Sunrise",
    src:
      "https://lcwphotos.imgix.net/TetonSunrise.jpg?s=78ff6eb1d0fe2a6aeb6ba40a582baa69",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "The Hazy Bells",
    src:
      "https://lcwphotos.imgix.net/TheHazyBellsedit.jpg?s=c3e22ccefca77963ae3297855e072fad",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "The Majestic Flatirons",
    src:
      "https://lcwphotos.imgix.net/TheMajesticFlatironsedit.jpg?s=794967f59d4f6355b306d31b1651d2d8",
    orientation: "landscape",
    width: 4,
    height: 3
  },
  {
    id: uuid(),
    name: "The Window to the West",
    src:
      "https://lcwphotos.imgix.net/WindowtotheWest.jpg?s=ce43366710b4c958db93457a1cf461f0",
    orientation: "landscape",
    width: 4,
    height: 3
  }
];

export default photos;
