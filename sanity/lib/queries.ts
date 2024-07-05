import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
    message,
    showStatusBar
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    "client": client->title,
    coverImage,
    description,    
    overview,
    theme,
    headline,
    website,
    deliverables[]->{title},
    technologies[]->{title},
    gallery[]{reference, title, image, gridWidth, isEmpty},
    "slug": slug.current,
    tags,
    title,
    related[]->{title,"slug": slug.current, deliverables[]->{title}},
    message{title,content},    
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    siteName,
    address,
    instagram,
    email,    
    ogImage,
    menuItems[]->{
      _type,
      "slug": slug.current,
      url,
      title
    },    
    footer,
  }
`
