import React from "react";
import AdScript from "@/components/ads";

const Center = ({ children }: { children: React.ReactNode }) => {
    return (
         <AdScript />
        <div className="flex flex-col h-[50vh] justify-center items-center">
            {children}
        </div>
    );
};

export default Center;
