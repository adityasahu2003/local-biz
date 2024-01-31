from flask import Blueprint, jsonify, request
from ..models.review import Review
from ..models.business import Business
import os
import hashlib
from .. import db
from datetime import datetime

review_bp = Blueprint('review_bp', __name__)
MY_ENV_VAR = os.getenv('MY_ENV_VAR')


@review_bp.route('/reviews/<int:business_id>', methods=['GET'])
def get_reviews_for_business(business_id):
    reviews = Review.query.filter_by(business_id=Business.query.get(business_id).business_id).all()
    review_list = [{'review_id': r.review_id, 'username': r.username, 'business_id': business_id, 'timestamp': r.timestamp, 'review_string': r.review_string, 'rating': r.rating} for r in reviews]
    return jsonify(review_list)

@review_bp.route('/postreview', methods=['POST'])
def post_review():
    data = request.json
    pre_hash_str = MY_ENV_VAR + data['username']
    hash_str = f"{hashlib.sha256(pre_hash_str.encode()).hexdigest()}"
    if hash_str != data['token']:
        return jsonify({'message': 'Token does not match'}), 401
    new_review = Review(username=data['username'], business_id=data['business_id'], timestamp=f"{datetime.now()}", review_string=data['review_string'], rating=data['rating'])
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'message': 'Review posted successfully'}), 201
