import React from "react";
import HomePage from "../homePage";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";



import bgImage from "../images/bgImage.jpg";
import bgLogo from "../images/bgLogo.png";
import Icon from "react-native-vector-icons/Ionicons";
import Toast from "react-native-tiny-toast";
import axios from "axios";

const { width: WIDTH } = Dimensions.get("window");
const apiUrl = "https://vitcommerce-back-end.herokuapp.com";


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email: "",
      password: ""
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  checkLogin = async () => {
    try {
      // axios.defaults.withCredentials = true;
      const res = await axios({
        method: "POST",
        url: `${apiUrl}/api/v1/users/login`,

        data: {
          email: this.state.email,

          password: this.state.password
        },
        withCredentials: true
      });

      if (res) {
        Toast.showSuccess("Login success");
        this.props.navigation.navigate('home')
      }
    } catch (err) {
      this.props.navigation.navigate('home')
    }
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={bgLogo} style={styles.logo} />
          <Text style={styles.logoText}>Company</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            onChangeText={value => this.setState({ email: value })}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underLineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            onChangeText={value => this.setState({ password: value })}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underLineColorAndroid="transparent"
          />

          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPass.bind(this)}
          >
            <Icon
              name={this.state.press == false ? "ios-eye" : "ios-eye-off"}
              size={26}
              color={"rgba(255,255,255,0.7)"}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={this.checkLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,

    alignItems: "center",
    alignContent: "center"
  },
  logoContainer: {
    marginTop: 45,
    marginBottom: 25,
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 100
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 20
  },

  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    textAlign: "center"
  }
});
