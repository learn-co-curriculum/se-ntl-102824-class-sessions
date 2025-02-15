#!/usr/bin/env python3

import os

from flask import Flask, abort, make_response, request
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

Api.error_router = lambda self, handler, e: handler(e)
api = Api(app)

# @app.route('/')
# def home():
#     return ''

class Scientists(Resource):
    def get(self):
        scis = [sci.to_dict(only=("id", "name", "field_of_study")) for sci in Scientist.query.all()]
        return make_response(scis, 200)

    def post(self):
        r_dict = request.get_json()
        try:
            sci = Scientist(**r_dict)
        except ValueError:
             abort(400)
        db.session.add(sci)
        db.session.commit()
        return make_response(sci.to_dict(), 201)
    
class ScientistById(Resource):

    @classmethod
    def find_sci(cls, id):
            sci = Scientist.query.get_or_404(id)
            print(sci)
            return sci
        
    def get(self, id):
        sci = self.__class__.find_sci(id)
        # if not sci:
        #      return make_response({"error": "Scientist not found"}, 404)
        return make_response(sci.to_dict(), 200)
    
    def patch(self, id):
        sci = self.__class__.find_sci(id)
        r_dict = request.get_json()
        try:
            for attr, val in r_dict.items():
                setattr(sci, attr, val)
        except ValueError: 
            abort(400)
        db.session.commit()
        return make_response(sci.to_dict(), 202)
        
    
    def delete(self, id):
        sci = self.__class__.find_sci(id)
        # if not sci:
        #      return make_response({"error": "Scientist not found"}, 404)
        db.session.delete(sci)
        db.session.commit()
        return make_response({}, 204)
    
class Planets(Resource):
    def get(self):
        planets = [p.to_dict(rules=("-missions",)) for p in Planet.query.all()]
        return make_response(planets, 200)
    
    
class Missions(Resource):
    def post(self):
        r_dict = request.get_json()
        try:
            mission = Mission(**r_dict)
        except ValueError:
             abort(400)
        db.session.add(mission)
        db.session.commit()
        return make_response(mission.to_dict(), 201)

    
api.add_resource(Scientists, "/scientists")
api.add_resource(ScientistById, "/scientists/<int:id>")
api.add_resource(Planets, "/planets")
api.add_resource(Missions, "/missions")

@app.errorhandler(404)
def handle_404(e):
     return make_response({ "error": "Scientist not found"}, 404)

@app.errorhandler(400)
def handle_400(e):
     return make_response({ "errors": ["validation errors"]}, 400)


if __name__ == '__main__':
    app.run(port=5555, debug=True)
