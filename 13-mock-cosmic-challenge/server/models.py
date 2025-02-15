from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(column_0_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata, engine_options={"echo": True})


class Planet(db.Model, SerializerMixin):
    __tablename__ = 'planets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    distance_from_earth = db.Column(db.Integer)
    nearest_star = db.Column(db.String)

    # Add relationship
    missions = db.relationship("Mission", back_populates=("planet"), cascade="all, delete-orphan")
    scientists = association_proxy("missions", "scientist")

    # Add serialization rules
    serialize_rules = ("-missions.planet",)


class Scientist(db.Model, SerializerMixin):
    __tablename__ = 'scientists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    field_of_study = db.Column(db.String, nullable=False)

    # Add relationship
    missions = db.relationship("Mission", back_populates=("scientist"), cascade="all, delete-orphan")
    planets = association_proxy("missions", "planet")

    # Add serialization rules
    serialize_rules = ("-missions.scientist",)

    # Add validation
    @validates("name", "field_of_study")
    def validates_attrs_present(self, attr, value):
        if not value:
            raise ValueError(f"{attr} cannot be blank")
        return value


class Mission(db.Model, SerializerMixin):
    __tablename__ = 'missions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    planet_id = db.Column(db.Integer, db.ForeignKey('planets.id'))
    scientist_id = db.Column(db.Integer, db.ForeignKey('scientists.id'))


    # Add relationships
    planet = db.relationship("Planet", back_populates=("missions"))
    scientist = db.relationship("Scientist", back_populates=("missions"))

    # Add serialization rules
    serialize_rules = ("-planet.missions", "-scientist.missions")

    # Add validation
    @validates("name")
    def validate_name(self, key, name_str):
        if not name_str:
            raise ValueError("Name cannot be blank")
        return name_str
    
    @validates("planet_id", "scientist_id")
    def validate_foreign_keys(self, key, fk):
        if not fk:
            raise ValueError(f"{key} cannot be blank")
        return fk



# add any models you may need.
