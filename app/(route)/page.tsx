'use client'

import ExperienceItem from '@/app/components/main/ExperienceItem'
import SkillList from '@/app/components/main/Skill'
import { EXPERIENCE_LIST, SKILL_LIST } from '@/app/data'
import { breakMedium, containerWidth } from '@/app/data/style'
import { css } from '@emotion/react'
import Link from 'next/link'

/** @jsxImportSource @emotion/react */
const Home = () => (
  <main css={MainCSS}>
    <section className="info">
      <h1>
        안녕하세요 <br />웹 프론트엔드 개발자 <br />
        오이슬입니다
      </h1>
    </section>
    <section className="introduce">
      <p className="title">Introduce</p>
      <p>
        React, Next.js, Typescript 기반 서비스 구축 및 운영 경험이 있으며, 웹
        표준을 고려한 인터랙티브 웹 프로젝트들을 진행했습니다. <br />
        재사용 가능한 컴포넌트 작성과 코드의 완성도를 높이는 과정에 큰 즐거움을
        느낍니다. 개발을 할 때 정답이 있다기보다 상황에 적절한 최적의 방식이
        있다고 생각하고, 이를 위한 건설적인 토론과 코드 리뷰를 좋아합니다.
      </p>
    </section>
    <section className="skills">
      <p className="title">Skills</p>
      <div className="core">
        <div className="main">
          <SkillList skills={SKILL_LIST.core.main} prefix={'main'} />
        </div>
      </div>
      <div className="others">
        <div className="statement">
          <SkillList
            skills={SKILL_LIST.others.statement}
            prefix={'statement'}
          />
        </div>
        <div className="style">
          <SkillList skills={SKILL_LIST.others.style} prefix={'style'} />
        </div>
        <div className="etc">
          <SkillList skills={SKILL_LIST.others.etc} prefix={'etc'} />
        </div>
      </div>
    </section>
    <section className="experience-area">
      <p className="title">Experiences</p>

      {EXPERIENCE_LIST.map(item => (
        <ExperienceItem item={item} key={`experience-${item.companyName}`} />
      ))}
    </section>
    <section className="education">
      <p className="title">Education</p>
      <p>
        계원예술대학교 디지털미디어디자인과 프로그래밍전공
        <span>2015.03 - 2018.02</span>
      </p>
    </section>
    <section className="award">
      <p className="title">Award</p>
      <div className="text-area">
        <p>
          Webby Awards 2022 Nominee <span>2022.03</span>
        </p>
        <p className="description">
          WebGL 기반의 웹 메타버스 체험존에서 전반적인 UI와 <br />
          인터랙티브 채팅, 이벤트 프로모션 구현
        </p>
      </div>
    </section>
    <section className="contact">
      <p className="title">Contact</p>
      <div className="text-area">
        <div className="link-box">
          <Link href={'mailto:pftrobot@gmail.com'}>pftrobot@gmail.com</Link>
        </div>
        <div className="link-box">
          <Link
            href="https://github.com/pftrobot"
            target="_blank"
            css={LinkCSS}
          >
            Github
          </Link>
        </div>
        <div className="link-box">
          <Link
            href="https://mini-flyingfish-f3c.notion.site/Book-7076265cac0f4ddbaa75182c4810a62d?pvs=4"
            target="_blank"
            css={LinkCSS}
          >
            Notebook
          </Link>
        </div>
      </div>
    </section>
  </main>
)

export default Home

const MainCSS = () => css`
  max-width: ${containerWidth}px;
  font-weight: 500;
  color: #333;
  line-height: 1.5;
  letter-spacing: -0.1px;
  word-break: keep-all;
  padding: 104px 24px;
  margin: 0 auto;

  @media (max-width: ${containerWidth}px) {
    padding: 88px 36px;
  }

  @media (max-width: ${breakMedium}px) {
    padding: 54px 16px;
  }

  p {
    font-size: 16px;

    @media (max-width: ${containerWidth}px) {
      font-size: 14px;
    }
  }

  section {
    > p > span {
      display: block;
      font-size: 12px;
      color: gray;
      line-height: 2;
    }

    > .title {
      font-size: 36px;
      font-weight: 700;
      color: orange;
      margin: 96px 0 24px;

      &:after {
        content: '';
        display: inline-block;
        vertical-align: bottom;
        width: 8px;
        height: 8px;
        margin-bottom: 12px;
        margin-left: 4px;
        border-radius: 50%;
        background-color: orange;
      }

      @media (max-width: ${containerWidth}px) {
        font-size: 28px;
        margin: 48px 0 24px;

        &:after {
          width: 5px;
          height: 5px;
          margin-bottom: 8px;
        }
      }

      @media (max-width: ${breakMedium}px) {
        font-size: 24px;
      }
    }
  }

  .info {
    h1 {
      font-size: 48px;
      line-height: 1.2;
      margin-bottom: 24px;

      @media (max-width: ${containerWidth}px) {
        font-size: 32px;
      }
    }

    p {
      font-size: 16px;
      color: #bdbdbd;
    }
  }

  .skills {
    > div {
      display: flex;
      flex-direction: column;
      gap: 12px;

      > div {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 2px;
        white-space: nowrap;
      }
    }

    .others {
      margin-top: 10px;
    }
  }

  .education,
  .award,
  .contact {
    display: flex;
    align-items: start;
    justify-content: space-between;
    min-height: 80px;
    text-align: right;
    padding-top: 24px;

    @media (max-width: ${breakMedium}px) {
      display: block;
      text-align: right;
    }

    span {
      display: block;
      font-size: 12px;
      color: #bbb;

      @media (max-width: ${breakMedium}px) {
        display: block;
      }
    }

    .title {
      margin: 0;

      + * {
        margin-top: 16px;
      }
    }
  }

  .award {
    .description {
      font-size: 14px;
      font-weight: 300;
      color: #aaa;
      margin-top: 6px;

      @media (max-width: ${breakMedium}px) {
      }
    }
  }

  .contact {
    .text-area {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    a {
      font-size: 16px;
      margin-right: -8px;
      color: orange;
      text-decoration: none;
    }
  }
`

const LinkCSS = () => {
  const linkSidePadding = 8

  return css`
    position: relative;
    padding: 6px ${linkSidePadding}px;

    &:before {
      position: absolute;
      left: 50%;
      bottom: 4px;
      display: block;
      content: '';
      width: 0;
      height: 2px;
      background-color: orange;
      transition: width 0.3s;
      translate: -50%;
    }

    @media (hover: hover) {
      &:hover {
        &:before {
          width: calc(100% - ${linkSidePadding * 2}px);
        }
      }
    }
  `
}
