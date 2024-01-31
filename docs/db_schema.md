## Table Name: users
### Columns:
- username (Primary Key) - VARCHAR(255) NOT NULL
- password_hash - VARCHAR(255) NOT NULL
- profile_pic_path - VARCHAR(255)
- Constraints:
    -  Primary Key (username)


## Table Name: businesses
### Columns:
- business_id (Primary Key) - SERIAL NOT NULL
- business_name - VARCHAR(255) NOT NULL
- business_pic_path - VARCHAR(255)
- business_category - VARCHAR(255) NOT NULL
- Constraints:
    - Primary Key (business_id)


## Table Name: reviews
### Columns:
- review_id (Primary Key) - SERIAL NOT NULL
- username - VARCHAR(255) NOT NULL
- business_name - VARCHAR(255) NOT NULL
- timestamp - TIMESTAMP NOT NULL
- review_string - TEXT (default NULL)
- rating - INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL
- Constraints:
    - Primary Key (review_id)
    - Foreign Key (username) REFERENCES users(username)
    - Foreign Key (business_name) REFERENCES businesses(business_name)

