from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import Cheese, Producer, db

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

Api.error_router = lambda self, router, e: router(e)
api = Api(app)


class Producers(Resource):

    def get(self):
        producers = [p.to_dict(rules=("-cheeses",)) for p in Producer.query.all()]
        return make_response(producers, 200)


class ProducerById(Resource):

    def get(self, id):
        producer = Producer.query.get_or_404(id)
        return make_response(producer.to_dict(), 200)

    def delete(self, id):
        producer = Producer.query.get_or_404(id)
        db.session.delete(producer)
        db.session.commit()
        return make_response("", 204)


class Cheeses(Resource):

    def post(self):
        ch_dict = request.get_json()
        try:
            cheese = Cheese(**ch_dict)
        except ValueError as e:
            return make_response({"error": e.args}, 422)
        db.session.add(cheese)
        db.session.commit()
        return make_response(
            cheese.to_dict(
                rules=(
                    "-producer.region",
                    "-producer.founding_year",
                    "-producer.operation_size",
                    "-producer.image",
                    "-producer.id",
                )
            ),
            201,
        )


class CheeseById(Resource):

    @classmethod
    def find_cheese(cls, id):
        return Cheese.query.get_or_404(id)

    def patch(self, id):
        cheese = self.__class__.find_cheese(id)
        ch_dict = request.get_json()
        try:
            for attr, value in ch_dict.items():
                setattr(cheese, attr, value)
        except ValueError as e:
            return make_response({"error": e.args}, 422)
        # db.session.add(cheese)
        db.session.commit()
        return make_response(cheese.to_dict(rules=("-producer",)), 202)

    def delete(self, id):
        db.session.delete(self.__class__.find_cheese(id))
        db.session.commit()
        return make_response("", 204)


api.add_resource(Producers, "/producers")
api.add_resource(ProducerById, "/producers/<int:id>")
api.add_resource(Cheeses, "/cheeses")
api.add_resource(CheeseById, "/cheeses/<int:id>")


@app.errorhandler(404)
def handle_404(error):
    return make_response({"error": "Resource not found"}, 404)


if __name__ == "__main__":
    app.run(port=5555, debug=True)
