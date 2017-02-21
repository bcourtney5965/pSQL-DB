DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

INSERT INTO pups (name)
  VALUES ('Tyler');