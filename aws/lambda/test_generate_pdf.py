from generate_pdf import handle
import json


def test_generate_pdf_should_run():
    # given
    given_event = json.dumps({
        "company": "urcup",
        "surname": "Kowalski",
        "name": "Janusz",
        "secondName": "Piotr",
        "fathersName": "Zdzisław",
        "mothersName": "Maria",
        "birthday": "17.05.2022",
        "birthPlace": "Gdańsk",
        "familyName": "",
        "citizenship": "Polskie",
        "pesel": "12344394928",
        "nip": "",
        "phoneNumber": "123 123 123",
        "email": "foo@bar.com",
        "stayNumber": "",
        "voivodship": "Pomorskie",
        "powiat": "Pucki",
        "gmina": "Puck",
        "street": "S\\u0142oneczna",
        "houseNumber": "1",
        "flatNumber": "",
        "city": "Po\\u0142chowo",
        "postCode": "84-123",
        "post": "Po\\u0142chowo",
        "zusName": "asdasd",
        "zusAddress": "S\\u0142oneczna 10",
        "nfz": "Pomorski Oddzia\\u0142 Wojew\\u00f3dzki NFZ",
        "pensioner": "false",
        "disabled": "false",
        "insurance": "false",
        "workplace": "",
        "otherReason": "",
        "student": "true",
        "schoolName": "Moja szkola",
        "studentID": "123123",
        "optionalInsurance": "false",
        "bankName": "",
        "accountNumber": "",
        "pitMailConsent": "true",
        "statement": "true"
    })

    # when
    handle(given_event, {})
