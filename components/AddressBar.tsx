import React from "react";

export default function AddressBar({
  path,
  onChange,
}: {
  path: string;
  onChange: (newPath: string) => void;
}) {
  return (
    <div style={{ padding: "10px" }}>
      <label>
        Address:
        <input
          type="text"
          value={path}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginLeft: "10px", width: "400px" }}
        />
      </label>
    </div>
  );
}
