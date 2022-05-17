from flask import Blueprint, render_template, request, redirect, url_for
from .models import Contract, PersonalData
# from. import db

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return redirect('/kdprojekt')


@main.route('/kdprojekt')
@main.route('/urcup')
def form():
    rule = request.url_rule
    if 'kdprojekt' in rule.rule:
        company = True
    elif 'urcup' in rule.rule:
        company = False
    return render_template('form.html', company=company)


@main.route('/submit', methods=['POST'])
def submit():
    data = request.form.to_dict()
    print(data)
    
    # add to database
    # contract = Contract(company=data['company'])
    # db.session.add(contract)
    # personal_data = PersonalData(contract=contract, surname=data['surname'], name=data['name'],
    # second_name=data['secondName'],  father_name=data['fathersName'],
    # mother_name=data['mothersName'], birthday=data['birthday'], birth_place=data['birthPlace'],
    # family_name=data['familyName'], citizenship=data['citizenship'], pesel=data['pesel'],
    # nip=data['nip'], phone_number=data['phoneNumber'], email=data['email'], bank_name=data['bankName'],
    # account_number=data['accountNumber'], stay_number=data['stayNumber'])
    # db.session.add(personal_data)

    # db.session.commit()
    return redirect('/kdprojekt')


@main.route('/manage')
def manage_view():
    return render_template('manage.html')
