import React, { Component } from 'react'
import {
  AppRegistry,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native'

const windowWidth = Dimensions.get('window').width
const tabCount = 2
const itemWidth = windowWidth / tabCount
const tabHeight = 45

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: tabHeight,
    width: itemWidth
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width:windowWidth,
    height: tabHeight,
    overflow: 'hidden',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc'
  },
  tabText: {
    fontWeight: 'normal',
    fontSize: 15,
    color: '#a5a6b2'
  },
  tabActive: {
    color: '#2a2a2e',
    fontSize: 16,
    fontWeight: 'bold'
  }
})


export default class TabBar extends Component {
  constructor (props){
    super(props)

  }
  _handleClick (index) {
    this.props.goToPage(index)
  }
  render () {
    let {tabs: tabList, activeTab = 0} = this.props
    return (
      <View style={[ styles.tabs ]}>
        {
          tabList && tabList.map((item, index) => {
            let textStyle
            if (index == activeTab) {
              textStyle =  [styles.tabText, styles.tabActive]
            } else {
              textStyle = [styles.tabText]
            }
            return (
              <TouchableOpacity style={[styles.tab]} key={index} onPress={() => this._handleClick(index)}>
                <Text style={textStyle}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}
