from fastapi import FastAPI, UploadFile, BackgroundTasks, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os
import glob
from ig4 import start_scraper

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScrapeRequest(BaseModel):
    hashtags: list[str]
    limit: int

@app.post("/settings/cookies")
async def save_cookies(file: UploadFile = File(...)):
    content = await file.read()
    with open("cookies.json", "wb") as f:
        f.write(content)
    return {"status": "Cookies updated successfully"}

@app.post("/scrape/start")
async def run_scrape(request: ScrapeRequest, background_tasks: BackgroundTasks):
    background_tasks.add_task(
        start_scraper, 
        hashtags=request.hashtags, 
        limit=request.limit, 
        cookies_path="cookies.json"
    )
    return {"message": "Scraper started"}

@app.get("/leads")
async def get_leads():
    output_dir = "output"
    if not os.path.exists(output_dir):
        return []
    
    files = glob.glob(f"{output_dir}/*.json")
    if not files: 
        return []
        
    latest_file = max(files, key=os.path.getctime)
    with open(latest_file, "r") as f:
        return json.load(f)