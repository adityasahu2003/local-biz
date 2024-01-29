from app import create_app
from scripts.seed_db import seed_database

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        seed_database()
    app.run(debug=True, port=5000)
