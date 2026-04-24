from fastapi import FastAPI, UploadFile, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
import json
import os
from ig4 import start_scraper  # Imports your logic from ig4.py

app = FastAPI()

# Connects your React dev server to this Python server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- ENDPOINT 1: Set Cookies ---
@app.post("/settings/cookies")
async def save_cookies(file: UploadFile):
    content = await file.read()
    with open("cookies.json", "wb") as f:
        f.write(content)
    return {"status": "Cookies updated successfully"}

# --- ENDPOINT 2: Trigger Scrape ---
@app.post("/scrape/start")
async def run_scrape(config: dict, background_tasks: BackgroundTasks):
    # Runs in background so frontend doesn't freeze
    background_tasks.add_task(
        start_scraper, 
        hashtags=config['hashtags'], 
        limit=config['limit'], 
        cookies_path="cookies.json"
    )
    return {"message": "Scraper started"}

# --- ENDPOINT 3: Get Results ---
@app.get("/leads")
async def get_leads():
    # Finds the latest JSON file in your output folder
    output_dir = "output"
    files = [f for f in os.listdir(output_dir) if f.endswith(".json")]
    if not files: return []
    latest_file = max([os.path.join(output_dir, f) for f in files], key=os.path.getctime)
    with open(latest_file, "r") as f:
        return json.load(f)