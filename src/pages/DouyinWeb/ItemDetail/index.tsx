import React, {FC, useEffect, useState} from 'react'
import {List, Space} from 'antd'
import { useParams } from 'umi';
import {GetInfo} from '@/pages/DouyinWeb/data/api'
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ItemDetail: FC = () => {

  const [info, setInfo] = useState(null);
  const params = useParams();

  const getDetail = () => {

    const targetUrl = params.targetUrl;

    GetInfo(targetUrl).then((infoResp: any) => {
          // setVideoSrc(infoResp.data);
          if (infoResp.code === 0) {
            const {item_list} = infoResp.data;
            let url = item_list[0].video.play_addr.url_list[0].replace(
              'playwm',
              'play'
            );

            // 转换成1080p
            url = url.replace('720p', '1080p');
            setInfo({url, ...item_list[0],});
          }
        })

  }

  useEffect(() => {
    getDetail();
    return () => {
      setInfo(null);
    }
  }, []);

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={info ? [info] : []}
        renderItem={(item: any) => (
          <List.Item
            key={item.desc}
            actions={[
              <IconText key={1} icon={StarOutlined} text={item.statistics.digg_count}/>,
              <IconText key={2} icon={LikeOutlined} text={item.statistics.comment_count}/>,
              <IconText key={3} icon={MessageOutlined} text={item.statistics.share_count}/>,
            ]}
            extra={
              item.url? (
                <video
                  autoPlay={true}
                  width="500"
                  controls={true}
                >
                  <source src={item.url} type="video/mp4"/>
                  {/*<source src="http://localhost:7000/public/12121212.mp4" type="video/mp4"/>*/}
                </video>
              ) : null

            }
          >
            <List.Item.Meta
              title={item.desc}
              // description={item.description}
            />

          </List.Item>
        )}
      />
    </div>

  )
}

export default ItemDetail;
