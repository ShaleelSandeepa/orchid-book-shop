import { Product } from '@/types/shop';

export const mockProducts: Product[] = [
  // Books
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.',
    price: 12.99,
    category: 'books',
    subcategory: 'Fiction',
    stock: 25,
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.5,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'Sarah Johnson',
        rating: 5,
        comment: 'A timeless masterpiece! Beautifully written.',
        createdAt: new Date('2024-01-15')
      }
    ],
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A gripping tale of racial injustice and childhood innocence in the American South.',
    price: 14.99,
    category: 'books',
    subcategory: 'Fiction',
    stock: 18,
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.8,
    reviews: [],
    featured: true,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: '3',
    title: 'Introduction to Computer Science',
    author: 'Dr. Michael Chen',
    description: 'Comprehensive guide to computer science fundamentals, perfect for students and professionals.',
    price: 89.99,
    category: 'books',
    subcategory: 'Academic',
    stock: 12,
    images: [
      'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.3,
    reviews: [],
    featured: false,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: '4',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    description: 'A beloved children\'s story about friendship, love, and the importance of seeing with the heart.',
    price: 9.99,
    category: 'books',
    subcategory: 'Children',
    stock: 30,
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.7,
    reviews: [],
    featured: true,
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04')
  },
  // Stationery
  {
    id: '5',
    title: 'Premium Fountain Pen Set',
    description: 'Elegant fountain pen set with multiple ink cartridges, perfect for writing enthusiasts.',
    price: 45.99,
    category: 'stationery',
    subcategory: 'Pens',
    stock: 15,
    images: [
      'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.6,
    reviews: [],
    featured: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '6',
    title: 'Leather Bound Journal',
    description: 'Handcrafted leather journal with lined pages, perfect for daily writing and note-taking.',
    price: 24.99,
    category: 'stationery',
    subcategory: 'Notebooks',
    stock: 22,
    images: [
      'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.4,
    reviews: [],
    featured: false,
    createdAt: new Date('2024-01-06'),
    updatedAt: new Date('2024-01-06')
  },
  {
    id: '7',
    title: 'Professional Art Set',
    description: 'Complete art set with colored pencils, markers, and sketching tools for artists of all levels.',
    price: 67.99,
    category: 'stationery',
    subcategory: 'Art Supplies',
    stock: 8,
    images: [
      'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.8,
    reviews: [],
    featured: true,
    createdAt: new Date('2024-01-07'),
    updatedAt: new Date('2024-01-07')
  },
  // ISP Packages
  {
    id: '8',
    title: 'High-Speed Fiber 100Mbps',
    description: 'Ultra-fast fiber internet with 100Mbps download and upload speeds, perfect for streaming and gaming.',
    price: 49.99,
    category: 'isp-packages',
    subcategory: 'Fiber',
    stock: 100,
    images: [
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.5,
    reviews: [],
    featured: true,
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '9',
    title: 'Business Premium 500Mbps',
    description: 'Enterprise-grade internet solution with 500Mbps speeds and priority support for businesses.',
    price: 129.99,
    category: 'isp-packages',
    subcategory: 'Business',
    stock: 50,
    images: [
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.7,
    reviews: [],
    featured: false,
    createdAt: new Date('2024-01-09'),
    updatedAt: new Date('2024-01-09')
  },
  {
    id: '10',
    title: 'Home Basic 50Mbps',
    description: 'Affordable home internet package with 50Mbps speeds, ideal for everyday browsing and streaming.',
    price: 29.99,
    category: 'isp-packages',
    subcategory: 'Home',
    stock: 75,
    images: [
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.2,
    reviews: [],
    featured: false,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  }
];

export const categories = [
  { id: 'books', name: 'Books', subcategories: ['Fiction', 'Non-Fiction', 'Academic', 'Children'] },
  { id: 'stationery', name: 'Stationery', subcategories: ['Pens', 'Notebooks', 'Art Supplies', 'Office Supplies'] },
  { id: 'isp-packages', name: 'ISP Packages', subcategories: ['Fiber', 'Business', 'Home', 'Mobile'] }
];