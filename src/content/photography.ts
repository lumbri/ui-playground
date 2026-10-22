const image = (name: string) => `/images/portfolio/${name}`

export const photography = {
  name: 'Liubov Kulyk',
  role: 'Photographer',
  phone: '+41 79 819 78 75',
  phoneHref: 'tel:+41798197875',
  email: 'lumbrya@gmail.com',
  location: 'Switzerland',
  slides: [
    {
      image: image('hero-family.jpg'),
      alt: 'A grandfather sharing a quiet family moment with a baby outdoors',
      title: 'Photographer Liubov Kulyk',
      subtitle: 'Honest moments. Lasting memories.',
    },
    {
      image: image('hero-portrait.jpg'),
      alt: 'An expressive outdoor portrait captured by Liubov Kulyk',
      title: 'Keep your best memories for life.',
      subtitle: 'Portraits, people, and the stories between them.',
    },
    {
      image: image('memories.jpg'),
      alt: 'A personal moment photographed in natural light',
      title: 'You create memories. I capture them.',
      subtitle: 'Your story, seen through my lens.',
    },
  ],
  portrait: image('photographer.jpeg'),
  introduction: [
    'I am a professional photographer with more than 15 years of shooting experience.',
    'I have all the necessary equipment for your shooting in any conditions.',
    'My work is my passion. You can see how beautiful you can be if you get in my lens.',
  ],
  photos: [
    {
      src: image('gallery-1.jpg'),
      alt: 'Outdoor portrait in soft natural light',
    },
    { src: image('gallery-2.jpg'), alt: 'A warm and intimate portrait' },
    {
      src: image('outdoor.jpg'),
      alt: 'Portrait surrounded by summer greenery',
    },
    {
      src: image('gallery-4.jpg'),
      alt: 'Close-up portrait with a thoughtful expression',
    },
    {
      src: image('gallery-5.jpg'),
      alt: 'A quiet moment in an atmospheric setting',
    },
    {
      src: image('gallery-6.jpg'),
      alt: 'An expressive portrait from the collection',
    },
    { src: image('gallery-7.jpg'), alt: 'A carefully lit studio portrait' },
    {
      src: image('gallery-8.jpg'),
      alt: 'A light-filled portrait with a soft background',
    },
  ],
  services: [
    {
      id: 'outdoor-portraits',
      title: 'Open Air Portraits',
      image: image('outdoor.jpg'),
      alt: 'Portrait photography outdoors',
      description:
        'Natural light, open spaces, and a little room to be yourself. Portraits that feel relaxed, personal, and full of life.',
    },
    {
      id: 'studio-portraits',
      title: 'Studio Portraits',
      image: image('studio.jpg'),
      alt: 'Portrait photography in the studio',
      description:
        'Thoughtful lighting and an unhurried atmosphere. A space to create portraits that bring your personality into focus.',
    },
    {
      id: 'commercial-shooting',
      title: 'Commercial Shooting',
      image: image('commercial.jpeg'),
      alt: 'Commercial photography by Liubov Kulyk',
      description:
        'Images with a purpose. Professional photography for your brand, your business, and the work you want the world to see.',
    },
  ],
  closingImage: image('memories.jpg'),
  contactImage: image('contact.jpg'),
}
