import json
import pdfkit
import jinja2


def handle(event, __):
    print(f'event=[{event}]')
    event = json.loads(event)

    templateLoader = jinja2.FileSystemLoader(searchpath="./aws/lambda/")
    templateEnv = jinja2.Environment(loader=templateLoader)
    TEMPLATE_FILE = "contract.html"
    template = templateEnv.get_template(TEMPLATE_FILE)
    sourceHtml = template.render(json_data=event)
    outputFilename = "aws/lambda/contract.pdf"

    with open('./aws/lambda/render.html', 'w') as f:
        f.write(sourceHtml)

    pdfkit.from_file('./aws/lambda/render.html', outputFilename)
