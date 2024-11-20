# Doordeck React Native SDK 

## Prerequisites

CocaoPods

`$ sudo gem install cocoapods`

## Getting started

1. Install via npm
```
npm install @doordeck/react-native-doordeck-sdk
```

2. Add Doordeck SDK React Native specs to your Podfile:

```
target 'YourProject' do
  config = use_native_modules!
		
  use_react_native!(:path => config["reactNativePath"])

  pod 'doordeck-sdk-swift', :path => '../node_modules/@doordeck/react-native-doordeck-sdk/ios' ## Add this line
  ...
```

#### iOS
Add permissions. Add the following to your project plist.

		“Privacy - Camera Usage Description” -> “NSCameraUsageDescription”
		“Privacy - NFC Scan Usage Description” -> “NFCReaderUsageDescription”
		“Privacy - Location When In Use Usage Description” -> “NSLocationAlwaysAndWhenInUseUsageDescription”

To use NFC, turn it on in your project target settings `Capablities` ➜ `Near Field Communication Tag Reading`

#### Android

1. Edit your app `gradle` file: 

		minSdkVersion 23
		android {
			packagingOptions {
				pickFirst("META-INF/atomicfu.kotlin_module")
			}
		}
		repositories {
			maven { url "https://jitpack.io" }
		}

2. Add following to your `gradle.properties`

		android.useAndroidX=true
		android.enableJetifier=true


## Usage
```javascript
import { initDoordeck, showUnlock } from '@doordeck/react-native-doordeck-sdk';

// Initialise the SDK with your AuthToken and optional parameters

/**
 * Enables dark mode for iOS
 * Default is true
 */
const darkMode = true

/**
 * Adds a close button to the NFC view.
 * Default is false
 */
const closeButton = false

initDoordeck(authToken, darkMode, closeButton)

// Show unlock screen (NFC/QR reader)
showUnlock()
```
  
