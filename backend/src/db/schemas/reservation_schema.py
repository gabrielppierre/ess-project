
from src.db.schemas.model_schema import ModelSchema


class ReservationSchema(ModelSchema):
  bson_type: str = "object"
  required: list = ["id", "room_id", "user_id", "start_date", "end_date", "room_name", "activity", "teacher"]
  properties: dict = {
    "id": {
      "bson_type": "string",
      "description": "The reservation's unique identifier"
    },
    "room_id": {
      "bson_type": "string",
      "description": "The reservation's room identifier"
    },
    "user_id": {
      "bson_type": "string",
      "description": "The reservation's user identifier"
    },
    "start_date": {
      "bson_type": "string",
      "description": "The reservation's start date"
    },
    "end_date": {
      "bson_type": "string",
      "description": "The reservation's end date"
    },
    "room_name": {
            "bson_type": "string",
            "description": "Room's name"
        },
    "activity": {
        "bson_type": "string",
        "description": "Activity that will be done"
    },
    "teacher": {
        "bson_type": "string",
        "description": "Associated teacher"
    },
    "created_at": {
      "bson_type": "string",
      "description": "The reservation's creation time"
    }
  }