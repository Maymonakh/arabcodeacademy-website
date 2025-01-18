import { Flex, Text } from "@chakra-ui/react";

interface InfoItemProps {
  image: JSX.Element; 
  text: string; 
  textColor?: string; 
  textWidth?: string; 
  textHeight?: string; 
}

const InfoItem: React.FC<InfoItemProps> = ({
  image,
  text,
  textColor = "gray.700", 
  textWidth = "auto", 
  textHeight = "auto", 
}) => {
  return (
    <Flex align="center" mb={4}>
      <Flex mr={4}>{image}</Flex>
      <Text
        marginRight='10px'
        mb='6px'
        
        fontFamily="var(--font-tajawal)" 
        fontWeight="900"
        fontSize="18px" 
        lineHeight="21.6px" 
        color="#783BA2" 
        width={textWidth}
        height={textHeight}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default InfoItem;
