# Pokémon Explorer

A modern web application for exploring and discovering Pokémon. Built with React and Vite.

## Preview

![preview](https://github.com/user-attachments/assets/be5e5b6f-57d2-4c0c-b65b-461b65c18388)


## Features

- Browse through 150 Pokémon
- Real-time search by name
- Filter by Pokémon types
- Responsive design for all devices
- Beautiful UI with animations
- Loading states and error handling

## Technologies Used

- React
- Vite
- CSS3
- PokeAPI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pokemon-explorer.git
```

2. Navigate to the project directory:

```bash
cd pokemon-explorer
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

### Building for Production

To create a production build:

```bash
npm run build
```

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a Vercel account
3. Connect your GitHub repository to Vercel
4. Vercel will automatically deploy your application

## Project Structure

```
pokemon-explorer/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── PokemonList.jsx
│   │   ├── PokemonCard.jsx
│   │   ├── Loading.jsx
│   │   ├── Error.jsx
│   │   └── TypeIcon.jsx
│   ├── hooks/
│   │   └── usePokemon.js
│   ├── assets/
│   │   └── Poke_Ball.webp
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- PokeAPI for providing the Pokémon data
- Vercel for hosting
- React and Vite teams for the amazing tools
