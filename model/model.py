import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import pickle
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.impute import SimpleImputer

# load data set from file
data = pd.read_csv('./data/Salary_Data.csv')

X = data[['Years of Experience']]   # independent variables
y = data['Salary']                # dependent variables / target variables

# Impute missing values in X
imputer = SimpleImputer(strategy='mean')
X = imputer.fit_transform(X)

# Convert X to DataFrame with valid feature names
X = pd.DataFrame(X, columns=['Years of Experience'])

# Split data into training and testing tests
#X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

# Train the model
model = LinearRegression()
model.fit(X, y)
# print(model.score(X_test, y_test))

# Make predictions
y_pred = model.predict(X)

# Evaluate the model
mse = mean_squared_error(y, y_pred)
r2 = r2_score(y, y_pred)

# print(f"Mean Squared Error: {mse}")
# print(f"R-squared: {r2}")

# Predict salary for a specific years of experience
years_of_experience = 12
predicted_salary = model.predict([[years_of_experience]])
print(f"Predicted salary for {years_of_experience} years of experience: {predicted_salary[0]}")


# Plot the data points
# plt.figure(figsize=(10, 6))
# sns.scatterplot(x='Years of Experience', y='Salary', data=data, color='blue', label='Data points')

# Plot the regression line
# plt.plot(X, y_pred, color='red', label='Regression line')

# plt.title('Linear Regression')
# plt.xlabel('Years of Experience')
# plt.ylabel('Salary')
# plt.legend()
# plt.grid(True)
# plt.show()

# Save the trained model to a file
with open('salary_model.pkl', 'wb') as file:
   pickle.dump(model, file)