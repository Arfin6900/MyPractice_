import { Image, Platform, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { check, PERMISSIONS } from "react-native-permissions";
import screen, { images } from "../constants/constants";
export let Image_ =null;
export const Image_Picker=({setImage,image})=>{

    
    const pickImage = async auction => {
      if (Platform.OS == 'ios') {
        const IosPermstatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
        console.log('IosPermstatus', IosPermstatus);
      }
      if (Platform.OS == 'android') {
        const androidPermstatus = await check(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );
        console.log('androidPermstatus', androidPermstatus);
      }
  
      launchImageLibrary(
        {
          mediaType: "photo",
          selectionLimit: 5,
        },
        async response => {
          try {
            const files = response.assets.map(v => ({
              uri: v.uri,
              name: `${Date.now()}.${v.type.split('/')[1]}`,
              type: v.type,
              height: v.height,
              width: v.width,
              size: v.fileSize,
              url: v.uri,
            }));
            console.log(files);
            console.log('image path==================', files[0].url);
            setImage({value:files,height:0});

            Image_=files
          } catch (error) {
            console.log('error1', error);
          }
        },
      );
    };
    return(
        <TouchableOpacity
        onPress={pickImage}
        >
          <Image
            source={image.value!==null?image.value:images.add_profile}
            resizeMode="center"
            style={{
              height:screen.width / 8,
              width:screen.width / 7.5,
              top: 5,
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>

    )
}

