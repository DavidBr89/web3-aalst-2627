interface TMImage {
  url: string;
  width: number;
  height: number;
}

export interface TMResponse {
  _embedded: {
    events: TMEvent[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

export interface TMEvent {
  id: string;
  name: string;
  description: string;
  images: TMImage[];
}
