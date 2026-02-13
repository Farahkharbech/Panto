import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <div
        className="flex items-center justify-between"
        style={{
          width: "344px",
          height: "56px",
          padding: "8px 8px 8px 20px",
          gap: "10px",
          background: "rgba(255, 255, 255, 0.15)",
          border: "0.86px solid rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          borderRadius: "42px",
        }}
      >
        {/* Input with Gilroy-Regular */}
        <input
          type="text"
          placeholder="Search furniture"
          className="bg-transparent outline-none"
          style={{
            width: "130px",
            height: "25px",
            fontFamily: "var(--font-sans)", 
            fontSize: "18px",
            lineHeight: "150%",
            textAlign: "center",
            color: "#FFFFFF",
            opacity: 0.8,
            flex: "none",
            order: 0,
            flexGrow: 0,
          }}
        />

        {/* Search Button */}
        <button
          className="flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
          style={{
            width: "40px",
            height: "40px",
            background: "#F57E00",
            borderRadius: "24px",
            padding: "11px",
            flex: "none",
            order: 1,
            flexGrow: 0,
          }}
          aria-label="Search"
        >
          <Search
            style={{
              width: "18px",
              height: "18px",
              color: "#FFFFFF",
              strokeWidth: "2px",
            }}
          />
        </button>
      </div>

    </div>
  );
}