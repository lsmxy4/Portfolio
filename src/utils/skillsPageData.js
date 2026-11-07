import { projectLinks } from '../data/projectLinks'

// README, package.json, Gradle 의존성 및 소스에서 확인한 프로젝트만 집계합니다.
export const skillProjects = {
  capstone: { title: 'FitMap', href: projectLinks.capstone },
  smartrad: { title: 'SmartRAD', href: projectLinks.smartrad },
  picstory: { title: 'Picstory', href: projectLinks.picstory },
  logistics: { title: 'Fresh Chain', href: projectLinks['fresh-chain'] },
  exhibition: { title: '온라인 전시관', href: projectLinks.exhibition },
  senser: { title: 'Senser', href: projectLinks.senser },
  leafy: { title: 'Leafy', href: projectLinks.leafy },
}

export const skillCategories = [
  {
    key: 'backend', title: 'Backend', label: 'API & BUSINESS LOGIC', color: 'var(--color-primary)',
    description: '인증과 데이터 처리부터 외부 API 연동까지, 서비스의 동작을 연결합니다.',
    skills: [
      { name: 'Java · Spring Boot', projects: ['capstone', 'smartrad', 'picstory'] },
      { name: 'Node.js · API Server', projects: ['capstone'] },
      { name: 'Spring Security', projects: ['smartrad', 'picstory'] },
      { name: 'JWT', projects: ['smartrad'] },
    ],
  },
  {
    key: 'database', title: 'Database', label: 'PERSISTENCE & DATA', color: 'var(--skill-green)',
    description: '프로젝트에 맞는 저장소와 데이터 접근 방식을 사용합니다.',
    skills: [
      { name: 'MySQL', projects: ['smartrad', 'picstory'] },
      { name: 'H2 · JDBC', projects: ['capstone'] },
      { name: 'Spring Data JPA', projects: ['smartrad', 'picstory'] },
    ],
  },
  {
    key: 'frontend', title: 'Frontend', label: 'INTERFACE & INTERACTION', color: 'var(--skill-blue)',
    description: 'React로 사용자 흐름을 구현하고 백엔드·장치 데이터와 연결합니다.',
    skills: [
      { name: 'React', projects: ['capstone', 'smartrad', 'picstory', 'logistics', 'exhibition', 'senser', 'leafy'] },
      { name: 'JavaScript', projects: ['picstory', 'senser'] },
      { name: 'TypeScript', projects: ['capstone', 'smartrad', 'logistics', 'exhibition', 'leafy'] },
      { name: 'Next.js', projects: ['smartrad'] },
      { name: 'Vite', projects: ['capstone', 'picstory', 'logistics', 'exhibition', 'senser', 'leafy'] },
    ],
  },
  {
    key: 'devops', title: 'DevOps & Tools', label: 'BUILD & DELIVERY', color: 'var(--skill-violet)',
    description: '버전 관리, 컨테이너 배포와 파일 저장소를 프로젝트에 연결합니다.',
    skills: [
      { name: 'Git · GitHub', projects: ['capstone', 'smartrad', 'picstory', 'logistics', 'exhibition', 'senser', 'leafy'] },
      { name: 'Docker Compose · Nginx · Caddy', projects: ['capstone'] },
      { name: 'AWS S3', projects: ['smartrad', 'picstory'] },
      { name: 'Vercel', projects: ['logistics', 'exhibition'] },
    ],
  },
  {
    key: 'iot', title: 'IoT & Embedded', label: 'DEVICE TO WEB', color: 'var(--skill-amber)',
    description: '센서 측정과 장치 상태를 웹 화면으로 연결합니다. Leafy의 실제 펌프·팬 출력은 현재 비활성 상태입니다.',
    skills: [
      { name: 'ESP8266', projects: ['senser'] },
      { name: 'ESP32', projects: ['leafy'] },
      { name: 'Arduino · DHT11', projects: ['senser', 'leafy'] },
      { name: 'HTTP 장치 상태 연동', projects: ['senser', 'leafy'] },
    ],
  },
]

export const skillProjectCount = Object.keys(skillProjects).length
export const skillCount = skillCategories.reduce((total, category) => total + category.skills.length, 0)
