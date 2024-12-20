import React, { useState } from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import Rating from 'react-rating';
   
const StarRating: React.FC = () => {
  const [rating, setRating] = useState(0);

  return (
    <Box textAlign="center" mt={4}>
      <Text fontSize="lg" mb={2}>اختر تقييمك:</Text>
      <Rating
        fractions={2} // دعم التقييم الجزئي
        initialRating={rating} // التقييم الأولي
        emptySymbol={
          <Icon as={StarIcon} color="gray.300" boxSize={6} /> // نجمة فارغة
        }
       
        fullSymbol={
          <Icon as={StarIcon} color="yellow.400" boxSize={6} /> // نجمة ممتلئة
        }
        onChange={(rate) => setRating(rate)} // تحديث التقييم
      />
      <Text mt={3} fontSize="md">التقييم الحالي: {rating}</Text>
    </Box>
  );
};

export default StarRating;
