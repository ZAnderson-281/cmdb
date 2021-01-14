from flask import Flask
from flask_restful import Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)
CORS(app)


# Dashboard Data

dashboardData = {
    '1a': [{
        "id": "1",
        'name': "Zac",
        'description': "Testing",
        'time': "Tests",
        'content': 'test'
    },
        {
        "id": "2",
        'name': "Sam",
        'description': "Testing",
        'time': "Tests",
        'content': 'test'
    }, {
        "id": "3",
        'name': "Sarah",
        'description': "Testing",
        'time': "Tests",
        'content': 'test'
    }],
    '1b': [
        {
            "id": "3",
            'name': "Sarah",
            'description': "Testing",
            'time': "Tests",
            'content': 'test'
        }
    ],
    '1c': []
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
    return {'card_data': dashboardData[data_id]}


# Project KANBAN Data
projectData = {
    '2a': [
        {
            'name': "Todo",
            'items': [
                {"id": 1, "title": "test1", "content": "One"},
                {"id": 2, "title": "test2", "content": "Two"},
                {"id": 3, "title": "test3", "content": "Three"}
            ]
        },
        {
            'name': "In Progress",
            'items': [
                {"id": 1, "title": "test1", "content": "One"},
                {"id": 2, "title": "test2", "content": "Two"},
            ]
        },
        {
            'name': "Completed",
            'items': [
                {"id": 1, "title": "test1", "content": "One"},
                {"id": 2, "title": "test2", "content": "Two"},
            ]
        },
    ],
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

# Projects Routing


@app.route('/Projects', methods=['GET'])
def getAllProjects():
    return {"projects": projects}


@app.route('/Projects/<int:project_id>', methods=['GET'])
def getSpecificProject(project_id):
    x = next((item for item in projects if item['id'] == project_id))
    return {"project": x}


@app.route('/Projects/Data/<string:data_id>', methods=['GET'])
def getSpecificProjectData(data_id):
    return {"data": projectData[data_id]}


if __name__ == '__main__':
    app.run(debug=True)
