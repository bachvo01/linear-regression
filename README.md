# 🤖 Salary Predicting Application 
An application utilizing **Linear Regression** - a statistical method, to predict salary of a person based on the corresponding years of experience. It is a project for educational purposes only.
## 👀 Table of Contents
- Introduction
- Purpose
- About 
  - Architecture
  - Directory Structure
  - Usage


## ⭐ Introduction


As the number of layoff announcements has massively increased since 2022, a big question that every job seekers must ask is what is the most suitable job worth pursuing in the market.

Having a reliable model to predict job salary may become handy for job seekers before embarking on the journey of finding the best employment.

## 🤔 Purpose
The purpose of this application is to providea simple yet effective tool for salary predition. It serves one ultimate purpose.

**Educational Exploration**: As an initial foray into the field of **Artificial Intelligence** (AI), this application is designed to deepen understanding and practical knowledge of **machine learning techniques**, starting with **linear regression**. 

It aims to provide hands-on experience with data analysis, model training and prediction

## 💭 About

This project was created with the goal is to develop a predictive model for salary using **linear regression**, a fundamental statistical method, to identify the relationship between individuals' *salary* and their respective **years of experience**.

### 📐 Architecture

The application utilizes a microservice architecture to ensure isolation, flexibility and maintainability. 

This architectural style structures the application as a collection of loosely coupled, independently deployable services. Each services is responsible for a specific functionality and communicates with each other via the RESTful APIs. 
The components are:
- Frontend
- API server
- Model

### 📁 Directory Structure
```
├── frontend
│    ├── public
│    │    └── data
│    ├── src   
│    │    └── assets
│    ├── dockerfile
│    └── index.html
│
├── model
│    ├── data
│    ├── automation.sh
│    ├── model.py
│    └── requirements.txt
│ 
├── server
│    ├── Dockerfile
│    ├── requirements.txt
│    ├── script.sh
│    ├── server.py
│    ├── wsgi.py
│    └── salary_model.pkl
│
compose.yaml
README.md
```

### ⚙️ Usage
Make sure you have installed Docker and run on your local machine before making the following steps. 

1. Cloning the project
```
git clone https://github.com/bachvo01/linear-regression.git
```


2. Run docker compose file
```
docker compose up
```



