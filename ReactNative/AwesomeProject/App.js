import React, { Component} from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Image, FlatList } from 'react-native';

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red'
    }
})

const liststyles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


class Greetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>
                    Hello {this.props.name}!
                </Text>
            </View>

        )
    }
}

class Blink extends Component {
    constructor(props) {
        super(props)
        this.state = { isShowingText: true }
        // Toggle the state second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000)
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
    }
    render() {
        return(
            <View>
                <Greetings name='Weslie' />

                {/* <Blink text='I love to blink' />
                    <Blink text='Yes blinking is so great' />
                    <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' /> */}

                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

                <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}}></View>

                {/* Try removing the `flex: 1` on the parent View.
                    The parent will not have dimensions, so the children can't expand.
                What if you add `height: 300` instead of `flex: 1`? */}
                <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{height: 100, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
                
                <View style={liststyles.container}>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text style={liststyles.item}>{item.key}</Text>}
                    />
                </View>
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
