import Card from "@/components/UI/Surfaces/Card";

const CustomCard = ({ children, ...props }) => {
  return (
    <Card style={{ borderRadius: "16px" }} {...props}>
      {children}
    </Card>
  );
};

export default CustomCard;
