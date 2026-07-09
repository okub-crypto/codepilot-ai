from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="CodePilot AI API",
    version="1.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    message: str

@app.get("/")
def root():
    return {
        "message": "Welcome to CodePilot AI Backend 🚀"
    }

@app.post("/chat")
def chat(prompt: Prompt):
    return {
        "reply": f"You said: {prompt.message}"
    }