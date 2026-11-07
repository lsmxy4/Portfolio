import weather from "../assets/sessionImg/weather-illustration.png"
import emotion from "../assets/sessionImg/emotion-illustration.png"

export const miniProjectList = [
    {
        title: '날씨 확인앱',
        desc: '도시를 검색해 현재 날씨와 기온, 습도를 확인하는 날씨 앱입니다.',
        thumb: weather,
        tags: [
            { label: 'React', variant: 'neutral' },
            { label: 'JavaScript', variant: 'javaScript' },
        ],
        cta: [
            { label: 'GitHub', url: 'https://github.com/lsmxy4/wether' },
        ],
    },
    {
        title: '감정 일기장',
        desc: '자신의 오늘의 기분을 기록하고 설정할 수 있는 일기장입니다.',
        thumb: emotion,
        tags: [
            { label: 'React', variant: 'neutral' },
            { label: 'JavaScript', variant: 'javaScript' },
            { label: 'Figma', variant: 'figma' },
        ],
        cta: [
            { label: 'GitHub', url: 'https://github.com/lsmxy4/react-router-dom' },
        ],
    },
];