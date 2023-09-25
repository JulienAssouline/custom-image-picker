import * as React from 'react';

import { CustomImagePickerViewProps } from './CustomImagePicker.types';

export default function CustomImagePickerView(props: CustomImagePickerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
