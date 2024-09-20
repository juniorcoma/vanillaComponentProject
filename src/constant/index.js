export const SOCIAL_LIST = [
  {
    link: 'https://www.instagram.com/pq120wal/',
    name: 'instagram',
    iconSrc: '/src/asset/icons/insta.svg',
  },
  {
    link: 'https://github.com/juniorcoma',
    name: 'github',
    iconSrc: '/src/asset/icons/github.svg',
  },
];

export const CONTENT_MENU_LISt = [
  {
    title: 'About Me',
    description: '나는 누구일까요?',
  },
  {
    title: 'Problem-Solving Examples',
    description: '프로젝트 진행 중 겪었던 문제들을 어떻게 해결했는지 소개합니다.',
  },
  {
    title: 'Personal Project',
    description: '저의 기술과 열정을 보여주는 개인 프로젝트를 소개합니다.',
  },
  {
    title: 'Team Project',
    description: '협업 프로젝트의 세부 사항과 팀워크에 대해 다룹니다.',
  },
];

export const DEFAULT_PROGRAMMING_LANGUAGE_LIST = [
  {
    text: 'HTML',
    imgsrc: '/src/asset/image/HTML5.png',
  },
  {
    text: 'CSS',
    imgsrc: '/src/asset/image/CSS3.png',
  },
  {
    text: 'JavaScript',
    imgsrc: '/src/asset/image/JavaScript.png',
  },
  {
    text: 'TypeScript',
    imgsrc: '/src/asset/image/TypeScript.png',
  },
];

export const FRAMEWOKRS_LIBRARIES_LIST = [
  {
    text: 'REACT',
    imgsrc: '/src/asset/image/React.png',
  },
  {
    text: 'NEXT.js',
    imgsrc: '/src/asset/image/Next.js.png',
  },
];

export const STYLING_DESIGN_LIST = [
  {
    text: 'Tailwind',
    imgsrc: '/src/asset/image/Tailwind CSS.png',
  },
  {
    text: 'FIGMA',
    imgsrc: '/src/asset/image/Figma.png',
  },
];

export const VERSION_DEPLOYMENT_LIST = [
  {
    text: 'Github',
    imgsrc: '/src/asset/image/GitHub.png',
  },
  {
    text: 'Vercel',
    imgsrc: '/src/asset/image/Vercel.png',
  },
];

export const PROJECT_LIST = {
  personal: {
    yoogg: {
      imgList: [],
      title: 'YOO.GG',
      description:
        'RIOT API를 이용한 리그오브레전드의 모든 챔피언, 로테이션 챔피언, 뮤직비디오에 대한 정보를 찾을 수 있고 소환사를 검색하여 소환사의 다양한 정보를 제공하는 서비스 입니다.',
      projectPoint: [
        'Next의 route경로를 구축하여 RIOT API를 요청합니다.',
        '챔피언, 룬, 아이템 등 정적 데이터는 모두 서버 컴포넌트에서 요청해 빠른 렌더링을 실현하였습니다.',
        'metaData와 시멘틱 태그를 사용하여 SEO를 높였습니다.',
      ],
      technologiesStack: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
      link: [
        { name: 'github', link: '/', text: 'YOO.GG 깃허브 바로가기' },
        { name: 'figma', link: '/', text: 'YOO.GG 피그마 바로가기' },
        { name: 'site', link: '/', text: 'YOO.GG 사이트 바로가기' },
      ],
    },
    portfolio: {
      imgList: [],
      title: 'PORTFOLIO',
      description: '개인 포트폴리오 페이지입니다.',
      projectPoint: [
        '바닐라 자바스크립트로 React처럼 사용해보았습니다.',
        'class문법를 사용함으로써 객체지향 프로그래밍이 무엇인지 다시 한번 알게 되는 프로젝트였습니다. ',
        '더불어 라이브러리의 편리함을 다시한번 깨닫는 시간이었습니다.',
      ],
      technologiesStack: ['HTML', 'CSS', 'JavaScript'],
      link: [
        { name: 'github', link: '/' },
        { name: 'figma', link: '/' },
        { name: 'site', link: '/' },
      ],
    },
  },
  team: {},
};
