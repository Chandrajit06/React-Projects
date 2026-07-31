import { useState } from "react";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import InputBox from "./InputBox";
import { Link } from "react-router-dom";

function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState("");
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");

    const currencyInfo = useCurrencyInfo(from); // fetches data for the "from" currency
    const options = Object.keys(currencyInfo); // extracts all keys as currency
    const convert = () => {
        setConvertedAmount((Number(amount) || 0) * currencyInfo[to]);
    };

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    return (
        <div className="w-full h-screen bg-slate-950">
            <div className="w-full">
                <h1 className="text-4xl font-bold text-white text-center pt-20 pb-10">Currency Converter</h1>
                <div className="w-full max-w-md mx-auto border border-blue-400 rounded-lg p-5 backdrop-blur-sm bg-slate-800/30 shadow-2xl shadow-black/40">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault(); // stops the page from reloading on submit
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                selectCurrency={from}
                                currencyOptions={options}
                                onAmountChange={(amount) => setAmount(amount)} // callback to update "From" amount when user types
                                onCurrencyChange={(currency) =>
                                    setFrom(currency)
                                } // callback to update "From" currency when user picks
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                // fix the swap button position correctly. do it

                                className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg shadow-2xl shadow-black/40"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                selectCurrency={to}
                                currencyOptions={options}
                                amountDisable={true} // disables the "To" amount input box so user cannot type in it
                                onAmountChange={(amount) =>
                                    setConvertedAmount(amount)
                                } // update "To" amount if user edits directly
                                onCurrencyChange={(currency) => setTo(currency)} // update "To" currency when user picks
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
            <Link to="/" 
                className="bg-slate-800 text-xl text-white px-2 py-1 rounded-lg absolute bottom-15 left-1/2 -translate-x-1/2 shadow-2xl shadow-black/40 hover:bg-slate-700">
            ← Back to Projects
            </Link>
        </div>
    );
}

export default CurrencyConverter;
