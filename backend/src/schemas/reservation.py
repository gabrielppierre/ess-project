from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class ReservationCreate(BaseModel):
    id_room: str
    id_user: str
    date_time: datetime
    room_name: str
    activity: str
    teacher: str


class ReservationUpdate(BaseModel):
    date_time: Optional[datetime]
    room_name: Optional[str]
    activity: Optional[str]
    teacher: Optional[str]


class ReservationReturn(BaseModel):
    id: str
    id_room: str
    id_user: str
    date_time: datetime
    room_name: str
    activity: str
    teacher: str

class ReservationList(BaseModel):
    items: list[ReservationReturn]