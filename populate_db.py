from faker import Faker
from setup_db import app, db, User, Business, Review

fake = Faker()

with app.app_context():
    for _ in range(10): 
        fake_username = fake.user_name()
        fake_email = fake.email()
        user = User(username=fake_username, password_hash=fake.sha256(), email_id=fake_email)
        db.session.add(user)

    for i in range(5):
        business = Business(business_name=fake.company(), business_category=fake.job(), business_pic_path=f"assets/businesses/{i}")
        db.session.add(business)

    db.session.commit()

    users = User.query.all()
    businesses = Business.query.all()
    for user in users:
        for business in businesses:
            review = Review(username=user.username, business_id=business.business_id, timestamp=fake.date_time_this_year(), review_string=fake.text(), rating=fake.random_int(min=1, max=5))
            db.session.add(review)

    db.session.commit()

print("Dummy data added")
