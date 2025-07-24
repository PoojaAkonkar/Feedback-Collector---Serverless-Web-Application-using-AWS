# Feedback-Collector---Serverless-Web-Application-using-AWS
# Overview 
The Feedback Collector is a dynamic serverless web application that allows users to submit 
feedback via a web form. Feedback data is processed by an AWS Lambda function and 
stored in DynamoDB. The frontend is hosted on Amazon S3. The application is built entirely 
using AWS services through the console. 
# Tools & Technologies Used-
Amazon S3: Static website hosting - AWS Lambda: Backend logic - Amazon API Gateway: REST API management - Amazon DynamoDB: NoSQL storage - IAM: Permissions management - HTML, CSS, JavaScript: Web technologies 
# Step-by-Step Setup 
1. Create an S3 bucket and upload frontend files (index.html, style.css, script.js). 
2. Enable static website hosting and set permissions to allow public access. 
3. Create a DynamoDB table with 'email' as the primary key. 
4. Create a Lambda function to process and store feedback into DynamoDB. 
5. Grant the Lambda function permissions (DynamoDB full access). 
6. Set up an API Gateway with a /feedback resource and a POST method. 
7. Integrate the POST method with the Lambda function. 
8. Enable CORS, deploy the API, and update script.js with the endpoint URL. 
9. Host the updated frontend and test the full workflow. 
# Source Code Summary 
Frontend: index.html, style.css, script.js 
Backend: SubmitFeedback Lambda function (Node.js) 
All files interact using REST API endpoints provided by API Gateway. 
