import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { CustomImagePickerViewProps } from './CustomImagePicker.types';

const NativeView: React.ComponentType<CustomImagePickerViewProps> =
  requireNativeViewManager('CustomImagePicker');

export default function CustomImagePickerView(props: CustomImagePickerViewProps) {
  return <NativeView {...props} />;
}
