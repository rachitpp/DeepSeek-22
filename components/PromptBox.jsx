import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const PromptBox = ({ isLoading, setIsLoading }) => {
    const [prompt, setPrompt] = useState("");

    return (
        <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
            <textarea
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
                className="outline-none w-full resize-none overflow-hidden break-words bg-transparent"
                rows={2}
                placeholder="Message DeepSeek"
                required
            />
            <div className="flex items-center justify-between text-sm mt-2">
                <div className="flex items-center gap-2">
                    <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
                        <Image src={assets.deepthink_icon} width={20} height={20} alt="DeepThink Icon" />
                    </p>
                    <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
                        <Image src={assets.search_icon} width={20} height={20} alt="Search Icon" />
                        Search
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Image className="cursor-pointer" src={assets.pin_icon} width={16} height={16} alt="Pin Icon" />
                    <button className={`${prompt ? "bg-primary" : "bg-[#71717a]"} p-2 rounded-full`}>
                        <Image src={prompt ? assets.arrow_icon_dull : assets.new_icon} width={16} height={16} alt="Submit Icon" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default PromptBox;



