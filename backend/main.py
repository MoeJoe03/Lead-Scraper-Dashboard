import sys
import asyncio
import threading
import json
import os
import glob
from fastapi import FastAPI, UploadFile, BackgroundTasks, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ig4 import start_scraper 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScrapeRequest(BaseModel):
    hashtags: list[str]
    limit: int

# --- THE WINDOWS PLAYWRIGHT FIX ---
# We isolate Playwright into its own thread with a fresh Windows event loop
# so it doesn't collide with FastAPI's web server loop.
def run_scraper_isolated(hashtags, limit, cookies_path):
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
        
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    try:
        loop.run_until_complete(start_scraper(hashtags, cookies_path, limit=limit))
    finally:
        loop.close()
# ----------------------------------

@app.post("/settings/cookies")
async def save_cookies(file: UploadFile = File(...)):
    content = await file.read()
    with open("cookies.json", "wb") as f:
        f.write(content)
    return {"status": "Cookies updated successfully"}

@app.post("/scrape/start")
async def run_scrape(request: ScrapeRequest, background_tasks: BackgroundTasks):
    # This matches the signature in your ig4.py
    background_tasks.add_task(
        start_scraper, 
        hashtags=request.hashtags, 
        cookies_path="cookies.json", # The file you put in the backend folder
        limit=request.limit,
        headless=True # Set to False if you want to see the browser pop up
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
    
    # --- ADD encoding="utf-8" RIGHT HERE ---
    try:
        with open(latest_file, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"Error reading leads: {e}")
        return []

        import asyncio
from fastapi.responses import StreamingResponse

# Global variable to store progress
progress_state = {"current": 0, "total": 0, "status": "Idle"}

@app.get("/progress-stream")
async def progress_stream():
    async def event_generator():
        while True:
            # Send the current progress as a JSON string
            yield f"data: {json.dumps(progress_state)}\n\n"
            await asyncio.sleep(1) # Update every second
    return StreamingResponse(event_generator(), media_type="text/event-stream")