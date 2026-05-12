import spring from "../assets/icons/Spring.png";
import react from "../assets/icons/React.png";
import JS from "../assets/icons/JavaScript.png";
import Docker from "../assets/icons/Docker.png"; // 이 부분이 빠져있었습니다!
import GitHub from "../assets/icons/GitHub.png";
import Git from "../assets/icons/Git.png";
import Figma from "../assets/icons/Figma.png";
import Vite from "../assets/icons/Vite.png";

export const categories = [
    {
        category: 'BACKEND',
        title: 'Spring Boot',
        version: 'v3.5.11',
        icon: spring,
        iconColor: '#6DB33F',
        bgGlow: 'rgba(109, 179, 63, 0.1)'
    },
    {
        category: 'FRONTEND',
        title: 'React',
        version: 'v18',
        icon: react,
        iconColor: '#61DAFB',
        bgGlow: 'rgba(97, 218, 251, 0.1)'
    },
    {
        category: 'FRONTEND',
        title: 'JavaScript',
        version: 'ES2024',
        icon: JS,
        iconColor: '#F7DF1E',
        bgGlow: 'rgba(247, 223, 30, 0.1)'
    },
    {
        category: 'INFRA / DEVOPS',
        title: 'Docker',
        subtitle: '컨테이너',
        icon: Docker,
        iconColor: '#2496ED',
        bgGlow: 'rgba(36, 150, 237, 0.1)'
    },
    {
        category: 'INFRA / DEVOPS',
        title: 'GitHub Actions',
        subtitle: 'CI/CD',
        icon: GitHub,
        iconColor: '#2088FF',
        bgGlow: 'rgba(32, 136, 255, 0.1)'
    },
    {
        category: 'INFRA / DEVOPS',
        title: 'Git',
        subtitle: '버전관리',
        icon: Git,
        iconColor: '#F05032',
        bgGlow: 'rgba(240, 80, 50, 0.1)'
    },
    {
        category: 'INFRA / DEVOPS',
        title: 'Figma',
        subtitle: 'UI 협업',
        icon: Figma,
        iconColor: '#F24E1E',
        bgGlow: 'rgba(242, 78, 30, 0.1)'
    },
    {
        category: 'INFRA / DEVOPS',
        title: 'Vite',
        subtitle: '빌드 도구',
        icon: Vite,
        iconColor: '#646CFF',
        bgGlow: 'rgba(100, 108, 255, 0.1)'
    }
];