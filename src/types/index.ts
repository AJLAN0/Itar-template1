export interface CMSContent {
  navbar: { name: string; links: { label: string; href: string }[] };
  hero: { image: string; name: string; career: string };
  about: { text: string; name: string; paragraph: string };
  featured: { images: string[] };
  experience: { work: { company: string; position: string; year: string }[]; gear: { name: string; type: string }[] };
  services: { title: string; description: string }[];
  gallery: { images: string[] };
  footer: { name: string; career: string; contact: { number: string; instagram: string; email: string } };
}

export const defaultCMSContent: CMSContent = {
  navbar: {
    name: 'Photographer Name',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    image: 'https://placehold.co/200x200',
    name: 'Full Name',
    career: 'Professional Photographer',
  },
  about: {
    text: 'Hi, I\'m',
    name: 'Full Name',
    paragraph: 'I am passionate about capturing moments and telling stories through my lens. With years of experience, I specialize in portrait, event, and landscape photography.',
  },
  featured: {
    images: [
      'https://placehold.co/400x300',
      'https://placehold.co/400x300',
    ],
  },
  experience: {
    work: [
      { company: 'Company A', position: 'Photographer', year: '2020-2022' },
      { company: 'Company B', position: 'Lead Photographer', year: '2018-2020' },
    ],
    gear: [
      { name: 'Canon EOS R5', type: 'Camera' },
      { name: 'Sony A7 III', type: 'Camera' },
      { name: 'DJI Mavic Air 2', type: 'Drone' },
    ],
  },
  services: [
    { title: 'Portrait Photography', description: 'Professional portraits for individuals and families.' },
    { title: 'Event Photography', description: 'Capturing special moments at events and celebrations.' },
    { title: 'Landscape Photography', description: 'Stunning landscapes and nature shots.' },
  ],
  gallery: {
    images: Array.from({ length: 10 }, (_, i) => `https://placehold.co/300x200?text=Photo+${i+1}`),
  },
  footer: {
    name: 'Full Name',
    career: 'Professional Photographer',
    contact: {
      number: '123-456-7890',
      instagram: 'https://instagram.com/yourprofile',
      email: 'your@email.com',
    },
  },
}; 