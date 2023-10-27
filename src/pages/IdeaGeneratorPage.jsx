import { useState } from "react";

const IdeaGenerationResponse = [
    "Idea #1: Description",
    "Idea #2: Description",
    "Idea #3: Description"
]

export default function IdeaGenerationPage () {
    const [targetAudience, setTargetAudience] = useState("")
    const [interest, setInterest] = useState("")
    return(
        <div>
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
                <div className="py-2 px-2 items-center font-semi-bold w-full text-md bg-pink-800 hover:bg-pink-600 cursor-pointer rounded-md text-center">
                    Generate Description
                </div>
            </div>
            <div className="w-full max-w-lg mx-auto">
                <div className="text-3xl">Your Ideas</div>
                {IdeaGenerationResponse.map((idea) => {
                    const title = idea.split(':')[0]
                    const description = idea.split(':')[1]
                
                    return (
                        <div className="my-4 text-center border border-white rounded py-2 px-4">
                            <div className="font-bold underline uppercase text-lg">{title}</div>
                            <div className="">{description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}