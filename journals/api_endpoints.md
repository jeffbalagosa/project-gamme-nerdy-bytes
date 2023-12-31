# API Endpoints

## Log in

- [x] Issue Created

- Endpoint path: /login
- Endpoint method: POST

- Request shape (form):

  - username: string
  - password: string

- Response: Account information and a token
- JSON Shape
  ```json
  {
    "account": {
      «key»: type»,
    },
    "token": string
  }
  ```

## Log out

- [x] Issue Created

- Endpoint path: /logout
- Endpoint method: DELETE

- Headers:

  - Authorization: Bearer token

- Response: Always true
- JSON Shape
  ```json
  true
  ```

## List Decks

- [x] Issue Created

- Endpoint path: /api/decks/
- Endpoint method: GET

### Description

This will be the Deck api list view for the JSON we can utilize on the front end.

### JSON Shape

Output:

```JSON
{
  "decks": [
    {
    "id": int,
    "user_id": int,
    "name": str,
    "public_status": bool,
    "total_cards": int,
    "total_touched_cards": int,
  },
  {
    "id": int,
    "user_id": int,
    "name": str,
    "public_status": bool,
    "total_cards": int,
    "total_touched_cards": int,
  },
  ]
}
```

## Show Deck

- [x] Issue Created

- Endpoint path: /api/decks/{:deck_id}
- Endpoint method: GET

### Description

This will be the Deck api view for the JSON we can utilize on the front end.

### JSON Shape

Output:

```JSON
{
    "name": str,
    "user_id": int,
    "public_status": bool,
    "total_cards": int,
    "total_touched_cards": int,
}
```

## Delete Deck

- [x] Issue Created

- Endpoint path: /api/decks/{:deck_id}
- Endpoint method: DELETE

### Description

This will be the delete method api for each card deck.

### JSON Shape

Input:

Not needed. Id will be in the href/url of the DELETE request.

Output:

```JSON
{
  "deleted": bool
}
```

## Create Deck

- [x] Issue Created

- Endpoint path: /api/{:user_id}/decks/
- Endpoint method: POST

### Description

This will be the create method api for each card deck.

### JSON Shape

Input:

```JSON
{
  "name": str,
  "public_status": bool (default=false),
}
```

Output:

```JSON
{
  "id": int,
  "user_id": int,
  "name": str,
  "public_status": bool,
  "id": int,
  "name": str,
  "public_status": bool,
}
```

## Update Deck

- [x] Issue Created

- Endpoint path: /api/{:user_id}/decks/{:deck_id}
- Endpoint method: PUT

### Description

This will be the udpate method api for each card deck.

### JSON Shape

Input:

```JSON
{
  "name": str,
  "public_status": bool,
}
```

Output:

```JSON
{
  "id": int,
  "user_id": int,
  "name": str,
  "public_status": bool,
}
```

## List Cards

- [x] Issue Created

- Endpoint path: /api/{:deck_id}/cards
- Endpoint method: GET

### Description

- Api view to show a list of cards.
- Api returns all cards with the deck id it belongs to, so we can filter on the front end.

### JSON Shape

```JSON
{ "cards": [
  {
    "id": int,
      "deck_id": int,
      "card_type": multiple_choice/reorder/matching,
      "flag": bool,
  },
    {
    "id": int,
      "deck_id": int,
      "card_type": multiple_choice/reorder/matching,
      "flag": bool,
  },
]
{ "cards": [
  {
    "id": int,
      "deck_id": int,
      "card_type": multiple_choice/reorder/matching,
      "flag": bool,
  },
    {
    "id": int,
      "deck_id": int,
      "card_type": multiple_choice/reorder/matching,
      "flag": bool,
  },
]
}
```

## Show Card

- [x] Issue Created

- Endpoint path: /api/{:deck_id}/cards/{:card_id}
- Endpoint method: GET

### Description

- Api view to show card details.

