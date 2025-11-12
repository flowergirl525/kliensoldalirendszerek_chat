import { useState } from "preact/hooks";
import { LeftPane } from "./LeftPane"
import "./Main.css"
import { RightPane } from "./RightPane"
import { ConversationDto } from "./ChatService";

export function Main()
{
    let [ selected, setSelected ] = useState<ConversationDto>();
    
    return <div class="Main">
        <LeftPane selected={selected} onSelect={setSelected}/>
        <RightPane conversation={selected}/>
    </div>
}