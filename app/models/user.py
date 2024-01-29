from .. import db

class User(db.Model):
    username = db.Column(db.String(255), primary_key=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    email_id = db.Column(db.String(255))
