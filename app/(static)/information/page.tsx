import './page.scss'

import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'
import path from 'path'

import { loadPage } from '@/sanity/loader/loadQuery'

import MainContent from './main'

export const pageSlug = __dirname.split(path.sep).pop() || ''

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: page } = await loadPage(pageSlug)

  return {
    title: page?.title,
    description: page?.overview
      ? toPlainText(page.overview)
      : (await parent).description,
  }
}

export default async function StaticPage() {
  const initial = await loadPage(pageSlug)

  if (!initial.data) {
    notFound()
  }

  return (<MainContent/>)
  
}
