from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.services.gemini import ask_groq

app = FastAPI(
    title="CodePilot AI API",
    version="1.0.0"
)

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
    try:
        reply = ask_groq(prompt.message)
        return {
            "reply": reply
        }
    except Exception as e:
        return {
            "reply": f"Groq Error: {str(e)}"
        }