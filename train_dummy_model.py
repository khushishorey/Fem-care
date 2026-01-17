import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier

# Dummy training data
X = np.array([
    [22, 55, 160, 21.5, 28, 10, 1, 0],
    [30, 70, 165, 25.7, 35, 20, 0, 1],
    [26, 60, 158, 24.0, 30, 15, 1, 1],
    [35, 80, 170, 27.6, 40, 25, 0, 0],
    [24, 58, 162, 22.1, 29, 12, 1, 0],
])

y = [0, 1, 0, 1, 0]  # 0 = No PCOS, 1 = PCOS

model = RandomForestClassifier()
model.fit(X, y)

# Save model
with open("models/pcos_risk_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model trained and saved successfully!")
