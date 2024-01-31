import unittest
import json
from app import create_app, db
from app.models.user import User
from app.models.business import Business
from app.models.review import Review

class RoutesTestCase(unittest.TestCase):

    def setUp(self):
        self.app = create_app()
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()
        self.client = self.app.test_client(use_cookies=True)

        u = User(username='testuser', password_hash='testpass', email_id='test@example.com')
        b = Business(business_name='Test Business', business_category='Test Category')
        db.session.add(u)
        db.session.add(b)
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_register_route(self):
        response = self.client.post('/register', data=json.dumps({
            'username': 'newuser',
            'password_hash': 'newpass',
            'email_id': 'new@example.com'
        }), content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_login_route(self):
        response = self.client.post('/login', data=json.dumps({
            'username': 'testuser',
            'password_hash': 'testpass'
        }), content_type='application/json')
        self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    unittest.main()