### JSON Shape

```JSON
{
    "id": int,
    "deck_id": int,
    "card_type": multiple_choice/reorder/matching,
    "question": str,
    "wrong_count": int,
    "right_count": int,
    "flag": bool
}
```

## Create Card

- [x] Issue Created

- Endpoint path: /api/{:deck_id}/cards/
- Endpoint method: POST

### Description

- Api view to create a new card.

### JSON Shape

Input:

```JSON
{
    "deck_id": int,
    "card_type": multiple_choice/reorder/matching,
    "question": str
}
```

Output:

```JSON
{
    "id": int,
    "deck_id": int,
    "card_type": multiple_choice/reorder/matching,
    "question": str,
    "wrong_count": int,
    "right_count": int,
    "flag": bool
}
```

## Update Card

- [x] Issue Created

- Endpoint path: /api/{:deck_id}/cards/{:card_id}
- Endpoint method: PUT

### Description

- Api view to update an existing card.

### JSON Shape

Input:

```JSON
{
    "deck_id": int,
    "question": str,
    "flag": bool
}
```

Output:

```JSON
{
    "id": int,
    "deck_id": int,
    "card_type": multiple_choice/reorder/matching,
    "question": str,
    "wrong_count": int,
    "right_count": int,
    "flag": bool
}
```

## Delete Card

- [x] Issue Created

- Endpoint path: /api/{:deck_id}/cards/{:card_id}
- Endpoint method: PUT

### Description

- Api view to update an existing card.

### JSON Shape

Input:

Not needed. Id will be in the href/url of the DELETE request.

Output:

```JSON
{
  "deleted": bool
}
```

## List Options

- [x] Issue Created

- Endpoint path: /api/option/{:option_id}
- Endpoint method: GET

### Description

- Api view to list answers for each card.
- Api returns all answers with the card id it belongs to, so we can filter on the front end.

### JSON Shape

Output:

```JSON
{
  answers: [
    {
      "id": int,
      "card_id": int,
      "text": str,
      "is_correct": bool
    },
    {
      "id": int,
      "card_id": int,
      "text": str,
      "is_correct": bool
    },
  ]
}

```

## Create Option

- [x] Issue Created

- Endpoint path: /api/{user_id}/deck/{deck_id}/card/{card_id}/option
- Endpoint method: PUT

### Description

- Api view to show ption.

### JSON Shape

Input:

```JSON
{
  "card_id": int,
  "possible_answer": str,
  "is_correct": bool
}
```

Output:

```JSON
{
  "id": int,
  "card_id": int,
  "possible_answer": str,
  "is_correct": bool
}
```

## Show Option

- [x] Issue Created

- Endpoint path: /api/ption/{:option_id}
- Endpoint method: PUT

### Description

- Api view to show ption.

### JSON Shape

Output:

```JSON
{
  "id": int,
  "card_id": int,
  "possible_answer": str,
  "is_correct": bool
}
```

## Delete Option

- [x] Issue Created

- Endpoint path: /api/option/{:option_id}
- Endpoint method: DELETE

### Description

- Api to delete an option

### JSON Shape

Input:

Not needed. Id will be in the href/url of the DELETE request.

```JSON
{
  "delted": true
}
```

## Update Option

- [x] Issue Created

- Endpoint path:/api/option/{:option_id}
- Endpoint method:PUT

### Description

API view to update an existing option.

### JSON Shape

Input:

```JSON
{
  "text": str,
  "is_correct": bool
}
```

Output:

```JSON
{
  "id": int,
  "card_id": int,
  "possible_answer": str,
  "is_correct": bool
}
```

## List Dates

- [x] Issue Created

- Endpoint path: /api/date/
- Endpoint method: get
  ​

### Description

- get a list of all the dates.
  ​

### JSON Shape

- Api view to list answers for each card.
- Api returns all answers with the card id it belongs to, so we can filter on the front end.

