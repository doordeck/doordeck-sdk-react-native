import { NativeModules } from "react-native";

const { RNDoordeckSdk } = NativeModules;

const logout = (): void => RNDoordeckSdk.logout();
const initDoordeck = (authToken: string, darkMode: boolean = true, closeButton: boolean = false): void => 
  RNDoordeckSdk.initDoordeck(authToken, darkMode, closeButton);
const showUnlock = (isNfc: boolean = true): void => RNDoordeckSdk.showUnlock(isNfc);

export {
  logout,
  initDoordeck,
  showUnlock,
};