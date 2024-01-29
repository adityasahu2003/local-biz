from flask import Flask, jsonify, request
from setup_db import db, User, Business, Review
from datetime import datetime
from sqlalchemy import and_
from dotenv import load_dotenv
import os
import hashlib
from flask_cors import CORS
load_dotenv()

MY_ENV_VAR = os.getenv('MY_ENV_VAR')

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///localBizDB.db'
db.init_app(app)

@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    new_user = User(username=data['username'], password_hash=data['password_hash'], email_id=data['email_id'])
    db.session.add(new_user)
    db.session.commit()
    str = MY_ENV_VAR + data['username']
    return jsonify({'username': f'{data['username']}', 'token': f'{hashlib.sha256(str.encode()).hexdigest()}'}), 201

@app.route('/login', methods=['POST'])
def login_user():
    data = request.json
    user = User.query.filter_by(username=data['username'], password_hash=data['password_hash']).first()
    if user:
        unhashed_token = MY_ENV_VAR + data['username']
        return jsonify({'username': f'{data['username']}', 'token': f'{hashlib.sha256(unhashed_token.encode()).hexdigest()}'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/businesses', methods=['GET'])
def get_businesses():
    businesses = Business.query.all()
    business_list = [{'business_id': b.business_id, 'business_name': b.business_name, 'business_category': b.business_category, 'business_pic_path': b.business_pic_path} for b in businesses]
    return jsonify(business_list)

@app.route('/business/<int:business_id>', methods=['GET'])
def get_business_details(business_id):
    business = Business.query.get(business_id)
    if business:
        return jsonify({'business_id': business.business_id, 'business_name': business.business_name, 'business_category': business.business_category, 'business_pic_path': business.business_pic_path})
    else:
        return jsonify({'message': 'Business not found'}), 404

@app.route('/reviews/<int:business_id>', methods=['GET'])
def get_reviews_for_business(business_id):
    reviews = Review.query.filter_by(business_id=Business.query.get(business_id).business_id).all()
    review_list = [{'review_id': r.review_id, 'username': r.username, 'business_id': business_id, 'timestamp': r.timestamp, 'review_string': r.review_string, 'rating': r.rating} for r in reviews]
    return jsonify(review_list)

@app.route('/postreview', methods=['POST'])
def post_review():
    data = request.json
    pre_hash_str = MY_ENV_VAR + data['username']
    hash_str = f"{hashlib.sha256(pre_hash_str.encode()).hexdigest()}"
    if hash_str != data['token']:
        # print(hash_str)
        # print(data['token'])
        return jsonify({'message': 'Token does not match'}), 401
    new_review = Review(username=data['username'], business_id=data['business_id'], timestamp=f"{datetime.now()}", review_string=data['review_string'], rating=data['rating'])
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'message': 'Review posted successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
