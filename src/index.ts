import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to CustomImagePicker.web.ts
// and on native platforms to CustomImagePicker.ts
import CustomImagePickerModule from './CustomImagePickerModule';
import CustomImagePickerView from './CustomImagePickerView';
import { ChangeEventPayload, CustomImagePickerViewProps } from './CustomImagePicker.types';

// Get the native constant value.
export const PI = CustomImagePickerModule.PI;

export function hello(): string {
  return CustomImagePickerModule.hello();
}

export async function setValueAsync(value: string) {
  return await CustomImagePickerModule.setValueAsync(value);
}

const emitter = new EventEmitter(CustomImagePickerModule ?? NativeModulesProxy.CustomImagePicker);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { CustomImagePickerView, CustomImagePickerViewProps, ChangeEventPayload };
