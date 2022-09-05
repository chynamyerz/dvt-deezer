import React from "react";
import { screen, render, RenderResult } from "@testing-library/react";

import { IAlbum } from "../../../types";
import { Album } from "../Album";
const mockData: IAlbum = {
  id: "302127",
  title: "Discovery",
  upc: "724384960650",
  link: "https://www.deezer.com/album/302127",
  share:
    "https://www.deezer.com/album/302127?utm_source=deezer&utm_content=album-302127&utm_term=0_1662356989&utm_medium=web",
  cover: "https://api.deezer.com/album/302127/image",
  cover_small:
    "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
  cover_medium:
    "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
  cover_big:
    "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
  cover_xl:
    "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
  md5_image: "2e018122cb56986277102d2041a592c8",
  genre_id: 113,
  genres: {
    data: [
      {
        id: 113,
        name: "Dance",
        picture: "https://api.deezer.com/genre/113/image",
        type: "genre",
      },
    ],
  },
  label: "Daft Life Ltd./ADA France",
  nb_tracks: 14,
  duration: 3660,
  fans: 262009,
  release_date: "2001-03-07",
  record_type: "album",
  available: true,
  tracklist: "https://api.deezer.com/album/302127/tracks",
  explicit_lyrics: false,
  explicit_content_lyrics: 7,
  explicit_content_cover: 0,
  contributors: [
    {
      id: 27,
      name: "Daft Punk",
      link: "https://www.deezer.com/artist/27",
      share:
        "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1662356989&utm_medium=web",
      picture: "https://api.deezer.com/artist/27/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/27/top?limit=50",
      type: "artist",
      role: "Main",
    },
  ],
  artist: {
    id: "27",
    name: "Daft Punk",
    picture: "https://api.deezer.com/artist/27/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
    tracklist: "https://api.deezer.com/artist/27/top?limit=50",
    type: "artist",
  },
  type: "album",
  tracks: {
    data: [
      {
        id: "3135553",
        readable: true,
        title: "One More Time",
        title_short: "One More Time",
        title_version: "",
        link: "https://www.deezer.com/track/3135553",
        duration: "320",
        rank: "902876",
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-9.mp3",
        md5_image: "2e018122cb56986277102d2041a592c8",
        artist: {
          id: "27",
          name: "Daft Punk",
          tracklist: "https://api.deezer.com/artist/27/top?limit=50",
          type: "artist",
        },
        //@ts-ignore
        album: {
          id: "302127",
          title: "Discovery",
          cover: "https://api.deezer.com/album/302127/image",
          cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
          md5_image: "2e018122cb56986277102d2041a592c8",
          tracklist: "https://api.deezer.com/album/302127/tracks",
          type: "album",
        },
        type: "track",
      },
    ],
  },
};

let component: RenderResult | null = null;

beforeEach(() => {
  component = render(<Album data={mockData} />);
});

describe("<Album>", () => {
  it("renders the component", () => {
    expect(component?.asFragment()).toMatchSnapshot();
  });

  it("has correct name", () => {
    expect(screen.queryByText("Discovery")).toBeInTheDocument();
  });
  it("has correct year", () => {
    expect(screen.queryByText("2001")).toBeInTheDocument();
  });
});
