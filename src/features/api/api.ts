import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAlbum, IArtist, ITrack } from "../../common/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTracts: builder.query<
      { data: ITrack[]; totalCount: number },
      { searchTrack: string }
    >({
      query: ({ searchTrack }) => `/search/track?q="${searchTrack}"`,
    }),

    getArtist: builder.query<IArtist, { artistId: string }>({
      query: ({ artistId }) => `/artist/${artistId}`,
    }),

    getArtistAlbums: builder.query<{ data: IAlbum[] }, { artistId: string }>({
      query: ({ artistId }) => `/artist/${artistId}/albums`,
    }),

    getArtistTopTracks: builder.query<{ data: ITrack[] }, { artistId: string }>(
      {
        query: ({ artistId }) => `/artist/${artistId}/top`,
      }
    ),
  }),
});

export const {
  useGetTractsQuery,
  useGetArtistQuery,
  useGetArtistAlbumsQuery,
  useGetArtistTopTracksQuery,
} = api;
