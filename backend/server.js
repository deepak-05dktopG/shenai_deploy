import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/getData", (req, res) => {
  const data = {
    "status": "success",
    "user": {
      "id": 12345,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 30,
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zipcode": "12345",
        "country": "USA"
      },
      "phone_numbers": [
        { "type": "home", "number": "555-555-5555" },
        { "type": "work", "number": "555-555-1234" }
      ],
      "social_media": {
        "twitter": "@johndoe",
        "facebook": "facebook.com/johndoe",
        "linkedin": "linkedin.com/in/johndoe"
      },
      "preferences": {
        "newsletter": true,
        "notifications": {
          "email": true,
          "sms": false,
          "push": true
        },
        "language": "en"
      },
      "purchase_history": [
        {
          "order_id": "987654",
          "date": "2023-08-21",
          "items": [
            {
              "product_id": "101",
              "name": "Wireless Mouse",
              "quantity": 2,
              "price": 29.99
            },
            {
              "product_id": "102",
              "name": "Mechanical Keyboard",
              "quantity": 1,
              "price": 89.99
            }
          ],
          "total": 149.97
        },
        {
          "order_id": "123456",
          "date": "2023-06-15",
          "items": [
            {
              "product_id": "103",
              "name": "Gaming Monitor",
              "quantity": 1,
              "price": 299.99
            }
          ],
          "total": 299.99
        }
      ],
      "wishlist": [
        {
          "product_id": "104",
          "name": "Noise Cancelling Headphones",
          "price": 199.99
        },
        {
          "product_id": "105",
          "name": "Smartwatch",
          "price": 149.99
        }
      ]
    },
    "company_info": {
      "name": "TechCorp",
      "address": {
        "street": "789 Technology Ave",
        "city": "Innovation City",
        "state": "NY",
        "zipcode": "67890",
        "country": "USA"
      },
      "contact": {
        "phone": "555-555-6789",
        "email": "support@techcorp.com"
      },
      "departments": [
        {
          "name": "Sales",
          "manager": "Jane Smith",
          "employees": 25
        },
        {
          "name": "Engineering",
          "manager": "Mike Johnson",
          "employees": 100
        },
        {
          "name": "Customer Support",
          "manager": "Sara Lee",
          "employees": 50
        }
      ]
    },
    "events": [
      {
        "event_id": "001",
        "title": "Annual Tech Conference",
        "date": "2023-11-10",
        "location": "Convention Center, Innovation City",
        "attendees": 500
      },
      {
        "event_id": "002",
        "title": "Product Launch",
        "date": "2023-09-15",
        "location": "TechCorp HQ",
        "attendees": 200
      }
    ]
  }
  
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
