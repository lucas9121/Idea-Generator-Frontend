import { useState } from "react";

import createIdeaRequest from "../api/createIdeaRequest"


export default function IdeaGenerationPage () {
    const [targetAudience, setTargetAudience] = useState("")
    const [interest, setInterest] = useState("")
    const [genereatedIdeasFromAPI, setGenereatedIdeasFromAPI] = useState([])

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        console.log('clicked')
        try {
            const response = await createIdeaRequest({ targetAudience, interest });
        
            if (response && response.openAIFinalResponse) {
              const { openAIFinalResponse } = response;
              //removing empty spaces
              const nonEmptyIdeas = openAIFinalResponse.filter((idea) => idea.trim() !== "");
              setGenereatedIdeasFromAPI(nonEmptyIdeas);
            } else {
              console.error("Response or openAIFinalResponse is undefined or missing in the API response.");
            }
          } catch (error) {
            console.error("An error occurred while making the API request:", error);
          }
    }


    return(
        <div className="h-full">
            <div className="w-full my-20 flex flex-col gap-4 max-w-lg mx-auto">
                <div className="text-3xl text-center font-bold">Create Your Micro SaaS Idea</div>
                <div className="flex flex-col">
                    <label htmlFor="targetAudience" className="font-semibold my-2">Target Audience</label>
                    <input className="bg-gray-400 text-black" id="targetAudience" type="text" placeholder="Shopify Merchants" onChange={(e) => setTargetAudience(e.target.value)} value={targetAudience} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="interest" className="font-semibold my-2">Interest</label>
                    <input className="bg-gray-400 text-black placeholder-black" id="interest" type="text" placeholder="AI SEO" onChange={(e) => setInterest(e.target.value)} value={interest} />
                </div>
                <div className="py-2 px-2 items-center font-semi-bold w-full text-md bg-pink-800 hover:bg-pink-600 cursor-pointer rounded-md text-center" onClick={(e) => handleSubmit(e)}>
                    Generate Ideas
                </div>
            </div>
            {genereatedIdeasFromAPI.length && (
                <div className="h-3/6 w-full max-w-lg mx-auto overflow-auto">
                    <div className="text-3xl">Your Ideas</div>
                    {genereatedIdeasFromAPI.map((idea, idx) => {
                        console.log(idx)
                        const [title, description] = idea.split(':')     
                        return (
                            <div key={idx} className="my-4 text-center border border-white rounded py-2 px-4">
                                <div className="font-bold underline uppercase text-lg">{title}</div>
                                <div className="">{description}</div>
                            </div>
                        )
                    })}
                </div>
                
            )}
        </div>
    )
}