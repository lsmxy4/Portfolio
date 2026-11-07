import { projectsPageItems } from '../utils/projectsPageData'

// 저장소에서 확인한 기능과 제작 구조만 기록합니다.
// 역할·기간·성과 수치는 확인 전까지 추가하지 않습니다.
const specifications = {
  'weather-app': {
    subtitle: '도시를 검색해 지금의 날씨를 확인하는 앱',
    overview: '도시 이름을 입력하면 해당 지역의 현재 날씨와 기온, 습도를 확인할 수 있습니다. 검색한 도시의 좌표를 먼저 찾고, 그 좌표로 날씨 정보를 조회하는 흐름을 React로 구성했습니다.',
    technologies: ['React', 'JavaScript', 'Vite', 'OpenWeather API'],
    features: [
      { title: '도시 이름으로 검색', text: '검색 버튼이나 Enter 키로 도시의 날씨를 조회합니다.' },
      { title: '현재 날씨 카드', text: '지역명, 날씨 설명·아이콘과 기온·습도를 한 카드에 표시합니다.' },
      { title: '날씨에 맞는 배경', text: '응답의 날씨 ID를 사용해 화면 배경을 변경합니다.' },
    ],
    steps: [
      { title: '검색과 날씨 조회 분리', text: '도시 이름으로 좌표를 찾는 함수와 좌표로 날씨를 조회하는 함수를 분리하고 순서대로 호출합니다.' },
      { title: '응답을 상태와 UI에 연결', text: '검색어·날씨·요청 상태를 React 상태로 관리하고 WeatherCard에 조회 결과를 전달합니다. 날씨 ID에 따른 배경은 useMemo로 계산합니다.' },
    ],
    architecture: ['도시 입력', '도시명 → 좌표 조회', '좌표 → 현재 날씨 조회', '날씨 카드 · 배경 업데이트'],
    note: '현재 날씨 조회 프로젝트이며, 시간별 예보·PWA·맞춤 알림은 소개 범위에 포함하지 않았습니다.',
    sourcePath: 'src/App.jsx',
  },
  'emotion-diary': {
    subtitle: '날짜와 감정으로 남기는 하루의 기록',
    overview: '날짜와 다섯 단계의 감정을 선택해 일기를 작성하고, 월별 목록에서 다시 살펴볼 수 있는 기록 앱입니다. 일기 조회·작성·수정 화면을 React Router로 나누고 브라우저에 기록을 보관합니다.',
    technologies: ['React', 'JavaScript', 'React Router', 'Context API', 'useReducer', 'localStorage'],
    features: [
      { title: '다섯 가지 감정 선택', text: '완전 좋음부터 완전 나쁨까지 감정을 선택하고 일기 내용을 기록합니다.' },
      { title: '월별 일기 조회', text: '이전·다음 달로 이동하며 해당 월에 작성한 일기를 모아봅니다.' },
      { title: '작성·수정·삭제', text: '일기 화면과 편집 화면을 나누고 브라우저 저장소에 변경을 반영합니다.' },
    ],
    steps: [
      { title: '페이지와 편집기 분리', text: 'Home·New·Diary·Edit 등의 페이지를 라우팅하고, 작성과 수정에 공통 Editor 컴포넌트를 사용합니다.' },
      { title: '기록의 상태 관리', text: 'useReducer로 초기화·작성·수정·삭제 작업을 처리하고 Context로 상태와 변경 함수를 공유합니다. 변경된 기록은 localStorage에 저장합니다.' },
    ],
    architecture: ['React Router · 월별 목록 / 작성 / 수정', 'Editor · 날짜 / 감정 / 내용', 'Context · Reducer', 'localStorage · 기록 저장'],
    note: '기록은 사용 중인 브라우저에 저장되며 계정 기반 서버 동기화 서비스는 아닙니다.',
    sourcePath: 'src/App.jsx',
  },
  'wifi-map': {
    subtitle: '지도와 목록으로 찾아보는 공공 와이파이',
    overview: '공공 와이파이 데이터를 지도와 목록으로 살펴보고, 장소·주소로 검색하거나 자주 찾는 장소를 즐겨찾기에 보관하는 프로젝트입니다. 저장소의 wifi.json 데이터를 Kakao 지도 마커와 연결했습니다.',
    technologies: ['React', 'JavaScript', 'React Router', 'Kakao Maps', 'Context API', 'localStorage'],
    features: [
      { title: '장소·주소 검색', text: '장소명과 상세 주소에서 검색어가 포함된 데이터를 찾아 목록에 표시합니다.' },
      { title: '지도와 목록 연결', text: '목록의 장소를 선택하면 지도 중심과 정보 창을 해당 장소로 이동합니다.' },
      { title: '즐겨찾기 보관', text: '관심 장소를 추가·제거하고 브라우저에 저장합니다.' },
    ],
    steps: [
      { title: '데이터 필터링과 지도 분리', text: 'MapPage에서 JSON 데이터를 검색하고 표시 대상을 계산해 MapView에 전달합니다. 기본·검색 목록은 최대 50개를 표시합니다.' },
      { title: '외부 지도와 React 상태 연결', text: '전용 로더 훅으로 Kakao SDK를 준비하고 ref로 지도·마커·정보 창을 관리합니다. Context와 즐겨찾기 훅으로 화면 간 저장 상태를 공유합니다.' },
    ],
    architecture: ['wifi.json · 저장된 장소 데이터', 'MapPage · 검색 / 장소 선택', 'Kakao Maps · 마커 / 정보 창', '즐겨찾기 Context → localStorage'],
    note: '저장된 JSON 기반 검색이며, 실시간 와이파이 수집이나 현재 위치 자동 탐색으로 소개하지 않습니다.',
    sourcePath: 'src/page/MapPage.jsx',
  },
  'router-study': {
    subtitle: '페이지 이동과 공통 상태를 익힌 라우터 학습',
    overview: '소개·회사·게시판·할 일 페이지를 React Router로 연결하며 기본 경로와 상세 경로를 학습한 프로젝트입니다. 공통 Header·Footer 안에서 페이지를 전환하고, 할 일 관련 화면은 Context로 감쌌습니다.',
    technologies: ['React', 'JavaScript', 'React Router', 'Context API'],
    features: [
      { title: '여러 페이지 이동', text: 'Home·About·Company·Board·Todo 화면을 경로별로 연결합니다.' },
      { title: '동적 상세 경로', text: '소개·할 일·게시판에 ID를 포함한 상세 경로를 구성합니다.' },
      { title: '없는 경로 안내', text: '일치하지 않는 주소는 NotFound 화면으로 연결합니다.' },
    ],
    steps: [
      { title: '공통 레이아웃과 Routes', text: 'Header·Footer를 공통 영역으로 두고 Routes·Route로 페이지 컴포넌트를 배치했습니다.' },
      { title: '경로와 상태 연결', text: '/about/:id·/todo/:id·/board/:id로 상세 화면을 연결하고 TodoProvider로 관련 상태를 공유하는 구조를 만들었습니다.' },
    ],
    architecture: ['공통 Header / Footer', 'React Router · 목록 / 상세 경로', '페이지 컴포넌트', 'TodoProvider · 공유 상태'],
    note: '라우팅과 화면 구성 학습에 초점을 둔 프로젝트입니다.', sourcePath: 'src/App.jsx',
  },
  'tocobo-project': {
    subtitle: '브랜드 사이트의 화면과 움직임을 구현한 클론 프로젝트',
    overview: 'TOCOBO를 바탕으로 브랜드 소개 화면을 구성한 프로젝트입니다. Hero·컬렉션·스킨케어·리뷰 등의 섹션을 React 컴포넌트로 나누고 SCSS와 스크롤 인터랙션을 연결했습니다.',
    technologies: ['React', 'JavaScript', 'Vite', 'SCSS', 'AOS', 'Swiper'],
    features: [
      { title: '섹션별 브랜드 화면', text: 'Hero·Follow·Collection·SkinCare·Reviews·Instagram 영역을 구성합니다.' },
      { title: '모바일 메뉴와 배너', text: '모바일 내비게이션 열림 상태와 상단 배너 표시를 관리합니다.' },
      { title: '스크롤 인터랙션', text: 'AOS 등장 효과와 상단 이동 버튼, 스크롤에 따른 헤더 상태를 연결합니다.' },
    ],
    steps: [
      { title: '페이지를 재사용 단위로 분리', text: '공통 Header·Footer와 각 콘텐츠 섹션을 별도 컴포넌트로 나누고 콘텐츠 배열을 util 파일에서 관리합니다.' },
      { title: '스타일과 상태를 함께 구성', text: 'SCSS로 화면을 구성하고, React 상태로 모바일 메뉴·배너·스크롤 상태를 관리합니다. 앱 진입 시 AOS를 초기화해 등장 효과를 적용합니다.' },
    ],
    architecture: ['App · 공통 상태', 'Header / 섹션 컴포넌트 / Footer', 'SCSS · 반응형 스타일', 'AOS · 스크롤 등장'],
    note: '브랜드 화면 구현을 위한 클론 프로젝트입니다. 실제 상품 주문·결제 기능으로 소개하지 않습니다.', sourcePath: 'src/App.jsx',
  },
  picstory: {
    subtitle: '읽은 책의 흔적을 남기는 BookTrace',
    overview: '저장소명은 Picstory이며, 서비스 첫 화면은 BookTrace라는 이름으로 독서 기록을 소개합니다. 게시글·이미지·태그·프로필 화면과 Spring Boot API를 연결한 웹 프로젝트입니다.',
    technologies: ['React', 'JavaScript', 'React Router', 'SCSS', 'Axios', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'AWS S3'],
    features: [
      { title: '독서 기록 작성', text: '제목·내용·카테고리·이미지를 입력해 기록을 작성합니다.' },
      { title: '태그로 기록 정리', text: '태그를 추가·삭제하고 게시글에 연결하는 화면을 제공합니다.' },
      { title: '계정과 프로필', text: '로그인·회원가입·프로필 화면과 계정 API를 구성합니다.' },
    ],
    steps: [
      { title: '화면과 API 호출 분리', text: 'React Router로 공개·인증 화면과 게시글·프로필 경로를 구성하고 Axios 기반 API 함수로 서버 호출을 분리합니다.' },
      { title: '게시글과 파일 데이터 연결', text: 'Spring Boot의 Controller·Service·Repository로 회원·게시글·태그 데이터를 처리하고 JPA·MySQL을 사용합니다. 이미지 업로드는 S3 관련 API와 연결합니다.' },
    ],
    architecture: ['React · 게시글 / 프로필 화면', 'Axios · API 호출', 'Spring Boot · 회원 / 게시글 / 태그', 'JPA → MySQL  /  파일 → S3'],
    note: '현재 포트폴리오에 연결할 공개 배포 주소는 등록되어 있지 않습니다.', sourcePath: 'frontend/src/pages/posts/PostCreate.jsx',
  },
  exhibition: {
    subtitle: '조별 아이디어와 결과물을 모은 온라인 전시관',
    overview: '캡스톤 디자인의 팀별 작품과 발표 자료, 프로젝트 링크를 살펴보는 온라인 전시관입니다. 관심 분야를 선택한 뒤 조 이름·작품명으로 검색하고, 카드에서 자료를 열어볼 수 있습니다.',
    technologies: ['React', 'TypeScript', 'Vite', 'Vercel'],
    features: [
      { title: '분야별 작품 탐색', text: '카테고리를 선택해 해당 분야의 프로젝트를 모아봅니다.' },
      { title: '팀·작품 검색', text: '팀명·작품명·설명에서 검색어와 일치하는 항목을 찾습니다.' },
      { title: '발표 자료와 사이트 연결', text: '발표 PDF는 대화상자로, 프로젝트 주소는 새 창으로 연결합니다.' },
    ],
    steps: [
      { title: '전시 데이터를 별도로 관리', text: 'teams·categories 데이터와 카드 컴포넌트를 분리해 팀별 설명·자료·프로젝트 주소를 관리합니다.' },
      { title: '탐색 상태와 자료 열기', text: '선택 분야와 검색어로 작품 목록을 계산하고 자료 주소의 프로토콜·파일 형식에 따라 링크 또는 대화상자를 사용합니다.' },
    ],
    architecture: ['teams / categories 데이터', '분야 선택 · 검색 필터', 'TeamCard · 작품 목록', 'PDF 자료 대화상자 / 외부 프로젝트 링크'],
    note: '등록된 발표 자료와 프로젝트 주소에 따라 열리는 콘텐츠가 달라집니다.', sourcePath: 'src/App.tsx',
  },
  senser: {
    subtitle: '실내 온습도를 웹으로 확인하는 센서 프로젝트',
    overview: 'ESP8266과 DHT11로 측정한 온도·습도를 React 웹 화면에서 확인하는 프로젝트입니다. 장치의 HTTP 응답을 조회해 측정값·경고·LED 상태를 표시합니다.',
    technologies: ['React', 'JavaScript', 'Vite', 'ESP8266', 'Arduino', 'DHT11', 'HTTP'],
    features: [
      { title: '센서 상태 확인', text: '현재 온습도와 장치에서 받은 기준값을 함께 표시합니다.' },
      { title: '경고·LED 표시', text: '기준값 경고와 LED의 ON/OFF 상태를 확인합니다.' },
      { title: '연결 실패 안내', text: '장치에 연결할 수 없을 때 안내하는 모바일 대응 화면입니다.' },
    ],
    steps: [
      { title: '센서 측정과 상태 API', text: 'Arduino 스케치에서 센서를 읽고 LED를 제어합니다. ESP8266의 /status 응답으로 측정값과 경고·LED 상태를 제공합니다.' },
      { title: '웹에서 장치 상태 조회', text: 'React 화면이 설정한 ESP8266 주소를 조회해 상태를 반영합니다. 웹과 보드는 서로 통신할 수 있는 네트워크에 있어야 합니다.' },
    ],
    architecture: ['DHT11 · 온습도 측정', 'ESP8266 · LED / 상태 HTTP API', 'React · 상태 조회', '측정값 · 경고 · 연결 안내'],
    note: '실제 센서 보드와 네트워크 연결이 필요한 실습 프로젝트로, 공개 사이트 링크는 등록하지 않았습니다.', sourcePath: 'README.md',
  },
  leafy: {
    subtitle: '센서와 웹 대시보드를 연결한 ESP32 스마트팜',
    overview: '온습도·토양 수분·밝기·수위를 확인하는 스마트팜 대시보드와 펌웨어입니다. 웹에서 상태를 확인하고 제어 기준을 설정하며, 실물 없이 화면과 제어 흐름을 살펴보는 데모 모드도 제공합니다.',
    technologies: ['React', 'TypeScript', 'Vite', 'ESP32', 'Arduino', 'DHT11', 'PlatformIO', 'HTTP'],
    features: [
      { title: '환경 모니터링', text: '온습도·토양 수분·밝기·수위와 경고·장치 상태를 확인합니다.' },
      { title: '제어 기준과 보정', text: '급수·환기 기준과 토양 센서 보정값을 설정하는 화면을 제공합니다.' },
      { title: '데모와 수신 기록', text: '실물 없이 데모를 사용하고 최근 수신 기록을 CSV로 내보낼 수 있습니다.' },
    ],
    steps: [
      { title: '웹과 펌웨어 구성 분리', text: 'react 폴더에서 React·TypeScript 대시보드를, arduino 폴더에서 ESP32 펌웨어를 관리합니다. HTTP로 센서 상태와 제어 요청을 연결합니다.' },
      { title: '실물 연결과 데모 구분', text: '데모 모드는 실제 장치에 명령을 보내지 않습니다. 연결이 끊기면 이전 수신값임을 표시하고 제어를 비활성화합니다. 펌프 시간 제한과 물 부족 등 제어 조건도 별도로 처리합니다.' },
    ],
    architecture: ['환경 센서 · ESP32', '펌웨어 · 상태 / 제어 API', 'React 대시보드 · 실물 / 데모', '환경 설정 · 경고 · 수신 기록'],
    note: '실제 펌프·팬은 구동 부품이 미선정되어 기본 비활성 상태입니다. 공개 사이트에서 실물 제어가 보장되는 것은 아니며, 기록은 브라우저 세션 내에서 유지됩니다.', sourcePath: 'README.md',
  },
}

export const miniProjectDetails = Object.fromEntries(Object.entries(specifications).map(([id, details]) => {
  const project = projectsPageItems.find((item) => item.id === id)
  if (!project) throw new Error(`프로젝트 데이터 누락: ${id}`)
  return [id, {
    title: project.title,
    kind: '미니 프로젝트',
    image: project.image,
    imageAlt: project.imageAlt || `${project.title} 소개 이미지`,
    github: project.codeHref,
    site: project.demoHref || null,
    ...details,
    sources: [{ label: details.sourcePath === 'README.md' ? '프로젝트 README' : '구현 코드 보기', href: `${project.codeHref}/blob/main/${details.sourcePath}` }],
  }]
}))
