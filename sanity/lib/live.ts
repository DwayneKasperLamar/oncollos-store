import "server-only";
import { defineLive } from "next-sanity";
import { client } from './client'

//this viewer Token reads data from DB
const token = process.env.SANITY_API_READ_TOKEN;
if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN');
}

export const { sanityFetch, SanityLive } = defineLive({ 
 
    client,
    serverToken:token,
    browserToken: token,
    fetchOptions: {
      revalidate:0,
    },
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
  }) 

