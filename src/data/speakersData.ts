import { Speaker } from '../types';

export const SPEAKERS: Speaker[] = [
  {
    id: 'dabakh',
    name: 'Mame Abdou Aziz Dabakh',
    role: 'Khalife Général des Tidianes (1957 - 1997)',
    location: 'Tivaouane, Sénégal',
    specialty: 'Concorde Nationale • Tawhid • Éthique & Paix',
    category: 'Waxtaan',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    bio: 'Figure emblématique de la concorde nationale, de l’amour fraternel et de la piété au Sénégal.',
    quote: 'La paix véritable commence lorsque chacun souhaite pour son frère ce qu’il désire pour lui-même.',
    sermons: [
      {
        id: 'dabakh-1',
        title: 'Gamou 1964 1 (Historique & Sagesse)',
        duration: '54:20',
        category: 'Waxtaan',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-spiritual-112191.mp3',
        description: 'La causerie mémorable sur l’unité des musulmans, la purification du cœur et le respect des aînés.'
      }
    ]
  },
  {
    id: 'mouhyidine',
    name: 'Cheikh Mouhyidine Samba Diallo',
    role: 'Guide spirituel et Maître Soufi de Sagne Bambara',
    location: 'Sagne Bambara / Dakar, Sénégal',
    specialty: 'Foi • Tawhid • Sagesse & Éducation du Cœur',
    category: 'Waxtaan',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
    bio: 'Reconnu pour ses causeries profondes, sa voix posée et son appel incessant à la fraternité.',
    quote: 'La véritable richesse du croyant réside dans la paix de son cœur et la pureté de son intention envers son Créateur.',
    sermons: [
      {
        id: 'mouhyidine-1',
        title: 'La Voie de la Paix Intérieure & du Bon Comportement',
        duration: '42:15',
        category: 'Waxtaan',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-spiritual-112191.mp3'
      }
    ]
  },
  {
    id: 'sam-mbaye',
    name: 'Serigne Sam Baye',
    role: 'Érudit, Enseignant & Exégète du Coran',
    location: 'Louga / Dakar, Sénégal',
    specialty: 'Tafsir Coranique • Théologie • Histoire Islamique',
    category: 'Tafsir',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80',
    bio: 'Figure intellectuelle majeure de l’Islam au Sénégal, reconnu pour son érudition prodigieuse et son éloquence.',
    quote: 'La science sans la mise en pratique demeure un fardeau ; le savoir véritable illumine la conduite de l’homme.',
    sermons: [
      {
        id: 'sam-1',
        title: 'Le Temps & la Valeur de l’Existence',
        duration: '45:30',
        category: 'Tafsir',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=meditation-spiritual-ambient-110242.mp3'
      }
    ]
  }
];
