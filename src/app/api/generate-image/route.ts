import {google} from '@ai-sdk/google';
import {generateText} from 'ai';

import {type NextRequest, NextResponse} from 'next/server';

import {GAME_PROMPTS} from '@/lib/prompts';
import {GAME_CONFIG, UI_MESSAGES} from '@/lib/consts';
import { GenerateImageRequest, GenerateStoryRequest } from '@/lib/types';


export async function POST(request: NextRequest){
    try{
        const {imagePrompt,}: GenerateImageRequest = await request.json();

        const prompt = GAME_PROMPTS.GENERATE_IMAGE(imagePrompt);

        const {files} = await generateText({
            model: google('gemini-2.5-flash-image-preview'),
            prompt,
            providerOptions:{
                google:{
                    responseModalities: ['IMAGE']
                }
            }
        });

        return NextResponse.json({image: files[0] || null});

    }catch(error){
        console.error(error);
        return NextResponse.json({error: UI_MESSAGES.ERROR.STORY_GENERATION}, {status: 500});
    }
}