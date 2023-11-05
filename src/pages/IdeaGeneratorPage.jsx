import { useState } from "react";

import createIdeaRequest from "../api/createIdeaRequest"


export default function IdeaGenerationPage () {
    const [targetAudience, setTargetAudience] = useState("")
    const [interest, setInterest] = useState("")
    const [genereatedIdeasFromAPI, setGenereatedIdeasFromAPI] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        setIsLoading(true)
        try {
            const response = await createIdeaRequest({ targetAudience, interest });
        
            if (response && response.openAIFinalResponse) {
              const { openAIFinalResponse } = response;
              //removing empty spaces
              const nonEmptyIdeas = openAIFinalResponse.filter((idea) => idea.trim() !== "");
              setGenereatedIdeasFromAPI(nonEmptyIdeas);
              setIsLoading(false)
            } else {
              console.error("Response or openAIFinalResponse is undefined or missing in the API response.");
              setIsLoading(false)
            }
          } catch (error) {
            console.error("An error occurred while making the API request:", error);
            setIsLoading(false)
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
                <button className={isLoading ? "py-2 px-2 items-center font-semi-bold w-full text-md bg-pink-800 rounded-md text-center disabled:opacity-75" : "py-2 px-2 items-center font-semi-bold w-full text-md bg-pink-800 rounded-md text-center hover:bg-pink-600 cursor-pointer"} onClick={(e) => handleSubmit(e)} disabled={isLoading}>
                    Generate Ideas
                </button>
            </div>
            { isLoading ? (
                <div className="spinner-container">
                    <div className="loading-spinner"></div>
              </div>
            ) : genereatedIdeasFromAPI.length && (
                <div className="h-3/6 w-full max-w-lg mx-auto overflow-auto">
                    <div className="text-3xl">Your Ideas</div>
                    {genereatedIdeasFromAPI.map((idea, idx) => {
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