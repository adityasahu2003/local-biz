import unittest
from app import create_app, db
from app.models.user import User
from app.models.business import Business
from app.models.review import Review

class ModelTestCase(unittest.TestCase):

    def setUp(self):
        self.app = create_app()
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_user_model(self):
        u = User(username='testuser', password_hash='testpass', email_id='test@example.com')
        db.session.add(u)
        db.session.commit()
        self.assertTrue(User.query.filter_by(username='testuser').first() is not None)

    def test_business_model(self):
        b = Business(business_name='Test Business', business_category='Test Category')
        db.session.add(b)
        db.session.commit()
        self.assertTrue(Business.query.filter_by(business_name='Test Business').first() is not None)

    def test_review_model(self):
        u = User(username='reviewuser', password_hash='testpass', email_id='review@example.com')
        b = Business(business_name='Review Business', business_category='Review Category')
        db.session.add(u)
        db.session.add(b)
        db.session.commit()
        review = Review(username=u.username, business_id=b.business_id, timestamp='2023-01-01T00:00:00', review_string='Good', rating=5)
        db.session.add(review)
        db.session.commit()
        self.assertTrue(Review.query.filter_by(username='reviewuser').first() is not None)

if __name__ == '__main__':
    unittest.main()
