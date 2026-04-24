from fastapi import FastAPI
from pydantic import BaseModel
import subprocess
import uuid

app = FastAPI()

class ScrapeRequest(BaseModel):
    hashtags: list[str]
    limit: int = 10

@app.post("/start-scrape")
def start_scrape(req: ScrapeRequest):
    job_id = str(uuid.uuid4())

    # Run your scraper script with arguments
    subprocess.Popen([
        "python",
        "scraper.py",
        "--hashtags", *req.hashtags,
        "--limit", str(req.limit)
    ])

    return {
        "status": "started",
        "job_id": job_id
    }