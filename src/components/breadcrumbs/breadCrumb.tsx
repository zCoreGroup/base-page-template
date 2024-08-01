import React from 'react'
import { Box, Link, Breadcrumbs as MUIBreadcrumbs } from '@mui/material'
import { container, link } from './styles'
import { BreadCrumb, BreadCrumbData } from '@/types'

interface BreadCrumbsProps {
  data: BreadCrumbData
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ data }) => {
  const links = Array.isArray(data?.links) ? data.links : []

  const rootLnk: BreadCrumb = { text: 'Home', link: '/' }
  const createSlugLink = (slug: string) => `/${slug || '#'}`

  return (
    <Box sx={container}>
      <MUIBreadcrumbs aria-label='breadcrumb'>
        <Link href={rootLnk.link} sx={link}>
          {rootLnk.text}
        </Link>
        {links.map((item, index) => (
          <Link key={index} href={createSlugLink(item.link)} sx={link}>
            {item.text}
          </Link>
        ))}
      </MUIBreadcrumbs>
    </Box>
  )
}

export default BreadCrumbs
