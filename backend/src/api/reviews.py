from fastapi import APIRouter, status
from src.schemas.response import HttpResponseModel
from src.service.impl.review_service import ReviewService

router = APIRouter()

@router.get(
  "/",
  response_model=HttpResponseModel,
  status_code=status.HTTP_200_OK,
  description="Retrieve all reviews",
  tags=["reviews"],
  responses={
      status.HTTP_200_OK: {
          "model": HttpResponseModel,
          "description": "Successfully got all reviews",
      }
  },
)
def get_all_reviews() -> HttpResponseModel:
    """
    Get all reviews.

    Returns:
    - All reviews.

    """
    review_get_all_response = ReviewService.get_all_reviews()
    return review_get_all_response

@router.get(
  "/{room_id}",
  response_model=HttpResponseModel,
  status_code=status.HTTP_200_OK,
  description="Retrieve all reviews from a room by its ID",
  tags=["reviews"],
  responses={
      status.HTTP_200_OK: {
          "model": HttpResponseModel,
          "description": "Successfully got item by id",
      },
      status.HTTP_404_NOT_FOUND: {
          "description": "Item not found",
      }
  },  
)
def get_reviews(room_id: str) -> HttpResponseModel:
    """
    Get reviews by room ID.

    Parameters:
    - room_id: The ID of the room to retrieve reviews from.

    Returns:
    - The reviews from the specified room.

    Raises:
    - HTTPException 404: If the room is not found.

    """
    review_get_response = ReviewService.get_reviews(room_id)
    return review_get_response

@router.post(
    "/",
    response_model=HttpResponseModel,
    status_code=status.HTTP_201_CREATED,
    description="Create a new review",
    tags=["reviews"],
    responses={
        status.HTTP_201_CREATED: {
            "model": HttpResponseModel,
            "description": "Successfully created a new review",
        }
    },
    )
def create_review(review: dict) -> HttpResponseModel:
    """
    Create a review.

    Parameters:
    - review: The review to create.

    Returns:
    - The created review.

    """
    review_create_response = ReviewService.create_review(review)
    return review_create_response