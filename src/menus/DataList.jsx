import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  ActivityIndicator
} from "react-native";
import Body from "../components/Body";
import httpHelper from "../components/utils/httpHelper";
import Header from "../components/Header";

class DataList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      serverData: [],
      fetching_from_server: false
    };
    this.offset = 0;
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.setState({ loading: true });
    this;
    httpHelper
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const data = response.slice(this.offset * 8, (this.offset + 1) * 8 - 1);
        this.setState({
          serverData: [...this.state.serverData, ...data],
          loading: false,
          fetching_from_server: false
        });
        this.offset += 1;
      })
      .catch(error => {
        console.log("error", error);
      });
  }
  loadMoreData() {
    this.setState({ fetching_from_server: true });
    this.fetchData();
  }
  renderFooter() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.9} style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Loading</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <Body>
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          {this.state.loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              style={{ width: "100%" }}
              keyExtractor={(item, index) => index}
              data={this.state.serverData}
              renderItem={({ item, index }) => (
                <View style={styles.item}>
                  <Text style={{ borderRightColor: "grey" }}>{item.id}. </Text>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              )}
            />
          )}
        </View>
      </Body>
    );
  }
}

// renderItem={itemData => (
//   <GoalItem
//     id={itemData.item.id}
//     onDelete={() => removeGoalHandler(itemData.item.id)}
//     title={itemData.item.value}
//   />
// )}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  item: {
    padding: 10,
    height: 80,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  separator: {
    height: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  text: { fontSize: 15, color: "#000" },
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: "#800000",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: { color: "#fff", fontSize: 15, textAlign: "center" }
});

export default DataList;
