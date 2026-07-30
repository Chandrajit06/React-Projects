import { useCallback, useEffect, useRef, useState } from "react"

function PasswordGen(){

    const [length, setLength] = useState(10);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numAllowed)      str += "0123456789";
        if(charAllowed)      str += "!@#$%^&*+_?";

        for(let i=1; i<=length; i++){
            let idx = Math.floor(Math.random() * str.length);   // generates random index
            pass += str.charAt(idx);
        }
        setPassword(pass);

    }, [length, numAllowed, charAllowed, setPassword])
    // The dependency array tells React: "Only create a new version of this function if one of these values has changed. Otherwise, reuse the old one."

    useEffect(() => {
        passwordGenerator();
    }, [length, numAllowed, charAllowed, passwordGenerator])
    // This useEffect says: "Re-run passwordGenerator() whenever one of these values changes."

    const passwordRef = useRef(null);
    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 50);
        window.navigator.clipboard.writeText(password);
    }, [password])

    return (
        <>
            <div className="w-full h-screen bg-slate-950 text-white pt-30">
                <h1 className="text-4xl font-bold text-center text-emerald-400 p-10">PassWord Generator</h1>
                <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 text-white bg-slate-800">

                    <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
                        <input  className="outline-none w-full py-1 px-3 bg-slate-700"
                            type="text"
                            value={password}
                            placeholder="Password"
                            readOnly
                            ref={passwordRef}
                        />
                        <button className="outline-none bg-emerald-400 hover:bg-emerald-600 text-white px-3 py-0.5 shrink-0"
                            onClick={copyPassword}
                        >Copy</button>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 accent-emerald-500">
                        <div className="flex items-center gap-x-1">
                            <input  className="cursor-pointer"
                                type="range"
                                min={6}
                                max={50}
                                value={length}
                                onChange={(e) => {setLength(e.target.value)}}
                            />
                            <label>Length: {length}</label>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <input 
                                id="numInput"
                                type="checkbox"
                                defaultChecked={numAllowed}
                                onChange={() => { setNumAllowed((prev) => !prev) }}
                            />
                            <label htmlFor="numInput">Numbers</label>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <input 
                                id="charInput"
                                type="checkbox"
                                defaultChecked={charAllowed}
                                onChange={() => { setCharAllowed((prev) => !prev) }}
                            />
                            <label htmlFor="charInput">Characters</label>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PasswordGen