DROP DATABASE IF EXISTS TWWebBasic;

CREATE DATABASE TWWebBasic;

USE TWWebBasic;

CREATE TABLE  IF NOT EXISTS alternative(
    id int NOT NULL PRIMARY KEY ,
    value varchar(10) ,
    description varchar(50) ,
    topic_name varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS topic(
  name VARCHAR(20) NOT NULL PRIMARY KEY,
  type VARCHAR(20) NOT NULL,
  question VARCHAR(50) NOT NULL,
  score INT NOT NULL
);

ALTER TABLE alternative ADD CONSTRAINT alternative_topic FOREIGN KEY alternative_topic (topic_name)
    REFERENCES topic (name)  ON DELETE CASCADE ON UPDATE CASCADE;
