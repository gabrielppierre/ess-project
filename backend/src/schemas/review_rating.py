from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class ReviewRatingModel(BaseModel):
    user_id: str
<<<<<<< HEAD
    room_id: str
    rating: int
    comment: str
=======
    review_id: str
    liked: bool
>>>>>>> upstream/dev

class ReviewRatingGet(BaseModel):
    id: str
    user_id: str
<<<<<<< HEAD
    room_id: str
    rating: int
    comment: str
=======
    review_id: str
    liked: bool
>>>>>>> upstream/dev
    created_at: Optional[datetime]

class ReviewRatingList(BaseModel):
    reviews: list[ReviewRatingGet]