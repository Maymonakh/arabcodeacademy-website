import React from "react";
import { Flex, HStack } from "@chakra-ui/react";

// واجهة موحّدة
export interface SocialLinkProps {
  id: string;
  url: string;
  handle: string;
  platform: string;
  onEdit: () => void;
  onDelete: () => void;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  id,
  url,
  handle,
  platform,
  onEdit,
  onDelete,
}) => {
  return (
    <Flex>
      <HStack>
        {/* محتوى العرض */}
        <span>{platform}</span>
        <span>{handle}</span>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </HStack>
    </Flex>
  );
};

export default SocialLink;
