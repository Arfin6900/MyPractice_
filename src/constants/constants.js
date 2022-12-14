import { Dimensions } from "react-native";

const screen={
    height:Dimensions.get("screen").height,
    width:Dimensions.get("screen").width,
    fontfamily:{mouse:'MouseMemoirs-Regular',rubik:"RubikVinyl-Regular"}
}
export const images={
    add_profile:require('../assets/Add_Profile_image.jpg')
}
export const assets=[
    require("../assets/assets_Ludo/one.png"),
    require("../assets/assets_Ludo/two.png"),
    require("../assets/assets_Ludo/three.png"),
    require("../assets/assets_Ludo/four.png"),
    require("../assets/assets_Ludo/five.png"),
    require("../assets/assets_Ludo/six.png"),
]
export default screen