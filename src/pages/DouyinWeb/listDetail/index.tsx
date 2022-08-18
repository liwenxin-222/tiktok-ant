import React, {FC, useState, useEffect} from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import {message, List, Image, Skeleton, Space, Radio} from 'antd';
import { getAllInfo} from '../data/api';
import { history, useParams } from 'umi';


import s from "./index.less";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const DouyinWebDetailList: FC = () => {

  const [dataSource, setDataSource] = useState([]);
  const params = useParams();

  const getList = () => {

    // @ts-ignore
    const sec_uid = params.targetId;
    if (sec_uid) {
      // @ts-ignore
      getAllInfo({sec_uid, count: 10}).then((response: any) => {
        if (response.code === 0) {
          setDataSource(response.data);
        } else {
          message.error('接口错误');
        }
      }, ()=> {
        message.error('接口错误');
      })
    } else {
      message.error('链接非法，请从查询页进入');
    }
  }

  useEffect(() => {
    getList();
  }, []);

  // 默认排序
  const handleDefaultFilter = () => {
    const clone = [...dataSource]
    // @ts-ignore
    clone.sort((a: any, b: any) => {
      return b.index - a.index;
    });

    setDataSource(clone);
  }
  // 按喜欢量排序
  const handleDiggCountFilter = () => {
    // @ts-ignore
    const clone = [...dataSource]
    clone.sort((a: any, b: any) => {
      return b.statistics.digg_count - a.statistics.digg_count;
    });

    setDataSource(clone);
  }
  //按评论量排序
  const handleCommentCountFilter = () => {
    const clone = [...dataSource]
    // @ts-ignore
    clone.sort((a: any, b: any) => {
      return b.statistics.comment_count - a.statistics.comment_count;
    });

    setDataSource(clone);
  }
  //按分享量排序
  const handleShareCountFilter = () => {
    const clone = [...dataSource]
    // @ts-ignore
    clone.sort((a: any, b: any) => {
      return b.statistics.share_count - a.statistics.share_count;
    });

    setDataSource(clone);
  }

  const handleGoDetail = (id: any) => {
    history.push(`/douyin-web-item/${id}`);
  }

  const onRadioChange = (e: any) => {
    console.log(e)
    switch (e.target.value) {
      case '2':
        handleDiggCountFilter();
        break;
      case '3':
        handleCommentCountFilter();
        break;
      case '4':
        handleShareCountFilter();
        break;
      default:
        handleDefaultFilter();
    }
  }

  return (
    <div className={s.app}>
      <div className={s.containers}>
        <div className={s.title}>视频列表</div>
        <div className={s.filterWrap}>
          <Radio.Group defaultValue="1" onChange={onRadioChange}>
            <Radio.Button value="1">默认排序</Radio.Button>
            <Radio.Button value="2">按喜欢量排序</Radio.Button>
            <Radio.Button value="3">按评论量排序</Radio.Button>
            <Radio.Button value="4">按分享量排序</Radio.Button>
          </Radio.Group>
        </div>
        <div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={dataSource}
          renderItem={(item: any) => (
            <List.Item
              actions={[
                <IconText key={1} icon={StarOutlined} text={item.statistics.digg_count}/>,
                <IconText key={2} icon={LikeOutlined} text={item.statistics.comment_count}/>,
                <IconText key={3} icon={MessageOutlined} text={item.statistics.share_count}/>,
                // <a key={1}>喜欢：</a>,
                // <a key={2}>评论：</a>,
                // <a key={3}>分享：</a>
              ]}
            >

              {/*<Card className={s.card} title={item.desc}>*/}
              {/* */}
              {/*</Card>*/}
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  // avatar={<Avatar src={item.picture} />}
                  title={
                    <div className={s.title}>
                      <span className={s.subtitle}>》</span>
                      <span className={s.desc} onClick={() => handleGoDetail(item.statistics.aweme_id)}>{item.desc || '【无标题】打开视频'}</span>
                    </div>
                  }
                  // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div className={s.card}>
                  <Image
                    width={200}
                    src={item.image_addr}
                    preview={{
                      src: item.image_addr
                    }}
                  />
                </div>
              </Skeleton>
            </List.Item>
          )}
        />
        </div>

      </div>
    </div>
  )

};

export default DouyinWebDetailList;
