import pandas as pd

N = 11  # The size of the window
num_cycles = 10 # the number of iterations that will be performed
dataset = [126,129,123,122,109,120,135,153,179,174,164] # The original dataset

# Iterate through num_cycles of predictions
for _ in range(1..num_cycles)
    # Calculate the rolling mean
    rolling_mean = pd.Series(dataset).rolling(window=N).mean().iloc[N-1:].values
    # Add the forecast value to the dataset
    dataset.append(rolling_mean)
    # Display next forecasted value
    print(rolling_mean)