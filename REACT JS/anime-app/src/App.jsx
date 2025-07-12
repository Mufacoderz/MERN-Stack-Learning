import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [animes, setAnimes] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);

  function handleSelectedAnime(id) {
    const anime = animes.find((a) => a.mal_id === id);
    setSelectedAnime(anime);
  }

  return (
    <>
      <NavBar>
        <Search onSetAnimes={setAnimes} onSetSelectedAnime={setSelectedAnime}>
          <NumResult animes={animes} />
        </Search>
      </NavBar>

      <Main>
        {animes.length > 0 ? (
          <>
            <Box>
              <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
            </Box>
            <Box>{selectedAnime && <AnimeDetails selectedAnime={selectedAnime} />}</Box>
          </>
        ) : (
          <p className="empty-msg">Search anime to get started!</p>
        )}
      </Main>
    </>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍥</span>
      <h1>WeeBoo</h1>
      <span role="img">🍥</span>
    </div>
  );
}

function Search({ children, onSetAnimes, onSetSelectedAnime }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchAnime() {
      if (query.length < 3) {
        onSetAnimes([]);
        onSetSelectedAnime(null);
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(
          `https://api.jikan.moe/v4/anime?q=${query}&limit=10`,
          { signal: controller.signal }
        );
        const data = await res.json();
        onSetAnimes(data.data);
        onSetSelectedAnime(data.data[0] || null);
        setLoading(false);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
          setLoading(false);
        }
      }
    }

    const timeout = setTimeout(fetchAnime, 500);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query, onSetAnimes, onSetSelectedAnime]);

  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? <p>Loading...</p> : children}
    </div>
  );
}

function NumResult({ animes }) {
  return (
    <p className="search-results">
      Found <strong>{animes.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
}

function AnimeList({ animes, onSelectedAnime }) {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <Anime key={anime.mal_id} anime={anime} onSelectedAnime={onSelectedAnime} />
      ))}
    </ul>
  );
}

function Anime({ anime, onSelectedAnime }) {
  return (
    <li onClick={() => onSelectedAnime(anime.mal_id)}>
      <img src={anime.images.jpg.image_url} alt={`${anime.title} cover`} />
      <h3>{anime.title}</h3>
      <div>
        <p>
          <span>{anime.year || 'N/A'}</span>
        </p>
      </div>
    </li>
  );
}

function AnimeDetails({ selectedAnime }) {
  return (
    <div className="details">
      <header>
        <img
          src={selectedAnime.images.jpg.image_url}
          alt={`${selectedAnime.title} cover`}
        />
        <div className="details-overview">
          <h2>{selectedAnime.title}</h2>
          <p>
            {selectedAnime.year || 'Unknown Year'} &bull;{' '}
            {selectedAnime.score || 'N/A'}
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{selectedAnime.synopsis}</em>
        </p>
      </section>
    </div>
  );
}
