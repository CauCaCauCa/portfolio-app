import React from 'react'
import Title from '../Title'

type Props = {}

export default function ProjectTitle({}: Props) {
  return (
    <div id='project-title'>
      <Title title='MY' titleHighlight='PROJECT' titleBehind='WORKS' />
    </div>
  )
}