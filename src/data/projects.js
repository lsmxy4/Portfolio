import { capstoneProject } from './additionalProjects'
import freshChainImage from '../assets/sessionImg/fresh-chain-illustration.png'
import smartradImage from '../assets/sessionImg/smartrad-illustration.png'
import { projectLinks, projectDemoLinks } from './projectLinks'

// 기존 팀 프로젝트의 이름과 저장소를 활용합니다.
// 역할, 기간, 기술, 성과는 자료 확인 후 추가합니다.
export const featuredProjects = [
  {
    ...capstoneProject,
    summary: capstoneProject.description,
    github: capstoneProject.codeHref,
    demo: capstoneProject.demoHref,
    type: '대형 프로젝트',
    featuredLabel: '대형 프로젝트 · CAPSTONE',
    visual: 'radVisual',
  },
  { id: 'smartrad', image: smartradImage, imageAlt: '인사·근태·급여 관리를 표현한 SmartRAD 3D 일러스트', title: 'SmartRAD', type: '팀 · 대형 프로젝트', featuredLabel: '대형 프로젝트 · TEAM', summary: '팀으로 함께 진행한 프로젝트입니다. 저장소에서 프로젝트 코드와 기록을 확인할 수 있습니다.', github: projectLinks.smartrad, visual: 'radVisual', mark: 'SR', caption: 'A COLLABORATIVE PROJECT' },
  { id: 'fresh-chain', image: freshChainImage, imageAlt: '냉장 물류·창고·온도 관리를 표현한 Fresh Chain 3D 일러스트', title: 'Fresh Chain', type: '팀 · 대형 프로젝트', featuredLabel: '대형 프로젝트 · TEAM', summary: '콜드체인 물류를 주제로 한 웹 프로젝트입니다. 웹사이트와 물류 관리 대시보드를 다룹니다.', github: projectLinks['fresh-chain'], demo: projectDemoLinks['fresh-chain'], visual: 'chainVisual', mark: 'FC', caption: 'LOGISTICS WEB PROJECT' },
]
