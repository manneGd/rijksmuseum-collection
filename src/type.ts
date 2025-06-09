export type ArtObjects = {
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  webImage: {
    width: number;
    height: number;
    url: string;
  } | null;
  productionPlaces: string[];
};
