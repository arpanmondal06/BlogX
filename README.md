# Blog Web App

## Overview
This is a feature-rich blog web application built using modern web development tools and libraries. The frontend leverages **HTML**, **Tailwind CSS**, and **React** for a responsive and dynamic user experience, while the backend is powered by **Appwrite** for secure and efficient data management.

---

## Features

- **User Authentication**:
  - Users can sign up and log in to their accounts.
- **CRUD Operations**:
  - Logged-in users can create, edit, and delete their own posts.
  - Users can view all posts created by other users.
  - Post contains images.
- **Rich Text Editor**:
  - Includes a user-friendly editor powered by `tinymce-react` for creating and formatting blog posts.
- **Dynamic Routing**:
  - Seamless navigation using `react-router-dom`.
- **Form Management**:
  - Efficient form handling with `react-hook-form`.
- **Global State Management**:
  - Uses `react-redux` for managing application-wide state.
- **HTML Parsing**:
  - Parses and displays HTML content using `html-react-parser`.

---

## Technologies Used

### Frontend
- **Vite**: Lightning-fast development environment.
- **React**: Component-based UI library.
- **Tailwind CSS**: Utility-first CSS framework.
- **React-Redux**: State management library.
- **React-Hook-Form**: Library for form handling.
- **React-Router-Dom**: Routing library for React.
- **Tinymce-React**: Rich text editor for content creation.
- **HTML-React-Parser**: Safely parses and renders HTML.

### Backend
- **Appwrite**: Open-source backend as a service for handling:
  - User authentication.
  - Database management.
  - Secure API endpoints.

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BlogX.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd BlogX
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Set up Appwrite backend**:
   - Install and configure Appwrite on your server.
   - Create a project in Appwrite and add necessary collections for users and posts.
   - Update the Appwrite configuration in the project.

---

## Usage

1. **Sign Up and Log In**:
   - Create an account or log in to access the app features.
2. **Create Posts**:
   - Use the rich text editor to create and publish blog posts.
3. **Manage Posts**:
   - Edit or delete your posts as needed.
4. **View Posts**:
   - Explore posts created by other users in the application.

---

## Future Enhancements

- Add comments functionality for blog posts.
- Implement post categories and tags for better organization.
- Integrate notifications for post updates.

---



## Acknowledgments
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)
- [TinyMCE](https://www.tiny.cloud/)

