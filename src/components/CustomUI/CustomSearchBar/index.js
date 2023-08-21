const CustomSearchBar = ({ children, ...props }) => {
  return (
    <div
      style={{
        padding: "20px 34px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default CustomSearchBar;
