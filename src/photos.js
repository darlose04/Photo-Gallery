// landscape image imports
// import cottoncandy from "./LoganPhotos/CottonCandySunrise.jpg";
// import railroad from "./LoganPhotos/DesertedRailroad.jpg";
// import grandspring from "./LoganPhotos/GrandPrismaticSpring.jpg";
// import loneeagle from "./LoganPhotos/LoneEagleSunset.jpg";
// import giantshoulders from "./LoganPhotos/OntheShouldersofGiants.jpg";
// import reflections from "./LoganPhotos/Reflections.jpg";
// import rustic from "./LoganPhotos/RusticBarn.jpg";
// import schwabacher from "./LoganPhotos/SchwabacherSunrise.jpg";
// import swissamerica from "./LoganPhotos/SwitzerlandofAmerica.jpg";
// import teton from "./LoganPhotos/TetonSunrise.jpg";
// import hazybells from "./LoganPhotos/TheHazyBells.jpg";
// import flatirons from "./LoganPhotos/TheMajesticFlatirons.jpg";
// import windowwest from "./LoganPhotos/TheWindowToTheWest.jpg";

// // portrait image imports
// import waterfalls from "./LoganPhotos/ChasingWaterfalls.jpg";
// import eyetoeye from "./LoganPhotos/EyeToEye.jpg";
// import lastlight from "./LoganPhotos/LastLight.jpg";
// import snakeriver from "./LoganPhotos/SnakeRiverOverlook.jpg";
// import archway from "./LoganPhotos/TheArchwayToTheWest.jpg";
// import upsidedown from "./LoganPhotos/TheUpsideDown.jpg";

const photos = [
    {
      id: 1,
      name: "Cotton Candy Sunrise",
      src: "http://lcwphotos.imgix.net/CottonCandySunrise.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 2,
      name: "Deserted Railroad",
      src: "http://lcwphotos.imgix.net/DesertedRailroad.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 3,
      name: "Snake River Overlook",
      src: "http://lcwphotos.imgix.net/SnakeRiverOverlook.jpg",
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },
    {
      id: 4,
      name: "Grand Prismatic Spring",
      src: "http://lcwphotos.imgix.net/GrandPrismaticSpring.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 5,
      name: "Lone Eagle Sunset",
      src: "http://lcwphotos.imgix.net/LoneEagleSunset.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 6,
      name: "On the Shoulders of Giants",
      src: "http://lcwphotos.imgix.net/OntheShouldersofGiants.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 7,
      name: "Reflections",
      src: "http://lcwphotos.imgix.net/Reflections.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 8,
      name: "Chasing Waterfalls",
      src: "http://lcwphotos.imgix.net/ChasingWaterfalls.jpg",
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },

    {
      id: 9,
      name: "Last Light",
      src: "http://lcwphotos.imgix.net/LastLight.jpg",
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },

    {
      id: 10,
      name: "Rustic Barn",
      src: "http://lcwphotos.imgix.net/RusticBarn.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 11,
      name: "The Archway to the West",
      src: "http://lcwphotos.imgix.net/TheArchwayToTheWest.jpg",
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },
    {
      id: 12,
      name: "Schwabacher Sunrise",
      src: "http://lcwphotos.imgix.net/SchwabacherSunrise.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 13,
      name: "Eye to Eye",
      src: "http://lcwphotos.imgix.net/EyeToEye.jpg",
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 5
    },
    {
      id: 14,
      name: "Switzerland of America",
      src: "http://lcwphotos.imgix.net/SwitzerlandofAmerica.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 15,
      name: "The Upside Down",
      src: "http://lcwphotos.imgix.net/TheUpsideDown.jpg",
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 5
    },
    {
      id: 16,
      name: "Teton Sunrise",
      src: "http://lcwphotos.imgix.net/TetonSunrise.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 17,
      name: "The Hazy Bells",
      src: "http://lcwphotos.imgix.net/TheHazyBells.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 18,
      name: "The Majestic Flatirons",
      src: "http://lcwphotos.imgix.net/TheMajesticFlatirons.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 19,
      name: "The Window to the West",
      src: "http://lcwphotos.imgix.net/TheWindowToTheWest.jpg",
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    }
  ];

// const photos = [
//   {
//     id: 1,
//     name: "Colors",
//     src: "http://lcwphotos.imgix.net/colors.jpg",
//     orientation: "landscape",
//     price: "$25.00",
//     width: 4,
//     height: 3
//   },
//   {
//     id: 2,
//     name: "Flower",
//     src: "http://lcwphotos.imgix.net/flower.jpg",
//     orientation: "landscape",
//     price: "$25.00",
//     width: 4,
//     height: 3
//   },
//   {
//     id: 3,
//     name: "Neon Night",
//     src: "http://lcwphotos.imgix.net/neonnight.jpg",
//     orientation: "landscape",
//     price: "$25.00",
//     width: 4,
//     height: 3
//   },
//   {
//     id: 4,
//     name: "Night Moon",
//     src: "http://lcwphotos.imgix.net/nightmoon.jpg",
//     orientation: "landscape",
//     price: "$25.00",
//     width: 4,
//     height: 3
//   },
//   {
//     id: 5,
//     name: "Eye to Eye",
//     src: "http://lcwphotos.imgix.net/EyeToEye.jpg",
//     orientation: "portrait",
//     price: "$25.00",
//     width: 3,
//     height: 5
//   },
//   {
//     id: 6,
//     name: "Space X Rocket",
//     src: "http://lcwphotos.imgix.net/spaceX.jpg",
//     orientation: "landscape",
//     price: "$25.00",
//     width: 4,
//     height: 3
//   },
//   {
//     id: 7,
//     name: "Storm Green",
//     src: "http://lcwphotos.imgix.net/stormsgreen.jpg",
//     orientation: "landscape",
//     price: "$25.00",
//     width: 4,
//     height: 3
//   },
//   {
//     id: 8,
//     name: "Cotton Candy Sunrise",
//     src: "http://lcwphotos.imgix.net/CottonCandySunrise.jpg",
//     orientation: "landscape",
//     price: "$25.00",
//     width: 4,
//     height: 3
//   },
// ]

  export default photos;