from datetime import datetime

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

# from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq%(table_name)s%(column_0_name)s",
    "ck": "ck%(table_name)s%(column_0_name)s",
    "fk": "fk%(table_name)s%(column_0_name)s%(referred_table_name)s",
    "pk": "pk%(table_name)s",
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata, engine_options={"echo": True})

# TODO: make TimeStampMixin and implement


class Producer(db.Model, SerializerMixin):
    __tablename__ = "producers"

    id = db.Column(db.Integer, primary_key=True)
    founding_year = db.Column(db.Integer)
    name = db.Column(db.String)
    region = db.Column(db.String)
    operation_size = db.Column(db.String)
    image = db.Column(db.String)

    cheeses = db.relationship("Cheese", back_populates="producer", cascade="all,delete")
    serialize_rules = ("-cheeses.producer",)

    @validates("name")
    def validate_name(self, key, name):
        if not name:
            raise ValueError("Must have a name")

    @validates("operation_size")
    def validate_operation_size(self, key, operation_size):
        if operation_size not in ("small", "medium", "large", "family", "corporate"):
            raise ValueError("Must be one of small, medium, large, family, corporate.")

    @validates("founding_year")
    def validates_founding_year(self, key, founding_year):
        if not 1900 <= founding_year <= 2024:
            # TODO: refacotor so current year derived from datetime
            raise ValueError("Must be between 1900 and present")

    def __repr__(self):
        return f"<Producer {self.id}>"


class Cheese(db.Model, SerializerMixin):
    __tablename__ = "cheeses"

    id = db.Column(db.Integer, primary_key=True)
    producer_id = db.Column(db.Integer, db.ForeignKey("producers.id"), nullable=False)
    kind = db.Column(db.String)
    is_raw_milk = db.Column(db.Boolean)
    production_date = db.Column(db.DateTime)
    image = db.Column(db.String)
    price = db.Column(db.Float)

    producer = db.relationship("Producer", back_populates="cheeses")

    serialize_rules = ("-producer.cheeses",)

    @validates("production_date", "price")
    def validate_cheese_attrs(self, key, value):
        if key == "production_date":
            prod_date = datetime.strptime(value, "%Y-%m-%d")
            if prod_date >= datetime.now():
                raise ValueError("Production date must be in the past")
            return prod_date
        elif key == "price":
            if not 1.00 <= value <= 45.00:
                raise ValueError("Price must be between 1.00 and 45.00")
            return value

    def __repr__(self):
        return f"<Cheese {self.id}>"
