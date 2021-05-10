import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_159_525}>
        <View style={styles.View_159_526} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f5f/e90b/41edd75e5995e8bcdbea4cd6a51a3933"
          }}
          style={styles.ImageBackground_159_552}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40e1/490d/92ff9e33ab71885b7bfcb3629f3b12a4"
          }}
          style={styles.ImageBackground_159_551}
        />
        <View style={styles.View_159_527}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c0c/90a2/082bc27e6e82181f4af4c4d160ecc19b"
            }}
            style={styles.ImageBackground_159_528}
          />
          <View style={styles.View_159_533}>
            <View style={styles.View_159_534}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b796/3e9a/fb5d07915c7c71d792c27b6035a4088f"
                }}
                style={styles.ImageBackground_159_535}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f8a/a12f/6abda312554b2711fcea3310a8b89c77"
                }}
                style={styles.ImageBackground_159_539}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51af/85a3/4365225e38fe20ca71a9128530c9b261"
          }}
          style={styles.ImageBackground_159_547}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/8d85/e51934b64d2bc0fd2914edd530e364d9"
          }}
          style={styles.ImageBackground_159_548}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ef5/2d8b/8ed9a328bb88231787c4f690c40f2269"
        }}
        style={styles.ImageBackground_159_549}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca22/88a4/a8d8a73d24d4f0ec2093e660fa5dca90"
        }}
        style={styles.ImageBackground_159_554}
      />
      <View style={styles.View_159_556}>
        <Text style={styles.Text_159_556}>Powered by</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_159_525: {
    width: wp("147.82608695652172%"),
    minWidth: wp("147.82608695652172%"),
    height: hp("142.34972677595627%"),
    minHeight: hp("142.34972677595627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-23.91304347826087%"),
    top: hp("-10.10928961748634%")
  },
  View_159_526: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%"),
    top: hp("10.10928961748634%"),
    backgroundColor: "rgba(50, 63, 75, 1)"
  },
  ImageBackground_159_552: {
    width: wp("53.62318840579711%"),
    minWidth: wp("53.62318840579711%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.4975845410628%"),
    top: hp("74.18032786885246%"),
    resizeMode: "cover"
  },
  ImageBackground_159_551: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.47826086956522%"),
    top: hp("80.60109289617486%")
  },
  View_159_527: {
    width: wp("60.872546946944816%"),
    minWidth: wp("60.872546946944816%"),
    height: hp("18.106289639499018%"),
    minHeight: hp("18.106289639499018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.475194368961354%"),
    top: hp("46.58469945355191%")
  },
  ImageBackground_159_528: {
    width: wp("21.498699464659758%"),
    height: hp("12.16132679923636%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.688113300120772%")
  },
  View_159_533: {
    width: wp("60.872546946944816%"),
    height: hp("4.471368737559501%"),
    top: hp("13.634920380806008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_159_534: {
    width: wp("60.872546946944816%"),
    height: hp("4.471368737559501%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_159_535: {
    width: wp("18.243535359700523%"),
    height: hp("4.471341638617177%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_159_539: {
    width: wp("41.82939759775061%"),
    height: hp("4.471341638617177%"),
    top: hp("0.000033352544399178896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.043204634661837%")
  },
  ImageBackground_159_547: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    height: hp("44.26229508196721%"),
    minHeight: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28985507246377%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_159_548: {
    width: wp("79.71014492753623%"),
    minWidth: wp("79.71014492753623%"),
    height: hp("45.49180327868852%"),
    minHeight: hp("45.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96.85792349726776%"),
    resizeMode: "cover"
  },
  ImageBackground_159_549: {
    width: wp("10.478829646456068%"),
    height: hp("6.52925095271543%"),
    top: hp("105.80200862363387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.84934046648551%")
  },
  ImageBackground_159_554: {
    width: wp("9.291309999428006e-7%"),
    minWidth: wp("9.291309999428006e-7%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("69.39890710382514%")
  },
  View_159_556: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.68115942028986%"),
    top: hp("64.07103825136612%")
  },
  Text_159_556: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17,
    textTransform: "none"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
