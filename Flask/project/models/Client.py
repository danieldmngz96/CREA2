from Flask.project.__init__ import db, ma


class ClientModel(db.Model):
    __tablename__ = "Plan"
    PK_ID_PLAN = db.Column(db.Integer, primary_key=True)
    EMAIL = db.Column(db.String(100), unique=True, nullable=False)
    TELEPHONE = db.Column(db.String(11), unique=True)
    PASSWORD = db.Column(db.String(100), nullable=False)
    NAME = db.Column(db.String(45), nullable=False)
    USER = db.Column(db.String(45), unique=True, nullable=False)
    ACTIVE = db.Column(db.Boolean, nullable=False)

    FK_ID_PLAN = db.Column(db.Integer, db.ForeignKey("Plan.pk_idPlan"))

    def __repr__(self):
        return "<{}:{}:{}>".format(self.PK_ID_PLAN, self.USER, self.ACTIVE)


class ClientSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ClientModel
        include_fk = True

    @post_load
    def make_plan(self, data, **kwargs):
        return ClientModel(**data)
