export type MaterialPreview = {
  title: string;
  color: string;
  id: number;
};

export type Material = MaterialPreview & {
  body: string;
};
