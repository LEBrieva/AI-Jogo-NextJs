import { Loader } from "@/components/ai-elements/loader";
import { Message, MessageContent } from "@/components/ai-elements/message";


export function GameLoader(){
    return(
        <Message from="assistant">
            <div className="flex items-center gap-2">
                <MessageContent>
                    <Loader />
                    Loading...
                </MessageContent>
            </div>
        </Message>
    )
}