import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import CrollableTabView from 'react-native-scrollable-tab-view'
import {Home, Collection} from '../pages'
import {TabBar} from '../components'

export default class App extends Component {
  render () {
    return (
      <CrollableTabView renderTabBar={(attr) => <TabBar {...attr} />} >
        {/* 首页 */}
        <Home tabLabel='首页' />
        {/* 收藏 */}
        <Collection tabLabel='收藏列表' />
      </CrollableTabView>
    )
  }
}
