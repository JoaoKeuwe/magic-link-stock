import React from "react";

const Table = ({ data, background, color }) => {
  return (
    <table
      style={{
        width: "100%",
        backgroundColor: "white",
        borderCollapse: "collapse",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <tbody style={{ background: background }}>
        {data.map((row, index) => (
          <tr key={index}>
            <td
              style={{
                padding: "8px 16px",
                borderBottom: "1px solid #EAEFF4",
                color: color,
                fontSize: "14px",
              }}
            >
              <strong>{row.label}:</strong>
            </td>
            <td
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                borderBottom: "1px solid #EAEFF4",
                color: color,
                fontWeight: 500
              }}
            >
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
