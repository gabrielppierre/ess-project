# backend\src\service\impl\equipment_service.py

from src.schemas.response import HttpResponseModel
from src.service.meta.equipment_service_meta import EquipmentServiceMeta
from src.db.__init__ import database as db
from src.schemas.equipment import EquipmentModel, EquipmentGet
from src.db.serializers.equipment_serializers import equipment_response_entity
from typing import Union

class EquipmentService(EquipmentServiceMeta):

    @staticmethod
    def create_equipment(equipment_data: EquipmentModel) -> EquipmentGet:
        db.insert_item('equipments', equipment_data.dict())
        equipment_response = equipment_response_entity(equipment_data.dict())
        return EquipmentGet(**equipment_response)

    @staticmethod
    def list_equipments() -> list[EquipmentGet]:
        equipments = db.get_all_items('equipments')
        return [EquipmentGet(**equipment) for equipment in equipments]

    @staticmethod
    def delete_equipment(equipment_id: str) -> None:
        print(f"Deletando equipamento com ID: {equipment_id}")
        try:
            db.delete_item('equipments', equipment_id)
            print(f"Equipamento com ID: {equipment_id} deletado com sucesso")
        except Exception as e:
            print(f"Erro ao deletar equipamento com ID: {equipment_id}. Erro: {str(e)}")