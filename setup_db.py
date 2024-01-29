from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///localBizDB.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    username = db.Column(db.String(255), primary_key=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    email_id = db.Column(db.String(255))

class Business(db.Model):
    business_id = db.Column(db.Integer, primary_key=True)
    business_name = db.Column(db.String(255), nullable=False)
    business_pic_path = db.Column(db.String(255))
    business_category = db.Column(db.String(255), nullable=False)

class Review(db.Model):
    review_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), db.ForeignKey('user.username'), nullable=False)
    business_id = db.Column(db.String(255), db.ForeignKey('business.business_id'), nullable=False)
    timestamp = db.Column(db.String(255), nullable=False)
    review_string = db.Column(db.Text)
    rating = db.Column(db.Integer, nullable=False)

def create_tables():
    with app.app_context():
        db.create_all()
        print("Database and tables created")

if __name__ == '__main__':
    create_tables()
