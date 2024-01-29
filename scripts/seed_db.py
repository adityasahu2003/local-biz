from app import create_app, db
from app.models.user import User
from app.models.business import Business
from app.models.review import Review
from faker import Faker
import random

def seed_database():
    Faker.seed(0)
    fake = Faker()

    business_categories = [
    'Restaurant',
    'Medical',
    'Bookstore',
    'Education',
    'Clothing',
    'Electronics'
    ]


    db.drop_all()
    db.create_all()

    for i in range(100):
        business = Business(
            business_name=fake.company(),
            business_pic_path=f"https://picsum.photos/id/{i+1}/300/200",
            business_category=random.choice(business_categories)
        )
        db.session.add(business)
    
    for _ in range(20):
        user = User(
            username=fake.user_name(),
            password_hash=fake.sha256(),
            email_id=fake.email()
        )
        db.session.add(user)
    test_user = User(
        username="a",
        password_hash="ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb",
        email_id="a@a.com"
    )
    db.session.add(test_user)
    users = User.query.all()
    businesses = Business.query.all()
    for user in users:
        for business in businesses:
            review = Review(
                username=user.username, 
                business_id=business.business_id, 
                timestamp=fake.date_time_this_year(), 
                review_string=fake.text(), 
                rating=fake.random_int(min=1, max=5))
            db.session.add(review)

    db.session.commit()

    print("Database seeded!")