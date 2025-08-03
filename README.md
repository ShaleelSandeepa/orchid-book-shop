# Orchid Book Shop

A modern, full-stack e-commerce web application for a comprehensive book shop that also offers stationery and ISP packages. Built with Next.js, featuring smooth animations and a multi-user management system.

![Orchid Book Shop Banner](https://play-lh.googleusercontent.com/XaczL19dcfx3Bmwov7sGfcEG0PeEq_ODCEAV7zSVmm-mLHdPGl6EKWl-TuatKC7zFIg=w240-h480-rw)

## ✨ Features

### 🛍️ Customer Experience
- **Browse & Shop**: Extensive catalog of books, stationery, and ISP packages
- **Advanced Search**: Filter by category, price, author, availability
- **Shopping Cart**: Seamless add-to-cart with real-time updates
- **Secure Checkout**: Multiple payment options with order tracking
- **User Account**: Order history, wishlist, profile management
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### 👨‍💼 Operator Dashboard
- **Order Management**: View, process, and update order status
- **Inventory Control**: Manage stock levels and product details
- **Customer Communication**: Notify customers when orders are ready
- **Sales Reports**: Track performance and generate insights

### 🔧 Admin Panel
- **Complete System Control**: Full access to all features
- **User Management**: Create and manage operator accounts
- **Analytics Dashboard**: Comprehensive business intelligence
- **Content Management**: Update shop information and policies
- **System Configuration**: Customize settings and preferences

## 🎨 Design Theme

Inspired by the elegant beauty of orchid flowers, featuring a sophisticated color palette:

- **Dark Blue**: `#1e293b`, `#0f172a` - Professional depth
- **Purple**: `#7c3aed`, `#a855f7`, `#c084fc` - Orchid elegance  
- **Light Blue**: `#0ea5e9`, `#38bdf8`, `#7dd3fc` - Fresh accents
- **White**: `#ffffff`, `#f8fafc` - Clean backgrounds
- **Green**: `#059669`, `#10b981`, `#34d399` - Natural harmony
- **Gold**: `#f59e0b` - Premium highlights

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **UI Components**: Shadcn/ui
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **API**: Next.js API Routes
- **Payment**: Stripe Integration
- **Email**: Nodemailer

### Development Tools
- **Package Manager**: npm/yarn
- **Linting**: ESLint, Prettier
- **Type Checking**: TypeScript
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel (Frontend), Railway/Heroku (Backend)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm or yarn package manager
- PostgreSQL database
- Git
<!--
## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/orchid-book-shop.git
   cd orchid-book-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/orchid_bookshop"
   
   # Authentication
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Payment
   STRIPE_PUBLIC_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   
   # Email
   EMAIL_SERVER_HOST="smtp.example.com"
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER="your-email"
   EMAIL_SERVER_PASSWORD="your-password"
   EMAIL_FROM="noreply@orchidbookshop.com"
   ```

4. **Set up the database**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
orchid-book-shop/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (dashboard)/   # Admin/Operator dashboards
│   │   ├── (shop)/        # Customer-facing pages
│   │   ├── api/           # API routes
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable components
│   │   ├── ui/            # Base UI components
│   │   ├── forms/         # Form components
│   │   ├── navigation/    # Navigation components
│   │   └── shop/          # Shop-specific components
│   ├── lib/               # Utility libraries
│   ├── hooks/             # Custom React hooks
│   ├── store/             # State management
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Helper functions
├── database/              # Database migrations and seeds
├── docs/                  # Documentation
└── tests/                 # Test files
```

## 🔐 User Roles

### Customer
- Browse products and make purchases
- Manage profile and order history
- Track order status
- **Default Login**: customer@example.com / password123

### Operator
- Manage inventory and orders
- Process customer orders
- Update order status
- **Default Login**: operator@example.com / password123

### Admin
- Full system access
- Manage users and operators
- View analytics and reports
- System configuration
- **Default Login**: admin@example.com / password123

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks

# Database
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
npm run db:reset     # Reset database

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## 🌟 Key Features Showcase

### 🎭 Smooth Animations
- Page transitions with Framer Motion
- Micro-interactions for better UX
- GSAP-powered scroll animations
- Cart animations and loading states

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interfaces
- Progressive web app features

### 🔍 Advanced Search
- Real-time search with debouncing
- Filter by multiple criteria
- Sort by price, rating, date
- Search history and suggestions

### 💳 Secure Payments
- Stripe integration
- Multiple payment methods
- PCI DSS compliance
- Order confirmation and receipts

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Website**: [www.orchidbookshop.com](https://www.orchidbookshop.com)
- **Email**: support@orchidbookshop.com
- **Phone**: +94 123 456 789
- **Address**: 123 Book Street, Colombo, Sri Lanka

### 🐛 Issue Reporting
Found a bug? Please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### 💡 Feature Requests
Have an idea? We'd love to hear it! Open an issue with the `enhancement` label.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All the open-source contributors

---

<div align="center">
  <p>Made with ❤️ for book lovers everywhere</p>
  <p>🌺 <strong>Orchid Book Shop</strong> - Where Stories Bloom 🌺</p>
</div> -->
