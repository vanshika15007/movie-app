# CineScope 🎬

A modern, responsive movie search application built with React and Vite. CineScope allows users to search for movies and view detailed information using the OMDb API.

![CineScope Screenshot](https://th.bing.com/th/id/OIP.19eOcs_L9HWel9NYlfZZrwHaHa?rs=1&pid=ImgDetMain)

## ✨ Features

- 🎯 **Real-time Movie Search**: Instant search results with debounced input
- 🎬 **Detailed Movie Information**:
  - IMDB Rating
  - Release Year
  - Language
  - Runtime
  - Genre
  - Director
  - Cast
  - Plot Summary
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- ⚡ **Fast Performance**: Built with Vite for quick development and optimal performance
- 🎨 **Modern UI**: Clean and intuitive interface using styled-components

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vanshika15007/movie-app.git
   cd movie-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
movie-app/
├── src/
│   ├── components/
│   │   ├── MovieComponents.jsx      # Movie card display component
│   │   └── MovieInfoComponent.jsx   # Detailed movie information component
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles
├── public/
│   └── index.html                   # HTML template
├── package.json                     # Project dependencies and scripts
├── vite.config.js                   # Vite configuration
└── README.md                        # Project documentation
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Styled Components
- **HTTP Client**: Axios
- **API**: OMDb API
- **Font**: Josefin Sans (Google Fonts)

## 🔑 API Configuration

The application uses the OMDb API for fetching movie data. A demo API key is included in the code:

```javascript
export const API_KEY = "9961bb9a";
```

To use your own API key:

1. Sign up at [OMDb API](https://www.omdbapi.com/)
2. Replace the API_KEY in `src/App.jsx` with your key

## 📱 Responsive Design

The application is fully responsive with specific breakpoints:

- Desktop: Default layout
- Mobile: Optimized layout for screens below 768px
- Tablet: Adaptive layout for medium-sized screens

## 🎨 Styling

The application uses styled-components for styling with:

- Responsive design using media queries
- Flexbox for layout
- Custom styled components for consistent UI
- Google Fonts integration

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [OMDb API](https://www.omdbapi.com/) for movie data
- [Vite](https://vitejs.dev/) for the build tool
- [React](https://reactjs.org/) for the frontend framework
- [Styled Components](https://styled-components.com/) for styling  remove extra information from this readme i want only important information# movie-app
