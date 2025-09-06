import { Image } from "@/components/ai-elements/image";
import { Loader } from "@/components/ai-elements/loader";
import { Message, MessageContent } from "@/components/ai-elements/message";
import { Response } from "@/components/ai-elements/response";
import { UI_MESSAGES } from "@/lib/consts";
import { type GameMessage as GameMessageType } from "@/lib/types";


export function GameMessage({message}: {message: GameMessageType}){
    const {role, content, image, imageLoading} = message;
    return(
        <Message from={role}>
            <MessageContent>
                {
                    role === 'assistant' && (
                        <picture className="w-full max-w-2xl aspect-video overflow-hidden rounded-md">
                            {
                                imageLoading && (
                                    <div className="w-full h-full flex items-center justify-center bg-black/20">
                                        <div className="flex mb-4 space-x-2">
                                            <Loader />
                                            <span>{UI_MESSAGES.LOADING.IMAGE}</span>
                                        </div>
                                    </div>
                                )
                            }
                            {image && (
                                    <Image 
                                        base64={image.base64Data}
                                        uint8Array={new Uint8Array()}
                                        mediaType={image.mediaType}
                                        className="w-full h-full object-cover object-center pixelated"
                                        alt="zombie apocalypse scene pixel art style"
                                    />
                            )}
                        </picture>  
                    )
                }
                <Response>{content}</Response>
            </MessageContent>
        </Message>
    )
}