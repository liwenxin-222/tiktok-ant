// import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card } from 'antd';
import mePng from '../images/WeChat768ba331025e93e1148a3776a6cb3919.png';
import React from 'react';

// import styles from './Welcome.less';

// const CodePreview: React.FC = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );

const Welcome: React.FC = () => {
  const intl = useIntl();

  return (
    // <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: '',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img width={400} src={mePng} alt=""/>
        </div>
        {/*<Typography.Text strong>*/}
        {/*  <a*/}
        {/*    // href="https://procomponents.ant.design/components/table"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    target="__blank"*/}
        {/*  >*/}
        {/*    <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />*/}
        {/*  </a>*/}
        {/*</Typography.Text>*/}
        {/*<CodePreview>yarn add @ant-design/pro-components</CodePreview>*/}
      </Card>
    // </PageContainer>
  );
};

export default Welcome;
