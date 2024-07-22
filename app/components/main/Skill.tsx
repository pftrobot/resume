'use client'

import { containerWidth } from '@/app/data/style'
import styled from '@emotion/styled'

interface Props {
  skills: string[]
  prefix: string
}
const SkillList = ({ skills, prefix }: Props) => (
  <>
    {skills.map(skill => (
      <SkillItem key={`${prefix}-skill-${skill}`}>{skill}</SkillItem>
    ))}
  </>
)

export default SkillList

const SkillItem = styled.span`
  display: inline-block;
  font-size: 13px;
  color: #333;
  padding: 4px 12px 6px;
  border-radius: 20px;
  background-color: #eaeaea;

  @media (max-width: ${containerWidth}px) {
    font-size: 12px;
    padding: 2px 8px 4px;
  }
`
