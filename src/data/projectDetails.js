import { miniProjectDetails } from './miniProjectDetails'
import { projectLinks, projectDemoLinks, logisticsDashboardUrl } from './projectLinks'
import fitmapImage from '../assets/sessionImg/fitmap-illustration.png'
import smartradImage from '../assets/sessionImg/smartrad-illustration.png'
import freshChainImage from '../assets/sessionImg/fresh-chain-illustration.png'

// 저장소 README·의존성·소스 기준의 프로젝트 구조입니다.
// 개인 담당 역할·기간·성과는 확인 전까지 기재하지 않습니다.
export const projectDetails = {
  ...miniProjectDetails,
  capstone: {
    title: 'FitMap', subtitle: '날씨와 장소를 연결하는 운동 추천 서비스', kind: '캡스톤 디자인 · 대형 프로젝트',
    image: fitmapImage, imageAlt: '지도와 날씨·운동 장소를 표현한 FitMap 컨셉 일러스트',
    overview: '현재 위치의 날씨와 대기질을 살펴보고, 환경에 맞는 운동과 주변 운동 장소를 찾을 수 있는 웹 서비스입니다. 게스트는 기본 정보를 둘러보고, 로그인한 사용자는 장소 즐겨찾기와 날짜별 이동 경로를 저장할 수 있습니다.',
    github: projectLinks.capstone, site: projectDemoLinks.capstone,
    technologies: ['React', 'TypeScript', 'Vite', 'SCSS', 'Java 21', 'Spring Boot', 'Node.js', 'H2', 'JDBC', 'Docker Compose', 'Nginx', 'Caddy'],
    features: [
      { title: '환경에 맞는 운동 찾기', text: '날씨·대기질·자외선 정보를 모아 운동 선택과 추천에 활용합니다.' },
      { title: '주변 운동 장소 탐색', text: '지도와 반경 검색, 실내·실외 필터로 운동 장소를 찾고 즐겨찾기에 저장합니다.' },
      { title: '나만의 기록 관리', text: '이메일 로그인 후 날짜별 이동 경로와 저장한 장소를 마이페이지에서 확인합니다.' },
    ],
    steps: [
      { title: 'React 화면과 지도 연결', text: 'React·TypeScript·SCSS로 서비스 화면을 구성하고 Kakao Maps와 브라우저 위치 정보를 연결했습니다. 운동 추천과 시설 이미지 선택은 프런트엔드에서 처리합니다.' },
      { title: '외부 API 서버 분리', text: 'Node.js API 서버가 기상청·AirKorea·Kakao 등의 외부 데이터를 조회하고 가공합니다. 인증·사용자 데이터 API와 역할을 분리한 구조입니다.' },
      { title: '인증과 저장 기능 구성', text: 'Spring Boot·JDBC·파일 기반 H2로 계정, 로그인 세션, 즐겨찾기와 경로 기록을 관리합니다. 비밀번호는 BCrypt로 저장하고 HttpOnly 세션 쿠키를 사용합니다.' },
      { title: '컨테이너로 배포', text: 'Docker Compose로 프런트엔드·Node API·Spring Boot를 구성하고, Caddy의 HTTPS와 Nginx 경로 분기로 각 서비스에 요청을 전달합니다.' },
    ],
    architecture: ['브라우저 · React', 'Caddy · HTTPS', 'Nginx · 정적 화면 / API 분기', 'Spring Boot → H2  /  Node API → 외부 데이터'],
    note: '현재 이메일 로그인을 제공합니다. 카카오 로그인과 비밀번호 찾기는 비활성 상태입니다.',
    sources: [{ label: '프로젝트 README', href: `${projectLinks.capstone}/blob/main/README.md` }, { label: '백엔드 API 문서', href: `${projectLinks.capstone}/blob/main/backend/README.md` }],
  },
  smartrad: {
    title: 'SmartRAD', subtitle: '인사와 근태, 급여를 한곳에서 관리하는 ERP', kind: '팀 프로젝트 · 대형 프로젝트',
    image: smartradImage, imageAlt: '직원·근태·급여 관리 화면을 표현한 SmartRAD 컨셉 일러스트',
    overview: '직원·부서 정보, 출퇴근과 휴가, 급여 등 조직 운영에 필요한 데이터를 관리하는 웹 시스템입니다. 관리자와 직원의 역할에 따라 다른 대시보드를 보여주고, 각 업무 영역을 별도 화면과 API로 나누었습니다.',
    github: projectLinks.smartrad, site: null,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'MySQL', 'Flyway', 'AWS S3'],
    features: [
      { title: '역할별 대시보드', text: '관리자·직원 역할에 따라 화면을 분리하고 직원 현황, 근태와 급여 데이터를 요약합니다.' },
      { title: '인사·근태 업무 관리', text: '직원·부서·발령, 출퇴근, 휴가 신청과 승인 등 업무 영역을 화면과 API로 구성합니다.' },
      { title: '급여·문서 데이터 처리', text: '급여 관련 조회·처리 기능과 직원 목록 Excel 내보내기, 파일 저장 기능을 제공합니다.' },
    ],
    steps: [
      { title: '업무별 화면 구성', text: 'Next.js App Router와 React·TypeScript로 인사·근태·휴가·급여 등의 화면을 나눴습니다. 대시보드는 사용자 역할에 따라 관리자용 또는 직원용 컴포넌트를 렌더링합니다.' },
      { title: '도메인 단위 API 설계', text: 'Spring Boot의 Controller·Service·Repository 계층을 업무 도메인별로 구성했습니다. 요청 DTO와 응답 DTO를 사용하며 직원 조회 API에는 검색·필터·페이지네이션을 연결했습니다.' },
      { title: '인증과 데이터 관리', text: 'Spring Security·JWT로 인증을 구성하고, Spring Data JPA·MySQL로 데이터를 다룹니다. Flyway 의존성과 마이그레이션 구조로 데이터베이스 변경을 관리합니다.' },
    ],
    architecture: ['브라우저 · Next.js / React', 'JWT 인증 요청', 'Spring Boot · 도메인별 API', 'Spring Data JPA → MySQL'],
    note: '현재 공개 배포 사이트는 없습니다. 소스 코드는 GitHub에서 확인할 수 있습니다.',
    sources: [{ label: '프런트엔드 구성', href: `${projectLinks.smartrad}/tree/main/frontend` }, { label: '백엔드 구성', href: `${projectLinks.smartrad}/tree/main/backend` }],
  },
  'fresh-chain': {
    title: 'Fresh Chain', subtitle: '콜드체인 물류를 소개하고 운영 화면을 보여주는 웹 프로젝트', kind: '팀 프로젝트 · 대형 프로젝트',
    image: freshChainImage, imageAlt: '냉장 창고와 배송·온도 정보를 표현한 Fresh Chain 컨셉 일러스트',
    overview: '콜드체인 물류 서비스를 소개하는 랜딩 사이트와 별도 물류 관리 데모를 구성한 프로젝트입니다. 소개 페이지에서 서비스와 모니터링 흐름을 안내하고, 데모에서는 주문·배송·창고 등 물류 운영 현황을 대시보드 형태로 보여줍니다.',
    github: projectLinks['fresh-chain'], site: projectDemoLinks['fresh-chain'], dashboard: logisticsDashboardUrl,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'IntersectionObserver'],
    features: [
      { title: '서비스 소개 사이트', text: 'Hero·회사 소개·서비스·모니터링·문의 영역으로 콜드체인 서비스를 소개합니다.' },
      { title: '물류 운영 대시보드', text: '주문·배송·창고·기사·알림 등의 정보를 목업 데이터 기반으로 한눈에 보여주는 데모입니다.' },
      { title: '반응형과 인터랙션', text: '모바일 사이드바, 스크롤 등장, 숫자 카운트업과 차트 애니메이션을 적용하고 모션 감소 설정을 고려합니다.' },
    ],
    steps: [
      { title: '디자인을 컴포넌트로 분리', text: 'Figma 레이아웃을 React·TypeScript·Tailwind CSS로 구성했습니다. 랜딩의 각 섹션을 컴포넌트로 나누고 공통 스타일과 아이콘을 재사용합니다.' },
      { title: '소개와 데모를 별도 구성', text: '메인 랜딩 사이트와 대시보드 데모를 별도 저장소로 구성하고 링크로 연결했습니다. 데모는 공통 사이드바 레이아웃과 라우터 아래에 화면을 배치합니다.' },
      { title: '목업 데이터와 모션 연결', text: '대시보드 데이터 배열을 UI와 연결하고, IntersectionObserver 기반 등장 효과와 requestAnimationFrame 기반 숫자 카운트업으로 변화를 표현합니다.' },
    ],
    architecture: ['랜딩 사이트 · React / Tailwind', '데모 링크로 이동', 'React Router · 공통 대시보드 레이아웃', '목업 데이터 → KPI / 차트 / 운영 카드'],
    note: '대시보드는 목업 데이터 기반 데모이며, README 기준으로 일부 메뉴는 후속 구현을 위한 기본 화면입니다.',
    sources: [{ label: '랜딩 README', href: `${projectLinks['fresh-chain']}/blob/main/README.md` }, { label: '대시보드 README', href: 'https://github.com/lsmxy4/Responsive_Logistics_KDT_3_Demo/blob/main/README.md' }],
  },
}
