from Flask.project.__init__ import db, ma


class ServiceModel(db.Model):
    __tablename__ = "Service"
    PK_ID_SERVICE = db.Column(db.Integer, primary_key=True)
    NAME = db.Column(db.String(45), nullable=False)
    AMOUNT = db.Column(db.Integer)
    SERVICE_PRICE = db.Column(db.Integer, nullable=False)
    ACTIVE = db.Column(db.Boolean, nullable=False, default=True)

    def __repr__(self):
        return "<{}:{}:{}:{}>".format(
            self.PK_ID_SERVICE, self.NAME, self.SERVICE_PRICE, self.ACTIVE
        )


class ServiceSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ServiceModel
        include_fk = True

    @post_load
    def make_plan(self, data, **kwargs):
        return ServiceModel(**data)
