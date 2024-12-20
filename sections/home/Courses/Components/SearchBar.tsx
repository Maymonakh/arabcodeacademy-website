import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBarProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
  return (
    <InputGroup width={{ base: "100%", md: "100%", lg: "50%" }}>
      <InputLeftElement
        pointerEvents="none"
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
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default SearchBar;
