from flask import Flask
from flask_restful import Api

app = Flask(__name__)
api = Api(app)


# Dashboard Data

dashboardData = {
    '1a': [1, 2, 3, 4, 5],
    '1b': [5, 2, 543, 231, 3],
    '1c': [2, 234234, 23, 5432, 4343]
}

dashboard = [
    {
        'id': 1,
        'type': "lc",
        'title': "Log Ins",
        'data_id': '1a',
    },
    {
        'id': 2,
        'type': "lc",
        'title': "Recent Changes",
        'data_id': '1b',
    },
    {
        'id': 3,
        'type': "gr",
        'title': "Commits",
        'data_id': '1c',
    },
]

# Dashboard Routing


@app.route('/Dashboard', methods=['GET'])
def getAllDashboard():
    return {"dashboard": dashboard}


@app.route('/Dashboard/<int:widget_id>', methods=['GET'])
def getSpecificDashboardWidget(widget_id):
    widget = next((item for item in dashboard if item['id'] == widget_id))
    return {"widget": widget}


@app.route('/Dashboard/Data/<string:data_id>', methods=['GET'])
def getSpecificDashboardData(data_id):
    return {'res': dashboardData[data_id]}


# Project KANBAN Data
projectData = {
    '2a': [1, 2, 3, 4, 5],
    '2b': [5, 2, 543, 231, 3],
    '2c': [2, 234234, 23, 5432, 4343]
}

projects = [
    {
        "id": 1,
        "name": "Testing project naming",
        "data": "2a"
    },
    {
        "id": 2,
        "name": "Testing project naming Two",
        "data": "2b"
    },

]

# Project KANBAN Routing


@app.route('/Projects', methods=['GET'])
def getAllProjects():
    return {"projects": projects}


@app.route('/Projects/<int:project_id>', methods=['GET'])
def getSpecificProject(project_id):
    x = next((item for item in projects if item['id'] == project_id))
    return {"project": x}


if __name__ == '__main__':
    app.run(debug=True)
