import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaMicrophone } from 'react-icons/fa'; // Sesli arama ikonu
import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const trimmed = searchTerm.trim();

    if (trimmed === '') {
      toast.error('Please enter a search term');
      return;
    }

    setIsLoading(true);
    await onSubmit(trimmed);
    setIsLoading(false);
    setSearchTerm('');
  };

  const handleVoiceSearch = () => {
    // Sesli arama fonksiyonu (Opsiyonel: Web Speech API ile çalışabilir)
    toast.info("Voice search is not implemented yet!");
  };

  return (
    <header className={styles.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          {isLoading ? (
            <div className={styles.spinner}></div> 
          ) : (
            "Search"
          )}
        </button>
        <button type="button" className={styles.voiceButton} onClick={handleVoiceSearch}>
          <FaMicrophone />
        </button>
      </form>
    </header>
  );
}
