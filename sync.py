import os
import json
import requests
import shutil
from apikey import API_KEY

manifest_path = "manifest.json"
mods_dir = "mods2"

with open(manifest_path, "r", encoding="utf-8") as f:
    mods_manifest = json.load(f)

if os.path.exists(mods_dir):
    shutil.rmtree(mods_dir)
os.makedirs(mods_dir)

API_URL_TEMPLATE = "https://api.curseforge.com/v1/mods/{project_id}/files/{file_id}"
HEADERS = {"Accept": "application/json", "x-api-key": API_KEY}

print(f"downloading {len(mods_manifest)} mods")
for i, entry in enumerate(mods_manifest):
    project_id = entry["projectID"]
    file_id = entry["fileID"]

    url = API_URL_TEMPLATE.format(project_id=project_id, file_id=file_id)
    response = requests.get(url, headers=HEADERS)
    if response.status_code != 200:
        print(f"Error on: {url}: {response.status_code}")
        continue

    data = response.json()
    download_url = data["data"].get("downloadUrl")
    file_name = data["data"].get("fileName")

    if not download_url:
        print(f"No download link for {file_name}")
        continue

    mod_path = os.path.join(mods_dir, file_name)
    mod_data = requests.get(download_url)
    with open(mod_path, "wb") as mod_file:
        mod_file.write(mod_data.content)

print("\033[32m" + "Sync done" + "\033[0m")