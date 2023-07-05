import React from 'react'
import Title from '../Title'

type Props = {
  isMobile?: boolean
}

export default function ProjectTitle({isMobile}: Props) {
  return (
    <div id='project-title'>
      <Title title='MY' titleHighlight='PROJECT' titleBehind='WORKS' isMobile={isMobile} />
    </div>
  )
}