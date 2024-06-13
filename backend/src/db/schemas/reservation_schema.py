from src.db.schemas.model_schema import ModelSchema

class ReservationSchema(ModelSchema):
    bson_type: str = "object"
    required: list = ["id", "user_id", "room_id", "date_time", "room_name", "activity","teacher"]
    properties: dict = {
        "id": {
            "bson_type": "string",
            "description": "Identificador único do item"
        },
        "user_id": {
            "bson_type": "string",
            "description": "Identificador único de User"
        },
        "room_id": {
            "bson_type": "string",
            "description": "Identificador único de Room"
        },
        "date_time": {
            "bson_type": "string",
            "description": "Data e hora da reserva"
        },
        "room_name": {
            "bson_type": "string",
            "description": "Nome da sala"
        },
        "activity": {
            "bson_type": "string",
            "description": "Atividade que será realizada"
        },
        "teacher": {
            "bson_type": "string",
            "description": "Nome do professor responsável associado"
        }
        
    }
    
    def get(self) -> dict:
        return {
            "bson_type": self.bson_type,
            "required": self.required,
            "properties": self.properties
        }