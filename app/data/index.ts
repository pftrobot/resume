interface Skills {
  core: { main: string[] }
  others: {
    statement: string[]
    style: string[]
    etc: string[]
  }
}

export interface Project {
  name: string
  period: string
  output: string[]
  skills?: {
    core: string[]
    others?: string[]
    etc?: string[]
  }
  link?: string
}

export interface Experience {
  companyName: string
  role: string
  period: string
  projects: Project[]
}

const FE = 'Frontend Developer'

export const SKILL_LIST: Skills = {
  core: {
    main: ['Javascript', 'Typescript', 'React', 'NextJs', 'Vue', 'Git'],
  },
  others: {
    statement: ['zustand', 'react-query', 'mobX', 'pinia'],
    style: ['emotion', 'styled-components', 'scss', 'storybook', 'antD'],
    etc: [
      'mono-repo',
      'lodash',
      'gsap',
      'webGL',
      're-chart',
      'chartJs',
      'aws',
      'axure',
      'jira',
      'trello',
    ],
  },
}

export const EXPERIENCE_LIST: Experience[] = [
  {
    companyName: '비투지게임즈',
    role: FE,
    period: '2024.04 -',
    projects: [
      {
        name: '스포츠 판타지 웹 게임 개발',
        period: '2024.04 -',
        output: [
          'Canvas를 활용하여 실시간 축구 시뮬레이션 설계 및 구현',
          '전반적인 로딩 최적화 작업',
          'Google 회원가입, 로그인 연동',
        ],
        skills: {
          core: ['Vue', 'Nuxt', 'Typescript'],
          others: ['pinia', 'scss'],
        },
      },
    ],
  },
  {
    companyName: '북아이피스',
    role: FE,
    period: '2022.11 - 2023.12',
    projects: [
      {
        name: '디지털교재 마켓 플랫폼 개발',
        period: '2022.11 - 2023.09',
        output: [
          '검색결과 페이지를 렌더링 최적화하여 유저 경험을 향상시키고 검색 리텐션이 18% 증가',
          '상태관리 단순화와 패키지 경량화를 위해 기존 MobX에서 Zustand로 변경 도입',
          '디자인팀과의 원활한 협업 및 테스트 효율을 위한 Storybook 도입',
        ],
        skills: {
          core: ['React', 'Next', 'Typescript'],
          others: [
            'zustand',
            'mobX',
            'lodash',
            'styled-components',
            'storybook',
          ],
          etc: ['mono-repo', 'yarn', 'azure'],
        },
        link: 'https://solvook.com',
      },
      {
        name: '법적조치 관리 사이트 신규 개발',
        period: '2023.08 - 2023.12',
        output: [
          '프로젝트 구조 설계 및 공통 컴포넌트 개발',
          '인프라 비용 절감을 위해 SSG 방식 채택하여 AWS, Github Action으로 자동 배포 구축',
        ],
        skills: {
          core: ['React', 'Next', 'Typescript'],
          others: ['zustand', 'react-query', 'emotion', 're-chart'],
          etc: ['yarn-berry', 'aws', 'github-action'],
        },
      },
    ],
  },
  {
    companyName: '더즈인터랙티브',
    role: 'FE Assistant Manager',
    period: '2019.08 - 2022.05',
    projects: [
      {
        name: '삼성 갤럭시 메타버스 체험존 개발',
        period: '2021.12 - 2022.02',
        output: [
          'WebGL 기반의 맵에서 사용자 인터랙션 요소 개발',
          '맵 내 npc들과의 채팅 기능 구현',
          'GTM 이벤트 수집 및 관리',
        ],
      },
      {
        name: '한국타이어 글로벌 사이트 구축',
        period: '2021.10 - 2022.01',
        output: [
          '30개국 서비스 출시 및 운영을 위한 i18n 설정',
          'AEM 서버 내 컴포넌트 제작 및 조합하여 페이지 제작',
          '2천 장 이상의 이미지 로딩 방식을 최적화하여 평균 로딩 속도 30% 감소',
        ],
        link: 'https://www.hankooktire.com/kr/ko/home.html',
      },
      {
        name: '스마일게이트 홈페이지 구축',
        period: '2021.09 - 2022.01',
        output: [
          'ScrollTrigger 사용하여 스크롤에 위치에 따라 애니메이션 동작하는 게임 브랜드 페이지 구현',
          '스타일 속성 최적화하여 애니메이션 로딩 속도 평균 30% 감소',
          'IE 및 모바일 구 디바이스 크로스 브라우징',
        ],
        link: 'https://www.smilegate.com/ko/',
      },
      {
        name: '반다이남코코리아몰 플랫폼 구축',
        period: '2021.01 - 2021.08',
        output: [
          '세 개의 외부 개발사와 협업하여 쇼핑몰에 필요한 UI 작업 및 어플리케이션화를 위한 지원',
        ],
        link: 'https://www.bnkrmall.co.kr/',
      },
      {
        name: 'SK 매직 홈페이지 구축',
        period: '2020.10 - 2021.02',
        output: [
          '디자인 가이드를 토대로 가이드 시스템 구축하여 사전작업 시간 단축에 기여',
          'WebGL 기반으로 360 카메라로 촬영된 공간들을 둘러볼 수 있는 체험존 개발',
          'Jsp 상에서 게시판 DB 연동 작업',
        ],
        skills: {
          core: ['Html5', 'Css3', 'Javascript', 'GSAP'],
          others: ['WebGL', 'JSP', 'Thymeleaf', 'AEM'],
        },
        link: 'https://company.skmagic.com/',
      },
    ],
  },
]
