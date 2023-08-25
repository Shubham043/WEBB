import React, { useEffect, useState } from "react";
import { Vector,mainp,dollar} from "../assets";
import axios from "axios";
import styles from "../styles";

const Connection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [pairs, setPairs] = useState([]);
    const handleSearch = () => {
        console.log('clicked');
        if (searchQuery.trim() !== "") {
            setSearchQuery(searchQuery);
        } else {
            setSearchQuery(""); // Reset searchquery
        }
    };
    
    useEffect(() => {
        if (searchQuery === "") {
            axios
                .get(`https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`)
                .then((response) => {
                    const sortedPairs = response.data.pairs.sort((a, b) => b.priceUsd - a.priceUsd);
                    console.log(sortedPairs);
                    const limitedPairs = sortedPairs.slice(0, 10); //  first 10 pairs
                    setPairs(limitedPairs);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        } else {
            axios
                .get(`https://api.dexscreener.com/latest/dex/search?q=${searchQuery}`)
                .then((response) => {
                    const sortedPairs = response.data.pairs.sort((a, b) => b.priceUsd - a.priceUsd);
                    console.log(sortedPairs);
                    const limitedPairs = sortedPairs.slice(0, 10); //  first 10 pairs
                    setPairs(limitedPairs);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [searchQuery]);
    

    return (
        <section className={`flex md:flex-row bg-dark-gradient flex-col ${styles.paddingY}`}>
            <div className="flex w-full flex-col p-6 m-4 bg-black-gradient items-start rounded-xl">
                <div className="mb-4 bg-transparent flex sm:flex-nowrap flex-wrap justify-between w-full items-start">
                  <div className="mb-4 bg-transparent flex flex-wrap  w-full items-start">
                       <input
                        type="text"
                        className="px-4 py-2 w-[400px] border text-white font-poppins bg-transparent rounded-xl focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                     <button
                        className="px-8 py-2 font-poppins text-white bg-gradient-to-br from-[#7C0F35] via-[#581266] to-transparent p-2 rounded-xl"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                    </div>  
                    <button className="px-8 py-2 font-poppins text-white bg-gradient-to-br from-[#7C0F35] via-[#581266] to-transparent p-2 rounded-xl">
                        Connect
                    </button>
                </div>
                <h1 className="font-poppins h-[28px] text-[25px] text-gradient">
                    Token Search Result
                </h1>
                <br />
                <div className="flex flex-col mt-4 py-4">
                    <ul className="flex flex-wrap sm:flex-row gap-8 px-8">
                        {pairs.map((pair, index) => (
                            <div key={index} className="flex flex-wrap gap-8">
                                {/* Basic Info */}
                                <div className="bg-[#390554] p-8 flex items-start flex-row rounded-xl w-[300px]">
                                    <div className="flex flex-col">
                                        <h1 className="font-poppins font-bold text-white pb-4 mb-4">
                                            Basic info
                                        </h1>
                                        <div className="flex text-white font-poppins text-[12px] flex-row gap-4">
                                            <ul>
                                                <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                    Pair Created at:
                                                </li>
                                                <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                    Symbol
                                                </li>
                                                <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                    DexId
                                                </li>
                                                <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                    Pair Address
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                    ETHEREUM
                                                </li>
                                                <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                    ETH
                                                </li>
                                                <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                    {pair.dexId}
                                                </li>
                                                <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                    <a href={pair.url} target="_blank" rel="noopener noreferrer">
                                                        URL
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <img
                    className="w-[48px] h-[48px] bg-[#F30050] rounded-full p-3 object-contain relative left-40 mx-12" 
                    src={Vector} alt="infoicon"
                />
                                    </div>
                                </div>

                                {/* Base Token */}
                                <div className="bg-[#390554] p-8 flex items-start flex-row rounded-xl w-[300px]">
                                    <div className="flex flex-col">
                                        <h1 className="font-poppins font-bold text-white pb-4 mb-4">
                                            Base Token
                                        </h1>
                                        <div className="flex text-white font-poppins text-[12px] flex-row gap-4">
                                        <ul>
                                               
                                                <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                    Name
                                                </li>
                                                <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                    Symbol
                                                </li>
                                                <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                    Pair Address
                                                </li>
                                            </ul>
                                            <ul>
                                           
                                                <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                    {pair.baseToken.name}
                                                </li>
                                                <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                    {pair.baseToken.symbol}
                                                </li>
                                                <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                    <a href={pair.baseToken.address} target="_blank" rel="noopener noreferrer">
                                                        URL
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                       
                                        <img
                    className="w-[48px] h-[48px] bg-[#F30050] rounded-full p-2 object-contain relative md:top-10 left-40 mx-12" 
                    src={mainp} alt="infoicon"
                />
                                       
                                    </div>
                                </div>

                                {/* Quote Token */}
                               
                                <div className="bg-[#390554] p-8 flex items-start flex-row rounded-xl w-[300px]">
                                    <div className="flex flex-col">
                                        <h1 className="font-poppins font-bold text-white pb-4 mb-4">
                                            Quote Token
                                        </h1>
                                        <div className="flex text-white font-poppins text-[12px] flex-row gap-4">
                                        <ul>
                                               
                                               <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                   Name
                                               </li>
                                               <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                   Symbol
                                               </li>
                                               <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                   Pair Address
                                               </li>
                                           </ul>
                                           <ul>
                                          
                                               <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                   {pair.quoteToken.name}
                                               </li>
                                               <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                   {pair.quoteToken.symbol}
                                               </li>
                                               <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                   <a href={pair.quoteToken.address} target="_blank" rel="noopener noreferrer">
                                                       URL
                                                   </a>
                                               </li>
                                           </ul>
                                        </div>
                                        <img
                    className="w-[48px] h-[48px] bg-[#F30050] rounded-full p-2 object-contain relative md:top-10 b left-40 mx-12" 
                    src={mainp} alt="infoicon"
                />
                                    </div>
                                </div>

                                {/* Price */}
                        
                                <div className="bg-[#390554] p-8 flex items-start flex-row rounded-xl w-[300px]">
                                    <div className="flex flex-col">
                                        <h1 className="font-poppins font-bold text-white pb-4 mb-4">
                                            Price
                                        </h1>
                                        <div className="flex text-white font-poppins text-[12px] flex-row gap-4">
                                        <ul>
                                               
                                               <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                   Price Native
                                               </li>
                                               <li className="font-Poppins text-[12px] m-2 font-semibold text-left">
                                                   Price USD
                                               </li>
                                            
                                           </ul>
                                           <ul>
                                          
                                               <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                   {pair.priceNative}
                                               </li>
                                               <li className="font-Poppins text-[13px] m-2 font-semibold text-left">
                                                   {pair.priceUsd}
                                               </li>
                                              
                                           </ul>
                                        </div>
                                        <img
                    className="w-[48px] h-[48px] bg-[#F30050] rounded-full p-2 object-contain relative md:top-16 top-6 left-40 mx-12" 
                    src={dollar} alt="infoicon"
                />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Connection;
