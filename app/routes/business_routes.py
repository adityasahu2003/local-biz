from flask import Blueprint, jsonify
from ..models.business import Business

business_bp = Blueprint('business_bp', __name__)

@business_bp.route('/businesses', methods=['GET'])
def get_businesses():
    businesses = Business.query.all()
    business_list = [{'business_id': b.business_id, 'business_name': b.business_name, 'business_category': b.business_category, 'business_pic_path': b.business_pic_path} for b in businesses]
    return jsonify(business_list)

@business_bp.route('/business/<int:business_id>', methods=['GET'])
def get_business_details(business_id):
    business = Business.query.get(business_id)
    if business:
        return jsonify({'business_id': business.business_id, 'business_name': business.business_name, 'business_category': business.business_category, 'business_pic_path': business.business_pic_path})
    else:
        return jsonify({'message': 'Business not found'}), 404