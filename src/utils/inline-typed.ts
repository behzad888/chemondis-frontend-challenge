export interface Album {
  id: number;
  userId: number;
  title: string;
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

export interface GalleryItem extends Album {
  username?: string;
  color: string;
}
export type FetchWithNextPageFlag = Promise<{ hasNextPage: boolean }>;
