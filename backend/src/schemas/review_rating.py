from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class ReviewRatingModel(BaseModel):
    user_id: str
    review_id: str
    rating: int

class ReviewRatingGet(BaseModel):
    id: str
    user_id: str
    review_id: str
    rating: int
    created_at: Optional[datetime]

class ReviewRatingList(BaseModel):
    reviews: list[ReviewRatingGet]