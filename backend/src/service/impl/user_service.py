from src.schemas.response import HTTPResponses, HttpResponseModel
from src.service.meta.user_service_meta import UserServiceMeta
from src.db.schemas import UserSchema
from src.db.__init__ import database as db
from typing import Dict
from datetime import datetime

class ItemService(UserServiceMeta):

    @staticmethod
    def get_user(user_id: str) -> HttpResponseModel:
        """Get item by id method implementation"""
        user = db.get_item_by_id('user', user_id)
        if not user:
            return HttpResponseModel(
                message=HTTPResponses.ITEM_NOT_FOUND().message,
                status_code=HTTPResponses.ITEM_NOT_FOUND().status_code,
            )
        return HttpResponseModel(
                message=HTTPResponses.ITEM_FOUND().message,
                status_code=HTTPResponses.ITEM_FOUND().status_code,
                data=user,
            )
    
    @staticmethod
    def create_user(user_data: Dict) -> HttpResponseModel:
        user = UserSchema(**user_data, created_at=str(datetime.now()), deleted=False)
        result = db.insert_item(user.dict())
        if result.inserted_id:
            return HttpResponseModel(
                message=HTTPResponses.ITEM_CREATED().message,
                status_code=HTTPResponses.ITEM_CREATED().status_code,
                data={"_id": str(result.inserted_id)}
            )
        else:
            return HttpResponseModel(
                message=HTTPResponses.INTERNAL_SERVER_ERROR().message,
                status_code=HTTPResponses.INTERNAL_SERVER_ERROR().status_code
            )

    
    # TODO: implement other methods (create, update, delete)