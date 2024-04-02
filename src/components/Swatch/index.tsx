interface SwatchProps {
  name: string;
  size?: string;
}

export const Swatch = ({ name = "", size = "6rem" }: SwatchProps) => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        boxShadow: "0 1px 2px rgba(0, 0, 0, .2)",
        borderRadius: `0.5rem`,
        overflow: "hidden",
        fontSize: "85%",
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        margin: "1vh 0",
        width: `${size}`,
        height: `${size}`,
      }}
    >
      <div
        style={{
          backgroundSize: `12px 12px`,
          backgroundPosition: `0 0, 0 6px, 6px -6px, -6px 0`,
          width: `100%`,
          height: `100%`,
        }}
      >
        <div
          style={{
            width: `100%`,
            height: `100%`,
            borderRadius: `0.25rem`,
            border: `1px solid #0000001a`,
            backgroundColor: `var(--${name})`,
          }}
        />
      </div>
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        {name}
      </div>
    </div>
  );
};
