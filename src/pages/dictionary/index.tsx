import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { Button } from '@taroify/core';

import { getDictionarySearchResult } from '@/service/dictionary';

import './index.less';

const Dictionary: React.FC = () => {
  const [result, setResult] = useState<any>();
  useLoad(() => {
    console.log('Page loaded.');
  });

  const handleClick = async () => {
    const data = await getDictionarySearchResult();
    console.log('data-----', data);
    setResult(data);
  };

  return (
    <View className="index">
      <Button color="primary" onClick={handleClick}>
        查询
      </Button>
      <Text>{result}</Text>
    </View>
  );
};

export default Dictionary;
