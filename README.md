# 👑 Bandage — Trend Shop

  ![Bandage Banner](public/favicon3.png)

## 📖 About the Project

**Bandage** is a modern, full-featured **e-commerce platform** built with contemporary web technologies. It delivers a smooth and secure shopping experience, allowing users to browse products, apply filters, manage their cart, and complete orders with ease.

The project is developed on top of the **React ecosystem** and leverages **Redux** for robust and scalable state management. With a fully responsive design, Bandage performs seamlessly across **mobile, tablet, and desktop** devices.

---

## ✨ Key Features

* **🛒 Advanced Cart Management**
  Add, remove, and update products with real-time price calculations powered by **Redux** and **LocalStorage**.

* **🔐 Secure Authentication**
  JWT-based Login & Signup flow with a **“Remember Me”** option for persistent sessions.

* **📱 Fully Responsive UI**
  Built with **Tailwind CSS**, optimized for every screen size.

* **🔍 Smart Filtering & Search**
  Browse products by category, price range, and rating.

* **💳 Order Flow Simulation**
  Address management and checkout experience designed to mirror real-world e-commerce flows.

* **🌍 Gravatar Integration**
  Automatically displays user profile images based on email address.

---

## 🛠️ Tech Stack

* **Frontend:** React (v19)
* **Styling:** Tailwind CSS (Utility‑First)
* **State Management:** Redux & Redux Thunk
* **Routing:** React Router DOM (SPA)
* **HTTP Client:** Axios with Interceptors (Token handling)
* **Forms & Validation:** React Hook Form
* **Notifications:** React Toastify
* **Icons:** FontAwesome & Lucide React

---

## 🚀 Getting Started

Follow the steps below to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/bandage-ecommerce.git
cd bandage-ecommerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📂 Project Structure

```
src/
├── api/            # Axios configuration & interceptors
├── components/     # Reusable UI components
│   ├── Home/
│   ├── Shop/
│   ├── Order/
│   └── Common/
├── layout/         # Layout components (Header, Footer)
├── pages/          # Route-based pages
├── store/          # Redux logic
│   ├── actions/
│   └── reducers/
└── images/         # Static assets & images
```

---

## 🔮 Future Improvements

* [ ] Admin Dashboard (Product CRUD operations)
* [ ] Multi-language Support (i18n)
* [ ] Dark Mode
* [ ] Wishlist / Favorites Feature

---

### 👩‍💻 Developed by

**Safiye Dalkıran** — 2026

> *Bandage is designed as a clean, scalable, and modern e-commerce experience, focusing on usability, performance, and maintainable architecture.*
