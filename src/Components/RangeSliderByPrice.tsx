import {
  RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, RangeSlider,
} from '@chakra-ui/react';
import React from 'react';

export default function RangeSliderByPrice() {
  return (
    <RangeSlider defaultValue={[0, 100]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
}
