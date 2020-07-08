from . import db
from sqlalchemy.dialects import postgresql

# db.metadata.clear()

class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    create_date = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    company = db.Column(db.String(10), nullable=False)
    personal_data = db.relationship('PersonalData', backref='contract', lazy='dynamic')
    
    def __repr__(self):
        return '<Contract {}>'.format(self.id)  

class PersonalData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    contract_id = db.Column(db.Integer, db.ForeignKey('contract.id'))
    surname = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    second_name = db.Column(db.String(50))
    father_name = db.Column(db.String(50), nullable=False)
    mother_name = db.Column(db.String(50), nullable=False)
    birthday = db.Column(db.String(20), nullable=False)
    birth_place = db.Column(db.String(100), nullable=False)
    family_name = db.Column(db.String(80))
    citizenship = db.Column(db.String(50))
    pesel = db.Column(db.String(11), nullable=False)
    nip = db.Column(db.String(10), nullable=False)
    phone_number = db.Column(db.String(11), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    bank_name = db.Column(db.String(100))
    account_number = db.Column(db.String(32))
    stay_number = db.Column(db.String(100))

    def __repr__(self):
        return '<PersonalData {}>'.format(self.name) 
    