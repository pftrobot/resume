'use client'

import { Experience, Project } from '@/app/data'
import { breakMedium, containerWidth } from '@/app/data/style'
import { css } from '@emotion/react'
import Link from 'next/link'

/** @jsxImportSource @emotion/react */

const ExperienceItem = ({ item }: { item: Experience }) => (
  <div className="item" css={ExperienceCSS}>
    <div className="company">
      <p className="name">{item.companyName}</p>
      <p>
        {item.role} <br />
        {item.period}
      </p>
    </div>
    <div className="project-list">
      {item.projects.map(project => (
        <ProjectItem project={project} key={`project-${project.name}`} />
      ))}
    </div>
  </div>
)

const ProjectItem = ({ project }: { project: Project }) => (
  <div className="project" css={ProjectCSS}>
    {project.link ? (
      <Link href={project.link} target="_blank" className="title">
        <span className={'name'}>{project.name}</span>{' '}
        <span>{project.period}</span>
      </Link>
    ) : (
      <p className="title">
        {project.name} <span>{project.period}</span>
      </p>
    )}

    <ul>
      {project.output.map(text => (
        <li key={`${project.name}-${text}`}>{text}</li>
      ))}
    </ul>
    {project.skills && (
      <div className="skill-area">
        <p className="title">Tech Stack</p>
        <p className="core">{project.skills.core.join(', ')}</p>
        {project.skills.others && <p>{project.skills.others.join(', ')}</p>}
        {project.skills.etc && <p>{project.skills.etc.join(', ')}</p>}
      </div>
    )}
  </div>
)

export default ExperienceItem

const ExperienceCSS = () => css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  line-height: 1.3;
  padding-bottom: 48px;
  margin-top: 48px;
  border-bottom: solid 1px #eee;

  @media (max-width: ${containerWidth}px) {
    padding-bottom: 36px;
    margin-top: 48px;
  }

  @media (max-width: ${breakMedium}px) {
    display: block;
    text-align: center;
    padding-bottom: 64px;
    margin-top: 36px;

    .company {
      width: 100%;
    }
  }

  .company {
    width: 280px;

    p {
      font-size: 14px;
      font-weight: 500;
      color: #bbb;

      &:not(.name) {
        margin-top: 8px;
      }
    }

    .name {
      font-size: 24px;
      font-weight: 500;
      color: #333;
    }

    @media (max-width: ${containerWidth}px) {
      width: 180px;

      p {
        font-size: 12px;
      }

      .name {
        font-size: 20px;
        text-align: left;
      }
    }

    @media (max-width: ${breakMedium}px) {
      display: flex;
      align-content: flex-start;
      justify-content: space-between;
      width: 100%;

      p {
        flex: 1;

        &:not(.name) {
          text-align: right;
          margin-top: 0;
        }
      }

      .name {
        flex: none;
        width: 120px;
      }
    }
  }

  .project-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
  }
`

const ProjectCSS = () => css`
  &:not(:nth-of-type(1)) {
    margin-top: 72px;
  }

  @media (max-width: ${breakMedium}px) {
    width: 100%;
    text-align: left;
    margin-top: 28px;
  }

  .title {
    font-size: 20px;
    text-decoration: none;

    span {
      font-size: 16px;
      color: #bbb;
    }

    .name {
      position: relative;
      font-size: 20px;
      color: #333;

      &:before {
        position: absolute;
        left: 50%;
        bottom: -2px;
        display: block;
        content: '';
        width: 0;
        height: 2px;
        background-color: orange;
        transition: width 0.3s;
        translate: -50%;
      }

      &:after {
        display: inline-block;
        content: '';
        vertical-align: middle;
        width: 14px;
        height: 14px;
        margin: -8px 4px 0;
        opacity: 0.4;
        background: url('/icons/outlink.svg') no-repeat 50% 50%;
        background-size: contain;
        transition: opacity 0.3s;
      }

      @media (hover: hover) {
        &:hover {
          &:before {
            width: 100%;
          }
          &:after {
            opacity: 1;
          }
        }
      }
    }

    @media (max-width: ${containerWidth}px) {
      font-size: 18px;

      span {
        display: block;
        font-size: 12px;
        text-align: left;
        margin-top: 6px;
      }
    }
  }

  ul {
    margin-top: 16px;

    li {
      position: relative;
      font-size: 16px;
      font-weight: 300;
      color: #555;
      padding-left: 10px;

      &:before {
        position: absolute;
        top: 9px;
        left: 0;
        display: block;
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #555;
      }

      &:not(:nth-of-type(1)) {
        margin-top: 4px;
      }
    }

    @media (max-width: ${containerWidth}px) {
      li {
        font-size: 14px;
        padding-left: 8px;

        &:before {
          top: 8px;
          width: 4px;
          height: 4px;
        }
      }
    }

    @media (max-width: ${breakMedium}px) {
      margin-top: 8px;
    }
  }

  .skill-area {
    color: #555;
    margin-top: 24px;

    p {
      font-size: 14px;
      font-weight: 300;
      margin-top: 4px;
    }

    .title {
      font-size: 16px;
      font-weight: 500;
      margin: 36px 0 8px;

      &:after {
        display: none;
      }
    }

    .core {
      font-weight: 500;
    }

    @media (max-width: ${breakMedium}px) {
      .title {
        margin-top: 12px;
      }
    }
  }
`
