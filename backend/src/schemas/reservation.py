from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class ReservationCreate(BaseModel):
    room_id: str
    user_id: str
    status: str
    start_time: datetime
    end_time: datetime
    room_name: str
    activity: str
    teacher: str

class ReservationUpdate(BaseModel):
    status: Optional[str]
    start_time: Optional[str]
    end_time: Optional[datetime]
    room_name: Optional[str]
    activity: Optional[str]
    teacher: Optional[str]

class ReservationGet(BaseModel):
    id: str
    room_id: str
    user_id: str
    status: str
    start_time: datetime
    end_time: datetime
    room_name: str
    activity: str
    teacher: str
    created_at: Optional[datetime]

class ReservationList(BaseModel):
    reservations: list[ReservationGet]







# class ReservationModel(BaseModel):
#     room_id: str
#     user_id: str
#     start_time: datetime
#     end_time: datetime

# class ReservationGet(BaseModel):
#     id: str
#     room_id: str
#     user_id: str
#     start_time: datetime
#     end_time: datetime
#     created_at: Optional[datetime]

# class ReservationList(BaseModel):
#     reservations: list[ReservationGet]