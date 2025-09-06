'use client';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    fetch('/api/generate-story', {
      method: 'POST',
      body: JSON.stringify({
        userMessage: 'I want to go to the store',
        conversationHistory: [],
        isStart: true
      })
    }).then(res => res.json())
      .then(data => {
        fetch('/api/generate-image',{
          method: 'POST',
          body: JSON.stringify({
            imagePrompt: data.imagePrompt
          })
        }).then(res => res.json())
          .then(imageData => {
            console.log(imageData);
          })
          .catch(error => {
            console.error('Error generating image:', error);
          })
      })
      .catch(error => {
        console.error('Error generating story:', error);
      })
  }, []);

  return (
    <div className="font-sans min-h-screen p-8">
      zombie apocalypse game
    </div>
  );
}
