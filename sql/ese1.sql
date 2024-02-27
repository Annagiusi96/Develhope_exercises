CREATE table books (
  book_id INTEGER PRIMARY KEY,
  title TEXT VARCHAR(20) NOT NULL,
  author TEXT VARCHAR(20) NOT NULL,
  published_year INTEGER(4),
  isbn INTEGER,
  price INTEGER,
  rating TEXT VARCHAR(100),
  stock_count TEXT VARCHAR(3)
  )