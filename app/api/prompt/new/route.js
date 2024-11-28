import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
    const {userId, prompt, tag} = await req.json();

    try{
        connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        }) 
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {status: 201})
    }
    catch{
        return new Response(JSON.stringify('Failed to create a new response'),{status:500})

    }

}