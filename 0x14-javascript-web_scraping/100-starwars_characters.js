#!/usr/bin/node

import requests
import sys

movie_id = sys.argv[1]

response = requests.get(f"https://swapi.dev/api/films/{movie_id}/")
movie_data = response.json()

characters = movie_data["characters"]

for character_url in characters:
    response = requests.get(character_url)
    character_data = response.json()
    print(character_data["name"])
