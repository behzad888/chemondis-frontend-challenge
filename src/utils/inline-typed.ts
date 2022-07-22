export interface Album {
  id: number;
  userId: number;
  title: string;
  username?: string;
  color?: string;
}
export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  color: string;
}

export interface UserState {
  loading: boolean;
  error: Error | string | null;
  data: Array<User>;
}

export interface PageOption {
  size: number;
  page: number;
}

export type FetchWithNextPageFlag = Promise<{ hasNextPage: boolean }>;
