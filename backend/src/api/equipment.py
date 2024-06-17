from fastapi import APIRouter, HTTPException, status
from src.schemas.equipment import EquipmentModel, EquipmentGet
from src.service.impl.equipment_service import EquipmentService
from src.schemas.response import HttpResponseModel

router = APIRouter()

@router.post("/", response_model=EquipmentGet, status_code=status.HTTP_201_CREATED)
def create_equipment(equipment_data: EquipmentModel):
    if not equipment_data.id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="ID is required")
    return EquipmentService.create_equipment(equipment_data)

@router.get("/{item_id}", response_model=EquipmentGet)
def get_equipment(item_id: str):
    response = EquipmentService.get_equipment(item_id)
    if response.status_code == 404:
        raise HTTPException(status_code=response.status_code, detail=response.message)
    return response

@router.get("/", response_model=list[EquipmentGet])
def list_equipments():
    return EquipmentService.list_equipments()

@router.put("/{item_id}", response_model=EquipmentGet)
def update_equipment(item_id: str, equipment_data: EquipmentModel):
    response = EquipmentService.update_equipment(item_id, equipment_data)
    if response.status_code == 404:
        raise HTTPException(status_code=response.status_code, detail=response.message)
    return response

@router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_equipment(item_id: str):
    response = EquipmentService.delete_equipment(item_id)
    if response.status_code == 404:
        raise HTTPException(status_code=response.status_code, detail=response.message)
    return response
