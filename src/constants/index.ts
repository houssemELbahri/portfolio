import { Project,ITech } from "../types"

import ESPEROO from "../images/esperoo.webp";
import POINTEUSE from "../images/pointeuse.webp"
import KAFU from "../images/kafu.webp"
import AUDITTAB from "../images/audittab.webp"
import ACTIFPLANNER from "../images/actifplanner.webp"
import COPADELMUNDO from "../images/copadelmundo.webp"
import VEGETA from "../images/vegeta.webp"







export const FORM_KEY = "xoqgqqvq";
export const USERNAME = "ELBahri";


export const PROJECTS: Project[] = [
    {
        id: "9",
        name: "Vegeta",
        fromDate: "02/2025",
        toDate: "Present",
        company: "Personnel",
        technologies: ["React native", "Typescript", "Reanimated","Gestures"],
        image: VEGETA,
        description: "Vegeta is a fast-paced mobile game where players tap to keep an astronaut afloat while dodging obstacles in the extreme conditions of planet Neptune. Designed for quick reflexes and high-score chasers, Vegeta delivers an engaging and addictive experience. Built with Expo using React Native Skia, React Native Reanimated, and React Native Gesture Handler.",
        googlePlayLink:"https://play.google.com/store/apps/details?id=com.elbahri.neptune",
    },
    {
        id: "8",
        name: "Copa Del Mundo",
        fromDate: "12/2024",
        toDate: "Present",
        company: "Personnel",
        technologies: ["React native", "Typescript", "Reanimated","Gestures"],
        image: COPADELMUNDO,
        description: "Copa del Mundo is a mobile application dedicated to football enthusiasts, allowing users to stay connected with the world of football in real-time.",
        googlePlayLink:"https://play.google.com/store/apps/details?id=com.elbahri.copaDelMundo.premium",
    },
    {
        id: "7",
        name: "React-native-swipeable-container",
        fromDate: "04/2024",
        toDate: "Present",
        company: "Personnel",
        technologies: ["React native", "Typescript", "Reanimated","Gestures"],
        image: "",
        description: " is an open source library that makes it easy to incorporate swipeable components into your React Native applications for both Android and iOS. This tool enhances user interaction by enabling smooth and responsive swipe gestures,",
        npmLink:"https://www.npmjs.com/package/react-native-swipeable-container",
        githubLink:"https://github.com/houssemELbahri/react-native-swipeable-container"
    },
    {
        id: "6",
        name: "Bee Bus",
        fromDate: "02/2024",
        toDate: "Present",
        company: "Freelance",
        technologies: ["React native", "Typescript", "Redux-Toolkit"],
        image: "",
        description: "This innovative application for drivers allows users to take on various missions and follow predefined routes on an interactive map. By integrating robust location services with Mapbox, it provides accurate real-time tracking and mapping capabilities, ensuring drivers can navigate their missions efficiently and stay on the correct path with ease.",
        appStoreLink:"",
        googlePlayLink:"",
    },
    {
        id: "5",
        name: "Esperoo",
        fromDate: "10/2022",
        toDate: "Present",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: ESPEROO,
        description: "Esperoo, with its 2 mobile applications Esperoo and Esperoo Pointeuse, offers a complete solution for scheduling, timekeeping and team management.",
        appStoreLink:"https://apps.apple.com/app/id1542651708",
        googlePlayLink:"https://play.google.com/store/apps/details?id=io.aurax.esperoo",
    },
    {
        id: "4",
        name: "Esperoo Pointeuse",
        fromDate: "10/2022",
        toDate: "Present",
        company: "Esperoo",
        technologies: ["React native", "typescript", "Mobx"],
        image: POINTEUSE,
        description: "Esperoo, with its 2 mobile applications Esperoo and Esperoo Pointeuse, offers a complete solution for scheduling, timekeeping and team management.",
        appStoreLink:"https://apps.apple.com/id/app/esperoo-pointeuse/id1533557525?l=id",
        googlePlayLink:"https://play.google.com/store/apps/details?id=fr.esperoo.pointeuse",
    },
    {
        id: "3",
        name: "Kafu Games",
        fromDate: "07/2022",
        toDate: "09/2022",
        company: "Esperoo",
        technologies: ["React native", "typescript", "Mobx"],
        image: KAFU,
        description: "Is an elite gaming mobile app that organizes esports tournaments for the most renowned game titles.",
        appStoreLink:"https://apps.apple.com/tn/app/kafu-games/id1502370934",
        googlePlayLink:"https://play.google.com/store/apps/details?id=com.uxbert.kafu",
    },
    {
        id: "2",
        name: "AuditTab",
        fromDate: "03/2021",
        toDate: "09/2022",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: AUDITTAB,
        description: "Facilitates the performance of technical quality and safety audits, the management of defect rework requests, and the tracking of non-conformance costs and action plans on web and mobile.",
        appStoreLink:"https://apps.apple.com/tn/app/audittab-entreprise/id1517587823",
        googlePlayLink:"https://play.google.com/store/search?q=audittab&c=apps",
    },
    {
        id: "1",
        name: "Actif Planner",
        fromDate: "11/2020",
        toDate: "03/2021",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: ACTIFPLANNER,
        description: "Enables simplified scheduling of tasks and provides real-time monitoring for proactive management of delays.",
        appStoreLink:"https://apps.apple.com/tn/app/actifplanner/id1301312856",
        googlePlayLink:"https://play.google.com/store/apps/details?id=com.actifplanner",
    },
]


export const TECHNOLOGIES: ITech[] = [
    {
        id: 1,
        name: "React",
        icon:"FaReact"
    },
    {
        id: 2,
        name: "React Native",
        icon:"ReactNative"
    },
    {
        id: 3,
        name: "JavaScript",
        icon:"IoLogoJavascript"
    },
    {
        id: 4,
        name: "TypeScript",
        icon:"SiTypescript"
    },
    {
        id: 5,
        name: "Redux",
        icon:"SiRedux"
    },
    {
        id: 6,
        name: "Mobx",
        icon:"SiMobx"
    },
    {
        id: 7,
        name: "git",
        icon:"FaGitAlt"
    },
    {
        id: 8,
        name: "Android Studio",
        icon:"SiAndroidstudio"
    },
    {
        id: 9,
        name: "Xcode",
        icon:"SiXcode"
    },
    {
        id: 10,
        name: "Firebase",
        icon:"SiFirebase"
    },
    {
        id: 11,
        name: "SQLite",
        icon:"SiSqlite"
    },
    {
        id: 12,
        name: "Expo",
        icon:"SiExpo"
    },
]
