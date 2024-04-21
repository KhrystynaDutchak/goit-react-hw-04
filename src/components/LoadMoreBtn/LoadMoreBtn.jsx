import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ handleLoadMore }) {
    return (
      <button onClick={handleLoadMore} className={css.button}>
        Load more
      </button>
    );
  }
  