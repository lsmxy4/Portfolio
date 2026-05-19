import weather from "../assets/sessionImg/Weather.png"
import emotion from "../assets/sessionImg/Emotion.png"
import wordgame from "../assets/sessionImg/Wordgame.png"
import weatherlight from "../assets/sessionImg/WeatherLight.png"
import emotionlight from "../assets/sessionImg/EmotionLight.png"
import wordgamelight from "../assets/sessionImg/WordgameLight.png"

export const miniProjectList = [
    {
        title: '날씨 확인앱',
        desc: '전국 250개 측정소의 실시간 데이터를 수집·분석하여 사용자 위치 기반 맞춤 알림을 제공하는 PWA 서비스입니다.',
        thumb: weather,
        thumbLight: weatherlight,
        tags: [
            { label: 'React', variant: 'neutral' },
            { label: 'JavaScript', variant: 'javaScript' },
        ],
        cta: [
            { label: 'GitHub', url: 'https://github.com/example/beta' },
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
            { label: 'GitHub', url: 'https://github.com/example/gamma' },
        ],
    },
    {
        title: '끝말잇기',
        desc: '나혼자서 할수있는 끝말있기 게임입니다.',
        thumb: wordgame,
        tags: [
            { label: 'React', variant: 'neutral' },
            { label: 'JavaScript', variant: 'javaScript' },
        ],
        cta: [
            { label: 'GitHub', url: 'https://github.com/example/gamma' },
        ],
    },
];