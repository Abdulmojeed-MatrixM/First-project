import React, { useRef, useCallback, useState, useEffect } from "react";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

const PasswordGenerator = () => {
  const {
    password,
    setPassword,
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    characterAllowed,
    setCharacterAllowed,
  } = usePasswordGenerator();

  const [strength, setStrength] = useState(0);
  const passwordRef = useRef(null);

  // Copy functionality
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // 🔹 Recalculate strength live whenever password changes
  useEffect(() => {
    const calculateStrength = (pwd) => {
      let score = 0;
      if (pwd.length >= 8) score++;
      if (pwd.length >= 12) score++;
      if (/[0-9]/.test(pwd)) score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;
      return score; // 0–4
    };

    setStrength(calculateStrength(password));
  }, [password]);

  // Strength levels
  const strengthLabels = ["Too Weak", "Weak", "Fair", "Strong", "Very Strong"];
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-600",
  ];

  return (
    <div className="w-full max-w-md shadow-md rounded-lg px-6 py-4 bg-gray-800 text-orange-500">
      <h2 className="text-white text-center my-3 text-xl font-semibold">
        Password Generator
      </h2>

      {/* Password + Copy */}
      <div className="flex shadow rounded-lg overflow-hidden mb-2">
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 🔹 allow typing
          className="outline-none w-full py-2 px-3 text-white"
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 shrink-0"
        >
          Copy
        </button>
      </div>

      {/* Strength Meter */}
      <div className="w-full h-2 bg-gray-700 rounded">
        <div
          className={`h-2 rounded ${strengthColors[strength]}`}
          style={{ width: `${(strength / 4) * 100}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-300 mt-1">
        Strength: {strengthLabels[strength]}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-y-3 mt-4">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-sm">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={characterAllowed}
            id="characterInput"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
