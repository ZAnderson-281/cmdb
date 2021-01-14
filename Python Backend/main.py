from flask import Flask
from flask_restful import Api

app = Flask(__name__)
api = Api(app)


@app.route('/Dashboard')
def hello_world():
    return 'Hello, World!'


if __name__ == '__main__':
    app.run(debug=True)
