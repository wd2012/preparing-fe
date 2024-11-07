import { axiosClient } from '@/utils';
import { APINames } from './apis';

// 查单词
export const getDictionarySearchResult = (): Promise<any[]> =>
  axiosClient.get(
    // `${APINames.Dictionary_Search}`,
    APINames.Test,
    // {
    //   params: {
    //     timeStamp: new Date().getTime(),
    //   },
    // },
  );
