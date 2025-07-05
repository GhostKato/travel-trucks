export type Review = {
  id: string;
  comment: string;
  rating: number;
  user: string;
};

export type GalleryItem = {
  original: string;
  thumb: string;
};

export type Truck = {
  id: string;
  name: string;
  rating: number;
  reviews: Review[];
  location: string;
  price: number;
  gallery: GalleryItem[];
  description: string;
};

export type TrucksState = {
  trucks: Truck[];
  total: number;
  selectedTruck: Truck | null;
  isLoading: boolean;
  error: string | null;
};
