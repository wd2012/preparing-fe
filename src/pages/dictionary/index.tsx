import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { Button } from '@taroify/core';

import { getDictionarySearchResult } from '@/service/dictionary';

import './index.less';

export default function Dictionary() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  const handleClick = async () => {
    await getDictionarySearchResult();
  };

  return (
    <View className="index">
      <Button onClick={handleClick}>查询</Button>
      <Text>查词</Text>
    </View>
  );
}
