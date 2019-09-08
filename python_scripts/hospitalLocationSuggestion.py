import json
​
# Run with: python readG.py > kresult.txt
​
with open('Hospital_Locations.geojson', 'r') as f:
    data = json.load(f)
    businesses = data['features']
    print(len(businesses))
    coords = []
    for b in businesses:
        point = b['geometry']['coordinates']
        # print(point)
        coords.append(point)
​
    # print(coords)
​
​
import numpy as np
from sklearn.cluster import KMeans
​
# X = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])
X = np.array(coords)
​
kmeans = KMeans(
    n_clusters=5,
    random_state=0).fit(X)
kmeans.labels_
​
print("=====> Cluster prediction:")
print(kmeans.predict([[0, 0], [12, 3]]))
print("=====> Lat, Long (reverse order location..)")
print(kmeans.cluster_centers_)
print("Adjusted Coords")
pts = kmeans.cluster_centers_
pts = [ (p[-1], p[0]) for p in pts ]
print(pts)
​
# k = 5
# (-37.885551151750924, 145.0349496553528),
# (-35.7252315069103, 142.50191798691387), 
# (-37.00597515500315, 146.87560476202887), 
# (-36.737737607568604, 144.49112088443815), 
# (-37.94710587244242, 142.52599530366953)