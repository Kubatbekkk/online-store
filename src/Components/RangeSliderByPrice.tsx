import React, { useState, useCallback } from 'react';
import {
  RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, RangeSlider,
} from '@chakra-ui/react';
import debounce from 'lodash.debounce';

export default function RangeSliderByPrice({ handlePriceRangeFilter, priceRange, filteredPriceRange }) {
  const handleChange = useCallback(debounce((values) => {
    handlePriceRangeFilter(values[0], values[1]);
  }, 200), []);
  return (
    <RangeSlider
      min={priceRange.min}
      max={priceRange.max}
      step={50}
      value={[filteredPriceRange.min, filteredPriceRange.max]}
      onChange={handleChange}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} bg="blue.100" boxSize="27px" fontSize="10px">
        {filteredPriceRange.min}
      </RangeSliderThumb>
      <RangeSliderThumb index={1} bg="blue.100" boxSize="27px" fontSize="10px">
        {filteredPriceRange.max}
      </RangeSliderThumb>
    </RangeSlider>
  );
}
