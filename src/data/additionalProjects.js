import fitmapImage from '../assets/sessionImg/fitmap-illustration.png'
import senserImage from '../assets/sessionImg/senser-illustration.png'
import exhibitionImage from '../assets/sessionImg/exhibition-illustration.png'
import leafyImage from '../assets/sessionImg/leafy-illustration.png'
import { projectLinks, projectDemoLinks } from './projectLinks'

// 각 저장소의 README와 package.json을 기준으로 작성했습니다.
// 개발 기간·개인/팀 구분·담당 역할·성과는 확인 전까지 추가하지 않습니다.
export const capstoneProject = {
  id: 'capstone',
  title: 'FitMap · 캡스톤 디자인',
  image: fitmapImage,
  imageAlt: '날씨·대기질과 주변 운동 장소 탐색을 표현한 FitMap 3D 일러스트',
  description: '현재 위치의 날씨·대기질을 바탕으로 운동을 추천하고 주변 운동 장소를 찾는 서비스입니다. 로그인 후 즐겨찾기와 날짜별 이동 경로를 저장할 수 있습니다.',
  categories: ['web', 'api', 'major'],
  scale: 'major',
  tags: [
    { label: 'React', variant: 'neutral' },
    { label: 'Spring Boot', variant: 'success' },
    { label: 'Node.js', variant: 'info' },
    { label: 'Docker', variant: 'neutral' },
  ],
  status: { type: 'featured', label: '대형 프로젝트' },
  meta: [{ type: 'stack', text: 'React · Spring Boot · Node API · H2' }],
  codeHref: projectLinks.capstone,
  demoHref: projectDemoLinks.capstone,
  demoLabel: '사이트 보기',
}

export const additionalProjects = [
  capstoneProject,
  {
    id: 'exhibition',
    title: '조별 온라인 전시관',
    image: exhibitionImage,
    imageAlt: '팀별 작품·발표 자료와 프로젝트 링크를 표현한 온라인 전시관 3D 일러스트',
    description: '팀별 작품 설명과 발표 자료, 프로젝트 링크를 한곳에서 살펴볼 수 있는 온라인 전시관입니다.',
    categories: ['web'],
    tags: [{ label: 'React', variant: 'neutral' }, { label: 'TypeScript', variant: 'info' }, { label: 'Vite', variant: 'neutral' }],
    codeHref: projectLinks.exhibition,
    demoHref: projectDemoLinks.exhibition,
    demoLabel: '사이트 보기',
  },
  {
    id: 'senser',
    title: 'Senser · 실내 온습도 모니터링',
    image: senserImage,
    imageAlt: 'ESP8266·DHT11과 온습도·LED 상태 화면을 표현한 3D 일러스트',
    description: 'ESP8266과 DHT11 센서의 온습도를 React 화면에서 확인합니다. 기준값 경고, LED 상태와 연결 실패 안내를 제공합니다.',
    categories: ['web', 'iot'],
    tags: [{ label: 'React', variant: 'neutral' }, { label: 'ESP8266', variant: 'info' }, { label: 'DHT11', variant: 'neutral' }],
    meta: [{ type: 'code', text: '센서 · HTTP API · 웹 모니터링' }],
    codeHref: projectLinks.senser,
  },
  {
    id: 'leafy',
    title: 'Leafy · ESP32 스마트팜',
    image: leafyImage,
    imageAlt: '식물·ESP32와 환경 센서 대시보드를 표현한 Leafy 3D 일러스트',
    description: '온습도·토양 수분·밝기·수위를 확인하는 스마트팜 웹과 펌웨어입니다. 데모 모드와 제어 로직을 제공하며, 실제 펌프·팬 출력은 현재 비활성 상태입니다.',
    categories: ['web', 'iot'],
    tags: [{ label: 'React', variant: 'neutral' }, { label: 'TypeScript', variant: 'info' }, { label: 'ESP32', variant: 'neutral' }],
    meta: [{ type: 'code', text: '웹 대시보드 · Arduino 펌웨어' }],
    codeHref: projectLinks.leafy,
    demoHref: projectDemoLinks.leafy,
    demoLabel: '사이트 보기',
  },
]
