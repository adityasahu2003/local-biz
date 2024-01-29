from flask import Blueprint, jsonify, request
from ..models.user import User
from .. import db
from sqlalchemy.exc import IntegrityError
import hashlib
import os

auth_bp = Blueprint('auth_bp', __name__)
MY_ENV_VAR = os.getenv('MY_ENV_VAR')


@auth_bp.route('/register', methods=['POST'])
def register_user():
    data = request.json
    try:
        new_user = User(username=data['username'], password_hash=data['password_hash'], email_id=data['email_id'])
        db.session.add(new_user)
        db.session.commit()
        token_str = os.getenv('MY_ENV_VAR') + data['username']
        return jsonify({'username': data['username'], 'token': hashlib.sha256(token_str.encode()).hexdigest()}), 201

    except IntegrityError:
        db.session.rollback()
        return jsonify({'message': 'Username already exists'}), 201

@auth_bp.route('/login', methods=['POST'])
def login_user():
    data = request.json
    user = User.query.filter_by(username=data['username'], password_hash=data['password_hash']).first()
    if user:
        unhashed_token = MY_ENV_VAR + data['username']
        return jsonify({'username': f'{data['username']}', 'token': f'{hashlib.sha256(unhashed_token.encode()).hexdigest()}'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401
