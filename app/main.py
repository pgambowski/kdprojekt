from flask import Blueprint, render_template, request
from .models import Contract
from. import db

main= Blueprint('main', __name__)


@main.route('/kdprojekt')
@main.route('/urcup')
def index():
    rule = request.url_rule
    if 'kdprojekt' in rule.rule:
        company = True
    elif 'urcup' in rule.rule:
        company = False
    return render_template('index.html', company=company)

@main.route('/submit', methods=['POST'])
def submit():
    reasons = request.form.getlist('insuranceReason')
    data = Contract(reasons=reasons)
    db.session.add(data)
    db.session.commit()

    return render_template('index.html')

@main.route('/manage')
def manage_view():
    return render_template('manage.html')



