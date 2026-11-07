import { additionalProjects } from '../data/additionalProjects'
import picstoryThumb from '../assets/sessionImg/picstory-illustration.png'
import freshChainThumb from '../assets/sessionImg/fresh-chain-illustration.png'
import smartradThumb from '../assets/sessionImg/smartrad-illustration.png'
import { projectLinks, projectDemoLinks, logisticsDashboardUrl } from '../data/projectLinks'
import weatherThumb from "../assets/sessionImg/weather-illustration.png";
import emotionThumb from "../assets/sessionImg/emotion-illustration.png";
import router from "../assets/sessionImg/router.png";
import wifi from "../assets/sessionImg/wifi.png";
import tocobo from "../assets/sessionImg/Tocobo.png";

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "major", label: "대형 프로젝트" },
  { id: "iot", label: "IoT / Hardware" },
  { id: "web", label: "Web app" },
  { id: "api", label: "API / Backend" },
  { id: "utility", label: "Utility" },
];

export const projectsPageItems = [
  ...additionalProjects,
  {
    id: 'smartrad',
    image: smartradThumb,
    imageAlt: '인사·근태·급여 관리를 표현한 SmartRAD 3D 일러스트',
    title: 'SmartRAD',
    description: '팀으로 함께 진행한 프로젝트입니다.',
    categories: ['web', 'api', 'major'],
    status: { type: 'featured', label: '대형 프로젝트' },
    tags: [],
    meta: [{ type: 'code', text: 'Team Project' }],
    codeHref: projectLinks.smartrad,
    demoHref: projectDemoLinks['smartrad'] ?? null,
    gradient: 'cyan',
  },
  {
    id: "fresh-chain",
    image: freshChainThumb,
    imageAlt: '냉장 물류·창고·온도 관리를 표현한 Fresh Chain 3D 일러스트',
    categories: ["web", "utility", "major"],
    gradient: "orichalcum",
    title: "Fresh Chain",
    description:
      "콜드체인 물류 서비스를 주제로 메인 웹사이트와 물류 관리 대시보드를 구현한 반응형 웹 프로젝트입니다.",
    tags: [
      { label: "React", variant: "neutral" },
      { label: "TypeScript", variant: "info" },
      { label: "Tailwind CSS", variant: "success" },
    ],
    status: { type: "featured", label: "대형 프로젝트" },
    meta: [{ type: "code", text: "Team Project" }],
    demoHref: projectDemoLinks['fresh-chain'] ?? null,
    dashboardHref: logisticsDashboardUrl,
    codeHref: projectLinks["fresh-chain"],
    demoLabel: "사이트 보기",
  },
  {
    id: "router-study",
    image: router,
    categories: ["web"],
    gradient: "sunset",
    title: "라우터 학습 프로젝트",
    description:
      "React Router의 다양한 기능을 학습하고 구현해 본 프로젝트입니다.",
    tags: [{ label: "React Router", variant: "warning" }],
    status: null,
    meta: [{ type: "users", text: "Learning" }],
    demoHref: projectDemoLinks['router-study'] ?? null,
    codeHref: projectLinks["router-study"],
    demoLabel: "사이트 보기",
  },
  {
    id: "weather-app",
    image: weatherThumb,
    imageAlt: "도시 검색과 기온·습도 조회를 표현한 날씨 앱 3D 일러스트",
    categories: ["web", "api"],
    gradient: "sky",
    title: "날씨 확인 앱",
    description:
      "도시를 검색해 현재 날씨와 기온, 습도를 확인하는 날씨 앱입니다. 날씨 상태에 따라 배경이 바뀝니다.",
    tags: [
      { label: "React", variant: "neutral" },
      { label: "JavaScript", variant: "info" },
    ],
    status: { type: "featured", label: "Featured" },
    meta: [{ type: "users", text: "Service" }],
    demoHref: projectDemoLinks['weather-app'] ?? null,
    codeHref: projectLinks["weather-app"],
    demoLabel: "사이트 보기",
  },
  {
    id: "emotion-diary",
    image: emotionThumb,
    imageAlt: "날짜와 다섯 가지 감정 선택·일기 작성을 표현한 3D 일러스트",
    categories: ["web"],
    gradient: "rose",
    title: "감정 일기장",
    description:
      "오늘의 기분을 기록하고 날짜별로 감정을 관리할 수 있는 다이어리 서비스입니다.",
    tags: [
      { label: "React", variant: "neutral" },
      { label: "JavaScript", variant: "info" },
    ],
    status: null,
    meta: [{ type: "users", text: "Service" }],
    demoHref: projectDemoLinks['emotion-diary'] ?? null,
    codeHref: projectLinks["emotion-diary"],
    demoLabel: "사이트 보기",
  },
  {
    id: "wifi-map",
    image: wifi,
    categories: ["web", "api"],
    gradient: "violet",
    title: "와이파이 찾기",
    description:
      "사용자 주변의 공공 와이파이 위치를 지도상에 표시해주는 서비스입니다.",
    tags: [
      { label: "API", variant: "info" },
      { label: "Map", variant: "success" },
    ],
    status: null,
    meta: [{ type: "users", text: "Utility" }],
    demoHref: projectDemoLinks['wifi-map'] ?? null,
    codeHref: projectLinks["wifi-map"],
    demoLabel: "사이트 보기",
  },
  {
    id: "tocobo-project",
    image: tocobo,
    categories: ["web"],
    gradient: "emerald",
    title: "Tocobo 프로젝트",
    description: "신동환 님의 Tocobo 프로젝트 클론 코딩 및 구현 작업입니다.",
    tags: [{ label: "React", variant: "neutral" }],
    status: { type: "featured", label: "Featured" },
    meta: [{ type: "users", text: "Clone" }],
    demoHref: projectDemoLinks['tocobo-project'] ?? null,
    codeHref: projectLinks["tocobo-project"],
    demoLabel: "사이트 보기",
  },
  {
    id: "picstory",
    image: picstoryThumb,
    imageAlt: '책과 독서 기록을 표현한 BookTrace 3D 일러스트',
    categories: ["web", "api", "utility"],
    gradient: "cyan",
    title: "Picstory",
    description:
      "사용자가 읽은 책을 기록하고 리뷰를 작성하며 독서 이력을 관리할 수 있도록 구현한 풀스택 기반 독서 기록 웹 애플리케이션입니다.",
    tags: [
      { label: "Fullstack", variant: "neutral" },
      { label: "Web App", variant: "info" },
    ],
    status: { type: "featured", label: "Featured" },
    meta: [{ type: "code", text: "Fullstack Project" }],
    demoHref: projectDemoLinks['picstory'] ?? null,
    codeHref: projectLinks["picstory"],
    demoLabel: "사이트 보기",
  },
];
