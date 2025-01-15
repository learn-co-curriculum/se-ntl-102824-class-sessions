#!/usr/bin/env python3

import os

from flask import Flask, jsonify, make_response, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import Mission, Planet, Scientist, db

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

# @app.route('/')
# def home():
#     return ''

class Scientists(Resource):
    def get(self):
        scis = [sci.to_dict(only=("id", "name", "field_of_study")) for sci in Scientist.query.all()]
        return make_response(scis, 200)
    
class ScientistById(Resource):

    @classmethod
    def find_sci(cls, id):
            sci = Scientist.query.get(id)
            print(sci)
            return sci
        
    def get(self, id):
        sci = self.__class__.find_sci(id)
        if not sci:
             return make_response({"error": "Scientist not found"}, 404)
        return make_response(sci.to_dict(), 200)
    
    def delete(self, id):
        sci = self.__class__.find_sci(id)
        if not sci:
             return make_response({"error": "Scientist not found"}, 404)
        db.session.delete(sci)
        db.session.commit()
        return make_response("", 204)
    
api.add_resource(Scientists, "/scientists")
api.add_resource(ScientistById, "/scientists/<int:id>")

# @app.register_error_handler(404)
# def handle_404(e):
#      return make_response({ "error": f"{request.path}.replace("/1234567890").title()"})


if __name__ == '__main__':
    app.run(port=5555, debug=True)
