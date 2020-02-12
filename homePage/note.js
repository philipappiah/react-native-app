import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");
const apiUrl = "https://vitcommerce-back-end.herokuapp.com";

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyVal} style={styles.note}>
        <Text style={styles.noteDate}>{this.props.date}</Text>
        <Text style={styles.noteText}>{this.props.note}</Text>

        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
    fontWeight: "bold"
  },
  noteDate: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "white"
  }
});
