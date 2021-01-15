from flask import Flask, request, jsonify
from flask_restful import Api
from flask_cors import CORS, cross_origin

import uuid

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
    '1c': [],
}

dashboard = [
    {
        'id': '1',
        'type': "gc",
        'title': "General Card",
        'data_id': '1a',
        'cardSettings': {
            'cardTextColor': '#222',
            'cardHeaderColor': '#eaeaea'
        }
    },
    {
        'id': '2',
        'type': "lc",
        'title': "List Card",
        'data_id': '1b',
        'cardSettings': {
            'cardTextColor': '#222',
            'cardHeaderColor': '#eaeaea'
        }
    },
    {
        'id': '3',
        'type': "gr",
        'title': "Graph Card",
        'data_id': '1c',
        'cardSettings': {
            'cardTextColor': '#222',
            'cardHeaderColor': '#eaeaea'
        }
    },
    {
        'id': '4',
        'type': "dc",
        'title': "Deadline Card",
        'data_id': '1c',
        'cardSettings': {
            'cardTextColor': '#222',
            'cardHeaderColor': '#eaeaea'
        }
    },
]

# Dashboard Routing


@app.route('/Dashboard', methods=['GET', 'POST'])
def getAllDashboard():

    # GET Request
    if request.method == 'GET':
        return {"dashboard": dashboard}

    # POST Request
    if request.method == 'POST':
        posted_data = request.get_json()

        # Edge cases to make sure request is proper
        if len(posted_data) != 2:
            return {"message": "Invalid request"}
        if 'type' not in posted_data:
            return {"message": "Missing required parameter type"}
        if 'title' not in posted_data:
            return {"message": "Missing required parameter title"}

        ### NOTE: ADD CHECK FOR CARD TYPES HERE IN THE FUTURE ###

        posted_data['id'] = uuid.uuid4().hex
        posted_data['data_id'] = uuid.uuid4().hex
        posted_data['cardSettings'] = {
            'cardTextColor': '#222',
            'cardHeaderColor': '#eaeaea'
        }

        dashboard.append(posted_data)
        dashboardData[posted_data['data_id']] = []

        # Return json for dashboarc element creation
        return jsonify(posted_data)


@app.route('/Dashboard/<string:widget_id>', methods=['GET', 'DELETE'])
def getSpecificDashboardWidget(widget_id):

    # GET Request
    if request.method == 'GET':
        try:
            # Search each item in list for matchng id and return first matching
            widget = next(
                (item for item in dashboard if item['id'] == widget_id))
            return jsonify(widget)

        except StopIteration:
            return jsonify({"message": "id does not exist"})

    # DELETE Request
    if request.method == 'DELETE':
        try:
            # Search each item in list for matchng id and return first matching
            widget = next(
                (item for item in dashboard if item['id'] == widget_id))
            data_id = widget['data_id']

            # Get the index for the widget and delete it from the list
            i = dashboard.index(widget)

            dashboard.pop(i)
            dashboardData.pop(data_id)
            return jsonify(dashboard)
        except StopIteration:
            return jsonify({"message": "id does not exist"})


@app.route('/Dashboard/Data', methods=['GET'])
def getAllDashboardData():
    return {'card_data': dashboardData}


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
    project = next((item for item in projects if item['id'] == project_id))
    return {"project": project}


@app.route('/Projects/Data/<string:data_id>', methods=['GET'])
def getSpecificProjectData(data_id):
    return {"data": projectData[data_id]}


if __name__ == '__main__':
    app.run(debug=True)
