import {
  RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, RangeSlider,
} from '@chakra-ui/react';
import React from 'react';

export default function RangeSliderByStock() {
  return (
    <RangeSlider defaultValue={[10, 30]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
}
