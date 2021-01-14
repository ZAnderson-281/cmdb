from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)


class EndpointManager(Resource):

    def get(self):
        return {"endpoints": 'none'}


api.add_resource(EndpointManager, "/")

if __name__ == '__main__':
    app.run(debug=True)
