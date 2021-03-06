'use strict';

import React, {
    Component,
    Image,
    Text,
    View
} from 'react-native';

import styles from '../../styles';

var Icon = require('react-native-vector-icons/FontAwesome');

class MineView extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View key="topBar" style={styles.topBar}>
            <Text key="topBarBack" style={styles.topBarBack}>&lt; 返回</Text>
            <Text key="topBarTitle" style={styles.topBarTitle}>我的</Text>
            <Text key="topBarOptions" style={styles.topBarOptions}>选项</Text>
          </View>
          <View key="content" style={styles.content}>
            <Text key="1" style={styles.welcome}>
              我的
            </Text>
          </View>
        </View>
    );
  }
}

export default MineView;