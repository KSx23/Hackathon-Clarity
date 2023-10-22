# API Documentation

## Get Credit Score

### Request

- Method: GET
- URL: `/government/credit/:address`

#### Parameters

- `address` (string): The address for which to retrieve the credit score.

### Response

- Status: 200 OK
- Body: JSON object with the following properties:
  - `creditScore` (number): The credit score for the given address.

### Example

#### Request

GET /government/credit/123 Main St

#### Response

HTTP/1.1 200 OK
Content-Type: application/json

{
"creditScore": 750
}


## Update Credit Score

### Request

- Method: POST
- URL: `/government/credit/:address`

#### Parameters

- `address` (string): The address for which to update the credit score.

#### Body

- JSON object with the following properties:
  - `newScore` (number): The new credit score for the given address.

### Response

- Status: 200 OK
- Body: JSON object with the following properties:
  - `result` (string): The result of the credit score update.

### Example

#### Request

POST /government/credit/123 Main St
Content-Type: application/json

{
"newScore": 800
}

#### Response

HTTP/1.1 200 OK
Content-Type: application/json

{
"result": "Credit score updated successfully"
}