
# 🛍️ Ramble Advertising E-Commerce Platform

Ramble is a full-stack e-commerce platform built using **Next.js**. It provides digital advertising services and includes both a **user-facing application** and a comprehensive **admin dashboard** for content and service management.

---

## ▶️ Video Tutorials

- 📹 **User Application Demo**  
[![User App Demo](./assets/user-demo.png)](https://vimeo.com/1089472252)
[![Admin Panel Demo](./assets/admin-demo.png)](https://vimeo.com/1089472292)

- 📹 **Admin Panel Demo**  
[![Admin Panel Demo](./assets/admin-demo.png)](https://vimeo.com/1089472292)

---

## 🚀 Features

### 👤 User Application
- Browse a variety of advertising services
- Filter services by categories and genres
- View blog posts and testimonials
- Add services to the cart and checkout
- Subscribe to newsletters

### 🛠️ Admin Panel
- Manage blogs, categories, and service listings
- Access and export newsletter subscriptions
- Oversee orders and manage client data

---

## 🧰 Tech Stack

- **Frontend Framework:** Next.js (React 18)
- **Styling:** Tailwind CSS, Material Tailwind, Framer Motion
- **Icons & UI:** HeroIcons, NextUI
- **Backend:** Next.js API routes
- **Database:** Sequelize ORM with MySQL
- **Authentication:** JWT, bcrypt
- **Utilities:** dotenv, xlsx, react-toastify

---

## 📁 Folder Structure

```bash
ramble/
├── app/                   # Main application code
│   ├── AdminPanel/        # Admin dashboard pages
│   ├── Cart/, Services/   # User pages
│   ├── api/               # Backend API routes
│   └── components/        # Shared UI components
├── database/              # Sequelize setup
│   ├── config/            # DB config
│   ├── migrations/        # DB schema
│   ├── models/            # DB models
│   └── seeders/           # Dummy data
├── public/                # Static files (images, icons, etc.)
├── package.json           # Project metadata and dependencies
└── tailwind.config.js     # Tailwind customization
```

---

## 🧪 Getting Started Locally

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository
```bash
git clone <repo-url>
cd ramble
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root and add the following:
```env
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
JWT_SECRET=your_secret_key
```

### 4. Setup the Database

Run migrations and seeders:
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5. Start the Development Server
```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📬 Contact

For any issues, suggestions, or support, feel free to contact the developer or open an issue in the repository.

---

© 2025 Ramble Agency. All rights reserved.
