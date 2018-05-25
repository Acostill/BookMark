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

CREATE TABLE completed (
  id SERIAL PRIMARY KEY,
  media_id VARCHAR,
  media_type VARCHAR
);

CREATE TABLE custom_lists (
  id SERIAL PRIMARY KEY,
  list_name VARCHAR,
  user_id INTEGER REFERENCES users
)
