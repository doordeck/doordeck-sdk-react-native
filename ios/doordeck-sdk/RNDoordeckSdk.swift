import Foundation

@objc(RNDoordeckSdk)
class RNDoordeckSdk: NSObject, RCTBridgeModule {
    static func moduleName() -> String! {
        return "RNDoordeckSdk"
    }

  private var doordeck: Doordeck! = nil

  @objc func initDoordeck(_ auth: String, darkMode: Bool = true, closeButton: Bool = false) {
    let authToken = AuthTokenClass(auth)
    doordeck = Doordeck(authToken, darkMode: darkMode, closeButton: closeButton)
    doordeck.delegate = self
    doordeck.Initialize()
  }

  @objc func unlockTileID(_ tileID: String) {
    guard let doordeck = doordeck else { return }
    doordeck.unlockTileID(tileID)
  }

  @objc func showUnlock(_ isNfc: Bool ) {
    DispatchQueue.main.async {
      if (self.doordeck != nil) {
        self.doordeck.showUnlockScreen(isNfc ? .nfc : .qr,  success: {
          print("success")
        }) {
          print("fail")
        }
      }
    }
  }

}

extension RNDoordeckSdk: DoordeckProtocol {
  func authenticated() {

  }

  func verificationNeeded() {

  }

  func newAuthTokenRequired() -> AuthTokenClass {
      return AuthTokenClass("")
  }

  func unlockSuccessful() {

  }

}

