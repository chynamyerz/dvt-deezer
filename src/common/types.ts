export interface IArtist {
  id: string | number;
  name: string;
  link?: string;
  share?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  radio?: true;
  tracklist: string;
  nb_fan?: number;
  type: string;
}

export interface IContributor extends Omit<IArtist, "nb_fan"> {
  role: string;
}

export interface IGenre {
  id: number;
  name: string;
  picture: string;
  type: string;
}

// id: "302127",
// title: "Discovery",
// cover: "https://api.deezer.com/album/302127/image",
// cover_small:
//   "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
// cover_medium:
//   "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
// cover_big:
//   "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
// cover_xl:
//   "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
// md5_image: "2e018122cb56986277102d2041a592c8",
// tracklist: "https://api.deezer.com/album/302127/tracks",
// type: "album",
export interface IAlbum {
  id: string;
  title: string;
  upc?: string;
  link?: string;
  share?: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id?: 113;
  genres?: {
    data: IGenre[];
  };
  label?: string;
  nb_tracks?: number;
  duration?: number;
  fans?: number;
  release_date?: string;
  record_type?: string;
  available?: boolean;
  tracklist: string;
  explicit_lyrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_cover?: number;
  contributors?: IContributor[];
  artist?: IArtist;
  type: string;
  tracks: {
    data: ITrack[];
  };
}

export interface ITrack {
  id: string;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  isrc: string;
  link: string;
  share: string;
  duration: string;
  track_position: number;
  disk_number: number;
  rank: string;
  release_date: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  bpm: number;
  gain: number;
  available_countries: string[];
  contributors: IContributor[];
  md5_image: string;
  artist: IArtist;
  album: IAlbum;
  type: string;
}
