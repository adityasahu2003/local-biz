from .. import db

class Review(db.Model):
    review_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), db.ForeignKey('user.username'), nullable=False)
    business_id = db.Column(db.String(255), db.ForeignKey('business.business_id'), nullable=False)
    timestamp = db.Column(db.String(255), nullable=False)
    review_string = db.Column(db.Text)
    rating = db.Column(db.Integer, nullable=False)
