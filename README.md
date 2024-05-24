# Psychiatry Platform

This project is a psychiatry platform where psychiatrists can register their patients through a mobile/web portal. Each psychiatrist belongs to a hospital.

## Major Libraries/Frameworks Used

- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Chosen for its simplicity and ease of use.
- **MySQL**: A relational database management system used to store patient and psychiatrist data. Preferred for its reliability and familiarity.
- **bcryptjs**: A library to help hash passwords. Used for securely storing patient passwords.
- **dotenv**: A module that loads environment variables from a `.env` file into `process.env`. Used for managing configuration.

- **multer**: A middleware for handling `multipart/form-data`, which is primarily used for uploading files. Used for handling patient photo uploads.

## API Endpoints

`All api run on localhost:3000`

### 1. Register a New Patient


**Endpoint:** `POST /patient-api/register-patient`

**Description:** Registers a new patient.

**Request Body:**

```json
{
  "name": "John Doe",
  "address": "1234 Elm Street, Springfield",
  "email": "john.doe@example.com",
  "phone": "+18885550123",
  "password": "Password1",
  "psychiatrist_id": 1
  // for photo req.file or req.file.path in request is used to add it to the database
}
```

**Response Body**

```json

{
    "message": "Patient registered successfully"
}

```

### 2. Getting Details of hospital Information

**Endpoint:** `GET /hospital-api/hospital-details`

**Description:** Getting Details of hospital.

**Request Body:**

```json
{
    "hospital_id":"1"
}


```

**Response Body**

```json
{
    "hospital_name": "Apollo Hospitals",
    "total_psychiatrist_count": 7,
    "total_patient_count": 72,
    "psychiatrists": [
        {
            "id": 1,
            "name": "Dr. Smith",
            "patient_count": 11
        },
        {
            "id": 2,
            "name": "Dr. Johnson",
            "patient_count": 11
        },
        {
            "id": 6,
            "name": "Dwight Gusikowski DDS",
            "patient_count": 10
        },
        {
            "id": 7,
            "name": "Carlton Hilpert",
            "patient_count": 10
        },
        {
            "id": 8,
            "name": "Miguel Pagac",
            "patient_count": 10
        },
        {
            "id": 9,
            "name": "Whitney Bernier MD",
            "patient_count": 10
        },
        {
            "id": 10,
            "name": "Wade Mosciski",
            "patient_count": 10
        }
    ]
}

```


`Database dump file contains information about 200 plus patients`