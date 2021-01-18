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
        "id": uuid.uuid4().hex,
        "title": "Zacs Comment",
        'userName': "Zac",
        'description': "Did somthing",
        'time': "1/2/1",
        'content': 'DGFHGVJHBKJ'
    },
        {
        "id": uuid.uuid4().hex,
        "title": "Sams Card",
        'userName': "Sam",
        'description': "vgjhbk",
        'time': "5/5/86",
        'content': 'fghj'
    }, {
        "id": uuid.uuid4().hex,
        "title": "Sarahs Card",
        'userName': "Sarah",
        'description': "did more",
        'time': "1/4/5",
        'content': 'tejgvvhst'
    }],
    '1b': [
        {
            "id": uuid.uuid4().hex,
            "title": "Add commit counter for project section",
            'userName': "Zac Andrerson",
            'description': "",
            'time': "1/4/5",
            'content': 'tejgvvhst'
        }
    ],
    '1c': [

    ]
}

dashboard = [
    {
        'id': '1',
        'type': "gc",
        'title': "Notes",
        'data_id': '1a',
        'cardSettings': {
            'cardTextColor': '#222',
            'cardHeaderColor': '#eaeaea'
        }
    },
    {
        'id': '2',
        'type': "dc",
        'title': "Deadline",
        'data_id': '1b',
        'cardSettings': {
            'cardTextColor': '#222',
            'cardHeaderColor': '#eaeaea'
        }
    },
    {
        'id': '3',
        'type': "lc",
        'title': "Notifications",
        'data_id': '1c',
        'cardSettings': {
            'cardTextColor': '#222',
            'cardHeaderColor': '#eaeaea'
        }
    },
    # {
    #     'id': '4',
    #     'type': "dc",
    #     'title': "Deadline Card",
    #     'data_id': '1c',
    #     'cardSettings': {
    #         'cardTextColor': '#222',
    #         'cardHeaderColor': '#eaeaea'
    #     }
    # },
]

# APP ROUTE DIR


@app.route('/', methods=['GET'])
def getAllAppRoutes():
    return jsonify(
        {
            "/Dashboard": {

            },
            "/Projects": {

            }
        }
    )

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


@app.route('/Dashboard/<string:widget_id>', methods=['GET', 'DELETE', 'PUT'])
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
            'id': uuid.uuid4().hex,
            'name': "Todo",
            'items': [
                {"id": uuid.uuid4().hex, "title": "test1", "content": "One", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
                {"id": uuid.uuid4().hex, "title": "test2", "content": "Two", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
                {"id": uuid.uuid4().hex, "title": "test3", "content": "Three", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, }
            ]
        },
        {
            'id': uuid.uuid4().hex,
            'name': "In Progress",
            'items': [
                {"id": uuid.uuid4().hex, "title": "test1", "content": "One", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
                {"id": uuid.uuid4().hex, "title": "test2", "content": "Two", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
            ]
        },
        {
            'id': uuid.uuid4().hex,
            'name': "Completed",
            'items': [
                {"id": uuid.uuid4().hex, "title": "test1", "content": "One", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
                {"id": uuid.uuid4().hex, "title": "test2", "content": "Two", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
            ],
        },
    ],
    '2b': [{
        'id': uuid.uuid4().hex,
        'name': "Todo",
        'items': [
                {"id": uuid.uuid4().hex, "title": "test1", "content": "One", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
            {"id": uuid.uuid4().hex, "title": "test2", "content": "Two", 'cardSettings': {
                'cardTextColor': "#222",
                'cardHeaderColor': "#eaeaea",
            }, },
            {"id": uuid.uuid4().hex, "title": "test3", "content": "Three", 'cardSettings': {
                'cardTextColor': "#222",
                'cardHeaderColor': "#eaeaea",
            }, }
        ]
    },
        {
            'id': uuid.uuid4().hex,
            'name': "In Progress",
            'items': [
                {"id": uuid.uuid4().hex, "title": "test1", "content": "One", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
                {"id": uuid.uuid4().hex, "title": "test2", "content": "Two", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
            ]
    },
        {
            'id': uuid.uuid4().hex,
            'name': "Completed",
            'items': [
                {"id": uuid.uuid4().hex, "title": "test1", "content": "One", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
                {"id": uuid.uuid4().hex, "title": "test2", "content": "Two", 'cardSettings': {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }, },
            ],
    }, ],
    '2c': []
}

projects = [
    {
        "id": 1,
        "name": "Project 1",
        "data": "2a"
    },
    {
        "id": 2,
        "name": "Project 2",
        "data": "2b"
    },

]

##### PROJECTS ENDPOINTS ####

# ALL PROJECTS


@app.route('/Projects', methods=['GET'])
def getAllProjects():
    return jsonify(projects)


# INDIVIDUAL PROJECT
@app.route('/Projects/<int:project_id>', methods=['GET'])
def getSpecificProject(project_id):
    # Search each item in list for matchng id and return first matching
    project = next((item for item in projects if item['id'] == project_id))
    return jsonify(project)

# INDIVIDUAL PROJECT DATA


@app.route('/Projects/Data/<string:data_id>', methods=['GET', 'POST', 'DELETE'])
def getSpecificProjectData(data_id):
    if request.method == 'GET':
        return jsonify(projectData[data_id])

    if request.method == 'POST':
        posted_data = request.get_json()

        projectData[data_id] = posted_data
        return 'Posted'


# INDIVIDUAL PROJECT SECTION DATA
@app.route('/Projects/Data/<string:data_id>/<string:section_id>', methods=['GET', 'POST', 'DELETE'])
def getProjectCardData(data_id, section_id):
    if request.method == 'GET':
        data = projectData[data_id]
        # return jsonify(data)
        found = False

        for item in data:
            if item['id'] == section_id:
                found = True
        if found == True:
            return jsonify(item)
        else:
            return jsonify({"message": "Id does not exist"})

    if request.method == 'POST':
        data = projectData[data_id]
        # return jsonify(data)
        found = False

        for item in data:
            if item['id'] == section_id:
                found = True
                posted_data = request.get_json()
                posted_data['id'] = uuid.uuid4().hex
                posted_data['cardSettings'] = {
                    'cardTextColor': "#222",
                    'cardHeaderColor': "#eaeaea",
                }

                item['items'] = [posted_data] + item['items']

        if found == True:
            return jsonify(item)
        else:
            return jsonify({"message": "Id does not exist"})


if __name__ == '__main__':
    app.run(debug=True)
