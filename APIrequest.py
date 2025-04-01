import requests

api_url = 'https://qapi.vercel.app/api/random'

response = requests.get(api_url)
if response.status_code == requests.codes.ok:
    data = response.json()
    print(data)
else:
    print("Error:", response.status_code, response.text)