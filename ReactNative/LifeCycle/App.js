import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { color: props.color }
    }

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps", props, state);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    }

    getDerivedStateFromProps(error) {
        console.log("getDerivedStateFromProps", error);
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        return (
            <Text>Hello, {this.props.name}</Text>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
