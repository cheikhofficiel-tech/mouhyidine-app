export type Sermon = {
  id: string;
  title: string;
  duration: string;
  category: 'Waxtaan' | 'Tafsir' | 'Éthique';
  audioUrl: string;
  description?: string;
};

export type Speaker = {
  id: string;
  name: string;
  role: string;
  location: string;
  specialty: string;
  category: string;
  isFeatured?: boolean;
  image: string;
  bio: string;
  quote: string;
  sermons: Sermon[];
};
