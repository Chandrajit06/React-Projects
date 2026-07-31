import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()

    return (
        <div className={`bg-slate-800 p-3 rounded-lg text-sm flex ${className}`}>

            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-white mb-2 inline-block">
                    {label}
                </label>
                <input className="outline-none w-full bg-slate-600 text-white placeholder:text-gray-400 px-2 py-1.5"
                    type="number"
                    placeholder="Amount"
                    id={amountInputId}
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => {     // sends numeric value up to parent on every keystroke
                        const value = e.target.value;
                        onAmountChange && onAmountChange(value === "" ? "" : Number(value));
                    }}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-slate-600 text-white cursor-pointer outline-none"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    onChange={(e) =>   // sends selected currency code up to parent
                        onCurrencyChange && onCurrencyChange(e.target.value)}
                >    
                    {currencyOptions.map((c) => (   // creates dropdown options for each currency code
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;