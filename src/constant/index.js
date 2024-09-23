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
      imgList: Array.from({ length: 6 }, (_, i) => `/src/asset/image/project/yoogg/slider${i + 1}.png`),
      title: 'YOO.GG',
      description:
        'RIOT API를 이용한 리그오브레전드의 모든 챔피언, 로테이션 챔피언, 뮤직비디오에 대한 정보를 찾을 수 있고 소환사를 검색하여 소환사의 다양한 정보를 제공하는 서비스 입니다.',
      projectPoint: [
        'Next의 route경로를 구축하여 RIOT API를 요청합니다.',
        '챔피언, 룬, 아이템 등 정적 데이터는 모두 서버 컴포넌트에서 요청해 빠른 렌더링을 실현하였습니다.',
        'metaData와 시멘틱 태그를 사용하여 SEO를 높였습니다.',
      ],
      technologiesStack: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
      links: [
        {
          name: 'github',
          link: 'https://github.com/juniorcoma/YOO.GG',
          text: '깃허브 바로가기',
          imgsrc: '/src/asset/image/GitHub.png',
        },
        {
          name: 'figma',
          link: 'https://www.figma.com/design/9KoKnbwl1rQLt1jzROwTgq/YOO.GG?node-id=219-144&t=CUEkgz6W6rsyiolQ-1',
          text: '피그마 바로가기',
          imgsrc: '/src/asset/image/Figma.png',
        },
        {
          name: 'site',
          link: 'https://yoo-gg.vercel.app/',
          text: '사이트 바로가기',
          imgsrc: '/src/asset/image/Vercel.png',
        },
      ],
    },
    portfolio: {
      imgList: Array.from({ length: 6 }, (_, i) => `/src/asset/image/project/yoogg/slider${i + 1}.png`),
      title: 'PORTFOLIO',
      description: '개인 포트폴리오 페이지입니다.',
      projectPoint: [
        '바닐라 자바스크립트로 React처럼 사용해보았습니다.',
        'class문법를 사용함으로써 객체지향 프로그래밍이 무엇인지 다시 한번 알게 되는 프로젝트였습니다. ',
        '더불어 라이브러리의 편리함을 다시한번 깨닫는 시간이었습니다.',
      ],
      technologiesStack: ['HTML', 'CSS', 'JavaScript'],
      links: [
        {
          name: 'github',
          link: 'https://github.com/juniorcoma/juniorcoma.github.io',
          text: '깃허브 바로가기',
          imgsrc: '/src/asset/image/GitHub.png',
        },
        {
          name: 'figma',
          link: 'https://www.figma.com/design/XStEBdVYnHckc9jeSTJMKS/Portfolio?node-id=10-294&t=Vojg7rgKM1P3uEp6-1',
          text: '피그마 바로가기',
          imgsrc: '/src/asset/image/Figma.png',
        },
        {
          name: 'site',
          link: 'https://juniorcoma.github.io/',
          text: '사이트 바로가기',
          imgsrc: '/src/asset/image/Vercel.png',
        },
      ],
    },
  },
  team: {
    pickleTime: {
      imgList: Array.from({ length: 6 }, (_, i) => `/src/asset/image/project/yoogg/slider${i + 1}.png`),
      title: 'PICKLETIME',
      description:
        '피클타임(Pickle Time)은 뜻이 맞는 사람들과 함께 자투리 시간을 가치 있게 만들어주는 자기개발플랫폼입니다.',
      projectPoint: [
        '공통 bottom sheet modal 개발(zustend)',
        '홈 페이지 인기 급상승 컴포넌트, 마감 임박 컴포넌트 개발',
        '피클 신청하기 페이지 개발 및 피클 생성 결제 페이지 개발(공통 컴포넌트)',
      ],
      technologiesStack: ['React', 'Styled-component', 'Typescript', 'React-query', 'zustend', 'React-hook-form'],
      links: [
        {
          name: 'github',
          link: 'https://github.com/Splint-Final-Project/Pickle-Time-Frontend',
          text: '깃허브 바로가기',
          imgsrc: '/src/asset/image/GitHub.png',
        },
        {
          name: 'figma',
          link: 'https://www.figma.com/design/KrG2R6jbUc0VORePSHZp6j/Pickle-Time?node-id=0-1&t=BjRQHsVDnCQE6TFV-1',
          text: '피그마 바로가기',
          imgsrc: '/src/asset/image/Figma.png',
        },
        {
          name: 'site',
          link: 'https://pickle-time-frontend.vercel.app/',
          text: '사이트 바로가기',
          imgsrc: '/src/asset/image/Vercel.png',
        },
      ],
    },
    danchoo: {
      imgList: Array.from({ length: 5 }, (_, i) => `/src/asset/image/project/danchoo/slider${i + 1}.png`),
      title: 'DANCHOO',
      description: '가게에 급한 일손이 필요한 경우 더 높은 페이를 주고 일손을 매칭시켜주는 서비스입니다.',
      projectPoint: [
        '페이지네이션 컴포넌트 개발(테이블 및 홈페이지에 사용)',
        '가게 정보 등록 폼 페이지 개발(AWS를 이용한 이미지 업로드 구현)',
        '내 공고 상세 페이지 개발',
      ],
      technologiesStack: ['Next.js', 'Tailwind-css', 'React-query', 'Typescript', 'React-hook-form'],
      links: [
        {
          name: 'github',
          link: 'https://github.com/5-PS/DANCHOO',
          text: '깃허브 바로가기',
          imgsrc: '/src/asset/image/GitHub.png',
        },
        {
          name: 'figma',
          link: 'https://www.figma.com/board/zu7Sy31LCvlk0i8Zds2SuN/The-Julge?node-id=0-1&t=w2MdzvdDYX2sOspk-1',
          text: 'Flow chart 바로가기',
          imgsrc: '/src/asset/image/Figma.png',
        },
        {
          name: 'site',
          link: 'https://the-julge.netlify.app/',
          text: '사이트 바로가기',
          imgsrc: '/src/asset/image/Vercel.png',
        },
      ],
    },
    rolling: {
      imgList: Array.from({ length: 6 }, (_, i) => `/src/asset/image/project/rolling/slider${i + 1}.png`),
      title: 'ROLLING',
      description: '추억의 롤링페이퍼를 오프라인에서 쓰는 것이 아닌 온라인으로 간편하게 작성할 수 있는 플랫폼입니다.',
      projectPoint: [
        '버튼 공통 컴포넌트 개발',
        '롤링 메세지 작성 페이지 개발(추가 기능 구현)',
        '롤링 페이퍼 리스트, unsplash 이미지 스켈레톤 UI개발',
      ],
      technologiesStack: ['React', 'Styled-component'],
      links: [
        {
          name: 'github',
          link: 'https://github.com/D5ng/part2-6team-project',
          text: '깃허브 바로가기',
          imgsrc: '/src/asset/image/GitHub.png',
        },
        {
          name: 'site',
          link: 'https://part2-6team-project.vercel.app/',
          text: '사이트 바로가기',
          imgsrc: '/src/asset/image/Vercel.png',
        },
      ],
    },
  },
};
