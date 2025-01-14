import createImageUrlBuilder from '@sanity/image-url'
import { Image } from 'sanity';
import {client} from  '@/sanity/lib/client'

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder( client )

export const urlForImage = (source: Image) => {
  return builder?.image(source)
}
