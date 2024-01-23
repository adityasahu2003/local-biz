CREATE DATABASE IF NOT EXISTS localBizDB;

USE localBizDB;

CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    profile_pic_path VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS businesses (
    business_id SERIAL NOT NULL,
    business_name VARCHAR(255) NOT NULL,
    business_pic_path VARCHAR(255),
    business_category VARCHAR(255) NOT NULL,
    PRIMARY KEY (business_id)
);

CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL NOT NULL,
    username VARCHAR(255) NOT NULL,
    business_name VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    review_string TEXT DEFAULT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    PRIMARY KEY (review_id),
    FOREIGN KEY (username) REFERENCES users(username),
    FOREIGN KEY (business_name) REFERENCES businesses(business_name)
);

COMMIT;
