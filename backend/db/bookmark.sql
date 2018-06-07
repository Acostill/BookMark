DROP DATABASE IF EXISTS bookmark;
CREATE DATABASE bookmark;

\c bookmark;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password_digest VARCHAR,
  email VARCHAR,
  profile_pic VARCHAR DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
);

CREATE TABLE anime_list (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  media_id VARCHAR, 
  status VARCHAR,
  savepoint INTEGER
);

CREATE TABLE series_list (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  series_id VARCHAR,
  status VARCHAR,
  savepoint INTEGER DEFAULT 0
);

CREATE TABLE movie_list (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  media_id VARCHAR, 
  status VARCHAR,
  savepoint INTEGER
);

CREATE TABLE book_list (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  media_id VARCHAR, 
  status VARCHAR,
  savepoint INTEGER
);

INSERT INTO users (username, password_digest)
VALUES 
  ('gerson', '$2a$10$AJo3ABbxRtioQuVdINYrpuSKUM6grM2errmnIVvQsnqw1EC6gvoGK'),
  ('aang', '$2a$10$AJo3ABbxRtioQuVdINYrpuSKUM6grM2errmnIVvQsnqw1EC6gvoGK'),
  ('zero', '$2a$10$AJo3ABbxRtioQuVdINYrpuSKUM6grM2errmnIVvQsnqw1EC6gvoGK');

INSERT INTO series_list (user_id, series_id, status, savepoint)
VALUES 
  (1, 1396, 'will watch', 0),
  (1, 63247, 'will watch', 0),
  (1, 63639, 'will watch', 0),      
  (1, 4604, 'completed', 216),
  (1, 1405, 'completed', 96),
  (1, 33880, 'completed', 61),
  (1, 1402, 'watching', 100),
  (1, 1399,  'watching', 60),
  (1, 60735,  'on hold', 3),
  (1, 1425,  'on hold', 20);
  