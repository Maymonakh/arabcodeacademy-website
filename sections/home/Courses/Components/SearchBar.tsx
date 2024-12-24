import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onInputChange,
  onSearchClick,
}) => {
  return (
    <InputGroup width={{ base: "100%", md: "100%", lg: "50%" }}>
      <InputLeftElement
        cursor="pointer"
        onClick={onSearchClick}
        borderRight="2px solid"
        borderColor="var(--primary)"
        padding="25px"
      >
        <SearchIcon color="var(--primary)" fontSize="20px" />
      </InputLeftElement>
      <Input
        placeholder={placeholder}
        borderWidth="2px"
        borderColor="var(--primary)"
        borderRadius="full"
        color="var(--primary)"
        _placeholder={{ color: "var(--primary)" }}
        textAlign="right"
        paddingY="6"
        fontFamily={" var(--font-tajawal)"}
        dir="rtl"
        value={value}
        onChange={onInputChange}
      />
    </InputGroup>
  );
};

export default SearchBar;
