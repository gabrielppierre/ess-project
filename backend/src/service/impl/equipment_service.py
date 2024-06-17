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
    def get_equipment(item_id: str) -> Union[EquipmentGet, HttpResponseModel]:
        equipment = db.get_item_by_id('equipments', item_id)
        if not equipment:
            return HttpResponseModel(
                message="Equipamento não encontrado",
                status_code=404
            )
        return EquipmentGet(**equipment)

    @staticmethod
    def list_equipments() -> list[EquipmentGet]:
        equipments = db.get_all_items('equipments')
        return [EquipmentGet(**equipment) for equipment in equipments]

    @staticmethod
    def update_equipment(item_id: str, equipment_data: EquipmentModel) -> HttpResponseModel:
        existing_equipment = db.get_item_by_id('equipments', item_id)
        if not existing_equipment:
            return HttpResponseModel(
                message="Equipamento não encontrado",
                status_code=404
            )
        
        updated_data = equipment_data.dict(exclude_unset=True)
        db.update_item('equipments', item_id, updated_data)
        
        return HttpResponseModel(
            message="Recurso atualizado com sucesso",
            status_code=200,
        )

    @staticmethod
    def delete_equipment(item_id: str) -> HttpResponseModel:
        existing_equipment = db.get_item_by_id('equipments', item_id)
        if not existing_equipment:
            return HttpResponseModel(
                message="Equipamento não encontrado",
                status_code=404
            )
        
        db.delete_item('equipments', item_id)
        db.delete_items_by_field('room_equipment', 'equipment_id', item_id)
        
        return HttpResponseModel(
            message="Recurso removido com sucesso",
            status_code=200,
        )
