import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {Swiper} from '../components'
import req from '../utils/req.js'

const start = 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method='

const url = {
  banner: 'baidu.ting.billboard.billList&type=1&size=10&offset=0',
  recommend: 'baidu.ting.song.getRecommandSongList&song_id=877578&num=5'
}

export default class Home extends Component {
  constructor (props) {
    super (props)

  }

  componentDidMount () {
    let urlString = `${start}${url.banner}`
    let result = req({url: urlString})
    // console.log(result)


  }


  render() {
    return (
      <View >
        <Swiper />
      </View>
    );
  }
}
