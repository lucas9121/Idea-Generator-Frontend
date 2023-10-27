import { useState } from "react";

export default function IdeaGenerationPage () {
    const [targetAudience, setTargetAudience] = useState("")
    const [interest, setInterest] = useState("")
    return(
        <div className="w-full mx-4 mx-8 text-center">
            <div>Create Your Micro SaaS Idea</div>
            <input className="bg-gray-400 text-black" type="text" placeholder="" onChange={(e) => setTargetAudience(e.target.value)} value={targetAudience} />
            <input className="bg-gray-400 text-black" type="text" placeholder="" onChange={(e) => setInterest(e.target.value)} value={interest} />
            <div>
                Button
            </div>
        </div>
    )
}