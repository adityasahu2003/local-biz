from .. import db

class Business(db.Model):
    business_id = db.Column(db.Integer, primary_key=True)
    business_name = db.Column(db.String(255), nullable=False)
    business_pic_path = db.Column(db.String(255))
    business_category = db.Column(db.String(255), nullable=False)
