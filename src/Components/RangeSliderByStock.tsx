import {
  RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, RangeSlider,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';

export default function RangeSliderByStock({ handleStockRangeFilter, stockRange, filteredStockRange }) {
  const handleChange = useCallback(debounce((values) => {
    handleStockRangeFilter(values[0], values[1]);
  }, 200), []);
  return (
    <RangeSlider
      min={stockRange.min}
      max={stockRange.max}
      step={2}
      value={[filteredStockRange.min, filteredStockRange.max]}
      onChange={handleChange}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} bg="red.100" boxSize="27px" fontSize="10px">
        {filteredStockRange.min}
      </RangeSliderThumb>
      <RangeSliderThumb index={1} bg="red.100" boxSize="27px" fontSize="10px">
        {filteredStockRange.max}
      </RangeSliderThumb>
    </RangeSlider>
  );
}