### JSON Shape

Output:

```JSON
{
  answers: [
    {
      "id": int,
      "card_id": int,
      "text": str,
      "is_correct": bool
    },
    {
      "id": int,
      "card_id": int,
      "text": str,
      "is_correct": bool
    },
  ]
}

```

## Show User

- [x] Issue Created

- Endpoint path: /api/user/{:user_id}
- Endpoint method: GET

### Description

- Api to view user details.
- This will be displayed on the dashboard.

### JSON Shape

```JSON
{
  "id": int,
  "picture": picture_url,
  "username": str,
  "password": str,
  "streak_count": int
}
```

## Update User

- [x] Issue Created

- Endpoint path: /api/answer/{:user_id}
- Endpoint method: PUT
  ​

### Description

- Edit User profile (picture/password/name)
  ​

### JSON Shape

```JSON
{
  "user_name": str,
  "password": str,
  "picture": picture_url,
}
```

## List Chat Rooms

- [] Issue Created

- Endpoint path: /api/rooms/{:user_id}
- Endpoint method: GET
  ​

### Description

- Api view to show a list of chat rooms
  ​

### JSON Shape

Input:

```JSON
{
  "id": int,
  "user_id": int,
  "name": str,
}
```

Output:

```Json
{
"name": str
}
```

## Create User

- [x] Issue Created

- Endpoint path:/api/users/
- Endpoint method:POST

### Description

API view to create a new user account.

### JSON Shape

Input:

```JSON
{
  "username": str,
  "password": str,
  "profile_picture": picture_url
}
```

Output:

```JSON
{
  "id": int,
  "username": str,
  "profile_picture": picture_url,
  "creation_date": datetime
}
```

## List Chat Rooms

- [] Issue Created

- Endpoint path: /api/rooms/{:room_id}
- Endpoint method: GET
  ​

### Description

- Api view to show a list of chat rooms
  ​

### JSON Shape

Input:

```JSON
{
  "id": int,
  "user_id": int,
  "name": str,
}
```

Output:

```Json
{
"name": str
}
```

## Show Chat Room

- [] Issue Created

- Endpoint path: /api/rooms/{:room_id}
- Endpoint method: GET
  ​

### Description

- Api view to show a specific chat room
  ​

### JSON Shape

Input:

```JSON
{
  "id": int,
  "name": str,
}
```

Output:
​

```JSON
{
  "name": str
}
```

## Create Chat Room

- [] Issue Created

- Endpoint path: /api/rooms/
- Endpoint method: POST
  ​

### Description

- Api view for a user to create a chat room
  ​

### JSON Shape

Input:

```JSON
{
  "id": int,
  "name": str,
}
```

Output:
​

```JSON
{
  "name": str
}
```

## Delete Chat Room

- [] Issue Created

- Endpoint path: /api/rooms/{:room_id}
- Endpoint method: DELETE
  ​

### Description

- Api view to delete a chat room
  ​

### JSON Shape

Input:
​
Not needed. Id will be in the href/url of the DELETE request.
​
Output:
​

```JSON
{
  "deleted": bool
}
```

## Create Message

- [] Issue Created

- Endpoint path: api/message/
- Endpoint method: POST
  ​

### Description

- Api view for a user to create a message and send to another user
  ​

### JSON Shape

Input:

```JSON
{
  "id": int,
  "user_id": int,
  "chat_room_id": int,
  "text": str,
  "date_created": datetime
}
```

Output:
​

```JSON
{
  "chat_room_id": int,
  "text": str,
  "date_created": datetime
}
```

## Show Message

- [] Issue Created

- Endpoint path: api/messages/{:message_id}
- Endpoint method: GET
  ​
  ​

### Description

- Api view for a user to create a message and send to another user
  ​

### JSON Shape

Output:
​

```JSON
{
  "chat_room_id": int,
  "text": str,
  "date_created": datetime
}
```
