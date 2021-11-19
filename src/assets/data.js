
// import { doc, setDoc } from '@firebase/firestore'
// import db from '../firebase/config'
// import dreamcast from './pierre-roussel-dreamcast-web.jpg'
// import gamecube from './pierre-roussel-gamecube-web-indigo.jpg'
// import n64 from './pierre-roussel-n64-web.jpg'
// import ps1 from './pierre-roussel-ps1-web.jpg'
// import ps2 from './pierre-roussel-ps2-web.jpg'
// import ps3 from './pierre-roussel-ps3-web.jpg'
// import ps4 from './pierre-roussel-ps4-web.jpg'
// import wii from './pierre-roussel-wii-web.jpg'
// import xbox from './pierre-roussel-xbox-web.jpg'
// import xbox360 from './pierre-roussel-xbox360-web.jpg'







// export const data = {

// dreamcast: {
//     name: "Dreamcast",
//     id: "dreamcast",
//     img: dreamcast,
//     0: {
//         name: "Sonic",
//         xmin: 274,
//         xmax: 347,
//         ymin: 529,
//         ymax: 593
//     },
//     1: {
//         name: "Afro Thunder",
//         xmin: 391,
//         xmax: 449,
//         ymin: 988,
//         ymax: 1075
//     },
//     2: {
//         name: "Nightmare",
//         xmin: 717,
//         xmax: 789,
//         ymin: 587,
//         ymax: 652
//     },
    
// },

// gamecube: {
//     name: "Gamecube",
//     id: "gamecube",
//     img: gamecube,
//     0: {
//         name: "Marth",
//         xmin: 502,
//         xmax: 568,
//         ymin: 1088,
//         ymax: 1164
//     },
//     1: {
//         name: "Toad",
//         xmin: 360,
//         xmax: 387,
//         ymin: 635,
//         ymax: 665
//     },
//     2: {
//         name: "Mario",
//         xmin: 406,
//         xmax: 460,
//         ymin: 1099,
//         ymax: 1165
//     },
// },

// n64: {
//     name: "Nintendo 64",
//     id: "n64",
//     img: n64,
//     0: {
//         name: "Conker",
//         xmin: 405,
//         xmax: 458,
//         ymin: 930,
//         ymax: 976
//     },
//     1: {
//         name: "Captain Falcon",
//         xmin: 763,
//         xmax: 820,
//         ymin: 1145,
//         ymax: 1200
//     },
//     2: {
//         name: "Epona",
//         xmin: 311,
//         xmax: 394,
//         ymin: 687,
//         ymax: 772
//     },
// },

// ps1: {
//     name: "Playstation 1",
//     id: "ps1",
//     img: ps1,
//     0: {
//         name: "Leon",
//         xmin: 678,
//         xmax: 719,
//         ymin: 803,
//         ymax: 860
//     },
//     1: {
//         name: "Black Mage",
//         xmin: 475,
//         xmax: 498,
//         ymin: 843,
//         ymax: 888
//     },
//     2: {
//         name: "Parappa Rappa",
//         xmin: 399,
//         xmax: 422,
//         ymin: 1184,
//         ymax: 1234
//     },
// },

// ps2: {
//     name: "Playstation 2",
//     id: "ps2",
//     img: ps2,
//     0: {
//         name: "The Prince",
//         xmin: 287,
//         xmax: 327,
//         ymin: 497,
//         ymax: 529
//     },
//     1: {
//         name: "Kratos",
//         xmin: 250,
//         xmax: 387,
//         ymin: 285,
//         ymax: 875
//     },
//     2: {
//         name: "Dante",
//         xmin: 310,
//         xmax: 339,
//         ymin: 1028,
//         ymax: 1076
//     },
// },

// ps3: {
//     name: "Playstation 3",
//     id: "ps3",
//     img: ps3,
//     0: {
//         name: "Nathan Drake",
//         xmin: 620,
//         xmax: 641,
//         ymin: 906,
//         ymax: 958
//     },
//     1: {
//         name: "Altair",
//         xmin: 944,
//         xmax: 992,
//         ymin: 927,
//         ymax: 980
//     },
//     2: {
//         name: "Sackboy",
//         xmin: 598,
//         xmax: 621,
//         ymin: 731,
//         ymax: 770
//     },
// },

// ps4: {
//     name: "Playstation 4",
//     id: "ps4",
//     img: ps4,
//     0: {
//         name: "Cloud",
//         xmin: 731,
//         xmax: 791,
//         ymin: 541,
//         ymax: 576
//     },
//     1: {
//         name: "Atreus",
//         xmin: 692,
//         xmax: 905,
//         ymin: 727,
//         ymax: 941
//     },
//     2: {
//         name: "2B",
//         xmin: 296,
//         xmax: 319,
//         ymin: 1089,
//         ymax: 1134
//     },
// },

// wii: {
//     name: "Nintendo Wii",
//     id: "wii",
//     img: wii,
//     0: {
//         name: "Ike",
//         xmin: 643,
//         xmax: 672,
//         ymin: 771,
//         ymax: 816
//     },
//     1: {
//         name: "Waluigi",
//         xmin: 776,
//         xmax: 820,
//         ymin: 909,
//         ymax: 952
//     },
//     2: {
//         name: "Kirby",
//         xmin: 148,
//         xmax: 181,
//         ymin: 731,
//         ymax: 769
//     },
// },

// xbox: {
//     name: "Xbox",
//     id: "xbox",
//     img: xbox,
//     0: {
//         name: "Ryu Hayabusa",
//         xmin: 908,
//         xmax: 937,
//         ymin: 642,
//         ymax: 698
//     },
//     1: {
//         name: "Sam Fisher",
//         xmin: 464,
//         xmax: 493,
//         ymin: 778,
//         ymax: 824
//     },
//     2: {
//         name: "Beat",
//         xmin: 772,
//         xmax: 893,
//         ymin: 1154,
//         ymax: 1211
//     },
// },

// xbox360: {
//     name: "Xbox 360",
//     id: "xbox360",
//     img: xbox360,
//     0: {
//         name: "Frank West",
//         xmin: 764,
//         xmax: 789,
//         ymin: 1110,
//         ymax: 1153
//     },
//     1: {
//         name: "Marcus Fenix",
//         xmin: 620,
//         xmax: 655,
//         ymin: 787,
//         ymax: 828
//     },
//     2: {
//         name: "Master Chief",
//         xmin: 786,
//         xmax: 824,
//         ymin: 994,
//         ymax: 1043
//     },
// },





// }

// async function setData() {
//     await setDoc(doc(db, "characters", "boards"), data)
// }

// setData()