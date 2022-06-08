import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { connect } from 'react-redux';

const DashboardDrawerContent = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>drawer</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardDrawerContent);
