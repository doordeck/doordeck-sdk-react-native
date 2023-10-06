import { NativeModules, Platform } from "react-native";

export const { RNDoordeckSdk } = NativeModules;

const logout = (): void => RNDoordeckSdk.logout();
const initDoordeck = (authToken: string, darkMode: boolean = true, closeButton: boolean = false): void =>
  RNDoordeckSdk.initDoordeck(authToken, darkMode, closeButton);
const showUnlock = (isNfc: boolean = true): void => RNDoordeckSdk.showUnlock(isNfc);
const unlockTileID = (tileID: string): void => {
  if (Platform.OS === 'ios') {
    RNDoordeckSdk.showUnlock(false);

    setTimeout(() => {
      RNDoordeckSdk.unlockTileID(tileID);
    }, 1000);
  } else {
    RNDoordeckSdk.unlockTileID(tileID);
  }
};

export {
  logout,
  initDoordeck,
  showUnlock,
  unlockTileID,
};