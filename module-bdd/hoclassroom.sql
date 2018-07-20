DROP DATABASE IF EXISTS hoclassroom;
CREATE DATABASE IF NOT EXISTS hoclassroom;
USE hoclassroom;

SELECT 'CREATING DATABASE STRUCTURE' as 'INFO';

DROP TABLE IF EXISTS users,
                     password_reset,
                     role,
                     media, 
                     article, 
                     article_media,
                     course,
                     article_course,
                     comment,
                     log,
                     article_log,
                     comment_log,
                     message;

/*!50503 set default_storage_engine = InnoDB */;
/*!50503 select CONCAT('storage engine: ', @@default_storage_engine) as INFO */;

CREATE TABLE users (
    id          INT             NOT NULL,
    login       VARCHAR(255)    NOT NULL,
    first_name  VARCHAR(255)    NOT NULL,
    last_name   VARCHAR(255)    NOT NULL,
    email       VARCHAR(255)    NOT NULL,    
    password    VARCHAR(255)    NOT NULL,
    salt        VARCHAR(255)    NOT NULL,
    is_active   BOOLEAN         NOT NULL,
    role_id     INT             NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE password_reset (
    id          INT             NOT NULL,
    email       VARCHAR(255)    NOT NULL,
    token       VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE role (
    id          INT             NOT NULL,
    name        VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE media (
    id          INT             NOT NULL,
    path        VARCHAR(255)    NOT NULL,
    extension   VARCHAR(10)     NOT NULL,
    users_id    INT             NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE article (
    id              INT             NOT NULL,
    title           VARCHAR(255)    NOT NULL,
    content         VARCHAR(255)    NOT NULL,
    date_creation   VARCHAR(255)    NOT NULL,
    is_active       BOOLEAN         NOT NULL,
    author_id       INT             NOT NULL,
    media_header    INT             NOT NULL,
    PRIMARY KEY     (id) 
);

CREATE TABLE article_media (
    id              INT             NOT NULL,
    article_id      INT             NOT NULL,
    media_id        INT             NOT NULL,
    PRIMARY KEY     (id) 
);

CREATE TABLE course (
    id              INT             NOT NULL,
    name            VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id) 
);

CREATE TABLE article_course (
    id              INT             NOT NULL,
    article_id      INT             NOT NULL,
    course_id       INT             NOT NULL,
    PRIMARY KEY     (id) 
);

CREATE TABLE comment (
    id              INT             NOT NULL,
    content         VARCHAR(255)    NOT NULL,
    date_creation   VARCHAR(255)    NOT NULL,
    is_active       BOOLEAN         NOT NULL,
    users_id        INT             NOT NULL,
    article_id      INT             NOT NULL,
    PRIMARY KEY     (id) 
);

CREATE TABLE log (
    id              INT             NOT NULL,
    date_modif      VARCHAR(255)    NOT NULL,
    users_id        INT             NOT NULL,
    PRIMARY KEY     (id) 
);

CREATE TABLE article_log (
    id              INT             NOT NULL,
    article_id      INT             NOT NULL,
    log_id          INT             NOT NULL,
    PRIMARY KEY     (id) 
);

CREATE TABLE comment_log (
    id              INT             NOT NULL,
    comment_id      INT             NOT NULL,
    log_id          INT             NOT NULL,
    PRIMARY KEY     (id) 
);

CREATE TABLE message (
    id                  INT             NOT NULL,
    subject             VARCHAR(255)    NOT NULL,
    content             VARCHAR(255)    NOT NULL,
    date_send           VARCHAR(255)    NOT NULL,
    date_receive        VARCHAR(255)    NOT NULL,
    is_read             BOOLEAN         NOT NULL,
    user_send_id        INT             NOT NULL,
    user_receiver_id    INT             NOT NULL,
    PRIMARY KEY         (id) 
);

ALTER TABLE users ADD FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE;

ALTER TABLE media ADD FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE article ADD FOREIGN KEY (author_id) REFERENCES role(id) ON DELETE CASCADE,
ALTER TABLE article ADD FOREIGN KEY (media_header) REFERENCES media(id) ON DELETE CASCADE;

