from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class ReviewRatingModel(BaseModel):
    user_id: str
    room_id: str
    rating: int
    comment: str

class ReviewRatingGet(BaseModel):
    id: str
    user_id: str
    room_id: str
    rating: int
    comment: str
    created_at: Optional[datetime]

class ReviewRatingList(BaseModel):
    reviews: list[ReviewRatingGet]